import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import PropTypes from "prop-types";

const Selected = ({selectedPlayers, handleRemove, handleIsActive}) => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center sm:items-start gap-8 sm:gap-10 lg:gap-12 mb-64 md:mb-72">
            <div className="w-full flex flex-col justify-start gap-6">
                {
                    selectedPlayers.map(player => <SelectedPlayers key={player.id} player={player} handleRemove={handleRemove}></SelectedPlayers>)
                }
            </div>
            <button onClick={() => handleIsActive('available')} className="btn lg:btn-lg btn-ghost rounded-2xl p-1 lg:p-2 border border-black"><span className="w-full h-full px-5 lg:px-7 py-3 lg:py-5 inline-flex items-center justify-center bg-[#E7FE29] rounded-xl text-sm lg:text-base font-bold">Add More Player</span></button>
        </div>
    );
};

Selected.propTypes = {
    selectedPlayers: PropTypes.array.isRequired,
    handleRemove: PropTypes.func.isRequired,
    handleIsActive: PropTypes.func.isRequired,
}

export default Selected;