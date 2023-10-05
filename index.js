// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers = ['Antonia', 'Nuru', 'John', 'Sarah', 'Mike']){
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = function(drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']){
    return drivers.slice(-2);
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(fares){
  return function(multiplier){
    return fares * multiplier;
   }
}

const fareDoubler = function(createFareMultiplier){
    return createFareMultiplier * 2;
    
}

const fareTripler = function(createFareMultiplier){
    return createFareMultiplier * 3;
    
}

function selectDifferentDrivers(drivers, selectingDrivers){
    return selectingDrivers(drivers);
}