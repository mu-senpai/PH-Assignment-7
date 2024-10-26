import bannerMain from "../../assets/banner-main.png"
import PropTypes from "prop-types";

const Banner = ({handleAddCredit}) => {
    return (
        <div className="w-full mb-10 sm:mb-14 lg:mb-20">
            <div className="hero bg-black bg-[url('https://i.ibb.co.com/Qk8rn86/bg-shadow.png')] w-full h-[36rem] rounded-3xl">
                <div className="w-[95%] sm:w-[85%] lg:w-[75%] flex items-center justify-center text-center">
                    <div className="w-full flex flex-col items-center justify-center gap-5 lg:gap-6">
                        <img src={bannerMain} alt="" />
                        <h1 className="text-2xl/normal sm:text-3xl/normal lg:text-4xl/normal font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <p className="text-base sm:text-lg lg:text-xl text-[#FFFFFFB3]">Beyond Boundaries Beyond Limits</p>
                        <button onClick={() => handleAddCredit()} className="btn md:btn-lg btn-ghost rounded-2xl p-1 md:p-2 border border-white"><span className="w-full h-full px-5 md:px-7 py-3 md:py-5 inline-flex items-center justify-center bg-gradient-to-r from-[#a894cd] to-[#f7c951] rounded-xl text-sm md:text-base font-bold">Claim Free Credit</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    handleAddCredit: PropTypes.func.isRequired,
}

export default Banner;