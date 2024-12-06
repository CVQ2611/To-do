import { DatePickerProps } from "antd/es/date-picker";
import styles from "./datePicker.module.css";
import { DatePicker as DatePickerAntd } from "antd";
interface PropsType extends DatePickerProps {}
export default function DatePicker(props: Readonly<PropsType>) {
  return <DatePickerAntd className={styles.date_picker} {...props} />;
}
