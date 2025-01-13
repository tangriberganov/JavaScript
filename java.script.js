

// let hour = 12



let hour = 12


if (hour >= 6 && hour < 10) {
  console.log(`Good Moring Dear User`);
}
else if (hour >= 10 && hour < 12) {
  console.log(`Good Day Dear User`);
}

else if (hour >= 12 && hour < 15) {
  console.log(`Good Afternoon Dear User`);
}



else if (hour >= 15 && hour < 19) {
  console.log(`Good Evening Dear User`);
}
else if (hour >= 19 && hour < 24) {
  console.log(`Good Night Dear User`);
}
else if (hour >= 0 && hour < 6) {
  console.log(`Uyqudan turish vaqti bo'ldi`);
}

else {
  console.log(`Bunday vaqt mavjud emas`);
}

// let = month

var month = "Dekabr";
if (month === "Yanvar") {
  console.log("Yanvar oyida 31 kun bor");
}
else if (month === "Fevral") {
  console.log("Fevral oyida 28 kun bor");
}
else if (month === "March") {
  console.log("March contains 31 days");
}
else if (month === "Aprel") {
  console.log("Aprel oyida 30 kun bor");
}

else if (month === "May") {
  console.log("May oyida 31 kun bor");
}
else if (month === "Iyun") {
  console.log("Iyun oyida 30 kun bor");
}
else if (month === "Iyul") {
  console.log("Iyul oyida 31 kun bor");
}
else if (month === "Avgust") {
  console.log("Avgust oyida 31 kun bor");
}
else if (month === "Sentabr") {
  console.log("Sentabr oyida 30 kun bor");
}
else if (month === "Oktabr") {
  console.log("Oktabr oyida 31 kun bor");
}
else if (month === "Noyabr") {
  console.log("November oyida 30 kun bor");
}
else if (month === "Dekabr") {
  console.log("Dekabr oyida 31 kun bor");
}
else {
  console.log("Invalid month");
}



// let num = 5;


let num = 12;

if (num === 1) {
  console.log(`yanvar`);
}
else if (num === 2) {
  console.log(`fevral`);
}
else if (num === 3) {
  console.log(`mart`);
}
else if (num === 4) {
  console.log(`aprel`);
}
else if (num === 5) {
  console.log(`may`);
}
else if (num === 6) {
  console.log(`iyun`);
}
else if (num === 7) {
  console.log(`iyul`);
}
else if (num === 8) {
  console.log(`avgust`);
}
else if (num === 9) {
  console.log(`sentabr`);
}
else if (num === 10) {
  console.log(`oktabr`);
}
else if (num === 11) {
  console.log(`noyabr`);
}
else if (num === 12) {
  console.log(`dekabr`);
}
else {
  console.log(`bunday oy mavjud emas`);
}



// let weather = "weather";
// else if (hour >= 15 && hour < 19)

let weather = 22;
if (weather >= 40) {
  console.log(`Toshkentda havo issiq
     yengilroq kiyim kiying`);
}
else if (weather >= 30 && weather < 40) {
  console.log(`Toshkentda havo iliq
     yengil kiyim kiying `);
}
else if (weather >= 20 && weather < 30) {
  console.log("Toshkentda havo mo`tadil \n shamol bo`lishi kutulmoqda  qulay kiyim kiying ");
}
else if (weather >= 10 && weather < 20) {
  console.log(`Toshkentda havo sovuq
     qalin kiyim kiying ayrim hududlarda qor yog'ishi kutulmoqda`);
}
else if (weather >= 0 && weather < 10) {
  console.log(`Toshkentda havo juda sovuq
     qalin kiyim kiying`);
}
else {
  console.log(`Iltimos qayta urinib ko'ring`);
}

// let password = "12345";

let password = prompt("Ilitmos, parolni kiriting");

if (password === `12345`) {
  console.log(`Welcome to your account`);
}
else {
  console.log(`Invalid password`);
}

const a = 88;
const b = 89;

if (a > b) {
  console.log(`${a} soni ${b} sonidan katta`);
} else if (a < b) {
  console.log(`${b} soni ${a} sonidan katta`);
} else {
  console.log(`${a} va ${b} sonlari teng`);
}


