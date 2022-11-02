import { IconRoud } from "../../../components/Icons/IconRoud";


interface ButtonProps {
    children?: any;
}


export const THComponent = (props: ButtonProps) => {
    const { children } = props
    return (
        <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
            <div className="flex items-center justify-center">
                {children}
                <IconRoud />
            </div>
        </th>
    )
}