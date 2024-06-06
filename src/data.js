import image from './assets/images/image-omelette.jpeg'

export const recipe = {
  title: 'Simple Omelette Recipe',
  description:
    'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese vegetables, or meats.',
  img: image,
  prep: [
    {
      id: 1,
      title: 'Total',
      time: 'Approximately 10 minutes',
    },
    {
      id: 2,
      title: 'Preperation',
      time: '5 minutes',
    },
    {
      id: 3,
      title: 'Cooking',
      time: '5 minutes',
    },
  ],
  ingredients: [
    '2-3 large eggs',
    'Salt, to taste',
    'Pepper, to taste',
    '1 Tablespoon of butter or oil',
    'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
  ],
  instructions: [
    {
      id: 1,
      title: 'Beat the eggs',
      desc: 'In a bowl, beat the eggs with a pinch of salt and pepper until the are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
    },
    {
      id: 2,
      title: 'Heat the pan',
      desc: 'Place a non-stick frying pan over medium heat and add butter or oil.',
    },
    {
      id: 3,
      title: 'Cook the omelette',
      desc: 'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
    },
    {
      id: 4,
      title: 'Add fillings (optional)',
      desc: 'When the eggs begin to set at the egges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
    },
    {
      id: 5,
      title: 'Fold and serve',
      desc: 'As the omelette continues to cook, carefully lift one edege and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
    },
    {
      id: 6,
      title: 'Enjoy',
      desc: 'Serve hot, with additional salt and pepper if needed.',
    },
  ],
  nutrition: [
    {
      id: 1,
      name: 'Calories',
      amount: '277kcal',
    },
    {
      id: 2,
      name: 'Carbs',
      amount: '0g',
    },
    {
      id: 3,
      name: 'Protein',
      amount: '20g',
    },
    {
      id: 4,
      name: 'Fat',
      amount: '22g',
    },
  ],
}
