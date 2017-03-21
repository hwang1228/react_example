"use strict";

var _marked = [testGenerator].map(regeneratorRuntime.mark);

function testGenerator(v) {
    var arr, i;
    return regeneratorRuntime.wrap(function testGenerator$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    arr = ["이몽룡", "성춘향", "박문수", "홍길동", "박명수"];
                    i = 0;

                case 2:
                    if (!(i < arr.length)) {
                        _context.next = 12;
                        break;
                    }

                    if (!(i < arr.length - 1)) {
                        _context.next = 8;
                        break;
                    }

                    _context.next = 6;
                    return arr[i] + v;

                case 6:
                    _context.next = 9;
                    break;

                case 8:
                    return _context.abrupt("return", arr[i] + v);

                case 9:
                    i++;
                    _context.next = 2;
                    break;

                case 12:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var gen = testGenerator(100);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());