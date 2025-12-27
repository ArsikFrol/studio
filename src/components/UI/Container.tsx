import { JSX } from "react"

type Props = {
    children: JSX.Element,
    relative?: boolean
}

export default function Container(props: Props) {
    return (
        <div style={props.relative ? { position: 'relative' } : {}}
            className="
                [@media(max-width:1920px)_and_(min-width:1640px)]:w-390 
                [@media(max-width:1639px)_and_(min-width:1330px)]:w-7xl 
                [@media(max-width:1329px)_and_(min-width:1100px)]:w-5xl 
                [@media(max-width:1099px)_and_(min-width:820px)]:w-192.5 
                [@media(max-width:819px)_and_(min-width:650px)]:w-160 
                [@media(max-width:649px)_and_(min-width:430px)]:w-100 
                [@media(max-width:429px)_and_(min-width:0px)]:w-[320px]
                [@media(max-width:1099px)_and_(min-width:0px)]:py-12.5 
                py-25
                mx-auto">
            {props.children}
        </div>
    )
}