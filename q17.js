"use strict";
//: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
Object.defineProperty(exports, "__esModule", { value: true });
let newGuessts = ['Bilawalbhutto', 'Asfabhutto', 'Asifalizardari', 'Atifaslam'];
console.log('Unfortunately, I can only invite two people for dinner.');
while (newGuessts.length > 2) {
    let removeGuest = newGuessts.pop();
    console.log(`Sorry , ${removeGuest}, I can not invite you to dinner.`);
}
newGuessts.forEach(newGuesst => {
    console.log(`Dear ${newGuesst}, you are still invited to dinner.`);
});
newGuessts.splice(0, newGuessts.length);
console.log(newGuessts);
