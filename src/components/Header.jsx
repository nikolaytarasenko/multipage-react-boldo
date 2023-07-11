import { useState, useEffect } from 'react'
import styles from '../styles.js'
import { headerLinks } from '../constants'
import logo from '../assets/logo.png'
import { RxHamburgerMenu} from 'react-icons/rx'
import { IoClose } from 'react-icons/io5'

const Header = () => {
    const [toggle, setToggle] = useState(false)

    const handleResize = () => {
        if (window.innerWidth >= 768) setToggle(false)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize, false)
    }, [])

    return (
        <header className={`flex md:justify-center md:items-center ${toggle ? 'h-screen bg-black flex-col justify-start' : ''} absolute top-0 w-full md:py-[56px] py-[20px] z-10`}>
            <div className={`${styles.container} ${styles.paddingX} flex flex-row justify-between items-center`}>
                <a className="logo transition-opacity duration-150 hover:opacity-50" href='/'>
                    <img className="sm:w-[162px] sm:h-[42px] w-[100px]" src={logo} alt="logo" />
                </a>
                <ul className={`md:flex md:flex-row flex-col justify-between items-center gap-[40px] ${toggle ? 'flex absolute w-full top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2' : 'hidden'}`}>
                    {headerLinks.map((link, i) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`} className={`paragraph transition-colors duration-150 ${headerLinks.length - 1 === i ? 'px-[40px] py-[8px] bg-white text-blue rounded-[24px] border border-white border-solid hover:bg-blue hover:text-white/100' : 'text-white hover:text-white/50'}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="md:hidden block text-white" onClick={() => setToggle(prev => !prev)}>
                    {toggle ? <IoClose className="w-[30px] h-[30px]" /> : <RxHamburgerMenu className="w-[30px] h-[30px]" />}
                </div>
            </div>
        </header>
    )
}

export default Header

