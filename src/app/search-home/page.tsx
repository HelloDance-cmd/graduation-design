"use client";

import Input from "@/app/components/Input";
import { Form, message } from "antd";
import { Fragment } from "react";

const SearchInput: React.FC = function () {
  const [showMessage, messageAlertBox] = message.useMessage();

  return (
    <Fragment>
      {messageAlertBox}
      <Form className="w-1/2 flex flex-col gap-5">
        <section className="flex gap-2 justify-center">
          <Input showMessage={showMessage} />
        </section>
      </Form>
    </Fragment>
  );
};

export default SearchInput;
