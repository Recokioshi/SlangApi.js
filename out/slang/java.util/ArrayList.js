"use strict";
exports.__esModule = true;
var ArrayList = /** @class */ (function () {
    /**
     * @constructor
     * @param {T[]} newElems optional parameter with js list to init list with
     */
    function ArrayList(newElems) {
        this.elems = [];
        this.elems = newElems || [];
    }
    /**
     * @function
     * @name add
     * @description adds object at the end of the list
     * @param {T} val object to put at the end of list
     */
    ArrayList.prototype.add = function (val) {
        this.elems.push(val);
    };
    /**
     * @function
     * @name addAll
     * @description adds objects at the end of the list
     * @param {T} vals list of objects to put at the end of the list
     */
    ArrayList.prototype.addAll = function (vals) {
        var _a;
        (_a = this.elems).push.apply(_a, vals);
    };
    /**
     * @function
     * @name get
     * @description return elemetnt at position of index. If list is shorter than index, returns null
     * @param {number} index index of element to get from list
     * @return {T | null} return elemetnt at position of index. If list is shorter than index, returns null
     */
    ArrayList.prototype.get = function (index) {
        return index < this.elems.length ? this.elems[index] : null;
    };
    /**
     * @function
     * @descriptionreturn size of list
     * @name size
     * @return {number} size of the list
     */
    ArrayList.prototype.size = function () {
        return this.elems.length;
    };
    /**
     * @function
     * @descriptionreturn removed element at index
     * @name remove
     * @param {number} index index of element to remove
     * @return {T} returns removed element
     */
    ArrayList.prototype.remove = function (index) {
        return this.elems.splice(index, 1)[0];
    };
    return ArrayList;
}());
exports.ArrayList = ArrayList;
//# sourceMappingURL=ArrayList.js.map