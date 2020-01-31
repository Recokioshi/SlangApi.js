export class ArrayList<T = any> {
  elems: T[] = [];

  /**
   * @constructor
   * @param {T[]} newElems optional parameter with js list to init list with
   */
  constructor(newElems?: T[]) {
    this.elems = newElems || [];
  }

  /**
   * @function
   * @name add
   * @description adds object at the end of the list
   * @param {T} val object to put at the end of list
   */
  add(val: T) {
    this.elems.push(val);
  }

  /**
   * @function
   * @name addAll
   * @description adds objects at the end of the list
   * @param {T} vals list of objects to put at the end of the list
   */
  addAll(vals: T[]) {
    this.elems.push(...vals);
  }

  /**
   * @function
   * @name get
   * @description return elemetnt at position of index. If list is shorter than index, returns null
   * @param {number} index index of element to get from list
   * @return {T | null} return elemetnt at position of index. If list is shorter than index, returns null
   */
  get(index: number): T | null {
    return index < this.elems.length ? this.elems[index] : null;
  }

  /**
   * @function
   * @descriptionreturn size of list
   * @name size
   * @return {number} size of the list
   */
  size(): number {
    return this.elems.length;
  }

  /**
   * @function
   * @descriptionreturn removed element at index
   * @name remove
   * @param {number} index index of element to remove
   * @return {T} returns removed element
   */
  remove(index: number): T {
    return this.elems.splice(index, 1)[0];
  }
}
