'use client'

import Image, { StaticImageData } from "next/image"
import React from "react"

import Container from "./UI/Container"
import Title from "./UI/Title"

import cases from '../../public/case.png'

const listElem = [
    { id: 1, image: cases },
    { id: 2, image: cases },
    { id: 3, image: cases },
    { id: 4, image: cases },
    { id: 5, image: cases },
    { id: 6, image: cases },
    { id: 7, image: cases }
]

type Props = {
    listCases: { id: number, image: StaticImageData }[],
    showCount: number,
    showUser?: boolean,
    notPadding?: boolean
}

export default function Cases(props: Props) {
    const [showAll, setShowAll] = React.useState(false)
    const [screenWidth, setScreenWidth] = React.useState<number | null>(null);

    React.useEffect(() => {
        setScreenWidth(window.innerWidth);

        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (
        <Container>
            <div style={props.showUser ? { position: 'relative' } : {}}>
                <Title title="Кейсы" id="cases" notPadding={props.notPadding} />
                <div style={props.listCases ? { position: 'relative', zIndex: '10' } : {}} className='grid 
                    grid-cols-3 
                    [@media(max-width:1639px)_and_(min-width:1100px)]:grid-cols-2 
                    [@media(max-width:1099px)_and_(min-width:0px)]:grid-cols-1 gap-y-10'>
                    {
                        props.listCases.slice(0, showAll ? props.listCases.length : props.showCount).map((obj: { id: number, image: StaticImageData }, index: number) => {
                            return (
                                <Image className="mx-auto [@media(max-width:1639px)_and_(min-width:1330px)]:w-137.5 [@media(max-width:1100px)_and_(min-width:0px)]:w-100 [@media(max-width:819px)_and_(min-width:0px)]:w-62.5" key={index} src={obj.image} alt='' width={480} height={200} draggable='false' />
                            )
                        })
                    }
                </div>
                {/* <Image className="absolute -left-127 -bottom-70" src={microcircuit} alt='' width={1083} height={692} draggable='false' /> */}
                <div onClick={() => setShowAll(!showAll)} style={props.showUser ? {} : { display: 'none' }}
                    className='text-[37px] text-center font-extralight mt-5 cursor-pointer
                        [@media(max-width:819px)_and_(min-width:0px)]:text-[25px]'>Показать все кейсы</div>
            </div>
        </Container>
    )
}