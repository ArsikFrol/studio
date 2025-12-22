import Title from "./UI/Title";

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
        <div className="relative z-10 [@media(max-width:1920px)_and_(min-width:1640px)]:w-390 [@media(max-width:1639px)_and_(min-width:1330px)]:w-7xl [@media(max-width:1329px)_and_(min-width:1100px)]:w-5xl [@media(max-width:1099px)_and_(min-width:820px)]:w-192.5 [@media(max-width:819px)_and_(min-width:0px)]:w-160 mx-auto py-25 [@media(max-width:1099px)_and_(min-width:0px)]:py-12.5">
            <Title title="Услуги" id="service" />
            <div className='grid grid-cols-3  [@media(max-width:819px)_and_(min-width:680px)]:grid-cols-2 [@media(max-width:680px)_and_(min-width:0px)]:grid-cols-1 gap-y-17.5 [@media(max-width:1329px)_and_(min-width:1100px)]:gap-y-7.5 [@media(max-width:680px)_and_(min-width:0px)]:gap-y-5'>
                {
                    listElem.map((obj: { id: number, title: string, descOne: string, descTwo: string, price: number }, index: number) => {
                        return (
                            <div className="relative bg-[rgba(217,217,217,1)]  [@media(max-width:1920px)_and_(min-width:1330px)]:h-85 [@media(max-width:1329px)_and_(min-width:1100px)]:h-62.5 [@media(max-width:1099px)_and_(min-width:820px)]:h-36.25 [@media(max-width:819px)_and_(min-width:0px)]:h-41.25 p-2.5 rounded-2xl [@media(max-width:1920px)_and_(min-width:1640px)]:w-115 [@media(max-width:1639px)_and_(min-width:1330px)]:w-100 [@media(max-width:1329px)_and_(min-width:1100px)]:w-[320px] [@media(max-width:1099px)_and_(min-width:820px)]:w-62.5 [@media(max-width:819px)_and_(min-width:0px)]:w-75 mx-auto" key={index}>
                                <div className='[@media(max-width:1920px)_and_(min-width:1640px)]:text-[35px] [@media(max-width:1639px)_and_(min-width:1330px)]:text-[30px] [@media(max-width:1329px)_and_(min-width:1100px)]:text-[23px] [@media(max-width:1099px)_and_(min-width:820px)]:text-[15px] mb-2.5'>{obj.title}</div>
                                <div className='[@media(max-width:1920px)_and_(min-width:1640px)]:text-[31px] [@media(max-width:1639px)_and_(min-width:1330px)]:text-[29px] [@media(max-width:1329px)_and_(min-width:1100px)]:text-[22px] [@media(max-width:1099px)_and_(min-width:820px)]:text-[14px] font-light'><span className="font-medium">{obj.descOne}</span>{obj.descTwo}</div>
                                <div className='absolute right-0 bottom-0 [@media(max-width:1920px)_and_(min-width:1640px)]:text-[31px] [@media(max-width:1639px)_and_(min-width:1330px)]:text-[26px] [@media(max-width:1329px)_and_(min-width:1100px)]:text-[21px] [@media(max-width:1099px)_and_(min-width:820px)]:text-[13px] font-medium px-2.5 text-center bg-white rounded-tl-2xl'>от {formatNumberWithSpaceFromRight(obj.price)}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}