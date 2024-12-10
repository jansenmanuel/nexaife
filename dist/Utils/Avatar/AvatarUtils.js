"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getType = exports.getSize = exports.getBadgeSizeClass = exports.getAvatarSizeClass = void 0;
var _lodash = _interopRequireDefault(require("lodash"));
var _AvatarModule = _interopRequireDefault(require("../../Atomic/Avatar/Avatar.module.scss"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var getType = function getType(type) {
  switch (type) {
    case "circle":
      return "circle";
    case "rounded":
      return "square";
    default:
      return "circle";
  }
};
exports.getType = getType;
var getSize = function getSize(size) {
  var sizeToLower = size.toLowerCase();
  var sizeProps;
  switch (sizeToLower) {
    case "sm":
      sizeProps = {
        textClass: 'text-sm',
        offset: [-5, 29]
      };
      break;
    case "md":
      sizeProps = {
        textClass: 'text-md',
        offset: [-6, 45]
      };
      break;
    case "lg":
      sizeProps = {
        textClass: 'text-lg',
        offset: [-8, 58]
      };
      break;
    case "xl":
      sizeProps = {
        textClass: 'text-xl',
        offset: [-8, 65]
      };
      break;
    case "xxl":
      sizeProps = {
        textClass: 'text-2xl',
        offset: [-8, 71]
      };
      break;
    default:
      sizeProps = {
        textClass: 'text-md',
        offset: [-6, 45]
      };
      break;
  }
  return sizeProps;
};
exports.getSize = getSize;
var getBadgeSizeClass = function getBadgeSizeClass(size, state) {
  var badgeSizeClass;
  if (size.toLowerCase() === "sm") {
    badgeSizeClass = _AvatarModule.default["badge".concat(_lodash.default.startCase(state), "Style").concat(_lodash.default.startCase(size))];
  } else if (size.toLowerCase() === "md") {
    badgeSizeClass = _AvatarModule.default["badge".concat(_lodash.default.startCase(state), "Style").concat(_lodash.default.startCase(size))];
  } else if (size.toLowerCase() === "lg") {
    badgeSizeClass = _AvatarModule.default["badge".concat(_lodash.default.startCase(state), "Style").concat(_lodash.default.startCase(size))];
  } else if (size.toLowerCase() === "xl") {
    badgeSizeClass = _AvatarModule.default["badge".concat(_lodash.default.startCase(state), "Style").concat(_lodash.default.startCase(size))];
  } else if (size.toLowerCase() === "xxl") {
    badgeSizeClass = _AvatarModule.default["badge".concat(_lodash.default.startCase(state), "Style").concat(_lodash.default.startCase(size))];
  }
  return badgeSizeClass;
};
exports.getBadgeSizeClass = getBadgeSizeClass;
var getAvatarSizeClass = function getAvatarSizeClass(size) {
  var avatarSizeClass;
  var containerSquareClass;
  if (size.toLowerCase() === "sm") {
    avatarSizeClass = _AvatarModule.default["avatarStyle".concat(_lodash.default.startCase(size))];
    containerSquareClass = _AvatarModule.default["containerSquare".concat(_lodash.default.startCase(size))];
  } else if (size.toLowerCase() === "md") {
    avatarSizeClass = _AvatarModule.default["avatarStyle".concat(_lodash.default.startCase(size))];
    containerSquareClass = _AvatarModule.default["containerSquare".concat(_lodash.default.startCase(size))];
  } else if (size.toLowerCase() === "lg") {
    avatarSizeClass = _AvatarModule.default["avatarStyle".concat(_lodash.default.startCase(size))];
    containerSquareClass = _AvatarModule.default["containerSquare".concat(_lodash.default.startCase(size))];
  } else if (size.toLowerCase() === "xl") {
    avatarSizeClass = _AvatarModule.default["avatarStyle".concat(_lodash.default.startCase(size))];
    containerSquareClass = _AvatarModule.default["containerSquare".concat(_lodash.default.startCase(size))];
  } else if (size.toLowerCase() === "xxl") {
    avatarSizeClass = _AvatarModule.default["avatarStyle".concat(_lodash.default.startCase(size))];
    containerSquareClass = _AvatarModule.default["containerSquare".concat(_lodash.default.startCase(size))];
  }
  return {
    avatarSizeClass: avatarSizeClass,
    containerSquareClass: containerSquareClass
  };
};
exports.getAvatarSizeClass = getAvatarSizeClass;