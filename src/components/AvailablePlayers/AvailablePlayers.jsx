import { MdSportsCricket } from "react-icons/md";
import { CiFlag1 } from "react-icons/ci";
import PropTypes from "prop-types";

const AvailablePlayers = ({player, handlePurchase}) => {

    const {name, image, country, type, specialization, price} = player;

    return (
        <div className="w-full">
            <div className="card bg-base-100 w-full border border-[#1313131A] rounded-2xl">
                <figure className="px-6 pt-6">
                    <img
                        className="object-cover w-full h-[15rem] rounded-2xl"
                        src={image} />
                </figure>
                <div className="flex flex-col justify-start gap-4 px-6 py-6">

                    <h2 className="card-title inline-flex items-center gap-2">
                        <MdSportsCricket className="w-7 h-7"/>
                        {name}
                    </h2>

                    <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 sm:justify-between">
                        <p className="inline-flex items-center gap-1 text-sm text-[#898989]">
                            <CiFlag1 className="w-5 h-5"/>
                            {country}
                        </p>
                        <p className="text-center py-[0.37rem] px-3 rounded-lg text-xs text-[#131313] bg-[#1313130D]">{type}</p>
                    </div>

                    <hr/>

                    <p className="text-sm font-bold">Rating</p>

                    <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 sm:justify-between">
                        <p className="text-sm font-bold">{Array.isArray(specialization) ? specialization[0] : specialization}</p>
                        <p className="text-sm text-[#131313B3]">{Array.isArray(specialization) ? specialization[1] : 'N/A'}</p>
                    </div>
                    <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-center gap-4 sm:justify-between">
                        <p className="text-sm text-bold">Price: ${price}</p>
                        <div className="card-actions">
                            <button onClick={() => handlePurchase(player)} className="btn btn-sm btn-ghost border border-[#1313131A] text-[#131313B3]">Choose Player</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

AvailablePlayers.propTypes = {
    player: PropTypes.object.isRequired,
    handlePurchase: PropTypes.func.isRequired,
}

export default AvailablePlayers;