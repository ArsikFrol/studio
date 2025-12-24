import Image from "next/image"

import AnimationComponent from "./AnimationComponent/AnimationComponent"

import percentages from '../../public/percentages.png'
import microcircuit from '../../public/microcircuit.png'
import Container from "./UI/Container"

export default function Percentages() {
    return (
        <Container>
            <div className="relative z-10 flex justify-between items-center [@media(max-width:1329px)_and_(min-width:1100px)]:flex-col">
                <div className=''>
                    <div className='text-[65px] mb-7.5 
                        [@media(max-width:1329px)_and_(min-width:0px)]:text-center 
                        [@media(max-width:1329px)_and_(min-width:820px)]:text-[60px]
                        [@media(max-width:819px)_and_(min-width:650px)]:text-[50px] 
                        [@media(max-width:649px)_and_(min-width:0px)]:text-[40px]'>Разработка сайтов</div>
                    <div className='text-[65px] mb-20 font-extralight w-195 leading-17.5 
                        [@media(max-width:1329px)_and_(min-width:0px)]:text-center 
                        [@media(max-width:1329px)_and_(min-width:820px)]:text-[60px]
                        [@media(max-width:819px)_and_(min-width:650px)]:text-[50px]
                        [@media(max-width:819px)_and_(min-width:650px)]:w-160
                        [@media(max-width:819px)_and_(min-width:650px)]:mx-auto 
                        [@media(max-width:649px)_and_(min-width:0px)]:w-100  
                        [@media(max-width:649px)_and_(min-width:0px)]:text-[40px]
                        [@media(max-width:819px)_and_(min-width:0px)]:mx-auto'>Создадим не просто сайт, а лицо вашего бизнеса </div>
                    <div className='bg-(--bg) text-[32px] rounded-4xl w-100 h-25 leading-25 text-center cursor-pointer 
                        [@media(max-width:1329px)_and_(min-width:0px)]:mx-auto
                        [@media(max-width:819px)_and_(min-width:650px)]:text-[25px]
                        [@media(max-width:819px)_and_(min-width:650px)]:w-75 
                        [@media(max-width:649px)_and_(min-width:0px)]:w-50 
                        [@media(max-width:649px)_and_(min-width:0px)]:text-[20px] 
                        [@media(max-width:649px)_and_(min-width:0px)]:h-17.5 
                        [@media(max-width:649px)_and_(min-width:0px)]:leading-17.5'>Обговорить заказ</div>
                </div>
                <AnimationComponent />
            </div>
            {/* <Image className="absolute -left-3.75 top-112.5" src={microcircuit} alt='' width={1083} height={692} draggable='false' /> */}
        </Container>
    )
}