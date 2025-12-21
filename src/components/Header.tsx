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
        <div className="w-390 mx-auto py-2.5 flex justify-between items-center [@media(min-width:1750px)]:w-[1540px] [@media(min-width:1400px)]:w-[1280px] [@media(min-width:1100px)]:w-[1000px] [@media(min-width:800px)]:w-[700px] [@media(max-width:800px)]:w-[500px]">
            <div className="flex [@media(min-width:1750px)]:gap-x-12.5 [@media(min-width:1400px)]:gap-x-[30px] [@media(min-width:1100px)]:gap-x-[15px] [@media(min-width:1750px)]:text-[30px] [@media(min-width:1400px)]:text-[27px] text-black">
                {
                    listElem.map((obj: { id: number, text: string, href: string }, index: number) => {
                        return (
                            <a onClick={handleClick} href={obj.href} className="" key={index}>{obj.text}</a >
                        )
                    })
                }
            </div>
            <div className="flex flex-col items-center">
                <div className="[@media(min-width:1750px)]:text-[40px] [@media(min-width:1400px)]:text-[33px] font-semibold [@media(min-width:1400px)]:text-[28px]" >7 777 777 77</div>
                <div className="[@media(min-width:1750px)]:text-[20px] [@media(min-width:1400px)]:text-[17px] font-extralight [@media(min-width:1400px)]:text-[12px]">24/7</div>
            </div>
        </div>
    )
}