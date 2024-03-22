const carMarkers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

//Help with inference when extracting values
const car = carMarkers[0];
const myCar = carMarkers.pop();

//Prevent incompatible values
carMarkers.push(100);

//Help with 'map'
carMarkers.map((car:string):string => {
  return car.toUpperCase();
});

//Flexible type
const importantDates: (Date | string) [] = [new Date()];
importantDates.push('2024-10-10');
importantDates.push(new Date());

