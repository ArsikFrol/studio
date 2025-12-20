import Image, { StaticImageData } from 'next/image'

import cases from '../../public/cases/case.png'

const listElem = [
    { id: 1, image: cases },
    { id: 2, image: cases },
    { id: 3, image: cases },
    { id: 4, image: cases },
    { id: 5, image: cases },
    { id: 6, image: cases }
]

export default function CasesUser() {
    return (
        <div className="w-390 mx-auto pb-25">
            <div className='text-[66px] font-medium mb-7.5'>Кейсы</div>
            <div className='flex justify-between mb-5'>
                {
                    listElem.slice(0, 3).map((obj: { id: number, image: StaticImageData }, index: number) => {
                        return (
                            <Image key={index} src={obj.image} alt='' width={511} height={294} draggable='false' />
                        )
                    })
                }
            </div>
            <div className='text-center text-[37px] font-extralight cursor-pointer'>Показать все кейсы</div>
        </div>
    )
}