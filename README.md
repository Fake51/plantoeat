# PlanToEat Calendar Fetch

Package to streamline fetching calendar from plantoeat.com into simple objects

### Installing

Install using npm should be easiest - otherwise just clone from git

```
npm i plantoeat
```

To use it:

```
const planToEat = require('plantoeat'),
    allEvents = planToEat.fetchAll(<my id from plantoeat>),
    upcomingEvents = planToEat.fetchUpcoming(<my id from plantoeat>),
    recipesOnly = planToEat.fetchRecipes(<my id from plantoeat>),
    ingredientsOnly = planToEat.fetchIngredients(<my id from plantoeat>),
    notesOnly = planToEat.fetchNotes(<my id from plantoeat>);
```

## Contributing

Fork it and send a pull request. Make sure you've run the eslint rules first.

## Versioning

[SemVer](http://semver.org/) is used for versioning.

## Authors

* **Peter Lind** - *Initial work* - [Fake51](https://github.com/fake51)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
