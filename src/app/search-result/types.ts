export interface SearchResult {
  title: string; // 标题
  fromURL: string; // 来自那个网页地址
  content: string; // 内容
  tags: string[];
  created_at: Date; // 爬取时间，创建时间
}