import React, { useState } from 'react';
import TruckCard from './TruckCard';
import Map from './Map';
import Modal from './Modal';
import logo from '../assets/rioseo-logo.png';
import locationIcon from '../assets/location-icon.png';
import axios from 'axios';
import testData from './TestData';
import '../styles/Home.css';

const Home = () => {

    const [trucks, setTrucks] = useState([]);
    const [clickedTruck, setClickedTruck] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [mapSelected, setMapSelected] = useState(false);
    const BASE_URL = 'https://my.api.mockaroo.com/locations.json?key=a45f1200';

    async function getTruckInfo() {
        try {
            await axios.get(BASE_URL)
                .then(results => setTrucks(results.data))
                .catch (setTrucks(testData));
        }
        catch (err) {
            console.log(err);
            }
    }

    return (
        <>
            <nav className="nav-desktop">
                <img className="nav-left" src={logo} alt="logo" />
                <p className="location-desktop nav-right"><img src={locationIcon} alt="location-icon" />Truck Locator</p>
                <p className="menu-desktop nav-right">Menu</p>
            </nav>
            <h4 className="text-left m-3">Found {trucks.length} Taco Trucks</h4>

            <div className="container-fluid">
                <div className="row">
                    <div className="desktop-truck-card col">
                        {trucks.length > 0 ?
                            trucks.map(truck => (
                                <TruckCard
                                    key={truck.id}
                                    truck={truck}
                                    clickedTruck={clickedTruck}
                                    setClickedTruck={setClickedTruck}
                                    setShowModal={setShowModal}
                                    setMapSelected={setMapSelected}
                                />
                            ))
                            : getTruckInfo()
                        }
                    </div>
                    {mapSelected ?
                    <div className="col">
                        <Map clickedTruck={clickedTruck} />
                        <Modal
                            clickedTruck={clickedTruck}
                            showModal={showModal}
                            setShowModal={setShowModal}
                        />
                    </div>
                    : <div className="col empty">
                        Click a location card to load a map
                      </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Home;