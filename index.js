/*global define, Promise */

(function (root, factory) {
    'use strict';
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('ical.js'), require('request'));

    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(['ical.js', 'request'], function (ical, request) {
            root.returnExportsGlobal = factory(ical, request);

            return root.returnExportsGlobal;
        });

    } else {
        // Global Variables
        root.planToEat = factory(root.ical, root.request);

    }
}(this, function (ical, request) {
    'use strict';

    const BASEURL = 'https://www.plantoeat.com/planner/',
        RECIPES = '/recipes/plantoeat-ical.ics',
        NOTES = '/notes/plantoeat-ical.ics',
        INGREDIENTS = '/ingredients/plantoeat-ical.ics',
        extractEvents = function (data) {
            const parsed = ical.parse(data),
                calendar = new ical.Component(parsed);

            return calendar.getAllSubcomponents('vevent')
                .map(function (item) {
                    const event = new ical.Event(item);

                    return {
                        time: event.startDate.toJSDate(),
                        content: event.summary,
                        url: event.description || ''
                    };
                });

        },
        merge = function (eventArrays) {
            let org = eventArrays.shift()
                .reduce(function (agg, next) {
                    const key = '' + next.time.getFullYear() + next.time.getMonth() + next.time.getDate();

                    agg[key] = next;

                    return agg;
                }, {}),
                x,
                events = [];

            eventArrays.forEach(function (eventArray) {
                org = eventArray.reduce(function (agg, next) {
                    const key = '' + next.time.getFullYear() + next.time.getMonth() + next.time.getDate();

                    if (agg[key]) {
                        agg[key].content += '\n' + next.content;
                        agg[key].url += '\n' + next.url;

                        agg[key].content = agg[key].content.replace(/(^\s+|\s+$)/mg, '');
                        agg[key].url = agg[key].url.replace(/(^\s+|\s+$)/mg, '');
                    } else {
                        agg[key] = next;
                    }

                    return agg;
                }, org);
            });

            for (x in org) {
                if (org.hasOwnProperty(x)) {
                    events.push(org[x]);
                }
            }

            return events.sort(function (a, b) {
                return a.time.valueOf() < b.time.valueOf() ? -1 : 1;
            });
        },
        futureFilter = function (events) {
            const today = (new Date()).valueOf();

            return events.filter(function (event) {
                return event.time.valueOf() > today;
            });
        },
        fetch = function (url) {
            return (new Promise(function (resolve, reject) {
                request.get(url, {}, function (err, msg, response) {
                    if (msg.statusCode !== 200) {
                        reject(msg.statusMessage);
                    } else {
                        resolve(response);
                    }
                });
            }))
                .then(extractEvents);
        };

    return {
        fetchUpcoming: function (id) {
            return this.fetchAll(id)
                .then(futureFilter);
        },
        fetchAll: function (id) {
            return Promise.all([
                this.fetchRecipes(id),
                this.fetchIngredients(id),
                this.fetchNotes(id),
            ])
                .then(merge);
        },
        fetchRecipes: function (id) {
            return fetch(BASEURL + id + RECIPES);
        },
        fetchIngredients: function (id) {
            return fetch(BASEURL + id + INGREDIENTS);
        },
        fetchNotes: function (id) {
            return fetch(BASEURL + id + NOTES);
        }
    };
}));
