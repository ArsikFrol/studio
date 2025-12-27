'use client'
import { useRouter } from 'next/navigation';

import cases from '../../../../public/case.png'

import Cases from "@/components/Cases";
import User from "@/components/User";
import Container from '@/components/UI/Container';

const listCases = [
    { id: 1, image: cases },
    { id: 2, image: cases },
    { id: 3, image: cases },
    { id: 4, image: cases },
    { id: 5, image: cases },
    { id: 6, image: cases },
    { id: 7, image: cases }
]

export default function specialist() {
    const router = useRouter();

    return (
        <div className='relative'>
            <Container>
                <>
                    <User />
                    <Cases listCases={listCases} showCount={3} showUser notPaddingBigSizes={true} />
                    <div onClick={() => router.back()} className='cursor-pointer absolute left-2.5 top-0 text-[49px] font-extralight
                        [@media(max-width:1329px)_and_(min-width:820px)]:text-[40px] 
                        [@media(max-width:819px)_and_(min-width:650px)]:text-[35px] 
                        [@media(max-width:659px)_and_(min-width:430px)]:text-[25px] 
                        [@media(max-width:429px)_and_(min-width:0px)]:text-[20px]'>Назад</div>
                </>
            </Container>
        </div>
    )
}