"use client";

import { Flex, Input, Button, Divider } from "antd";
import React, { Fragment, useState } from "react";
import { LoginOutlined, UserOutlined, LockOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { loginValidate } from "@/utils/request";

const flexContainerCssProperties: React.CSSProperties = {
  width: "30%",
  height: "auto",
  padding: "50px 30px",
  borderRadius: "5%",
  boxShadow: "0 0 40px 0 #ccc"
};

export default function Home() {
  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const router = useRouter()
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    if(userName == undefined || userName == "" || password == undefined || password == "") {
      return;
    }

    if(loginValidate(userName, password)) {
      router.push('/search-home');
    }
  };

  return (
    <Fragment>
      <Flex
        gap="large"
        vertical
        style={{ ...flexContainerCssProperties }}
        align="center"
      >
        <Divider plain className="h-1 ">
          <span className="text-gray-500 text-[12px]">
            仅限于在后台中创建了的用户登录
          </span>
        </Divider>
        <h1 className="text-[30px] font-bold text-gray-900 flex flex-row gap-3">
          登录
        </h1>
        <section className="flex flex-row w-full gap-2">
          <UserOutlined />
          <Input
            className="p-2 rounded-md"
            value={userName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setUserName(event.currentTarget.value);
            }}
            placeholder="用户名"
            required
          />
        </section>
        <section className="flex flex-row w-full gap-2">
          <LockOutlined />
          <Input
            className=" p-2 rounded-md"
            value={password}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(event.currentTarget.value);
            }}
            placeholder="密码"
            type="password"
            required
          />
        </section>
        <Button onClick={handleSubmit}
                className="w-full p-5 rounded-md bg-black text-white hover:scale-110 transition-all duration-250"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  border: "none"
                }}>
          <LoginOutlined /> 登录
        </Button>
      </Flex>
    </Fragment>
  );
}
