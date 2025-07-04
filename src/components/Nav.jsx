import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';

import {navLinks} from '../constants'
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex items-center justify-between max-container'>
            <a href="/"></a>
            <img 
                src={headerLogo}
                alt="Header Logo"
                width={130}
                height={29}
            />
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((items)=>(
                    <li key={items.label}>
                        <a href={items.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                            {items.label}
                        </a>
                    </li>
                ))}
            </ul>

            <div className='hidden max-lg:block'>
                <img
                    src={hamburger}
                    alt="Humburger"
                    width={25}
                    height={25}
                />
            </div>
            
        </nav>
    </header>
  )
}

export default Nav
