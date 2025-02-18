import { SearchResult } from "../app/search-result/types";

const BASE_URL: string = "http://127.0.0.1:8000"

/**
 * 强化fetch函数使所有的返回值统一为json格式，不需要进行两次 then
 * @param address 接口访问路径
 * @returns 
 */
function enhancedFetch<T = any>(address: string): Promise<T> {
  return fetch(BASE_URL.concat(address))
    .then(response => response.json())
    .catch(console.log);
}

export function loginValidate(userName: string, password: string): boolean {
  return true;
}

export function isExpire(): boolean {
  return true;
}

/**
 * 返回出现过这个关键词的相关词
 * @param keyword 
 * @returns 相关词
 */
export function fetchRelateKeyword(keyword: string): Promise<string[]> {
    return enhancedFetch<string[]>("/search/relate_keywords?words=".concat(keyword))
}

/**
 * 获取所有分类
 * @returns 所有的分类
 */
export function fetchCategories() : Promise<string[]> {
  return enhancedFetch<string[]>("/search/search_tags/")
}

/**
 * 通过关键词查找相关的数据
 * @param keyword 关键词
 * @returns 所有和这个关键词相关的数据
 */
export function fetchResultsByKeyword(keyword: string): Promise<SearchResult[]> {
  return enhancedFetch<SearchResult[]>("/search?words=".concat(keyword))
}