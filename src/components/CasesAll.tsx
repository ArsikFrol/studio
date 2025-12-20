import Image from "next/image"

import cases from '../../public/cases/case.png'
import play from '../../public/cases/play.png'
import microcircuit from '../../public/microcircuit.png'

const listElem = [
    { id: 1, title: 'Бла бла бла', desc: 'Бла бла но поменьше' },
    { id: 2, title: 'Бла бла бла', desc: 'Бла бла но поменьше' },
    { id: 3, title: 'Бла бла бла', desc: 'Бла бла но поменьше' },
    { id: 4, title: 'Бла бла бла', desc: 'Бла бла но поменьше' },
    { id: 5, title: 'Бла бла бла', desc: 'Бла бла но поменьше' }
]

export default function CasesAll() {
    return (
        <div className="w-390 mx-auto py-25 relative ">
            <div id='cases' className='text-[65px] font-medium mb-20'>Кейсы</div>
            <div className='grid grid-cols-2 gap-y-15 relative z-10'>
                {
                    listElem.map((obj: { id: number, title: string, desc: string }, index: number) => {
                        return (
                            <div className="" key={index}>
                                <div className='relative'>
                                    <Image className="" src={cases} alt='' width={700} height={409} draggable='false' />
                                    <Image className="absolute left-[37%] top-[30%]" src={play} alt='' width={141} height={141} draggable='false' />
                                </div>
                                <div className='text-[47px]'>{obj.title}</div>
                                <div className='text-[47px] font-extralight'>{obj.desc}</div>
                            </div>
                        )
                    })
                }
            </div>
            <Image className="absolute -left-127 -bottom-70" src={microcircuit} alt='' width={1083} height={692} draggable='false' />
        </div>
    )
}