interface Reportable {
  // we can express funcions inside an interface
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

const printSummary = (item: Reportable) => {
  console.log(item.summary());
};

// We can use both on the same function because both has same single  interface - Reportable
printSummary(oldCivic);
printSummary(drink);