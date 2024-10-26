import { CiTrash } from "react-icons/ci";
import PropTypes from "prop-types";

const SelectedPlayers = ({player, handleRemove}) => {

    const {name, type, image} = player;

    return (
        <div className="w-full">
            <div className="card flex-row items-center justify-between bg-base-100 w-full border rounded-2xl p-5">
                <div className="flex items-center gap-4">
                    <img className="w-16 sm:w-20 h-16 sm:h-20 rounded-2xl object-cover" src={image} alt="" />
                    <div className="space-y-2">
                        <h2 className="text-lg sm:text-xl font-bold">{name}</h2>
                        <p className="text-xs text-[#13131399]">{type}</p>
                    </div>
                </div>
                <div>
                <button onClick={() => handleRemove(player)} className="btn block btn-ghost"><CiTrash className="w-6 h-6 text-red-500" /></button>
                </div>
            </div>
        </div>
    );
};

SelectedPlayers.propTypes = {
    player: PropTypes.object.isRequired,
    handleRemove: PropTypes.func.isRequired,
}

export default SelectedPlayers;