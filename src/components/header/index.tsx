import {
  AutoComplete,
  Col,
  Divider,
  Input,
  Popover,
  Row,
  Space,
  Typography,
} from "antd";
import styles from "./header.module.css";
import BellIcon from "../icons/header/bell";
import Calendera from "../icons/header/calendera";
import Button from "../button";
import Notifications from "../notification";
import Calender from "../calender";
import { useState } from "react";

export default function Header() {
  const [isOpenNotifi, setIsOpenNotifi] = useState(false);
  const [isOpenCalender, setIsOpenCalender] = useState(false);
  const onSelect = () => {};

  const handleSearch = () => {};

  const handleChangeOpenNotfi = (newOpen: boolean) => {
    setIsOpenNotifi(newOpen);
  };
  const handleChangeOpenCalender = (newOpen: boolean) => {
    setIsOpenCalender(newOpen);
  };
  return (
    <Row gutter={[16, 16]} className={styles.wrapper} align={"middle"}>
      <Col span={6}>
        <div className={styles.logo}>Dashboard</div>
      </Col>
      <Col span={12}>
        <Row align={"middle"}>
          <AutoComplete
            options={[]}
            onSelect={onSelect}
            onSearch={handleSearch}
            className={styles.autoComplete}
            placeholder={"Tìm kiếm ..."}
          >
            <Input.Search enterButton className={styles.inputSearch} />
          </AutoComplete>
        </Row>
      </Col>
      <Col span={6}>
        <div className={styles.actions}>
          <div className={styles.buttonControl}>
            <Popover
              title={
                <Space
                  direction="vertical"
                  size={"small"}
                  style={{ paddingLeft: 16, paddingRight: 16 }}
                >
                  <Typography.Title level={4} style={{ margin: 0 }}>
                    Notifications
                  </Typography.Title>
                  <Divider style={{margin: 0}} />
                </Space>
              }
              open={isOpenNotifi}
              trigger={"click"}
              placement="bottomLeft"
              onOpenChange={handleChangeOpenNotfi}
              content={<Notifications />}
              overlayClassName={styles.modal_notifi}
            >
              <div className={styles.wrapper_btn}>
                <Button
                  icon={<BellIcon />}
                  type={"primary"}
                  className={styles.btn_actions}
                />
              </div>
            </Popover>
            <Popover
              title={
                <Space
                  direction="vertical"
                  size={"small"}
                  style={{ paddingLeft: 16, paddingRight: 16 }}
                >
                  <Typography.Title level={4} style={{ margin: 0 }}>
                    Calendar
                  </Typography.Title>
                </Space>
              }
              open={isOpenCalender}
              onOpenChange={handleChangeOpenCalender}
              trigger={"click"}
              placement="bottomLeft"
              content={<Calender />}
              className={styles.modal_notifi}
              overlayClassName={styles.modal_notifi}
            >
              <div className={styles.wrapper_btn}>
                <Button
                  icon={<Calendera />}
                  type={"primary"}
                  className={styles.btn_actions}
                  title=" "
                />
              </div>
            </Popover>
          </div>
          <div>
            <p className={styles.day}>Tuesday</p>
            <p className={styles.date}>20/06/2023</p>
          </div>
        </div>
      </Col>
    </Row>
  );
}
