// There are 4 ways to create date in js. They all use "new Date" constructor function..but they all accept different parameter

// 1---new Date()
// by default it will give current date and time
// let now = new Date();
// console.log(now.toDateString())
// console.log(now.toTimeString())
// console.log(now.toString())
// console.log(now);

// once we define our date it will aad miliseconds from 1 jan 1970
// let dt = new Date(1000);
// console.log(dt);

// ==================User define date===============================

// ---type 2
//====== FORMAT 1['YYYY-MM-DD']/['YYYY, MM, DD']===========
// let newDate =  new Date("2029-09-30");  // Sun Sep 30 2029 05:30:00 GMT+0530 (India Standard Time)
// let newDate =  new Date("2029, 09, 30");  // Sun Sep 30 2029 00:00:00 GMT+0530 (India Standard Time)
// console.log(newDate);
console.log(new Date("Aug 02 2020 18:05:14")); // Sun Aug 02 2020 18:05:14 GMT+0530 (India Standard Time)

// ======FORMATE 2 ======================
// let newDate =  new Date(year,month,date,hour,minute,seconds,milisecons);
// let newDate = new Date(3020, 4, 6, 9, 3, 2, 34);
// console.log(newDate); // Sat May 06 3020 09:03:02 GMT+0530 (India Standard Time)

// =====FORMAT 3[]=====
// let newDate = new Date('dec 26, 1996 15:45:55')
// let newDate = new Date('dec 26, 1996 ')
// console.log(newDate)

// =============Define date output========================

// newDate = new Date()
// let yr = newDate.getFullYear();
// console.log("year is ", yr);

// let dt = newDate.getDate();
// console.log("date is ", dt);

// let month = newDate.getMonth();
// console.log("month is ", month);

// let hours = newDate.getHours();
// console.log("hour is ", hours);

// let mili = newDate.getMilliseconds()
// console.log(mili)

// let time = newDate.getTime()
// console.log(time)  // in miliseconds
// sililarlily we have getMinutes()/ getSeconds()

//similarl we have : setmonth/setyear/setseconds..etc
// newDate.setDate(5)
// console.log(newDate)
// console.log(newDate.setFullYear(2020))
// console.log(newDate.setHours(10))

//date.now

// let date = new Date() ;
// console.log(date);
// console.log(new Date(2020,05,07,00));
// console.log(new Date(20,05,07,00));
// console.log(new Date("october 13,2020"));// date string

// console.log(new Date().toDateString());
// console.log(new Date("2020")) // ISO dates
// var d = new Date("2015-03-25T12:00:00Z");
// console.log(d)

console.log(new Date().getFullYear()); // 2021
console.log(new Date().getMonth()); // 6 (0 based)
console.log(new Date().getDate()); //30
console.log(new Date().getDay()); // 5 (0 is for sunday)
console.log(new Date().getHours()); // 11
console.log(new Date().getMinutes()); // 25
console.log(new Date().getSeconds()); // 9
console.log(new Date().getMilliseconds()); //775

console.log(new Date().getTime()); //1627624447356 (timestamp)
console.log(new Date(1627624447356)); //Fri Jul 30 2021 11:24:07 GMT+0530 (India Standard Time)
// if we are only concerned with timetamp(we dont event have to create new date)
console.log(Date.now()); //1627624447356 (timestamp)

console.log(new Date().toDateString()); // Fri Jul 30 2021
console.log(new Date().toISOString()); // 2021-07-30T06:02:08.847Z
console.log(new Date().toLocaleDateString()); // 30/7/2021
console.log(new Date().toLocaleString()); // 30/7/2021, 11:32:54 am
console.log(new Date().toLocaleTimeString()); // 11:33:15 am

// -----there are also "set" methods for all of this methods

// in miliseconns
console.log(new Date(0)); // Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)
// after 3 days
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Sun Jan 04 1970 05:30:00 GMT+0530 (India Standard Time)
console.log(3 * 24 * 60 * 60 * 1000); // 259200000 is the timestamp of above date

// ------------operations with date
const future = new Date(2025, 4, 18, 12, 50, 50);
console.log(future); // Sun May 18 2025 12:50:50 GMT+0530 (India Standard Time)

const calcDaysPassed = (date1, date2) =>
  Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

console.log(calcDaysPassed(new Date(), new Date(2022, 6, 30))); //365days

// ==============Internationalize dates
const now = new Date();
const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
  year: "numeric",
  //   year: "2-digit",
  //   weekday: "long",
  weekday: "short",
  // weekday: 'narrow',
};

const locale = navigator.language; // en-US
console.log(Intl.DateTimeFormat("en-US").format(now)); // 7/30/2021
console.log(Intl.DateTimeFormat("en-GB").format(now)); // 30/07/2021
console.log(Intl.DateTimeFormat("en").format(now)); // 7/30/2021
console.log(Intl.DateTimeFormat("en-US", options).format(now)); // Fri, July 30, 2021, 12:31 PM
