import Image from "next/image"

import user from '../../public/aboutUs/userFour.png'

export default function User() {
    return (
        <div className="mx-auto flex
                [@media(max-width:1099px)_and_(min-width:0px)]:flex-col 
                [@media(max-width:1099px)_and_(min-width:0px)]:gap-y-12.5 
                [@media(max-width:1099px)_and_(min-width:0px)]:items-center">
            <div className='flex items-center gap-x-10'>
                <Image className="
                    [@media(max-width:819px)_and_(min-width:650px)]:w-50
                    [@media(max-width:819px)_and_(min-width:650px)]:h-50"
                    src={user} alt='' width={300} height={300} draggable='false' />
                <div className=''>
                    <div className='text-[92px] 
                        [@media(max-width:1639px)_and_(min-width:1330px)]:text-[75px] 
                        [@media(max-width:1329px)_and_(min-width:1100px)]:text-[65px] 
                        [@media(max-width:819px)_and_(min-width:650px)]:text-[50px] 
                        [@media(max-width:649px)_and_(min-width:0px)]:text-[40px]
                        font-medium'>Анна</div>
                    <div className='text-[92px] 
                        [@media(max-width:1639px)_and_(min-width:1330px)]:text-[75px] 
                        [@media(max-width:1329px)_and_(min-width:1100px)]:text-[65px]
                        [@media(max-width:819px)_and_(min-width:650px)]:text-[50px] 
                        [@media(max-width:649px)_and_(min-width:0px)]:text-[45px]
                        font-extralight'>Designer</div>
                    <div className='text-[65px] 
                        [@media(max-width:1639px)_and_(min-width:1330px)]:text-[50px] 
                        [@media(max-width:1329px)_and_(min-width:1100px)]:text-[40px] 
                        [@media(max-width:819px)_and_(min-width:650px)]:text-[30px] 
                        [@media(max-width:649px)_and_(min-width:0px)]:text-[30px]
                        font-extralight'>Опыт 8 лет</div>
                </div>
            </div>
            <div className='font-medium ml-auto w-130
                [@media(max-width:1639px)_and_(min-width:1330px)]:w-100 
                [@media(max-width:1329px)_and_(min-width:1100px)]:w-75 
                [@media(max-width:1099px)_and_(min-width:0px)]:m-0 
                [@media(max-width:1099px)_and_(min-width:820px)]:text-center 
                [@media(max-width:1099px)_and_(min-width:820px)]:font-normal 
                [@media(max-width:649px)_and_(min-width:0px)]:w-100'>
                <div className='text-[66px]
                    [@media(max-width:1639px)_and_(min-width:1330px)]:text-[50px] 
                    [@media(max-width:1329px)_and_(min-width:1100px)]:text-[40px] 
                    [@media(max-width:1099px)_and_(min-width:820px)]:text-[50px]
                    [@media(max-width:819px)_and_(min-width:0px)]:text-[40px]
                    [@media(max-width:819px)_and_(min-width:0px)]:text-center'>О себе</div>
                <div className='text-[29px]
                    [@media(max-width:1639px)_and_(min-width:1100px)]:text-[20px] 
                    [@media(max-width:1329px)_and_(min-width:1100px)]:text-[20px] 
                    [@media(max-width:1099px)_and_(min-width:0px)]:border-2 
                    [@media(max-width:1099px)_and_(min-width:0px)]:rounded-2xl 
                    [@media(max-width:1099px)_and_(min-width:0px)]:p-2.5
                    [@media(max-width:819px)_and_(min-width:650px)]:text-[17px] 
                    [@media(max-width:649px)_and_(min-width:0px)]:text-[20px]'>
                    <div className=''>Привет ! Я Анна, работаю в сфере веб дизайна уже 8 лет.</div>
                    <div className=''>Я превращаю ваши бизнес-цели в визуальный опыт, который цепляет клиентов и ведет их к действию. Мой дизайн — это не украшение, а точный инструмент для увеличения конверсии и узнаваемости вашего бренда.</div>
                </div>
            </div>
        </div>
    )
}