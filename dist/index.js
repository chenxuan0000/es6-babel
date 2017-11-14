'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// for (let a = 0; a < 10; a++) {
//   console.log(a);
// }
//数组解构
var a = 'chenxuan',
    _ref = null,
    b = _ref === undefined ? 'cx' : _ref;

console.log(a);
console.log(b);

//对象解构
var _foo$goo = { foo: 'chenxuan', goo: 'uuuuu111' },
    foo = _foo$goo.foo,
    goo = _foo$goo.goo;

console.log(foo);
console.log(goo);

var ggg = void 0;
//先赋值的解构需要给外面加括号
var _ggg = { ggg: 'jses6' };
ggg = _ggg.ggg;
console.log(ggg);

//字符串解构

var _ABCD = 'ABCD',
    _ABCD2 = _slicedToArray(_ABCD, 4),
    x1 = _ABCD2[0],
    x2 = _ABCD2[1],
    x3 = _ABCD2[2],
    x4 = _ABCD2[3];

console.log(x1);
console.log(x4);
