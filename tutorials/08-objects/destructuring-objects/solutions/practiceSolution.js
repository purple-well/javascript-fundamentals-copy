/**** DESTRUCTURING OBJECTS: PRACTICE SOLUTION ****/

/*
    Practice using object destructuring to extract environment metrics 
    and navigation coordinates instantly.
*/

/** EXERCISE 1: COCKPIT READOUT EXTRACTOR **/

const cockpitConsole = {
	vesselSpeed: "25,000 mph",
	oxygenLevel: "98%",
	destination: "Tycho Station",
};

/*
    Use object destructuring to extract 'vesselSpeed' and 'destination' 
    from the 'cockpitConsole' object in a single line. 
    Log a message telling the passengers where they are going and how fast.
*/
const { vesselSpeed, destination } = cockpitConsole;

console.log(`Heading for ${destination} at a cruising speed of ${vesselSpeed}!`);

/** EXERCISE 2: FIXING THE RADAR READOUT **/

const alienScoutShip = {
	hullColor: "Metallic Blue",
	threatRating: "High",
};

/*
    The developer below tried to destructure the threat rating, 
    but made a mistake with the variable name. Fix it so it works.
*/
// FIX: Changed 'threat' to match the exact key name 'threatRating' inside the object
const { threatRating } = alienScoutShip;

console.log(`🚨 Warning: An alien ship was spotted with a ${threatRating} threat level!`);

// Alternate solution that DOES allow you to change the variable name
const { threatRating: threat } = alienScoutShip;

console.log(`Threat level: ${threat}`);
