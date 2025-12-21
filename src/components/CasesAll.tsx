import Image, { StaticImageData } from "next/image"

import cases from '../../public/case.png'
import microcircuit from '../../public/microcircuit.png'
import Title from "./UI/Title"

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
        <div className="mx-auto py-25 relative [@media(max-width:1920px)_and_(min-width:1640px)]:w-385 [@media(max-width:1639px)_and_(min-width:1330px)]:w-7xl [@media(max-width:1329px)_and_(min-width:1100px)]:w-5xl [@media(max-width:1099px)_and_(min-width:820px)]:w-192.5 [@media(max-width:819px)_and_(min-width:0px)]:w-160">
            <Title title="Кейсы" id="cases" />
            <div className='grid grid-cols-3 [@media(max-width:1639px)_and_(min-width:1100px)]:grid-cols-2 [@media(max-width:1099px)_and_(min-width:0px)]:grid-cols-1 gap-y-10 relative z-10'>
                {
                    listElem.map((obj: { id: number, image: StaticImageData }, index: number) => {
                        return (
                            <Image className="mx-auto [@media(max-width:1639px)_and_(min-width:1330px)]:w-137.5 [@media(max-width:1100px)_and_(min-width:0px)]:w-100 [@media(max-width:819px)_and_(min-width:0px)]:w-62.5" key={index} src={obj.image} alt='' width={480} height={200} draggable='false' />
                        )
                    })
                }
            </div>
            {/* <Image className="absolute -left-127 -bottom-70" src={microcircuit} alt='' width={1083} height={692} draggable='false' /> */}
        </div>
    )
}