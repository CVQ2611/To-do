import { Calendar, CalendarProps, Card, Flex, Space, Typography } from "antd";
import styles from "./calender.module.css";
import DatePicker from "../datePicker";
import dayLocaleData from "dayjs/plugin/localeData";
import dayjs, { Dayjs } from "dayjs";
import Button from "../button";
import { PreIcon, NextIcon } from "@/components/icons/index";

dayjs.extend(dayLocaleData);
interface PropsType extends CalendarProps<any> {}
export default function Calender(props: Readonly<PropsType>) {
  return (
    <div style={{ width: 378 }}>
      <Calendar
        fullscreen={false}
        headerRender={({ value, type, onChange, onTypeChange }) => {
          const start = 1;
          const end = 12;
          let current = value.clone();
          const localeData = value.localeData();
          const months = [];
          for (let i = 0; i < 12; i++) {
            current = current.month(i);
            months.push(localeData.monthsShort(current));
          }
          const year = value.year();
          const month = value.month();
          const handlePre = () => {
            let nowTime: Dayjs = value.clone();
            if (month === start) {
              nowTime = value.clone().year(year - 1);
              nowTime = value.clone().month(end);
            } else {
              nowTime = value.clone().month(month - 1);
            }
            onChange(nowTime);
          };
          const handleNext = () => {
            let nowTime: Dayjs = value.clone();
            if (month === end) {
              nowTime = value.clone().month(start);
              nowTime = value.clone().year(year + 1);
            } else {
              nowTime = value.clone().month(month + 1);
            }
            onChange(nowTime);
          };

          return (
            <div style={{ padding: 8 }}>
              <Space direction="vertical" className={styles.header} >
                <DatePicker disabled value={value} format={"DD-MM-YYYY"} />
                <Flex justify="space-between" align="center">
                  <Button
                    icon={<PreIcon />}
                    className={styles.btn_header}
                    onClick={handlePre}
                  />
                  <Flex align="center" gap={8}>
                    <Typography.Title level={5} className={styles.time_header}>
                      {localeData.monthsShort(value.clone())}
                    </Typography.Title>
                    <Typography.Title level={5} className={styles.time_header}>
                      {year}
                    </Typography.Title>
                  </Flex>
                  <Button
                    icon={<NextIcon />}
                    className={styles.btn_header}
                    onClick={handleNext}
                  />
                </Flex>
              </Space>
            </div>
          );
        }}
      />
    </div>
  );
}
