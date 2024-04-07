"use strict";
let guessts = ['Bilawalbhutto', 'Asfabhutto', 'Asifalizardari', 'Atifaslam'];
console.log('Great news ! I found a bigger dinner table.');
guessts.unshift('mariyam');
guessts.splice(3, 0, 'imran khan');
guessts.push('amna');
guessts.forEach(guesst => {
    console.log(` Hy ${guesst}  ,would you like to join me for dinner.`);
});
