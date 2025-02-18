import { message } from "antd";
import Input from "../components/Input";

const SearchResultLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [showMessage, messageAlertBox] = message.useMessage();
  return (
    <>
    {messageAlertBox}
      <Input showMessage={showMessage} />
      {children}
    </>
  );
};

export default SearchResultLayout;
