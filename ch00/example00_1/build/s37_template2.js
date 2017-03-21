"use strict";

var _templateObject = _taggedTemplateLiteral(["\uCCAB\uBC88\uC9F8 \uAC12\uC740 ", "\uC774\uACE0, \uB450\uBC88\uC9F8 \uAC12\uC740 ", "\uC774\uB2E4."], ["\uCCAB\uBC88\uC9F8 \uAC12\uC740 ", "\uC774\uACE0, \uB450\uBC88\uC9F8 \uAC12\uC740 ", "\uC774\uB2E4."]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var getPercent = function getPercent(str) {
    var result = "";
    console.log(str);

    for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
    }

    console.log(values);
    for (var i = 0; i < str.length; i++) {
        result += str[i];
        if (values[i]) result += Math.round(values[i] * 100) + "%";
    }
    return result;
};

var v1 = 0.222;
var v2 = 0.78999;
var r2 = getPercent(_templateObject, v1, v2);
console.log(r2);