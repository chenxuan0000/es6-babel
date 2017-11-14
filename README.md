### ES6

#### 1.环境搭建
> 全局安装babel-cli 
```javascript
    cnpm/npm install -g babel-cli
    
    cnpm install --save-dev babel-preset-es2015  babel-cli
    
    babel src/index.js -o dist/index.js //编译babel
```

> 添加.babelrc文件
```javascript
{
  "presets": [
    "es2015"
  ],
  "plugins": []
}
```

#### 2.es6解构
```javascript
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
```

#### 3.对象扩展运算符
```javascript
//对象扩展运算符
function jschenxuan (...args) {
  for (let val of args) {
    console.log(val)
  }
}

jschenxuan(11, 22, 333, 4444);
```

#### 4.字符串模板,和操作方法
```javascript
let name = '陈轩';
let desc = '陈轩今天11'
let age = 15;
let all = `${name}is${age}`;
console.log(all);
console.log(desc.includes(name));
console.log(desc.startsWith(name));
console.log(desc.endsWith(name));
console.log(name.repeat(11));
```