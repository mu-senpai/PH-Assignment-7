import PropTypes from "prop-types";

const Newsletter = ({handleEmail}) => {
    return (
        <div className="w-full h-full rounded-2xl bg-white bg-[url('https://i.ibb.co.com/Qk8rn86/bg-shadow.png')] bg-cover border border-[#1313131A] flex flex-col items-center justify-center text-center">
            <div className="w-[90%] mx-auto flex flex-col items-center justify-center gap-4">
                <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold">Subscribe to our Newsletter</h1>
                <p className="text-sm sm:text-lg lg:text-xl font-medium text-[#131313B3]">Get the latest updates and news right in your inbox!</p>
                <div className="w-full sm:w-[85%] md:w-[75%] lg:w-[70%] xl:w-[60%] mx-auto flex items-center gap-2">
                    <input id="email-input" type="email" placeholder="Enter your email" className="input input-sm sm:input-md input-bordered w-[80%] md:w-full"/>
                    <button onClick={() => handleEmail('email-input')} className="btn btn-sm sm:btn-md w-[45%] md:w-36 btn-ghost bg-gradient-to-r from-[#a894cd] to-[#f7c951] rounded-xl text-xs sm:text-base font-bold">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

Newsletter.propTypes = {
    handleEmail: PropTypes.func.isRequired,
}

export default Newsletter;