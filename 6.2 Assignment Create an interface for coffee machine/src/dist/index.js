"use strict";
//Enum brew
var BrewType;
(function (BrewType) {
    BrewType["drip_brew"] = "Drip Brew";
    BrewType["pour_over"] = "Pour Over";
    BrewType["cold_brew"] = "Cold Brew";
    BrewType["espresso"] = "Espresso";
    BrewType["ristretto"] = "Ristretto";
})(BrewType || (BrewType = {}));
//Enum dairy
var DairyType;
(function (DairyType) {
    DairyType["plain"] = "Milk";
    DairyType["steamed"] = "Steamed Milk";
    DairyType["whipped"] = "Whipped Cream";
    DairyType["iced"] = "Ice Cream";
    DairyType["scalded"] = "Scalded Milk";
    DairyType["foamed"] = "Foamed Milk";
    DairyType["half"] = "Half and Half";
    DairyType["warmed"] = "Warmed Milk";
})(DairyType || (DairyType = {}));
//Cappuccino creation
const Cappuccino = {
    ml: 200,
    milk: [DairyType.steamed, DairyType.foamed],
    type: [BrewType.espresso],
    additions: ['chocolate']
};
//Espresso creation
const BlackEye = {
    ml: 250,
    type: [BrewType.espresso, BrewType.espresso, BrewType.drip_brew]
};
console.log(Cappuccino);
console.log(BlackEye);
