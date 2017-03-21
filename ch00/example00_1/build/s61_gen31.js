"use strict";

//npm install system-sleep -g
var sleep = require('system-sleep');

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

var genFunc = regeneratorRuntime.mark(function genFunc() {
  var num;
  return regeneratorRuntime.wrap(function genFunc$(_context) {
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
  }, genFunc, this);
});

function success(result) {
  console.log("5초 쉽니다.");
  sleep(5000);
  var obj = g.next(result);
  if (!obj.done) {
    obj.value.then(success, fail);
  }
}

function fail(err) {
  console.log("5초 쉽니다.");
  sleep(5000);
  var obj = g.throw(err);
  if (!obj.done) {
    obj.value.then(success, fail);
  }
}

var g = genFunc();
success();