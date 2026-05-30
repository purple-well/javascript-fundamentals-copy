/**** EXCEPTION HANDLING ****/

/** EXAMPLE 1 - DEFENDING AGAINST A FATAL ACCIDENT **/

// Let's create a simulated environment switch
let isBackupGeneratorOnline = false;

console.log("Entering System Check...");

// DEMO: Run the file to see what happens when we try to print an undefined variable.
console.log(isCargoBayPressurized);

console.log("This line will never run because the line above broke!");

// DEMO: Create a try block and move the three console.log statements inside it.
// Run the file again. What happens now?

// DEMO: Create a catch block to capture the error object and print a warning
// with the message from the error object.

// DEMO: Create a finally block to ensure certain code is run no matter what.
// Print a closing remark.

console.log("\n🚀 Success! The script did not crash and is still running.");

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
