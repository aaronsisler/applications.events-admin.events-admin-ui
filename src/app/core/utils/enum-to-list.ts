export const enumToList = (enumObject: any): string[] =>
  Object.keys(enumObject).filter((k) => isNaN(Number(k)));
