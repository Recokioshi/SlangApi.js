import { IWebFormDataSource, WebFormCollection } from '../slang/Slang API/webForm';

type capitalizedKeyType = { capitalized: string; original: string };

const capitalizeFirstLetter = (key: string) => ({
  capitalized: key.charAt(0).toUpperCase() + key.slice(1),
  original: key,
});

const addGetterToObject = (objectToDecorate: Object, propName: capitalizedKeyType) => {
  objectToDecorate[`get${propName.capitalized}`] = () => objectToDecorate[propName.original];
};

const addSetterToObject = (objectToDecorate: Object, propName: capitalizedKeyType) => {
  objectToDecorate[`set${propName.capitalized}`] = (newValue: unknown) => {
    objectToDecorate[propName.original] = newValue;
  };
};

const addGetterAndSetterToSimpleType = (objectToDecorate: Object, propName: capitalizedKeyType) => {
  addGetterToObject(objectToDecorate, propName);
  addSetterToObject(objectToDecorate, propName);
};

const addGetterAndSetterToObject = (decoratedObject: Object) => (propName: capitalizedKeyType) => {
  let field = decoratedObject[propName.original];
  const typeOfField = typeof field;
  switch (typeOfField) {
    case 'string':
    case 'number':
      addGetterAndSetterToSimpleType(decoratedObject, propName);
      break;
    case 'object':
      if (Array.isArray(field)) {
        decoratedObject[propName.original] = new WebFormCollection(
          [...field].map((elemInField: IWebFormDataSource) =>
            decorateObjectWithGetterAndSetter<IWebFormDataSource>(elemInField)
          )
        );
        addGetterToObject(decoratedObject, propName);
      } else if (field === null) {
        addGetterAndSetterToSimpleType(decoratedObject, propName);
      } else {
        addGetterToObject(decoratedObject, propName);
        field = decorateObjectWithGetterAndSetter<IWebFormDataSource>(field);
      }
      break;
    default:
  }
};

export const decorateObjectWithGetterAndSetter = <T>(initialObject: Object): T => {
  Object.keys(initialObject)
    .map(capitalizeFirstLetter)
    .forEach(addGetterAndSetterToObject(initialObject));
  return initialObject as T;
};
