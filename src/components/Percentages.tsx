import Image from "next/image"

import percentages from '../../public/percentages.png'
import microcircuit from '../../public/microcircuit.png'

export default function Percentages() {
    return (
        <div className='w-auto relative'>
            <div className="relative z-10 w-385 py-25 mx-auto flex justify-between items-center">
                <div className=''>
                    <div className='text-[65px] mb-7.5'>Разработка сайтов</div>
                    <div className='text-[65px] mb-20 font-extralight w-195 leading-17.5'>Создадим не просто сайт, а лицо вашего бизнеса </div>
                    <div className='bg-(--bg) text-[32px] rounded-4xl w-100 h-25 leading-25 text-center cursor-pointer'>Обговорить заказ</div>
                </div>
                <Image src={percentages} alt='' width={662} height={582} draggable='false' />
            </div>
            <Image className="absolute -left-3.75 top-112.5" src={microcircuit} alt='' width={1083} height={692} draggable='false' />
        </div>
    )
}