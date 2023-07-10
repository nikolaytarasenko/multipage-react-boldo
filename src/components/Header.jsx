import styles from '../styles.js'
import { headerLinks } from '../constants'
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <header className={`${styles.flexCenter} absolute top-0 w-full py-[56px]`}>
            <div className={`${styles.container} flex flex-row justify-between items-center`}>
                <a className="logo transition-opacity duration-150 hover:opacity-50" href='/'>
                    <img className="sm:w-[162px] sm:h-[42px] w-[100px]" src={logo} alt="logo" />
                </a>
                <ul className="flex flex-row justify-between items-center gap-[40px]">
                    {headerLinks.map((link, i) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`} className={`paragraph hover:text-white/50 transition-colors duration-150 ${headerLinks.length - 1 === i ? 'px-[40px] py-[8px] bg-white text-blue rounded-[24px] border border-white border-solid hover:bg-blue hover:text-white/100' : 'text-white'}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}

export default Header

