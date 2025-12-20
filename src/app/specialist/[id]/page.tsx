'use client'
import { useRouter } from 'next/navigation';

import CasesUser from "@/components/CasesUser";
import User from "@/components/User";

export default function specialist() {
    const router = useRouter();

    return (
        <div className="relative">
            <User />
            <CasesUser />
            <div onClick={() => router.back()} className='cursor-pointer absolute left-2.5 top-0 text-[49px] font-extralight'>Назад</div>
        </div>
    )
}