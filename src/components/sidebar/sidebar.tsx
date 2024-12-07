import { Avatar, Flex, Menu, MenuProps, Space, Typography } from "antd";
import styles from "./sidebar.module.css";
import image from "../../asset/image/78e0e3cef5074f591616.jpg";
import Button from "../button";
import {
  DashBoardIcon,
  LogoutIcon,
  MyTaskIcon,
  SettingIcon,
  VitalTaskIcon,
} from "../icons";

export default function Sidebar() {
  type MenuItem = Required<MenuProps>["items"][number];

  const items: MenuItem[] = [
    {
      key: "1",
      icon: <DashBoardIcon />,
      label: "Dashboard",
      title: "Dashboard",
    },
    {
      key: "2",
      icon: <VitalTaskIcon />,
      label: "Vital Task",
      title: "Vital Task",
    },
    {
      key: "3",
      icon: <MyTaskIcon />,
      label: "My Task",
      title: "My Task",
    },
    {
      key: "4",
      icon: <SettingIcon />,
      label: "Settings",
      title: "Settings",
    },
  ];
  return (
    <div className={styles.sidebar}>
      <Space align="center" direction="vertical" className={styles.info}>
        <Avatar src={<img src={image.src} alt="avatar" />} size={86} />
        <Typography.Title level={5} className={styles.name}>
          Sundar Gurung
        </Typography.Title>
        <Typography.Text className={styles.name}>
          sundargurung360@gmail.com
        </Typography.Text>
      </Space>
      <Flex className={styles.menu} justify="space-between" vertical>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
          className={styles.menu_item}
          theme="dark"
        />
        <Button
          title={"logout"}
          icon={<LogoutIcon />}
          content="Logout"
          type="text"
          className={styles.btn_logout}
        >
          Logout
        </Button>
      </Flex>
    </div>
  );
}
