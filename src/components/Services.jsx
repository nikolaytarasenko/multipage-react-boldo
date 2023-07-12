import styles from '../styles'
import { servicesCards } from '../constants'

const Services = () => {
    return (
        <div className={`${styles.flexStart} ${styles.sectionPaddingY}`}>
            <div className={`${styles.container} ${styles.paddingX}`}>
                <h4 className={`${styles.subTitle} mb-[12px]`}>Our Services</h4>
                <h2 className={`${styles.heading1} text-center max-w-[842px] mx-auto md:mb-[78px] mb-[40px]`}>Handshake infographic mass market crowdfunding iteration.</h2>
                <div className="flex md:flex-row flex-col justify-between md:gap-[20px] gap-[70px]">
                    {servicesCards.map(card => {
                        return (
                            <div className="flex flex-col md:items-start items-center md:w-[300px] w-full" key={card.id}>
                                <img src={card.image} alt={card.title} className="mb-[24px]" />
                                <h3 className="text-[24px] text-black leading-[36px] mb-[12px]">{card.title}</h3>
                                <p className="text-[20px] text-gray leading-[32px] mb-[28px] md:text-left text-center">{card.description}</p>
                                <a href={card.link} className="text-blue text-[20px] leading-[32px] block relative font-bold hover:opacity-60 transition-opacity duration-150 before:content-[''] before:w-full before:h-[1px] before:bg-blue before:absolute before:left-0 before:bottom-[-8px] after:content-['→'] after:text-[22px] after:absolute after:text-blue after:right-[-30px] after:top-[-1px]">Explore page</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Services