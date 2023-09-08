// WALK THE DOG
// Create an object that represents a pet dog
// Needs to have three methods
// walk - should take in a parameter for the distance walked in km
// walkSummary - should console log how many walks the dog has gone on, and what the total distance is
// walkAverage - should return a number that represents the average distance of walk this dog has been on.
// BONUS
// Research and add some static fields and methods
// A static method like Dog.walkAverage should get the average walk distance of ALL dogs that have been created

function Dog(walk, walkSummary, walkAverage) {
  this.walk = console.log(walk + "kms");
  this.walkSummary = console.log(`Dog has been on ${walkSummary}`);
  this.walkAverage = console.log(walkAverage + "kms");
}

const dogStats = new Dog("10", "10 walks", 100);
console.log(dogStats);

Dog.prototype.walkAverage = function () {
  return this.walkSummary + this.walk / 2;
};
