const subDays = require("date-fns/subDays");
const format = require("date-fns/format");
const now = new Date();

console.log("now", now);

const rez = subDays(now, 1);
const formatedDate = format(rez, "yyyy-LLLL-do, EEEE, HH:mm:ss");
console.log("formatedDate", formatedDate);
const rez8DaysBefore = subDays(now, 8);
// console.log("Vakar dienos dabartinis momentas yra", rez.toLocaleDateString(), rez.toLocaleTimeString());
// -------------------------------------------------------------------

// / 2.1 gauti kelintadienis buvo pries 8nias dienas

const formatedDate8DaysBefore = format;
// console.log("Pries 8 dienas", rez8DaysBefore.toLocaleDateString(), rez8DaysBefore.toLocaleTimeString());

// // 2.2 gauti jei imanoma zmogisku laiku praeities laika minutemis

// // pvz 5 min ago, 2 hours ago ir pan
