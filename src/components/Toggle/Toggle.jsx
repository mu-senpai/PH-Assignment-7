import { useEffect, useState } from "react";
import Available from "../Available/Available";
import Selected from "../Selected/Selected";
import PropTypes from "prop-types";

const Toggle = ({selectedPlayers, handlePurchase, handleRemove}) => {

    const [isActive, setIsActive] = useState('available')

    const handleIsActive = (status) => {
        if (status === 'available') {
            setIsActive('avilable');
        } else {
            setIsActive('');
        }
    }

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('players.json')
        .then(response => response.json())
        .then(data => setPlayers(data))
    }, [])

    return (
        <div>
            {/* Toggle section */}
            <div className="w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-0 justify-center sm:justify-between mb-8">
                <h2 className="text-xl lg:text-2xl font-bold text-center sm:text-left">Selected Player ({selectedPlayers.length}/6)</h2>
                <div className="flex items-center border border-[#1313131A] rounded-xl">
                    <div onClick={() => handleIsActive('available')} className={`w-[45%] px-6 py-3 text-xs sm:text-sm lg:text-base border-r border-[#1313131A] ${isActive ? 'bg-[#E7FE29] text-black font-bold rounded-l-xl' : 'bg-white text-[#13131399] font-normal'}`}>Available</div>
                    <div onClick={() => handleIsActive('')} className={`w-[55%] px-6 py-3 text-xs sm:text-sm lg:text-base ${!isActive ? 'bg-[#E7FE29] text-black font-bold rounded-r-xl' : 'bg-white text-[#13131399] font-normal'}`}>Selected ({selectedPlayers.length})</div>
                </div>    
            </div>

            {/* Available-Selected section */}
            <div className="w-full">
                {
                    isActive ? <Available players={players} handlePurchase={handlePurchase}></Available> : <Selected selectedPlayers={selectedPlayers} handleRemove={handleRemove} handleIsActive={handleIsActive}></Selected>
                }
            </div>
        </div>
    );
};

Toggle.propTypes = {
    handlePurchase: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired,
    selectedPlayers: PropTypes.array.isRequired,
}

export default Toggle;