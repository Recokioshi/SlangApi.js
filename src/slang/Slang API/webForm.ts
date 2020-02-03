import { decorateObjectWithGetterAndSetter } from '../../common/webFormDecorator';
const loadedWebForm = require('../../assets/webForm.json');

type ISingleWebFormObject = string | number | Object;

export interface IWebFormDataSource {
  [key: string]: () => ISingleWebFormObject | ISingleWebFormObject[];
}

export class WebFormCollection {
  collectionDataSource: IWebFormDataSource[];

  constructor(dataSource: IWebFormDataSource[]) {
    this.collectionDataSource = dataSource;
  }

  get(index: number) {
    return this.collectionDataSource[index];
  }

  size() {
    return this.collectionDataSource.length;
  }

  create() {
    let newElem = { ...this.collectionDataSource[0] };
    Object.keys(newElem).forEach(key => {
      newElem[key] = null;
    });
    newElem = decorateObjectWithGetterAndSetter<IWebFormDataSource>(newElem);
    //@ts-ignore
    this.collectionDataSource.push(newElem);
    return newElem;
  }
}

class WebFormBuilder {
  webFormStructure: IWebFormDataSource;
  constructor(webFormDataSource: IWebFormDataSource) {
    this.webFormStructure = webFormDataSource;
  }
  getWebForm(): IWebFormDataSource {
    return decorateObjectWithGetterAndSetter<IWebFormDataSource>(this.webFormStructure);
  }
}

export const webForm = new WebFormBuilder(loadedWebForm).getWebForm();
