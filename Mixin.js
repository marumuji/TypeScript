var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function Timestamped(Base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.timestamp = Date.now();
            return _this;
        }
        return class_1;
    }(Base));
}
function Activatable(Base) {
    return /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isActivated = false;
            return _this;
        }
        class_2.prototype.activate = function () {
            this.isActivated = true;
        };
        class_2.prototype.deactivate = function () {
            this.isActivated = false;
        };
        return class_2;
    }(Base));
}
var User = /** @class */ (function () {
    function User() {
        this.name = '';
    }
    return User;
}());
var TimestampedUser = Timestamped(User);
var TimestampedActivatableUser = Timestamped(Activatable(User));
var timestampedUserExample = new TimestampedUser();
console.log(timestampedUserExample.timestamp);
var timestampedActivatableUserExample = new TimestampedActivatableUser();
console.log(timestampedActivatableUserExample.timestamp);
console.log(timestampedActivatableUserExample.isActivated);
