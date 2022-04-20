"use strict";
//Enum messages
var TimeOfGreeting;
(function (TimeOfGreeting) {
    TimeOfGreeting["morning"] = "Good Morning";
    TimeOfGreeting["afternoon"] = "Good Afternoon";
    TimeOfGreeting["evening"] = "Good Evening";
})(TimeOfGreeting || (TimeOfGreeting = {}));
//Gabriel
const gabriel = {
    name: 'Gabriel',
    loyal: true,
    visits: 2
};
//Greeting Function
const greetingfun = (time_of_day, customer) => {
    const loyal = 'Thank you for being a loyal customer!';
    const notLoyal = 'Please join us for benefits';
    let greeting = `${time_of_day} ${customer.name}! `;
    greeting += customer.loyal ? loyal : notLoyal;
    return greeting;
};
console.log(greetingfun(TimeOfGreeting.morning, gabriel));
