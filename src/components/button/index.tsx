import { Button as ButtonAntd, ButtonProps } from "antd";
import styles from "./button.module.css";

interface PropsType extends ButtonProps {}

export default function Button({ ...props }: Readonly<PropsType>) {
  return <ButtonAntd className={styles.btn} {...props} />;
}
