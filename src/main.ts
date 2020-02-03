//simple exmaple of usage this package to simulate slang script of content:
// var params = base.createLongListProxy();
// params.add(12345);

// var results = base.invokeProtected('sqlQuerries', 'runQuery', params);
// var firstRow = results.get(0);
// base.log.debug(
//   'date: ' + firstRow.getDate(0) + ' and param number: ' + firstRow.getInteger('MY_NUMBER')
// );

//to use base api, import base
import { base } from './slang/Slang API/base';

//to call async function that calls database,
//function has to be called in async function too.
//To make it as simple as possible just use IFI
(async () => {
  //START WRITING YOUR SCRIPT HERE

  //params are added as always with standard base api
  var params = base.createLongListProxy();
  params.add(12345);

  //first difference is to add await before database querry, to resolve promise right away
  var results = await base.invokeProtected('sqlQuerries', 'runQuery', params);
  //the rest of script is the same with no differences
  var firstRow = results.get(0);
  base.log.debug(
    'date: ' + firstRow.getDate(0) + ' and param number: ' + firstRow.getInteger('MY_NUMBER')
  );
  //output should be the same as in the slang executor with difference in date.
  //In slang you get Java date, here it will be JS date.
  //date: Mon Feb 03 2020 11:04:57 GMT+0100 (GMT+01:00) and param number: 12345
})();
