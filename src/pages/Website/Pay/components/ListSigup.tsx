import React from 'react';
import { animated as a, useSpring } from '@react-spring/web'

type Props = {}

const ListSignup = (props: Props) => {
    const Signup = () => {
        return (
            <>
                <div className="cursor-pointer group ">
                    <div>
                        <label htmlFor="first_name" className="font-semibold text-sm uppercase">Tạo mật khẩu của tài khoản *</label>
                        <input type="text" id="first_name" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                    </div>
                </div>
                <hr className=' pt-5' />
            </>
        )
    }
    const [greetingStatus, displayGreeting] = React.useState(false);
    const contentProps = useSpring({
        opacity: greetingStatus ? 1 : 0,
        marginTop: greetingStatus ? 1 : -30
    }) as any;
    return (
        <>
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" onClick={() => displayGreeting((a) => !a)} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                </div>
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Tạo tài khoản mới</label>

            </div>{!greetingStatus ? (
                <div className="Intro"></div>
            ) : (
                <a.div className="box" style={contentProps}>
                    {greetingStatus && Signup()}
                </a.div>
            )}
        </>
    )
}
export default ListSignup