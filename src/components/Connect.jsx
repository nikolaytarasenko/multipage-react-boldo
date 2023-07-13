import styles from '../styles'
import businessman from '../assets/businessman.png'
import { connectItems } from '../constants'

const Connect = () => {
    return (
        <div className={`${styles.flexStart} ${styles.sectionPaddingY}`}>
            <div className={`${styles.container} ${styles.paddingX}`}>
                <div className="flex md:flex-row flex-col justify-between items-center md:gap-[150px] gap-[60px]">
                    <div className="relative flex-1">
                        <img src={businessman} alt="Businessman" className="w-full max-w-[494px]" />
                        <div className="md:absolute relative md:top-[222px] top-[30px] lg:right-[57px] md:right-[30px] right-0 md:w-[251px] w-full bg-white p-[40px] rounded-[12px] shadow-[0_4px_32px_0px_rgba(0,0,0,0.12)] md:text-left text-center">
                            <div className="mb-[20px]">
                                <svg className="m-auto" xmlns="http://www.w3.org/2000/svg" width="170" height="228" viewBox="0 0 170 228" fill="none">
                                    <rect width="11.3333" height="49.7375" transform="matrix(1 0 0 -1 0 227.21)" fill="#0DBBFC"/>
                                    <rect width="11.3333" height="28.8251" transform="matrix(1 0 0 -1 22.6667 206.298)" fill="#0DBBFC"/>
                                    <rect x="45.3333" y="44.0854" width="11.3333" height="133.387" fill="#0DBBFC"/>
                                    <rect x="68" y="85.345" width="11.3333" height="92.1274" fill="#0DBBFC"/>
                                    <rect x="90.6667" width="11.3333" height="177.472" fill="#0A2640"/>
                                    <rect x="113.333" y="51.9983" width="11.3333" height="125.474" fill="#0DBBFC"/>
                                    <rect x="136" y="27.6947" width="11.3333" height="149.778" fill="#0DBBFC"/>
                                    <rect x="158.667" y="109.083" width="11.3333" height="68.389" fill="#0DBBFC"/>
                                </svg>
                            </div>
                            <h3 className="font-manrope text-[24px] leading-[36px] text-blue font-bold mb-[4px]">30%</h3>
                            <p className="font-manrope text-[14px] leading-[24px] text-blue">More income in June</p>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 xs:items-start items-center md:pt-[130px] pt-[40px] pb-[30px]">
                        <h3 className={`${styles.heading2} mb-[40px]`}>We connect our customers with the best, and help them keep up-and stay open.</h3>
                        <ul className="mb-[45px]">
                            {connectItems.map(item => (
                                <li key={item.id} className="pl-[63px] h-[36px] relative w-full flex items-center mb-[24px] before:content-[''] before:absolute before:left-0 before:top-0 before:bg-connect-list-item before:bg-no-repeat before:w-[36px] before:h-[36px]">{item.title}</li>
                            ))}
                        </ul>
                        <button className="button bg-blue text-white border-blue transition-opacity hover:opacity-80">Start now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Connect;
