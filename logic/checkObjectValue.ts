export default function checkObjectValue(objectValue: string | undefined, option: any) {
    return objectValue
      ? option[objectValue]
      : typeof option === "object"
      ? JSON.stringify({ id: option.id, name: option.name })
      : option;
  }