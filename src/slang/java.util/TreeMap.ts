export class TreeMap {
  elems = {};

  /**
   * @function
   * @name put
   * @description puts object for key to map and returns it
   * @param {string} key key for
   * @param {Object} val value to put to map
   * @return {Object} added object
   */
  put(key: string, val: Object): Object {
    this.elems[key] = val;
    return this.elems[key];
  }

  /**
   * @function
   * @name get
   * @description gets object for key from map or null if key not exists
   * @param {string} key key of object to return from map
   * @return {Object | null} object for key from map
   */
  get(key: string): Object | null {
    return this.elems[key] || null;
  }

  /**
   * @function
   * @name keySet
   * @description returns object with set of all keys in map
   * @return {Object} return object that contains keys from map
   */
  keySet(): Object {
    const elemsList = this.elems;
    return {
      elemsList,
      toArray: () => Object.keys(elemsList),
    };
  }
}
