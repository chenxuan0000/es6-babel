// for (let a = 0; a < 10; a++) {
//   console.log(a);
// }
//数组解构
let [a, b = 'cx'] = ['chenxuan', null];
console.log(a);
console.log(b);

//对象解构
let {foo, goo} = {foo: 'chenxuan', goo: 'uuuuu111'};
console.log(foo);
console.log(goo);

let ggg;
({ggg} = {ggg: 'jses6'}); //先赋值的解构需要给外面加括号
console.log(ggg);

//字符串解构
const [x1, x2, x3, x4] = 'ABCD';
console.log(x1);
console.log(x4);