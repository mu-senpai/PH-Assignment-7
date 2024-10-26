import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import PropTypes from "prop-types";

const Available = ({players, handlePurchase}) => {

    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-64 md:mb-72">
            {
                players.map(player => <AvailablePlayers key={player.id} player={player} handlePurchase={handlePurchase}></AvailablePlayers>)
            }
        </div>
    );
};

Available.propTypes = {
    players: PropTypes.array.isRequired,
    handlePurchase: PropTypes.func.isRequired,
}

export default Available;