'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /** @format */

var _lib = require('./lib');

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ParentComponent = function () {
  function ParentComponent() {
    _classCallCheck(this, ParentComponent);
  }

  _createClass(ParentComponent, [{
    key: 'nonStaticMethodParent',
    value: function nonStaticMethodParent() {}
  }]);

  return ParentComponent;
}();

var ChildComponent = function () {
  function ChildComponent() {
    _classCallCheck(this, ChildComponent);
  }

  _createClass(ChildComponent, [{
    key: 'nonStaticMethod',
    value: function nonStaticMethod() {}
  }], [{
    key: 'staticMethod',
    value: function staticMethod() {}
  }]);

  return ChildComponent;
}();

(0, _lib2.default)(ParentComponent, ChildComponent);

// eslint-disable-next-line
console.log(ParentComponent);