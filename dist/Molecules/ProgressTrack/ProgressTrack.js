"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _icons = require("@ant-design/icons");
var _antd = require("antd");
var _react = _interopRequireDefault(require("react"));
require("./ProgressTrack.scss");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var PROGRESSTRACK_V2_0_1 = function PROGRESSTRACK_V2_0_1(_ref) {
  var id = _ref.id,
    listStep = _ref.listStep,
    currentSteps = _ref.currentSteps;
  return /*#__PURE__*/_react.default.createElement(_antd.Steps, {
    current: currentSteps,
    id: id
  }, listStep.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement(_antd.Steps.Step, {
      key: index,
      title: item.title,
      icon: item.icon
    });
  }));
};
PROGRESSTRACK_V2_0_1.defaultProps = {
  id: "stepperNC",
  listStep: [{
    title: 'Step 1',
    icon: /*#__PURE__*/_react.default.createElement(_icons.UserOutlined, null)
  }, {
    title: 'Step 2',
    icon: /*#__PURE__*/_react.default.createElement(_icons.SolutionOutlined, null)
  }, {
    title: 'Done',
    icon: /*#__PURE__*/_react.default.createElement(_icons.SmileOutlined, null)
  }],
  currentSteps: 1
};
var _default = PROGRESSTRACK_V2_0_1;
exports.default = _default;