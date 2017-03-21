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

var promise = job1(3);
promise.then(job2).then(job3).then(console.log);