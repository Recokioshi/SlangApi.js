"use strict";
exports.__esModule = true;
var TreeMap = /** @class */ (function () {
    function TreeMap() {
        this.elems = {};
    }
    /**
     * @function
     * @name put
     * @description puts object for key to map and returns it
     * @param {string} key key for
     * @param {Object} val value to put to map
     * @return {Object} added object
     */
    TreeMap.prototype.put = function (key, val) {
        this.elems[key] = val;
        return this.elems[key];
    };
    /**
     * @function
     * @name get
     * @description gets object for key from map or null if key not exists
     * @param {string} key key of object to return from map
     * @return {Object | null} object for key from map
     */
    TreeMap.prototype.get = function (key) {
        return this.elems[key] || null;
    };
    /**
     * @function
     * @name keySet
     * @description returns object with set of all keys in map
     * @return {Object} return object that contains keys from map
     */
    TreeMap.prototype.keySet = function () {
        var elemsList = this.elems;
        return {
            elemsList: elemsList,
            toArray: function () { return Object.keys(elemsList); }
        };
    };
    return TreeMap;
}());
exports.TreeMap = TreeMap;
//# sourceMappingURL=TreeMap.js.map