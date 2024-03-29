'use client';

import clsx from 'clsx'
import Link from 'next/link';

interface DesktopIconProps{
    label:string;
    icon:any;
    href:string;
    onClick?:()=>void;
    active:boolean;
}


const DesktopItem:React.FC<DesktopIconProps> = ({
    label,icon:Icon,href,onClick,active
}) => {
    const handleClick = () => {
        if(onClick){
            return onClick();
        }
    }
    return ( 
       <li onClick={handleClick}> 
            <Link href={href} className={clsx("group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold text-gray-500 hover:text-slate-950 hover:bg-gray-100",active && "bg-gray-100 text-slate-950")}>
                <Icon className="h-6 w-6 shink-0" />
                <span className='sr-only'>{label}</span>
            </Link>
       </li>
     );
}
 
export default DesktopItem;