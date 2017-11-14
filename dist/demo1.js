'use strict';

//字符串模板
var name = '陈轩';
var desc = '陈轩今天11';
var age = 15;
var all = name + 'is' + age;
console.log(all);
console.log(desc.includes(name));
console.log(desc.startsWith(name));
console.log(desc.endsWith(name));
console.log(name.repeat(11));

//Number方法
var a = 11 / 4;
console.log(Number.isFinite(a)); //是否是number
console.log(Number.isFinite('aa'));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(undefined));

console.log(Number.isNaN(NaN)); //是否是NaN
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

console.log(Number.isSafeInteger(Math.pow(2, 55)));
