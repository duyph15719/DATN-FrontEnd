import { Link } from "react-router-dom"

interface ButtonProps {
    icon?: any;
    name?: string;
    path?:any;
}

export const LiComponent = (props: ButtonProps) => {
    const { icon, name ,path} = props
    return (
        <li className="min-w-max">
           
        </li>
    )
}