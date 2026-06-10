/**** DESTRUCTURING OBJECTS: PRACTICE ****/

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
    TODO: Use object destructuring to extract 'vesselSpeed' and 'destination' 
    from the 'cockpitConsole' object in a single line. 
    Log a message telling the passengers where they are going and how fast.
*/

/** EXERCISE 2: FIXING THE RADAR READOUT **/

const alienScoutShip = {
	hullColor: "Metallic Blue",
	threatRating: "High",
};

/*
    TODO: The developer below tried to destructure the threat rating, 
    but made a mistake with the variable name. Fix it so it works.
    (Hint: There are two different ways to make this work!)
*/
const { threat } = alienScoutShip;

console.log(`🚨 Warning: An alien ship was spotted with a ${threat} threat level!`);
