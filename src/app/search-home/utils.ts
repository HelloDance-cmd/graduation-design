import { OptionsTypeOfRadio } from "./types";

/**
 * 转换后端返回回来的数据，使之符合组件数据
 * @param tagNames 分类名称
 * @returns 返回符合OptionsTypeOfRadio的类型的
 */
export function tagBuilder(tagNames: string[]): OptionsTypeOfRadio[] {
  let opts: OptionsTypeOfRadio[] = [];
  for (let tagName of tagNames) {
    opts.push({
      value: tagName,
      label: tagName,
    });
  }

  return opts;
}