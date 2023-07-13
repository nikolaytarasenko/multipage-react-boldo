import styles from '../styles'
import { testimonialCards } from '../constants'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import arrowLeft from '../assets/arrow-left.png'
import arrowRight from '../assets/arrow-right.png'

const Testimonials = () => {
    return (
        <div className={`${styles.flexStart} ${styles.sectionPaddingY} bg-blue`}>
            <div className={`${styles.container} ${styles.paddingX}`}>
                <h2 className={`${styles.heading1} text-white max-w-[716px] md:mb-[72px] mb-[170px]`}>An enterprise template to ramp up your company website</h2>
                <Splide options={{ perPage: 3, perMove: 1, gap: '22px', pagination: false, breakpoints: { 992: { perPage: 1 }} }} hasTrack={ false } aria-label="...">
                    <div className="splide__arrows">
                        <button className="splide__arrow splide__arrow--prev">
                            <img src={arrowLeft} alt="arrow left" />
                        </button>
                        <button className="splide__arrow splide__arrow--next">
                            <img src={arrowRight} alt="arrow right" />
                        </button>
                    </div>
                    <SplideTrack>
                        {testimonialCards.map(card => (
                            <SplideSlide key={card.id}>
                                <div className="bg-white p-[40px] rounded-[12px] shadow-[0_12px_32px_0_rgba(0,0,0,0.12)]">
                                    <h3 className="text-[24px] leading-[36px] text-black mb-[40px]">{card.text}</h3>
                                    <div className="flex flex-row items-center gap-[16px]">
                                        <img src={card.icon} alt={card.name} />
                                        <div>
                                            <h4 className="text-[16px] leading-[32px] text-blue font-bold">{card.name}</h4>
                                            <p className="text-[14px] leading-[32px] text-blue">{card.position}</p>
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </SplideTrack>
                </Splide>
            </div>
        </div>
    );
};

export default Testimonials;