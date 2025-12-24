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
        <div className="relative [@media(max-width:649px)_and_(min-width:0px)]:w-100 mx-auto">
            <div className='relative z-10 [@media(max-width:1920px)_and_(min-width:1640px)]:w-390 [@media(max-width:1639px)_and_(min-width:1330px)]:w-7xl [@media(max-width:1329px)_and_(min-width:1100px)]:w-5xl [@media(max-width:1099px)_and_(min-width:820px)]:w-192.5 [@media(max-width:819px)_and_(min-width:650px)]:w-160 [@media(max-width:649px)_and_(min-width:0px)]:w-100 mx-auto py-25 [@media(max-width:1099px)_and_(min-width:0px)]:py-12.5 '>
                <div className='text-[65px] [@media(max-width:1639px)_and_(min-width:1330px)]:text-[60px] [@media(max-width:1329px)_and_(min-width:1100px)]:text-[50px] [@media(max-width:1099px)_and_(min-width:820px)]:text-[40px] [@media(max-width:819px)_and_(min-width:659px)]:text-[30px] [@media(max-width:659px)_and_(min-width:0px)]:text-[20px] font-medium mb-12.5   [@media(max-width:1099px)_and_(min-width:0px)]:mb-7.5'>Готовы доверить свой проект команде профессионалов? </div>
                <div className='text-[65px] [@media(max-width:1639px)_and_(min-width:1330px)]:text-[60px] [@media(max-width:1329px)_and_(min-width:1100px)]:text-[50px] [@media(max-width:1099px)_and_(min-width:820px)]:text-[40px] [@media(max-width:819px)_and_(min-width:659px)]:text-[30px] [@media(max-width:659px)_and_(min-width:0px)]:text-[20px] font-semibold mb-17.5 [@media(max-width:1099px)_and_(min-width:0px)]:mb-7.5'>Давайте обсудим ваш проект.</div>
                <div className='mx-auto p-10 bg-[rgba(217,217,217,1)] rounded-2xl flex flex-col gap-y-7.5 [@media(max-width:649px)_and_(min-width:0px)]:w-100'>
                    {
                        listElem.map((obj: { id: number, text: string }, index: number) => {
                            return (
                                <div className="bg-white rounded-2xl text-[38px] [@media(max-width:1639px)_and_(min-width:1330px)]:text-[33px] [@media(max-width:1099px)_and_(min-width:820px)]:text-[20px] [@media(max-width:819px)_and_(min-width:0px)]:text-[15px] p-2.5 w-185 [@media(max-width:1639px)_and_(min-width:1330px)]:w-162.5 [@media(max-width:1329px)_and_(min-width:1100px)]:w-[500xp] [@media(max-width:1099px)_and_(min-width:820px)]:w-87.5 [@media(max-width:819px)_and_(min-width:0px)]:w-62.5" key={index}>{obj.text}</div>
                            )
                        })
                    }
                </div>
            </div>
            {/* <Image className="absolute -top-50 -left-175" src={microcircuit} alt='' width={1083} height={692} draggable='false' />
            <Image className="absolute top-105 right-0 rotate-180" src={microcircuit} alt='' width={1083} height={692} draggable='false' /> */}
        </div>
    )
}