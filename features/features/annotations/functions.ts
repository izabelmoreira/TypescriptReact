const add = (a: number, b: number) => {
  return a + b;
};

// Don't use inference for functions.
// We should use type: number, it will help to see if any error occur
const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number) {
  return a * b;
};

// Void is to say there is no return in this function
const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWheather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWheather(todaysWeather);
