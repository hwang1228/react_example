"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    "use strict";

    var _name = Symbol("name key");
    var _tel = Symbol("tel key");
    var _address = Symbol("address key");
    var _count = Symbol("count key");

    var Person = function () {
        function Person(name, tel, address) {
            _classCallCheck(this, Person);

            this[_name] = name;
            this[_tel] = tel;
            this[_address] = address;
            if (Person[_count]) {
                Person[_count]++;
            } else {
                Person[_count] = 1;
            }
        }

        _createClass(Person, [{
            key: "toString",
            value: function toString() {
                return "name=" + this[_name] + ", tel=" + this[_tel] + "," + ("address=" + this[_address]);
            }
        }, {
            key: "name",

            //이름은 getter만
            get: function get() {
                return this[_name];
            }
            //getter, sette!!

        }, {
            key: "tel",
            get: function get() {
                return this[_tel];
            },
            set: function set(tel) {
                this[_tel] = tel;
            }
        }, {
            key: "address",
            get: function get() {
                return this[_tel];
            },
            set: function set(address) {
                this[_address] = address;
            }
        }], [{
            key: "getPersonCount",
            value: function getPersonCount() {
                return Person[_count];
            }
        }]);

        return Person;
    }();

    return Person;
}();

var p1 = new Person('홍길동', '010-222-3331', '서울시');
//p1.age = "이몽룡";     //에러발생
//p1[_name] = "이몽룡";      //에러발생
p1.tel = "010-9999-2222";
console.log(p1.toString());