"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var AddressDataProxy_1 = require("../Common/AddressDataProxy");
var ShipmentAddressDataProxy = /** @class */ (function (_super) {
    __extends(ShipmentAddressDataProxy, _super);
    function ShipmentAddressDataProxy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ShipmentAddressDataProxy;
}(AddressDataProxy_1.AddressDataProxy));
exports.ShipmentAddressDataProxy = ShipmentAddressDataProxy;
//# sourceMappingURL=ShipmentAddressDataProxy.js.map