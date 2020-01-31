export const exceptions = {
  notImplemented: 'Not implemented.',
  errorDuringExecution: 'Error during execution of sql query.',
  noFunctionDeclaredForName: `Function is not declared. If you call functions with invoke method from base, be sure to add this function in file 'invokingFunctions in the root directory. Missing function name:'`,
  createListProxyNoTypeImplemented: 'Requested type not implemented yet.',
  classNameNotExists: (className: string) => `Class of name ${className} does not exist`
};
