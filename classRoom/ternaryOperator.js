let age = 18;

if (age <= 18) {
    console.log('คุณสามารถเข้าได้');
} else {
    console.log('คุณไม่สามารถเข้าได้ ');
}

// Explain
// สร้างตัวแปร age = 18
// if ( ถ้า age มากกว่า หรือว่า เท่ากับ 18 ) {
// ให้แสดงค่าออกมาว่า คุณสามารถเข้าได้
// } else {
// แต่ถ้าไม่ใช้ให้แสดงคำว่า คุณไม่สามารถเข้าได้
// }


// เขียนแบบ ternary style
// let variable = (condition) ? true : False ;
let myAge = 18
let massege1;
massege1 = (myAge <= 18) ? 'คุณสามารถเข้าได้' : 'คุณไม่สามารถเข้าได้';
alert(massege1);

// Do you my name
let name = prompt('Do you know my name');
let massege2 = 'wissanu'

if (name === massege2) {
    alert('คุณรู้จักชื่อฉัน');
} else {
    alert('คุณไม่รู้จักชื่อฉัน');
}

// Do you my name ternary style
let myName = prompt('Do you know my name');
let massege3 = 'wissanu'

let sendAlert = (massege3 == myName) ? 'You know my name' : 'You do not know my name';

alert(sendAlert);

// age price
let age2 = prompt('press your age');
let price;
let yourPrice = (age2 > 18) ? price = 2000 : price = 3500;

console.log(price);
