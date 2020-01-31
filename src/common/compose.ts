export default (...functions: Function[]) => (args: any) =>
  functions.reduceRight((arg, fn) => fn(arg), args);
