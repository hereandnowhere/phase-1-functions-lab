function distanceFromHqInBlocks(someValue){
    let ride = someValue;
    let hqInBlocks = 42;
    let distanceInBlocks;

    if (ride >= 42){
        distanceInBlocks = ride - hqInBlocks;
        return distanceInBlocks;
    } else{
        distanceInBlocks = hqInBlocks - ride;
        return distanceInBlocks;
    }
    return distanceInBlocks;
}

function distanceFromHqInFeet(someValue){
    let rideFeet = someValue;
    let distanceFromHqInFeet = Number(distanceFromHqInBlocks(rideFeet) * 264);
    return distanceFromHqInFeet;
}

function distanceTravelledInFeet(start,destination){
    let distanceTravelledInFeet;
    let startBlock = start;
    let destinationBlock = destination;

    if (startBlock >= destinationBlock){
        distanceTravelledInFeet = Number((startBlock - destinationBlock) * 264);
    } else{
        distanceTravelledInFeet = Number((destinationBlock - startBlock) * 264);
    }
    return distanceTravelledInFeet;
}

function calculatesFarePrice(start, destination){
    let startFare = start;
    let destinationFare = destination;
    let distanceInFeet = Number(distanceTravelledInFeet(startFare, destinationFare));
    let farePrice;

    if (distanceInFeet <= 400){
        farePrice = 0;
    } else if (distanceInFeet <= 2000){
        farePrice = (parseFloat((Number(distanceInFeet) - 400) * 0.02));
    } else if (distanceInFeet <= 2500){
        farePrice = 25;
    } else {
        farePrice = `cannot travel that far`;
    }
    return farePrice;
}



//`calculatesFarePrice`: Given the same starting and ending block as the
//previous test (_hint hint_), return the fare for the customer. The first four
//hundred feet are free. For a distance between 400 and 2000 feet, the price is
//2 cents per foot (not including 400, which are free!). Then Scuber charges a
//flat fare for a distance over 2000 feet and under 2500 feet.
//Finally, Scuber does not allow any rides over 2500 feet — the function returns
//`'cannot travel that far'` if a ride over 2500 feet is requested.   