import { base } from './slang/Slang API/base';
import { LongListProxy } from './slang/Proxy/LongListProxy';
import { webForm } from './slang/Slang API/webForm';

(async () => {
  //console.log(webForm);
  console.log(webForm.getName1());
  //@ts-ignore
  webForm.setName1('blabla?');
  //console.log(webForm.getName1());
  //@ts-ignore
  console.log(webForm.getSection().getNameInSection());
  //@ts-ignore
  const newElem = webForm.getCollection1().create();
  newElem.setNameInCol('blablaski');
  //@ts-ignore
  console.log(webForm.getCollection1().get(2).getNameInCol());
})();
