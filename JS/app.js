// How many do you have
let penny = 200;
let nickel = 200;
let dime = 200;
let quarter = 200;

//What is the Value of each Variable
let pennyValue = penny * 0.01;
let nickelValue = nickel * 0.05;
let dimeValue = dime * 0.10;
let quarterValue = quarter * 0.25;

// Total Value of each Variable
let totalValue = penny + nickel + dime + quarter;

//How many fit in a USUALLY go in a Wrapper
let wrapperCapacities = {
    penny: 50,
    nickel: 40,
    dime: 50,
    quarter: 40
}
//Dividing the variable to see how many fit in the wrapper
let pennywrapper = (penny / wrapperCapacities.penny);
let nickelwrapper = (nickel / wrapperCapacities.nickel)
let dimewrapper = (dime / wrapperCapacities.dime);
let quarterwrapper = (quarter / wrapperCapacities.quarter);

//How many are left?

let remainingpenny = (penny % wrapperCapacities.penny);
let remainingnickel = (nickel % wrapperCapacities.nickel);
let remainingdime = (dime % wrapperCapacities.dime);
let remainingquarter = (quarter % wrapperCapacities.quarter);

console.log(`Number of wrappers: Penny: ${pennywrapper}, Dime: ${dimewrapper}, Nickel: ${nickelwrapper}, Quarter: ${quarterwrapper}`);

console.log(`Remaining coins: Penny: ${remainingpenny}, Dime: ${remainingdime}, Nickel: ${remainingnickel}, Quarter: ${remainingquarter}`);

console.log(`Total amount in dollars: ${totalValue.toFixed}`)



