"use strict";
//checking uername and ensure uniqueness in usernames .
Object.defineProperty(exports, "__esModule", { value: true });
let currentUsers = ['user1', 'admin', 'user3', 'user4', 'user5'];
let newUser = ['user1', 'user6', 'user7', 'admin', 'user9'];
newUser.forEach(newUser => {
    if (currentUsers.some(currentUsers => currentUsers.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
