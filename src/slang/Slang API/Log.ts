/**
 * @class
 * @name log
 * @description Representation of log object in slang
 */
export class Log {
  /**
   * @function
   * @name debug
   * @param {any} arg any object to print
   * @description prints argument into console
   */
  debug(arg: any) {
    console.log(String(arg));
  }
}
