import Image from "next/image"

import user from '../../public/aboutUs/userFour.png'

export default function User() {
    return (
        <div className="w-390 mx-auto py-25 flex">
            <Image style={{ width: '300px', height: '300px' }} src={user} alt='' width={300} height={300} draggable='false' />
            <div className='ml-12.5'>
                <div className='text-[92px] font-medium'>Анна</div>
                <div className='text-[92px] font-extralight'>Designer</div>
                <div className='text-[65px] font-extralight'>Опыт 8 лет</div>
            </div>
            <div className='font-medium ml-auto w-130'>
                <div className='text-[66px]'>О себе</div>
                <div className='text-[29px]'>Привет ! Я Анна, работаю в сфере веб дизайна уже 8 лет.</div>
                <div className='text-[29px]'>Я превращаю ваши бизнес-цели в визуальный опыт, который цепляет клиентов и ведет их к действию. Мой дизайн — это не украшение, а точный инструмент для увеличения конверсии и узнаваемости вашего бренда.</div>
            </div>
        </div>
    )
}