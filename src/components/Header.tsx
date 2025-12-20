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

            // Фокус для клавиатурной навигации
            setTimeout(() => {
                targetElement.focus();
            }, 500);
        }
    };

    return (
        <div className="w-390 mx-auto py-2.5 flex justify-between items-center">
            <div className="flex gap-x-12.5 text-[30px] text-black">
                {
                    listElem.map((obj: { id: number, text: string, href: string }, index: number) => {
                        return (
                            <a onClick={handleClick} href={obj.href} className="" key={index}>{obj.text}</a >
                        )
                    })
                }
            </div>
            <div className="flex flex-col items-center gap-y-1.25">
                <div className="text-[40px] font-semibold" >7 777 777 77</div>
                <div className="text-[20px] font-extralight">24/7</div>
            </div>
        </div>
    )
}