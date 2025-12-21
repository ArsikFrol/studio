import Image, { StaticImageData } from "next/image"

import cases from '../../public/case.png'
import microcircuit from '../../public/microcircuit.png'

const listElem = [
    { id: 1, image: cases },
    { id: 2, image: cases },
    { id: 3, image: cases },
    { id: 4, image: cases },
    { id: 5, image: cases },
    { id: 6, image: cases },
    { id: 7, image: cases }
]

export default function CasesAll() {
    return (
        <div className="w-385 mx-auto py-25 relative ">
            <div id='cases' className='text-[65px] font-medium mb-20'>Кейсы</div>
            <div className='grid grid-cols-3 gap-y-10 relative z-10'>
                {
                    listElem.map((obj: { id: number, image: StaticImageData }, index: number) => {
                        return (
                            <Image className="mx-auto" key={index} src={obj.image} alt='' width={480} height={200} draggable='false' />
                        )
                    })
                }
            </div>
            {/* <Image className="absolute -left-127 -bottom-70" src={microcircuit} alt='' width={1083} height={692} draggable='false' /> */}
        </div>
    )
}