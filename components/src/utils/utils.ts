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

/**
 * 查找兄弟元素
 * @param self HTMLElement 元素自身
 * @param isSelf 是否包含此元素，默认为false
 * @returns
 */
export const getBrotherElements = (self: HTMLElement, isSelf: Boolean = false) => {
  const parent = self.parentElement || self.parentNode;
  const children = parent.children;
  const len = children.length;
  const list = [];
  for (let index = 0; index < len; index++) {
    if (isSelf) {
      list.push(children.item(index));
    } else {
      if (children.item(index) !== self) list.push(children.item(index));
    }
  }
  return list;
};

/**
 * 查找某元素下符合条件的所有元素
 * @param self 当前元素-根元素
 * @param tagName css选择器
 * @returns
 */
export const getChildrenComponent = (self: HTMLElement, tagName: string) => {
  return self.querySelectorAll(tagName) as NodeListOf<Element>;
};
