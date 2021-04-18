import React from 'react';
import car from '../../assets/car.png'
import phone from '../../assets/phone-icon.png';
import mountain from '../../assets/mountains.png'
import '../../styles/mobile/MobileModal.css';

const MobileModal = ({ clickedTruck, showModal, setShowModal }) => {

    const { name, address, city, state, postal_code, latitude, longitude } = clickedTruck
    const directions = `https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=${latitude},${longitude}`

    function handleDate(day, id) {
        let today = new Date().getDay();
        const weekDateOpen = `${day.toLowerCase()}_open`
        const weekDateClose = `${day.toLowerCase()}_close`

        if (today === id) {
            return (
                <div>
                    <p className="mobile-modal-date" id={id}><strong>{day}</strong></p>
                    <p className="mobile-modal-times"><strong>{clickedTruck[weekDateOpen]} - {clickedTruck[weekDateClose]}</strong></p>
                </div>
            )
        }
        return (
            <div>
                <p className="mobile-modal-date" id={id}>{day}</p>
                <p className="mobile-modal-times">{clickedTruck[weekDateOpen]} - {clickedTruck[weekDateClose]}</p>
            </div>
        )
    }

    return (
        <>
                {showModal ? 
                    <div className="mobile-modal-div">
                        <div className="close-icon text-right" onClick={() => setShowModal(false)}>X</div>
                        <img className="mobile-mountain" src={mountain} alt="mountain"/>
                        <div className="mobile-modal-text">
                            <h4 className="mobile-modal-name">{name}</h4>
                            <br></br>
                            <h4 className="mobile-modal-address">{address} </h4>
                            <h4 className="mobile-modal-address">{city}, {state} {postal_code}</h4>
                            <div className="mobile-modal-icons">
                                <div className="mobile-phone">
                                    <img src={phone} alt="phone"/>
                                    <a href="tel:1-562-867-5309" className="mobile-phone-number">562-867-5309</a>
                                </div>
                                <div className="mobile-directions">
                                    <img src={car} alt="car"/>
                                    <a href={directions} rel="noreferrer" target="_blank" className="mobile-car">Get Directions</a>
                                </div>
                            </div>
                            <br></br><br></br>
                            <div className="mobile-modal-dates">
                                {handleDate('Monday', 1)}
                                {handleDate('Tuesday', 2)}
                                {handleDate('Wednesday', 3)}
                                {handleDate('Thursday', 4)}
                                {handleDate('Friday', 5)}
                                {handleDate('Saturday', 6)}
                                {handleDate('Sunday', 0)}
                            </div>
                        </div>
                    <a className="details-btn btn btn-dark btn-sm btn-block" href={clickedTruck.url} target="_blank" rel="noreferrer">VIEW FULL DETAILS</a>
                    </div>
                :
                null
                }
            
        </>
    )
}

export default MobileModal;