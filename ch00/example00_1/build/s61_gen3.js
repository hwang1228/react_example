"use strict";

var job1 = function job1(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("작업1 : " + n * 2);
      resolve(n * 2);
    }, 1000);
  });
};

var job2 = function job2(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("작업2 : " + n * 2);
      resolve(n * 2);
    }, 1000);
  });
};

var job3 = function job3(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("작업3 : " + n * 2);
      resolve(n * 2);
    }, 1000);
  });
};

function async(genFunc) {
  var g = genFunc();
  function success(result) {
    var obj = g.next(result);
    if (!obj.done) obj.value.then(success, fail);
  }
  function fail(err) {
    var obj = g.throw(err);
    if (!obj.done) obj.value.then(success, fail);
  }
  success();
}

async(regeneratorRuntime.mark(function _callee() {
  var num;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          num = 3;
          _context.next = 3;
          return job1(num);

        case 3:
          num = _context.sent;
          _context.next = 6;
          return job2(num);

        case 6:
          num = _context.sent;
          _context.next = 9;
          return job3(num);

        case 9:
          num = _context.sent;

          console.log("리턴 : " + num);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));