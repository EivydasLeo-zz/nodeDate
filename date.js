const subDays = require("date-fns/subDays");
const format = require("date-fns/format");
const isPast = require("date-fns/isPast");
const now = new Date();

// console.log("now", now);

const rez = subDays(now, 1);
const formatedDate = format(rez, "yyyy-LLLL-do, EEEE, HH:mm:ss");
console.log("----------------------------------------");
console.log("formatedDate", formatedDate);
console.log("----------------------------------------");
// console.log("Vakar dienos dabartinis momentas yra", rez.toLocaleDateString(), rez.toLocaleTimeString());
// -------------------------------------------------------------------

// / 2.1 gauti kelintadienis buvo pries 8nias dienas

const rez8DaysBefore = subDays(now, 8);
const formatedDate8DaysBefore = format(rez8DaysBefore, "yyyy-LLLL-do, EEEE, HH:mm:ss");
console.log("formatedDate8DaysBefore", formatedDate8DaysBefore);
console.log("----------------------------------------");

// // 2.2 gauti jei imanoma zmogisku laiku praeities laika minutemis
const minutesToAdd = 30;
const currentDate = new Date();
const futureDate = new Date(currentDate.getTime() - minutesToAdd * 60000);
const format30minAgo = format(futureDate, "yyyy-LLLL-do, EEEE, HH:mm:ss");
console.log("format in 30 min ago", format30minAgo);
console.log("----------------------------------------");
