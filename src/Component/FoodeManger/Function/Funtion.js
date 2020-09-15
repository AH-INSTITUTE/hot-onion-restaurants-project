const { default: onionRestorensData } = require("../../../restaurants-data/RestorentsData");


export const breakFastFood = onionRestorensData.filter(p => p.categories=== "break-fast");
export const lunchFood = onionRestorensData.filter(p => p.categories=== "lunch");
export const dinnerFood = onionRestorensData.filter(p => p.categories=== "dinner");


//break fast food funtion
export function HandleBreakFastFood(){
    console.log(breakFastFood)
}

//lunch food function
export function HandleLunchFood(){
    console.log(lunchFood);
}

//diner foo function
export function HandleDinnerFood(){
    console.log(dinnerFood);
}