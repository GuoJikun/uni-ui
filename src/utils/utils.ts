export function format(first: string, middle: string, last: string): string {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

/**
 * 获取变量类型
 * @param val
 * @returns
 */
export const getType = (val: unknown) => {
  return Object.prototype.toString.call(val).slice(8, -1);
};
