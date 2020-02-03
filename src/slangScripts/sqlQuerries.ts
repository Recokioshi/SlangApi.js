//example simulation of executing slang script of content
// function runQuery(num) {
//   var params = new ArrayList();
//   var query = `SELECT SYSDATE as CURRENT_TIME, ? as MY_NUMBER FROM DUAL`;
//   params.add(num);
//   return restricted.generalSQL(query, params);
// }

//all additional packages are have to be imported
import { restricted } from '../slang/Slang API/restricted';
import { ArrayList } from '../slang/java.util/ArrayList';

//to use this function externally, export it
//TS types are optional
//the rest of the function is the same
export function runQuery(num: number) {
  var params = new ArrayList();
  var query = `SELECT SYSDATE as CURRENT_TIME, ? as MY_NUMBER FROM DUAL`;
  params.add(num);
  return restricted.generalSQL(query, params);
}
