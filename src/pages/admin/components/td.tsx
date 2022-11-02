interface ButtonProps {
    children?: any;
}


export const TDComponent = (props: ButtonProps) => {
    const { children } = props
    return (
        <td className="p-2 border-r">
            {children}
        </td>
    )
}