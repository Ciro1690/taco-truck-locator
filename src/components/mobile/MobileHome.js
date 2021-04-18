import React, {useState} from 'react';
import MobileTruckCard from './MobileTruckCard';
import MobileModal from './MobileModal';
import MobileMap from './MobileMap';
import mobileLogo from '../../assets/rioseo-logo-mobile.png';
import axios from 'axios';
import testData from '../TestData';
import '../../styles/mobile/MobileHome.css';

const MobileHome = () => {

    const [trucks, setTrucks] = useState([]);
    const [clickedTruck, setClickedTruck] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [mapSelected, setMapSelected] = useState(false);
    const BASE_URL = 'https://my.api.mockaroo.com/locations.json?key=a45f1200';

    async function getTruckInfo() {
        try {
            await axios.get(BASE_URL)
                .then(results => setTrucks(results.data))
                .catch(setTrucks(testData));
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <nav className="nav-mobile">
                <i className="fas fa-bars nav-left"></i>
                <img className="nav-logo" src={mobileLogo} alt="logo" />
                <i className="location-icon fa fa-map-marker nav-right" aria-hidden="true"></i>
            </nav>

        {mapSelected ? 
        <>
            <div className="mobile-map">
                <MobileMap 
                    className="MobileMap"
                    clickedTruck={clickedTruck} 
                    showModal={showModal}
                />
                <MobileModal 
                    clickedTruck={clickedTruck}
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
            </div>
            <div className="nav-buttons">
                <button onClick={() => setMapSelected(false)} className="white nav-list">List</button>
                <button className="orange nav-map">Map</button>
            </div>
            </>
        :
            <>
            {trucks.length > 0 ?
                trucks.map(truck => (
                    <MobileTruckCard
                    key={truck.id}
                    truck={truck}
                    setClickedTruck={setClickedTruck}                                               
                    setShowModal={setShowModal}
                    setMapSelected={setMapSelected}
                    clickedTruck={clickedTruck}
                    />
                    ))
                    :
                    getTruckInfo() 
            }
                    <div className="nav-buttons">
                        <button className="orange nav-list">List</button>
                        <button onClick={() => setMapSelected(true)} className="white nav-map">Map</button>
                    </div>
            </>
            }
    </>
    )
}

export default MobileHome;