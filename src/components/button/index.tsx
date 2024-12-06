import { Button as ButtonAntd, ButtonProps } from "antd";
import styles from "./button.module.css";

interface PropsType extends ButtonProps {
    title?: string,
} ;

export default function Button({ title, ...props }: Readonly<PropsType>) {
    return (
        <ButtonAntd
            className={styles.btn}
            title={title || ""}
            {...props}
        />
    )
}