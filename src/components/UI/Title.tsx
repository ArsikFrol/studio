type Props = {
    title: string,
    id?: string
}

export default function Title(props: Props) {
    return (
        <div id={props.id} className="[@media(max-width:1920px)_and_(min-width:1640px)]:text-[65px] [@media(max-width:1639px)_and_(min-width:1330px)]:text-[53px] [@media(max-width:1329px)_and_(min-width:1100px)]:text-[44px] [@media(max-width:1099px)_and_(min-width:0px)]:text-[25px] font-medium mb-20 [@media(max-width:1099px)_and_(min-width:0px)]:mb-10 [@media(max-width:680px)_and_(min-width:0px)]:pl-12.5">{props.title}</div>
    )
}