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
        <div className="w-390 mx-auto py-25 relative">
            <div id='about' className='text-[65px] font-medium mb-5'>О нас</div>
            <div className='text-[65px] w-375 mb-17.5'>Не просто команда. Ваш персональный отдел веб-разработки.</div>
            <div className='flex justify-between items-center'>
                <div className='text-[65px] w-191.5'>Ваш проект ведет сплоченная команда из 5 профессионалов. Мы не раздуваем штат, а собрали идеальный состав, где нет слабых звеньев. Каждый на своем месте, и все работают ради одной цели — <span className="font-semibold">вашего результата</span>.</div>
                <div className='flex gap-x-10 items-center'>
                    <div className='flex flex-col gap-y-5'>
                        <Link href='/specialist/1'><Image src={userOne} alt='' width={293} height={293} draggable='false' /></Link>
                        <Link href='/specialist/2'><Image src={userTwo} alt='' width={293} height={293} draggable='false' /></Link>
                    </div>
                    <div className='flex flex-col gap-y-5'>
                        <Link href='/specialist/3'><Image src={userThree} alt='' width={293} height={293} draggable='false' /></Link>
                        <Link href='/specialist/4'><Image src={userFour} alt='' width={293} height={293} draggable='false' /></Link>
                        <Link href='/specialist/5'><Image src={userFive} alt='' width={293} height={293} draggable='false' /></Link>
                    </div>
                </div>
            </div>
            <div className='flex mt-10 items-center gap-x-25'>
                <div className='font-medium text-[37px]'>Подробнее о специалисте</div>
                <Image className="" src={arrow} alt='' width={712} height={200} draggable='false' />
            </div>
            <Image className="absolute -right-125 rotate-180" src={microcircuit} alt='' width={1083} height={692} draggable='false' />
        </div>
    )
}