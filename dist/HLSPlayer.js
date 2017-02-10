'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HLSPlayer = function (_Component) {
  _inherits(HLSPlayer, _Component);

  function HLSPlayer() {
    _classCallCheck(this, HLSPlayer);

    return _possibleConstructorReturn(this, (HLSPlayer.__proto__ || Object.getPrototypeOf(HLSPlayer)).apply(this, arguments));
  }

  _createClass(HLSPlayer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (Hls.isSupported()) {
        var hls = new Hls();

        hls.loadSource('http://www.streambox.fr/playlists/test_001/stream.m3u8');
        hls.attachMedia(this.videoElement);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
          _this2.videoElement.play();
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('video', { style: { width: '400px', height: '250px' }, ref: function ref(video) {
          _this3.videoElement = video;
        } });
    }
  }]);

  return HLSPlayer;
}(_react.Component);

exports.default = HLSPlayer;


module.exports = HLSPlayer;