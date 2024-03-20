const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers= function(drivers){
    return drivers.slice(0,2);
} 
const returnLastTwoDrivers = function(drivers){
    return drivers.slice (drivers.length-2,drivers.length)
}
//const selectingDrivers =[returnFirstTwoDrivers(),returnLastTwoDrivers()];

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
console.log(selectingDrivers[0]);
//console.log(selectingDrivers[1]);
//console.log (selectingDrivers);
function createFareMultiplier(currentMultiplier){
    return function(fareAmount){
        return fareAmount*currentMultiplier;
    }

}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
//console.log(fareDoubler(10));
function selectDifferentDrivers(drivers, selectingDrivers){
    return selectingDrivers(drivers);
}