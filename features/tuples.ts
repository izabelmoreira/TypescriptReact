const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 10
};

// Type alias - we can reuse in our application
type Drink = [string, boolean, number] 

const pepsi: Drink = ['brown', true, 40];

//In tuple we do't know the meaning of these numbers
const carSpecs: [number, number] = [400, 3354];

//Is better to use an object because is clear what we're are working with at one glance
const carStats = {
  horsepower: 400,
  weight: 3354
};

