'use client'

import React from "react"
import Image from "next/image"

import microcircuit from '../../public/microcircuit.png'

const listElem = [
    { id: 1, title: 'Анализ рынка', desc: 'Проводим анализ рынка, собираем данные о целевой  аудитории' },
    { id: 2, title: 'Разработка дизайна', desc: 'Проводим анализ рынка, собираем данные о целевой  аудитории' },
    { id: 3, title: 'Верстка', desc: 'Проводим анализ рынка, собираем данные о целевой  аудитории' },
    { id: 4, title: 'Запуск сайта', desc: 'Проводим анализ рынка, собираем данные о целевой  аудитории' }
]

export default function Stages() {

    const [activeOne, setActiveOne] = React.useState(false)
    const [activeTwo, setActiveTwo] = React.useState(false)
    const [activeThree, setActiveThree] = React.useState(false)
    const [activeFour, setActiveFour] = React.useState(false)

    const clickPlus = (id: number) => {
        if (id == 1) setActiveOne(!activeOne)
        else if (id == 2) setActiveTwo(!activeTwo)
        else if (id == 3) setActiveThree(!activeThree)
        else if (id == 4) setActiveFour(!activeFour)
    }

    return (
        <div className='relative'>
            <div className="w-390 mx-auto pt-87.5 pb-25">
                <div className='text-[65px] mb-12.5'>Этапы создания</div>
                <div className='grid grid-cols-2 grid-rows-[auto_auto] gap-12.5 w-250'>
                    <div style={activeOne ? { height: `${250}px` } : { height: `${100}px` }} className="relative bg-[rgba(217,217,217,1)] w-112.5 rounded-2xl p-5">
                        <div className="text-[31px] mb-5">{listElem[0].title}</div>
                        <div style={activeOne ? {} : { display: 'none' }} className='text-[31px] w-100'>{listElem[0].desc}</div>
                        <div style={activeOne ? { rotate: '45deg' } : {}} onClick={() => clickPlus(listElem[0].id)} className='transition-all absolute right-3.75 top-3.25 w-15 text-center text-[40px] bg-white rounded-4xl cursor-pointer'>+</div>
                    </div>
                    <div style={activeTwo ? { height: `${250}px` } : { height: `${100}px` }} className="relative bg-[rgba(217,217,217,1)] w-112.5 rounded-2xl p-5">
                        <div className="text-[31px] mb-5">{listElem[1].title}</div>
                        <div style={activeTwo ? {} : { display: 'none' }} className='text-[31px] w-100'>{listElem[1].desc}</div>
                        <div style={activeTwo ? { rotate: '45deg' } : {}} onClick={() => clickPlus(listElem[1].id)} className='transition-all absolute right-3.75 top-3.25 w-15 text-center text-[40px] bg-white rounded-4xl cursor-pointer'>+</div>
                    </div>
                    <div style={activeThree ? { height: `${250}px` } : { height: `${100}px` }} className="relative bg-[rgba(217,217,217,1)] w-112.5 rounded-2xl p-5">
                        <div className="text-[31px] mb-5">{listElem[2].title}</div>
                        <div style={activeThree ? {} : { display: 'none' }} className='text-[31px] w-100'>{listElem[2].desc}</div>
                        <div style={activeThree ? { rotate: '45deg' } : {}} onClick={() => clickPlus(listElem[2].id)} className='transition-all absolute right-3.75 top-3.25 w-15 text-center text-[40px] bg-white rounded-4xl cursor-pointer'>+</div>
                    </div>
                    <div style={activeFour ? { height: `${250}px` } : { height: `${100}px` }} className="relative bg-[rgba(217,217,217,1)] w-112.5 rounded-2xl p-5">
                        <div className="text-[31px] mb-5">{listElem[3].title}</div>
                        <div style={activeFour ? {} : { display: 'none' }} className='text-[31px] w-100'>{listElem[3].desc}</div>
                        <div style={activeFour ? { rotate: '45deg' } : {}} onClick={() => clickPlus(listElem[3].id)} className='transition-all absolute right-3.75 top-3.25 w-15 text-center text-[40px] bg-white rounded-4xl cursor-pointer'>+</div>
                    </div>
                </div>
            </div>
            {/* <Image style={{ height: '692px' }} className="absolute rotate-180 -right-87.5 top-100" src={microcircuit} alt='' width={1083} height={692} draggable='false' /> */}
        </div>
    )
}