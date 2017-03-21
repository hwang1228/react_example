"use strict";

var job1 = function job1(owner) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("작업1 : " + owner);
      resolve(owner);
    }, 1000);
  });
};

var job2 = function job2(owner) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("작업2 : " + owner);
      resolve(owner);
    }, 1000);
  });
};

var job3 = function job3(owner) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("작업3 : " + owner);
      resolve(owner);
    }, 1000);
  });
};

var promise = job1('이몽룡');
promise.then(job2).then(job3).then(console.log);