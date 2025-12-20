const listElem = [
    { id: 1, title: 'Landing page', descOne: 'Разработка лендинга - ', descTwo: 'подойдет для продвижения вашиг услуг или товара', price: 40000 },
    { id: 2, title: 'Корпоративный сайт', descOne: 'Разработка корпоративного сайта - ', descTwo: 'это комплексное решение подойдет для деловых услуг и привлечения клиентов', price: 40000 },
    { id: 3, title: 'Каталог', descOne: 'Разработка каталога - ', descTwo: 'Если хотите представить свои товары в максимально презентабельном виде, то эта услуга для вас !', price: 40000 },
    { id: 4, title: 'Редизайн', descOne: 'Обновление вашего дизайна -', descTwo: ' хотите освежить свой дизайн ? Тогда это предложение для вас !', price: 40000 },
    { id: 5, title: 'Каталог', descOne: 'Разработка лендинга - ', descTwo: 'подойдет для продвижения вашиг услуг или товара', price: 40000 },
    { id: 6, title: 'Редизайн', descOne: 'Разработка лендинга - ', descTwo: 'подойдет для продвижения вашиг услуг или товара', price: 40000 }
]

export default function Services() {
    function formatNumberWithSpaceFromRight(num: number) {
        const str = String(num);
        if (str.length <= 3) return str;
        return str.slice(0, -3) + ' ' + str.slice(-3);
    }

    return (
        <div className="relative z-10 w-390 mx-auto py-25">
            <div id='service' className='text-[64px] mb-12.5'>Услуги</div>
            <div className='grid grid-cols-3 gap-y-17.5'>
                {
                    listElem.map((obj: { id: number, title: string, descOne: string, descTwo: string, price: number }, index: number) => {
                        return (
                            <div className="relative bg-[rgba(217,217,217,1)] h-85 p-2.5 rounded-2xl w-115" key={index}>
                                <div className='text-[35px] mb-2.5'>{obj.title}</div>
                                <div className='text-[31px] font-light'><span className="font-medium">{obj.descOne}</span>{obj.descTwo}</div>
                                <div className='absolute right-0 bottom-0 text-[31px] font-medium w-40 text-center bg-white rounded-tl-2xl'>от {formatNumberWithSpaceFromRight(obj.price)}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}