import heroSectionImage from "../../assets/hero-section-image-min.png"
import ActionButton from "../../components/ActionButton"
import useThemeContext from "../../hooks/useThemeContext"
import heroSectionBG from "../../assets/hero-section-bg-min.png"
import heroSectionBGDark from "../../assets/hero-section-bg-dark-min.png"

const appRegisterPage = import.meta.env.VITE_APP_URL + "/register"

const HeroSection: React.FC = () => {
    const { theme } = useThemeContext()

    return (
        <>
            <section className="w-full relative bg-cover bg-no-repeat bg-center py-8.5 md:py-24 px-6.5 md:px-15 flex flex-col md:flex-row gap-11 md:gap-0 z-99" style={{ backgroundImage: theme == "light" ? `url(${heroSectionBG})` : `url(${heroSectionBGDark})` }}>
                <div className="md:w-[55%] md:mt-20.5 z-99">
                    <h1 className="text-3xl md:text-7xl z-99">
                        Your Ultimate Platform
                        <br />
                        <span className="font-semibold">
                            For SME Growth.
                        </span>
                    </h1>

                    <p className="mt-6 md:mt-10 md:pr-21 z-99">Empowering businesses with tools to manage operations, connect with
                        peers, and drive growth effortlessly</p>

                    <div className="w-full sm:w-fit flex flex-row justify-between sm:gap-5 mt-8 md:mt-14 z-99">
                        <ActionButton to={appRegisterPage} filled>
                            Get started now
                        </ActionButton>

                        <ActionButton to="/services" text="primary" shrink>
                            Explore Services
                        </ActionButton>
                    </div>
                </div>

                <div className="md:w-[45%] z-99">
                    <img src={heroSectionImage} alt="Hero Section Image" />
                </div>
            </section>
        </>
    )
}

export default HeroSection