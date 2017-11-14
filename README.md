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