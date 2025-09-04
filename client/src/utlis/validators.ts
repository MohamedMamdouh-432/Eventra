export const isEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export const isRequired = (value: string): boolean =>
  value.trim().length > 0;
