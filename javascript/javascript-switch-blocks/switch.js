// Create a switch block that will log a string for each day of the week.
// Create a variable called day
// The switch will be given a number and return the matching days of the week
// e.g. if day = 2, the switch should print Today is Tuesday in the console.
// Your switch block should also handle numbers out of range

let day = 1;
switch (day) {
}

switch (day) {
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  case 7:
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day number. Please enter a number between 1 and 7.");
    break;
}
