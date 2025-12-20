import Image from "next/image"

import microcircuit from '../../public/microcircuit.png'

const listElem = [
    { id: 1, text: 'Название услуги' },
    { id: 2, text: 'Название услуги' },
    { id: 3, text: 'Название услуги' },
    { id: 4, text: 'Название услуги' }
]

export default function DiscussProject() {
    return (
        <div className="relative">
            <div className='relative z-10 w-390 mx-auto py-25'>
                <div className='text-[65px] font-medium mb-12.5'>Готовы доверить свой проект команде профессионалов? </div>
                <div className='text-[65px] font-semibold mb-17.5'>Давайте обсудим ваш проект.</div>
                <div className='w-350 mx-auto p-10 bg-[rgba(217,217,217,1)] rounded-2xl flex flex-col gap-y-7.5'>
                    {
                        listElem.map((obj: { id: number, text: string }, index: number) => {
                            return (
                                <div className="bg-white rounded-2xl text-[38px] p-2.5 w-185" key={index}>{obj.text}</div>
                            )
                        })
                    }
                </div>
            </div>
            <Image className="absolute -top-50 -left-175" src={microcircuit} alt='' width={1083} height={692} draggable='false' />
            <Image className="absolute top-105 right-0 rotate-180" src={microcircuit} alt='' width={1083} height={692} draggable='false' />
        </div>
    )
}