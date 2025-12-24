import Title from "./UI/Title"
import Container from "./UI/Container"

import Image from "next/image"

import microcircuit from '../../public/microcircuit.png'

const listElem = [
    { id: 1, title: 'Анализ рынка', desc: 'Проводим анализ рынка, собираем данные о целевой  аудитории' },
    { id: 2, title: 'Разработка дизайна', desc: 'Проводим анализ рынка, собираем данные о целевой  аудитории' },
    { id: 3, title: 'Верстка', desc: 'Проводим анализ рынка, собираем данные о целевой  аудитории' },
    { id: 4, title: 'Запуск сайта', desc: 'Проводим анализ рынка, собираем данные о целевой  аудитории' }
]

export default function Stages() {
    return (
        <Container>
            <div className="">
                <Title title="Этапы создания" />
                <div className='grid grid-cols-2 [@media(max-width:1099px)_and_(min-width:0px)]:grid-cols-[auto] grid-rows-[auto_auto] gap-12.5 w-250 [@media(max-width:1099px)_and_(min-width:820px)]:w-192.5 [@media(max-width:819px)_and_(min-width:650px)]:w-160 [@media(max-width:649px)_and_(min-width:0px)]:w-100 mx-auto'>
                    {
                        listElem.map((obj: { id: number, title: string, desc: string }, index: number) => {
                            return (
                                <div className="relative border-[3px] border-[rgba(103,103,103,1)] rounded-3xl p-2.5 text-[31px] [@media(max-width:1329px)_and_(min-width:1100px)]:text-[25px] [@media(max-width:1099px)_and_(min-width:820px)]:text-[20px] [@media(max-width:819px)_and_(min-width:0px)]:text-[17px] font-light [@media(max-width:819px)_and_(min-width:0px)]:w-100 [@media(max-width:819px)_and_(min-width:0px)]:mx-auto" key={index}>
                                    <div className='mb-3.75 font-medium'>{obj.title}</div>
                                    <div className=''>{obj.desc}</div>
                                    <div className='absolute right-2.5 top-2.5 text-[33px]  [@media(max-width:819px)_and_(min-width:0px)]:text-[25px]'>0{obj.id}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* <Image style={{ height: '692px' }} className="absolute rotate-180 -right-87.5 top-100" src={microcircuit} alt='' width={1083} height={692} draggable='false' /> */}

        </Container>
    )
}