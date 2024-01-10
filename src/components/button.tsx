import Color from "@/styles/color.module.scss";

/**
 * Button
 * @param prop
 */
const Button: React.FC<{
    children?: React.ReactNode,
    flavor?: 'default' | 'link',
    selected?: boolean,
    onClick?: () => void
}> = ({ children, flavor, selected, onClick }) => {

    const defaultStyles = {
        display: 'block',
        border: 'none',
        boxSizing: 'border-box' as any,
        textDecoration: 'none',
        padding: '10px 25px',
        cursor: 'pointer',
        textTransform: 'uppercase' as any,
        letterSpacing: '1px',
        borderRadius: '6px',
        transition: '100ms ease-in opacity',
        background: `${Color.neon}`,
        color: `${Color.sesame}`,
        '&:hover': {
            opacity: 0.85
        }
    }

    const linkStyles = {
        textAlign: 'initial' as any,
        background: 'inherit',
        border: 'none',
        textDecoration: 'none',
        transition: 'text-shadow 300ms ease-out, color 250ms ease-out',
        color: 'primary',

        '&:hover, &:focus': {
            textShadow: '1px 1px 1px rgb(0,0,0,.5)',
            color: `${Color.eggshell}`,
            cursor: 'pointer',
        },
        '&:focus': {
            outline: 'none',
        },
        ...(selected && { color: `${Color.eggshell}` })
    }

    let styles = flavor === 'link' ? linkStyles : defaultStyles;

    return (
        <button
            type="button"
            style={styles}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
