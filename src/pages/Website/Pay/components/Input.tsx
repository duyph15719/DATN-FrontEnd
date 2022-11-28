import clsx from 'clsx';

interface InputProps {
    handleClick?: () => void;
    type: "text" | "number" | "submit" | "email" | "password";
    children: any;
    customStyle?: string;
    id?: string;
    placeholder?: string
}


export const InputComponent = (props: InputProps) => {
    const { children, handleClick, customStyle, placeholder, type, id } = props
    return (
        <>
            
        </>
    )
}