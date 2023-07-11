import styles from '../styles'
import graphics from '../assets/graphics.png'
import boldo from '../assets/boldo.png'
import presto from '../assets/presto.png'
import rectangle from '../assets/rectangle.png'

const Hero = () => {
    return (
        <section className={`${styles.flexCenter} md:h-screen bg-blue relative md:pt-0 pt-[120px] md:pb-0 pb-[60px]`}>
            <div className="md:w-full w-[400px] md:h-full h-[400px] md:max-w-[1293px] md:max-h-[1293px] rounded-[50%] bg-[#1C3D5B] absolute md:right-[-50%] right-[-200px] md:top-[-50%] top-[-200px]" />
            <div className={`${styles.container} ${styles.paddingX} z-[5]`}>
                <div className="flex md:flex-row flex-col justify-between items-center md:gap-[110px] gap-[50px] mb-[85px]">
                    <div className="flex-1">
                        <h1 className={`${styles.heading1} font-manrope text-white mb-4`}>Save time by building  fast with Boldo Template</h1>
                        <p className={`${styles.paragraph} text-lightGray mb-[40px]`}>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
                        <div className="flex md:flex-row flex-col items-center justify-start gap-[24px]">
                            <button className="button text-blue bg-green hover:opacity-80 transition-opacity duration-150 border-green ">Buy template</button>
                            <button className="button text-white bg-blue hover:opacity-80 transition-opacity duration-150 border-white">Explore</button>
                        </div>
                    </div>
                    <div className="flex-1 md:text-right text-center">
                        <img src={graphics} alt="graphics" className="md:w-[494px] w-[100%] inline-block" />
                    </div>
                </div>
                <div className="w-full flex sm:flex-row flex-col justify-between items-center relative sm:overflow-hidden sm:gap-[20px] gap-[30px]">
                    <img src={rectangle} alt="rectangle" className="absolute left-0 top-0 w-full h-full object-cover" />
                    <img src={boldo} alt="boldo" />
                    <img src={presto} alt="presto" />
                    <img src={boldo} alt="boldo" />
                    <img src={presto} alt="presto" />
                    <img src={boldo} alt="boldo" />
                    <img src={presto} alt="presto" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
