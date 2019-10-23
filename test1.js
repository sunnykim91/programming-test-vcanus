const Bread = [
    {
      "breadType": "cream",
      "recipe": {
        "flour": 100,
        "water": 100,
        "cream": 200
      }
    },
    {
      "breadType": "sugar",
      "recipe": {
        "flour": 100,
        "water": 50,
        "sugar": 200
      }
    },
    {
      "breadType": "butter",
      "recipe": {
        "flour": 100,
        "water": 100,
        "butter": 50
      }
    }
];

Bread.map((b) => {
    console.log(`breadType: ${b.breadType}`);
    console.log('recipe');
    b.recipe.flour? console.log(`flour: ${b.recipe.flour}`) : null;
    b.recipe.water? console.log(`water: ${b.recipe.water}`) : null;
    b.recipe.cream? console.log(`cream: ${b.recipe.cream}`) : null;
    b.recipe.sugar? console.log(`sugar: ${b.recipe.sugar}`) : null;
    b.recipe.butter? console.log(`butter: ${b.recipe.butter}`) : null;
    console.log('');
});