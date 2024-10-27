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

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (screen.width >= 640) {
                if (window.scrollY > 640) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            } else {
                if (window.scrollY > 620) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="max-w-[95%] sm:max-w-[90%] lg:max-w-[81.25%] min-[1920px]:max-w-[97.5rem] mx-auto">
            {/* Toggle section */}
            <div className="w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-0 justify-center sm:justify-between mb-8 sticky z-10 top-5 sm:top-[5.7rem] lg:top-[6.9rem]">
                <h2 className={`text-xl lg:text-2xl font-bold text-center sm:text-left ${isScrolled ? "invisible" : "visible"}`}>{isActive ? 'Available Players' : `Selected Player (${selectedPlayers.length}/6)`}</h2>
                <div className="flex items-center border border-[#1313131A] rounded-xl">
                    <div onClick={() => handleIsActive('available')} className={`w-[45%] px-6 py-3 text-xs sm:text-sm lg:text-base border-r border-[#1313131A] rounded-l-xl ${isActive ? 'bg-[#E7FE29] text-black font-bold' : 'bg-white text-[#13131399] font-normal'}`}>Available</div>
                    <div onClick={() => handleIsActive('')} className={`w-[55%] px-6 py-3 text-xs sm:text-sm lg:text-base rounded-r-xl ${!isActive ? 'bg-[#E7FE29] text-black font-bold' : 'bg-white text-[#13131399] font-normal'}`}>Selected ({selectedPlayers.length})</div>
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