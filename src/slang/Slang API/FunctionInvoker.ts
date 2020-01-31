import invokingFunctions from '../../invokingFunctions';
import { exceptions } from '../../common/exceptions';

/**
 * @class
 * @name FunctionInvoker
 * @description class that holds function with params for invoke later
 */
export class FunctionInvoker {
  functionName: string = '';
  params: Object[] = [];

  constructor(functionName: string) {
    this.functionName = functionName;
  }

  param(paramValue: Object): FunctionInvoker {
    this.params.push(paramValue);
    return this;
  }

  invoke(): any {
    const funToInvoke = invokingFunctions[this.functionName];
    if (funToInvoke) {
      return funToInvoke(...this.params);
    } else {
      throw new Error(`${exceptions.noFunctionDeclaredForName}${this.functionName}`);
    }
  }
}
