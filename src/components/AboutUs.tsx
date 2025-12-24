import Image from "next/image"
import Link from "next/link"

import userFive from '../../public/aboutUs/userFive.png'
import userFour from '../../public/aboutUs/userFour.png'
import userOne from '../../public/aboutUs/userOne.png'
import userThree from '../../public/aboutUs/userThree.png'
import userTwo from '../../public/aboutUs/userTwo.png'
import arrow from '../../public/aboutUs/arrow.png'
import microcircuit from '../../public/microcircuit.png'

export default function AboutUs() {
    return (
        <div className="text-[65px] [@media(max-width:1639px)_and_(min-width:1330px)]:text-[60px] [@media(max-width:1329px)_and_(min-width:1100px)]:text-[50px] [@media(max-width:1099px)_and_(min-width:820px)]:text-[40px] [@media(max-width:819px)_and_(min-width:680px)]:text-[30px] [@media(max-width:680px)_and_(min-width:0px)]:text-[25px] [@media(max-width:1920px)_and_(min-width:1640px)]:w-390 [@media(max-width:1639px)_and_(min-width:1330px)]:w-7xl [@media(max-width:1329px)_and_(min-width:1100px)]:w-5xl [@media(max-width:1099px)_and_(min-width:820px)]:w-192.5 [@media(max-width:819px)_and_(min-width:650px)]:w-160 [@media(max-width:649px)_and_(min-width:0px)]:w-100 mx-auto py-25 [@media(max-width:1099px)_and_(min-width:0px)]:py-12.5 relative">
            <div id='about' className='font-medium mb-5 [@media(max-width:819px)_and_(min-width:0px)]:text-center'>О нас</div>
            <div className='mb-17.5 [@media(max-width:819px)_and_(min-width:650px)]:w-157.5 [@media(max-width:649px)_and_(min-width:0px)]:w-100 [@media(max-width:640px)_and_(min-width:0px)]:mx-auto [@media(max-width:819px)_and_(min-width:0px)]:text-center'>Не просто команда. Ваш персональный отдел веб-разработки.</div>
            <div className='flex items-center justify-between [@media(max-width:819px)_and_(min-width:0px)]:flex-col'>
                <div className='w-191.5 [@media(max-width:819px)_and_(min-width:650px)]:w-160 [@media(max-width:649px)_and_(min-width:0px)]:w-100 mx-auto'>Ваш проект ведет сплоченная команда из 5 профессионалов. Мы не раздуваем штат, а собрали идеальный состав, где нет слабых звеньев. Каждый на своем месте, и все работают ради одной цели — <span className="font-semibold">вашего результата</span>.</div>
                <div className='flex gap-x-10 items-center'>
                    <div className='flex flex-col gap-y-5'>
                        <Link className="[@media(max-width:819px)_and_(min-width:650px)]:w-50 [@media(max-width:649px)_and_(min-width:0px)]:w-30 [@media(max-width:819px)_and_(min-width:650px)]:h-50 [@media(max-width:649px)_and_(min-width:0px)]:h-30" href='/specialist/1'><Image src={userOne} alt='' width={293} height={293} draggable='false' /></Link>
                        <Link className="[@media(max-width:819px)_and_(min-width:650px)]:w-50 [@media(max-width:649px)_and_(min-width:0px)]:w-30 [@media(max-width:819px)_and_(min-width:650px)]:h-50 [@media(max-width:649px)_and_(min-width:0px)]:h-30" href='/specialist/2'><Image src={userTwo} alt='' width={293} height={293} draggable='false' /></Link>
                    </div>
                    <div className='flex flex-col gap-y-5'>
                        <Link className="[@media(max-width:819px)_and_(min-width:650px)]:w-50 [@media(max-width:649px)_and_(min-width:0px)]:w-30 [@media(max-width:819px)_and_(min-width:650px)]:h-50 [@media(max-width:649px)_and_(min-width:0px)]:h-30" href='/specialist/3'><Image src={userThree} alt='' width={293} height={293} draggable='false' /></Link>
                        <Link className="[@media(max-width:819px)_and_(min-width:650px)]:w-50 [@media(max-width:649px)_and_(min-width:0px)]:w-30 [@media(max-width:819px)_and_(min-width:650px)]:h-50 [@media(max-width:649px)_and_(min-width:0px)]:h-30" href='/specialist/4'><Image src={userFour} alt='' width={293} height={293} draggable='false' /></Link>
                        <Link className="[@media(max-width:819px)_and_(min-width:650px)]:w-50 [@media(max-width:649px)_and_(min-width:0px)]:w-30 [@media(max-width:819px)_and_(min-width:650px)]:h-50 [@media(max-width:649px)_and_(min-width:0px)]:h-30" href='/specialist/5'><Image src={userFive} alt='' width={293} height={293} draggable='false' /></Link>
                    </div>
                </div>
            </div>
            <div className='text-[37px] [@media(max-width:1639px)_and_(min-width:1330px)]:text-[32px] [@media(max-width:1329px)_and_(min-width:1100px)]:text-[25px] [@media(max-width:1099px)_and_(min-width:820px)]:text-[20px] [@media(max-width:819px)_and_(min-width:0px)]:text-[15px] flex mt-10 items-center gap-x-25'>
                <div className='font-medium [@media(max-width:819px)_and_(min-width:0px)]:mt-20 [@media(max-width:670px)_and_(min-width:0px)]:pl-8'>Подробнее о специалисте</div>
                {/* <Image className="" src={arrow} alt='' width={712} height={200} draggable='false' /> */}
            </div>
            {/* <Image className="absolute -right-125 rotate-180" src={microcircuit} alt='' width={1083} height={692} draggable='false' /> */}
        </div>
    )
}