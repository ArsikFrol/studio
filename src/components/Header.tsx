'use client'

const listElem = [
    { id: 1, href: '#main', text: 'Главная' },
    { id: 2, href: '#about', text: 'О нас' },
    { id: 3, href: '#cases', text: 'Кейсы' },
    { id: 4, href: '#service', text: 'Услуги' },
    { id: 5, href: '#contacts', text: 'Контакты' }
]

export default function () {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId!);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });

            setTimeout(() => {
                targetElement.focus();
            }, 500);
        }
    };

    return (
        <div className="mx-auto py-2.5 flex justify-between items-center [@media(max-width:1920px)_and_(min-width:1640px)]:w-385 [@media(max-width:1639px)_and_(min-width:1330px)]:w-7xl [@media(max-width:1329px)_and_(min-width:1100px)]:w-5xl [@media(max-width:1099px)_and_(min-width:820px)]:w-192.5 [@media(max-width:819px)_and_(min-width:650px)]:w-160 [@media(max-width:680px)_and_(min-width:0px)]:pl-12.5">
            <div className="[@media(max-width:819px)_and_(min-width:0px)]:hidden flex [@media(max-width:1920px)_and_(min-width:1640px)]:gap-x-12.5 [@media(max-width:1639px)_and_(min-width:1100px)]:gap-x-5 [@media(max-width:1099px)_and_(min-width:820px)]:gap-x-2.5 [@media(max-width:1920px)_and_(min-width:1640px)]:text-[30px] [@media(max-width:1639px)_and_(min-width:1330px)]:text-[27px] [@media(max-width:1329px)_and_(min-width:1100px)]:text-[22px] [@media(max-width:1099px)_and_(min-width:820px)]:text-[15px] text-black">
                {
                    listElem.map((obj: { id: number, text: string, href: string }, index: number) => {
                        return (
                            <a onClick={handleClick} href={obj.href} className="" key={index}>{obj.text}</a >
                        )
                    })
                }
            </div>
            <div className="flex flex-col items-center">
                <div className="[@media(max-width:1920px)_and_(min-width:1640px)]:text-[40px] font-semibold   [@media(max-width:1639px)_and_(min-width:1330px)]:text-[33px] [@media(max-width:1329px)_and_(min-width:1100px)]:text-[28px] [@media(max-width:1099px)_and_(min-width:820px)]:text-[23px]" >7 777 777 77</div>
                <div className="[@media(max-width:1099px)_and_(min-width:0px)]:hidden [@media(max-width:1920px)_and_(min-width:1640px)]:text-[20px] font-extralight [@media(max-width:1639px)_and_(min-width:1330px)]:text-[17px] [@media(max-width:1329px)_and_(min-width:1100px)]:text-[12px]">24/7</div>
            </div>
        </div>
    )
}