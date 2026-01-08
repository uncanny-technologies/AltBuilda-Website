import { Link } from "react-router-dom"
import bannerGifBG from "../../assets/banner-gif-hd.gif"
import { FaFacebookF, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from "react-icons/fa"
import { fbLink, igLink, linkedInLink, tiktokLink, twitterLink } from "../../data/links"

const ContactBanner: React.FC = () => {

    return (
        <>
            <section className="w-full bg-cover bg-no-repeat flex flex-col md:flex-row gap-9 md:gap-0 md:justify-between md:px-14 pt-12 md:pt-9 pb-3.5 md:pb-9" style={{ backgroundImage: `url(${bannerGifBG})` }}>
                <div className="flex flex-col gap-3 text-center md:text-left">
                    <p className="text-primary text-sm md:text-[1rem] font-semibold ">Get Started</p>

                    <h3 className=" text-2xl md:text-5xl/15 text-white font-semibold md:font-bold">
                        Get in touch with us.
                        <br />
                        We're here to assist you.
                    </h3>
                </div>

                <div className="grid md:grid-flow-col grid-cols-3 md:grid-rows-3 gap-6 self-center md:py-9">
                    <Link to={fbLink} className="size-12.5 text-white border border-white rounded-full flex justify-center items-center">
                        <FaFacebookF className="size-3.5" />
                    </Link>

                    <Link to={igLink} className="size-12.5 text-white border border-white rounded-full flex justify-center items-center">
                        <FaInstagram className="size-3.5" />
                    </Link>

                    <Link to={twitterLink} className="size-12.5 text-white border border-white rounded-full flex justify-center items-center">
                        <FaTwitter className="size-3.5" />
                    </Link>

                    <Link to={linkedInLink} className="size-12.5 text-white border border-white rounded-full flex justify-center items-center">
                        <FaLinkedin className="size-3.5" />
                    </Link>

                    <Link to={tiktokLink} className="size-12.5 text-white border border-white rounded-full flex justify-center items-center">
                        <FaTiktok className="size-3.5" />
                    </Link>
                </div>
            </section>
        </>
    )
}

export default ContactBanner