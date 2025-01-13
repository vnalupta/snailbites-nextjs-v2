import Color from "@/styles/color.module.scss";
import styles from "./button.module.scss"

/**
 * Button
 * @param prop
 */
const Button: React.FC<{
    children?: React.ReactNode,        
    onClick?: () => void
}> = ({ children, onClick }) => {

    return (
        <button
            type="button"
            className={styles.base}            
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
