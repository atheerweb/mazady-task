export default function checkObjectName(objectName: string | undefined, option: any) {
    return objectName ? option[objectName] : option;
  }