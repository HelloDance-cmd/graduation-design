import { fetchRelateKeyword } from "@/utils/request";
import { AutoComplete, AutoCompleteProps, Button, Form, message } from "antd";
import { type MessageInstance } from "antd/es/message/interface";
import { debounce } from "lodash";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  showMessage: MessageInstance;
}

const Input = ({ showMessage }: Props) => {
  // 输入的关键词
  const [keyword, setKeyword] = useState<string>();
  // 相关关键词
  const [relateKeywords, setRelateKeywords] = useState<
    AutoCompleteProps["options"]
  >([]);

  const router = useRouter();

  const fetchRelateKeywords = debounce(async function (
    keyword: string | undefined
  ) {
    if (keyword == undefined) return;

    try {
      const relatedWords: string[] = await fetchRelateKeyword(keyword);
      let relates = [];
      for (let relatedWord of relatedWords) {
        relates.push({
          value: relatedWord,
        });
      }
      setRelateKeywords(relates);
    } catch {
      showMessage.open({
        type: "error",
        content: "遇到了未知错误",
        duration: 2,
      });
    }
  },
  100);

  const handleSearch = () => {
    if (keyword) {
      router.push(`/search-results?word=${keyword}`);
    }
  };

  return (
    <>
      <AutoComplete
        className="h-full rounded-lg w-full"
        options={relateKeywords}
        value={keyword}
        onChange={(value) => {
          setKeyword(value);
          fetchRelateKeywords(value);
        }}
        placeholder="请输入关键词"
      />
      <Button className="h-full py-3 px-6 " onClick={handleSearch}>
        搜索
      </Button>
    </>
  );
};

export default Input;
