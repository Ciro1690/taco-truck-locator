import React from 'react';
import phone from '../../assets/phone-icon.png';
import '../../styles/desktop/DesktopTruckCard.css';

const DesktopTruckCard = ({truck, clickedTruck, setClickedTruck, setShowModal, setMapSelected}) => {

    const directions = `https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=${truck.latitude},${truck.longitude}`;
    let time;

    function getDay() {
        switch (new Date().getDay()) {
            case 0:
                time = truck.sunday_close;
                break;
            case 1:
                time = truck.monday_close;
                break;
            case 2:
                time = truck.tuesday_close;
                break;
            case 3:
                time = truck.wednesday_close;
                break;
            case 4:
                time = truck.thursday_close;
                break;
            case 5:
                time = truck.friday_close;
                break;
            case 6:
                time = truck.saturday_close;
                break;
            default:
        }
    };

    function mapTruck() {
        setClickedTruck(truck);
        setShowModal(true);
        setMapSelected(true);
    }

    function justMap() {
        setClickedTruck(truck);
        setShowModal(false);
        setMapSelected(true);
    }

    getDay()
    const { name, address, state, city, postal_code} = truck;

    return (
        <>
            <div className="desktop-main d-none d-sm-block">
                <div className="desktop-card">
                    <div className={clickedTruck.name === truck.name ? "selected-inner-card" : "desktop-inner-card"}>
                        <div className="card-text">
                            <h3 className="card-name">{name}</h3>
                            <button 
                                onClick={justMap}
                                className="address">
                                <h4>{address}</h4>
                                <h4>{city}, {state} {postal_code}</h4>
                            </button>
                            <h4 className="open">Open today until {time}</h4>
                            <div className="desktop-phone">
                                <img src={phone} alt="phone" />
                                <a href="tel:1-562-867-5309" className="phone-number">562-867-5309</a>
                            </div>
                            <br></br>
                        </div>
                        <a href={directions} rel="noreferrer" target="_blank" className="directions-btn desktop-btn btn btn-dark btn-sm">DIRECTIONS</a>
                        <button className="desktop-btn btn btn-dark btn-sm" onClick={mapTruck}>MORE INFO</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DesktopTruckCard;