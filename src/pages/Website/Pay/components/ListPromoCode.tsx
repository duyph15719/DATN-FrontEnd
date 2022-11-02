import React from 'react';
import { animated as a, useSpring } from '@react-spring/web'

type Props = {}

const ListPromoCode = (props: Props) => {
    const PromoCode = () => {
        return (
            
            <div className="cursor-pointer group border-dashed border-2 border-red-600 ">
                <p className='ml-10 my-2' >Nếu bạn có mã giảm giá, vui lòng điền vào phía bên dưới.</p>
                <div className="grid gap-100 mb-6 lg:grid-cols-2 ml-10">
                    <input type="text" id="first_name" className="bg-white border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mã ưu đãi" required />
                    <button className="bg-red-600 w-1/4 hover:bg-red-700 text-white font-semibold  px-5">
                    Áp Dụng
                    </button>
                </div>
            </div>

        )
    }
    const [greetingStatus, displayGreeting] = React.useState(false);
    const contentProps = useSpring({
        opacity: greetingStatus ? 1 : 0,
        marginTop: greetingStatus ? 1 : -30
    })  as any;
    return (
        <div className=''>
            <label className="inline-flex items-center">
                <button name='login' onClick={() => displayGreeting((a) => !a)} >Bạn có mã ưu đãi? Ấn vào đây để nhập mã</button>
            </label>
            {!greetingStatus ? (
                <div className="Intro"></div>
            ) : (
                <a.div className="box" style={contentProps}>
                    {greetingStatus && PromoCode()}
                </a.div>
            )}
        </div>
    )
}

export default ListPromoCode