// https://github.com/abunaserk0yes/assignment

//Problem-1(Kilometer To Meter)

function kilometerToMeter(kilometer) {
    var meter = kilometer / 1000;
    return meter;
};

// Problem-2(Budget Calculator)

function budgetCalculator(watch, mobail, laptop) {
    var watchCost = watch * 50;
    var mobailCost = mobail * 100;
    var laptopCost = laptop * 500;
    var total = watchCost + mobailCost + laptopCost;
    return total
};

// Problem-3(Night Costing)

function hotelCost(night) {

    var cost = 0;
    if (night <= 10) {
        cost = night * 100;
    } else if (night <= 20) {
        var firstCost = 10 * 100;
        var remaingCost = night - 10;
        var secondCost = remaingCost * 80;
        cost = firstCost + secondCost;
    } else {
        firstCost = 10 * 100;
        secondCost = 10 * 80;
        remaingCost = night - 20;
        var thirdCost = remaingCost * 50;
        cost = firstCost + secondCost + thirdCost;
    }

    return cost;
}

// Problem-4(Megafriend String length)

function megaFriend(friendsName) {
    var mega = friendsName[0];
    for (var i = 0; i < friendsName.length; i++) {
        var element = friendsName[i];
        if (element.length > mega.length) {
            mega = element;
        }
    }
    return mega;
}