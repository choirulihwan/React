import classNames from 'classnames';
import { FcBullish } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from "../libs/constants/navigation";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineLogout } from 'react-icons/hi';
import { useState } from 'react';

const linkClass = "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-lg text-base text-white";
export default function Sidebar() {
    return (        
        <div className="flex flex-col bg-neutral-900 w-60 p-3 text-white">
            <div className="flex items-center gap-2 px-1 py-3">
                <FcBullish fontSize={24} />
                <span className="text-lg">Open Dashboard</span>
            </div>
            
            <div className="flex flex-col flex-1 py-8 gap-0.5">
            { 
                DASHBOARD_SIDEBAR_LINKS.map( (item) => (
                    <SidebarLink key={item.key} item={item} />                    
                )) 
            }
            </div>
            <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
            { 
                DASHBOARD_SIDEBAR_BOTTOM_LINKS.map( (item) => (
                    <SidebarLink key={item.key} item={item} />
                )) 
            }
                <div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
                    <HiOutlineLogout />
                    <span>Logout</span>
                </div>
            </div>
        </div>
    );
}

function SidebarLink({ item }) {
    const { pathname } = useLocation();
    const [ menuActive, setMenuActive ] = useState('');
   
    function handleMenuActive(menu) {  
        
        setMenuActive(menu);         
        const allChild = document.querySelectorAll('.has-parent');
        Array.prototype.forEach.call(allChild, (element) => {                
            element.classList.add('hidden');    
        });

        const hiddenDiv = document.querySelectorAll(`.${menu}`);
        Array.prototype.forEach.call(hiddenDiv, (element) => {                
            element.classList.toggle('hidden');    
        });         
    }

    if (item.parent !== undefined) {          
        return (
            <Link to={ item.path } className={ classNames(menuActive === item.parent ? pathname === item.path ? `bg-neutral-700` : `text-neutral-400` : 'hidden', `${item.parent} ml-4 has-parent`, linkClass) }>                        
                <span>{item.icon}</span>{item.label}
            </Link>
        );
    } else {
        return (
            <Link  to={ item.path } onClick={() => handleMenuActive(item.key)}  className={classNames(pathname === item.path ? `bg-neutral-700` : `text-neutral-400`, linkClass)}>
                <span>{item.icon}</span>
                {item.label}
            </Link>
        );
    }

    
}