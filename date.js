var subDays = require("date-fns/subDays");

const now = new Date();

console.log("now", now);

const rez = subDays(now, 1);
console.log("Vakar dienos dabartinis momentas yra", rez.toLocaleDateString(), rez.toLocaleTimeString());
