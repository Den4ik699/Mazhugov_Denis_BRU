"use strict";
// task1

function calcTheLength(str) {
    const array = str.split(" ");
    const updArr = array.map((currentItem) => {
        return currentItem + " " + currentItem.length;
    });
    console.log(updArr);
}

calcTheLength("Hello wordd");


// task2

function wordPattern(word) {
    let arr = [];
    let s = word.toLowerCase().split('');
    for (let i = 0; i < s.length; i++) {
        if (!arr.includes(s[i])) {
            arr.push(s[i]);
        }
    }
    for (let i = 0; i < s.length; i++) {
        s[i] = arr.indexOf(s[i]);
    }
    return s.join('.');
}

let res = wordPattern("hello");
console.log(res);

//task3

function stringParse(string) {
    if (typeof (string) === 'string'){
        return string.replace(/((.)\2)(\2+)/g, '$1[$3]');
    }
    else{
        return "Please enter a valid string";
    }
}

let a = stringParse("helloookat");
console.log(a);


// task4

// console.log(1 - '0' + 2);//3
// console.log(1 - '-0' + 2);//3
// console.log(1 - '-0-' + 'NaN');//NaNNaN — NaN + 'NaN'
// console.log('b' + [NaN + 'ba', 'CC'] - {});//NaN
// console.log([] + (() => { }));//()=>{}
// console.log((() => ({})));//()=>({})
// console.log([] + (() => ({}))())//[object Object];
// console.log([] + (() => new Object(123))());//123
// console.log({} + (() => new Object(123))());//[object Object]123
// console.log((() => new Object(123))() + {});//123[object Object]
// console.log(({}).valueOf() + 1);//[object Object]1
// console.log({} + 2);//[object Object]2
// console.log(typeof ({}).valueOf() + 2);//object2
// console.log(+ {});//NaN
// console.log(+ {} + []);//NaN
// console.log(+ []);//0
// console.log(+[] + {});//0[object Object]
// console.log(+[10, 1] + {});//NaN[object Object]
// console.log({} + [10]);//[object Object]10




/* task5 */

/* 0 == null; // false
null == undefined // true
1 == {} // false
{} == 1 // false
({}) == 1 // false
({toString: () => '12'}) == 12*/ // true