# PlanToEat Caledar Fetch

Package to streamline fetching calendar from plantoeat.com into simple objects

### Installing

Install using npm should be easiest - otherwise just clone from git

```
npm i plantoeat
```

Use

```
until finished
```

To use it:

```
const planToEat = require('plantoeat');
allEvents = PlanToEat.fetchAll(<my id from plantoeat>);
upcomingEvents = PlanToEat.fetchUpcoming(<my id from plantoeat>);
recipesOnly = PlanToEat.fetchRecipes(<my id from plantoeat>);
ingredientsOnly = PlanToEat.fetchIngredients(<my id from plantoeat>);
notesOnly = PlanToEat.fetchNotes(<my id from plantoeat>);
```

## Contributing

Fork it and send a pull request. Make sure you've run the eslint rules first.

## Versioning

[SemVer](http://semver.org/) is used for versioning.

## Authors

* **Peter Lind** - *Initial work* - [Fake51](https://github.com/fake51)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
