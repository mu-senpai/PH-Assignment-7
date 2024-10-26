import Logo from "../../assets/logo-footer.png"
import Newsletter from "../Newsletter/Newsletter";
import PropTypes from "prop-types";

const Footer = ({handleEmail}) => {
    return (
        <div className="w-full bg-black pt-60 relative">

            <div className="w-[83.75%] h-96 bg-white/[0.15] p-3 sm:p-5 lg:p-6 border border-white rounded-3xl absolute left-[8%] right-[8%] -top-[18%] md:-top-[25%]">
                <Newsletter handleEmail={handleEmail}></Newsletter>
            </div>

            <footer className="footer footer-center text-white">
                <aside>
                    <img src={Logo} alt="" />
                </aside>

                <div className="w-[95%] sm:w-[90%] lg:w-[81.25%] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
                    <div className="w-full text-center md:text-left space-y-4">
                        <h4 className="text-lg font-semibold">About Us</h4>
                        <p className="w-[85%] sm:w-[75%] md:w-[100%] lg:w-[80%] xl:w-[60%] mx-auto md:mx-0 text-[#FFFFFF99]">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>

                    <div className="text-center sm:text-left space-y-4">
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <ul className="md:list-disc flex flex-col items-center md:items-start md:pl-6 text-[#FFFFFF99] space-y-3">
                            <li><a className="link link-hover">Home</a></li>
                            <li><a className="link link-hover">Services</a></li>
                            <li><a className="link link-hover">About</a></li>
                            <li><a className="link link-hover">Contact</a></li>
                        </ul>
                    </div>

                    <div className="w-full space-y-4">
                        <h4 className="text-lg font-semiboldtext-center md:text-left font-semibold">Subscribe</h4>
                        <p className="w-[85%] md:w-[75%] xl:w-[60%] mx-auto md:mx-0 text-center md:text-left text-[#FFFFFF99]">Subscribe to our newsletter for the latest updates.</p>
                        <div className="join w-full">
                            <input id="footer-email-input" className="input w-full md:w-[70%] input-bordered join-item text-black" placeholder="Email" type="email" />
                            <button onClick={() => handleEmail('footer-email-input')} className="btn join-item rounded-r-xl bg-gradient-to-r from-[#a894cd] to-[#f7c951] border-none">Subscribe</button>
                        </div>
                    </div>
                </div>


                <hr className="w-full border border-gray-900" />

                <p className="w-[95%] mx-auto text-[#FFFFFF99]">@{new Date().getFullYear()} - BPL DREAM 11 - All Rights Reserved.</p>
                <p>{/* Dummy Paragraph */}</p>
            </footer>
        </div>
    );
};

Footer.propTypes = {
    handleEmail: PropTypes.func.isRequired,
}

export default Footer;