"use strict";
//Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
let guests = ['fatima', 'laraib', 'hassan', 'fateh'];
let unableToattend = 'fatima';
console.log(`${unableToattend}, can't make it to dinner.`);
let newGuests = 'faiza';
guests[guests.indexOf(unableToattend)] = newGuests;
guests.forEach(guest => {
    console.log(`Dear ${guest} , would you like to join us for dinner?`);
});
