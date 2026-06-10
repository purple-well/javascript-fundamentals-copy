/**** DESTRUCTURING OBJECTS: SOLUTION ****/

/*
    When you destructure an object, you extract data by matching the exact 
    key name inside the object. Because objects use named properties rather 
    than a numerical order, the sequence in which you list your variables 
    does not matter at all. JavaScript simply looks inside the object, finds 
    the matching key, and extracts the value.
*/

/** EXAMPLE 1 - THE TRADITIONAL UNPACKING ROUTINE **/

const supplyCrate = {
	crateId: "RG3-917",
	fuelType: "Hydrogen Gas",
	crateWeight: 450,
	manufacturer: "ACME Ltd.",
	securityClearance: "Level 2",
};

// Old, tedious way: Writing out the object name over and over
const fuel = supplyCrate.fuelType;
const weight = supplyCrate.crateWeight;
const company = supplyCrate.manufacturer;

console.log(`Old System: Loading ${fuel} weighing ${weight}kg from ${company}.`);

/** EXAMPLE 2 - THE DESTRUCTURING CLAW **/

// Modern way: We unpack properties directly into variables matching the keys
const { fuelType, crateWeight, securityClearance } = supplyCrate;

// The variables are now completely independent!
console.log(`Modern System: Loading ${fuelType} weighing ${crateWeight}kg.`);
console.log(`Security Protocol: ${securityClearance} clearance granted.`);

/** EXAMPLE 3 - FLEXIBLE NAMING **/

// It is possible to change the name while you are destructuring
const { crateId: id } = supplyCrate;

console.log(`Crate ${id} has been delivered.`);
