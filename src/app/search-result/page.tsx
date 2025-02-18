"use client";

import { Card } from "antd";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { message } from "antd";

import { SearchResult } from "./types";
import { fetchResultsByKeyword } from "@/utils/request";

const CardCSSPropertity: React.CSSProperties = {
  width: "60%",
  marginTop: "20px",
};

const BoxCSSPropertity: React.CSSProperties = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "40px",
};

export default function () {
  const searchParams = useSearchParams();
  const searchKeyword = searchParams.get("word");

  const [searchResult, setSearchResult] = useState<SearchResult[]>([]);
  const [messageApi] = message.useMessage();

  useEffect(() => {
    messageApi.open({
      content: "加载中",
      type: "loading",
    });

    (async () => {
      const results = await fetchResultsByKeyword(searchKeyword as string);
      setSearchResult(results);
    })();

    messageApi.destroy();
  }, [searchKeyword]);

  return (
    <div style={BoxCSSPropertity}>
      {searchResult.map((result, index) => (
        <a href={result.fromURL}>
          <Card title={result.title} style={CardCSSPropertity} key={index}>
            {result.content.substring(0, 120).concat("...")}
          </Card>
        </a>
      ))}
    </div>
  );
}
