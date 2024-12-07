"use client";
import styles from "./layout.module.css";
import Header from "../header";
import Sidebar from "../sidebar/sidebar";
import { ConfigProvider, Layout as LayoutAntd } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { Header as HeaderAntd } from "antd/es/layout/layout";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#FF9090",
          borderRadius: 2,
          // colorBgContainer: "#f6ffed",
          // fontFamily: 'Montserrat'
        },
      }}
    >
      <LayoutAntd className={styles.wrapper}>
        <HeaderAntd className={styles.header}>
          <Header />
        </HeaderAntd>
        <LayoutAntd className={styles.body}>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            className={styles.sider}
            width={280}
          >
            <Sidebar />
          </Sider>
          <Content className={styles.content}>{children}</Content>
        </LayoutAntd>
      </LayoutAntd>
    </ConfigProvider>
  );
}
