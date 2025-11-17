import infoSectionBG from "../../assets/info-section-bg.png"
import useThemeContext from "../../hooks/useThemeContext";

interface SupportInfoTileProps {
    title: string
    contact: string
    hours: string
}

const SupportInfoTile: React.FC<SupportInfoTileProps> = ({title, contact, hours}) => {

    return (
        <div className="w-77.5 flex flex-col gap-6 p-8">
            <p className="text-xl font-semibold md:font-bold">
                {title}
                <br />
                __
            </p>

            <p className="text-xl font-semibold">
                {contact}
            </p>

            <p className="md:text-xl">
                Assistance hours:
                <br />
                {hours}
            </p>
        </div>
    )
}

const InfoSection: React.FC = () => {
    const { theme } = useThemeContext()

    return (
        <>
            <section className="w-full bg-cover bg-no-repeat flex flex-col gap-9 lg:gap-0 lg:flex-row lg:justify-between pt-5 lg:pt-20 px-5.5 lg:px-14 pb-22 lg:pb-27" style={{ background: `linear-gradient(rgba(0,0,0,${theme == "dark" ? ".7" : "0"}), rgba(0,0,0,${theme == "dark" ? ".7" : "0"})), url(${infoSectionBG})` }}>
                <div className="flex flex-col gap-4 md:gap-6 max-w-144">
                    <p className="text-primary text-xl xl:text-2xl">Support</p>

                    <h1 className="text-2xl sm:text-4xl xl:text-6xl/15 text-secondary font-bold">We’re Here to Help you</h1>
                </div>

                <div className="flex flex-col md:flex-row lg:gap-25 text-secondary">
                    <SupportInfoTile title="Email Support" contact="contactus@boldbyalt.ng" hours="Instant support for queries"/>

                    {/* <SupportInfoTile title="Phone Support" contact="(808) 998-34256" hours="Monday - Friday 9 am to 6 pm" /> */}
                </div>
            </section>
        </>
    )
}

export default InfoSection;