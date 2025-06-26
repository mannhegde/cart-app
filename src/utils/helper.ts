export const delay = <T = void>(ms: number, value?: T): Promise<T> =>
  new Promise(resolve => setTimeout(() => resolve(value as T), ms));

export const isRecordEmpty = <T extends Record<string, any>>(obj: T) =>
  Object.keys(obj).length === 0;

export const getInrString = (val?: number | string) => {
  if (!val) return '';
  return `₹${val}`;
};

export const pluralize = (value: number, word: string) => {
  const plural = value === 1 ? word : `${word}s`;
  return `${value} ${plural}`;
};

export const noop = () => {};
