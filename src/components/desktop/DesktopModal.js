import React from 'react';
import car from '../../assets/car.png'
import phone from '../../assets/phone-icon.png';
import mountain from '../../assets/mountain.png'
import '../../styles/desktop/DesktopModal.css';

const DesktopModal = ({ clickedTruck, showModal, setShowModal }) => {

    const { name, address, city, state, postal_code, latitude, longitude } = clickedTruck
    const directions = `https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=${latitude},${longitude}`

    function handleDate(day, id) {
        let today = new Date().getDay();
        if (today === id) {
            return (
                <div>
                    <p className="modal-date" id={id}><strong>{day}</strong></p>
                    <p className="modal-times"><strong>{clickedTruck.sunday_open} - {clickedTruck.sunday_close}</strong></p>
                </div>
            )
        }
        return (
            <div>
                <p className="modal-date" id={id}>{day}</p>
                <p className="modal-times">{clickedTruck.sunday_open} - {clickedTruck.sunday_close}</p>
            </div>
        )
    }

    return (
        <>
            {showModal ?
                <div className="modal-div">
                    <div className="close-icon text-right" onClick={() => setShowModal(false)}>X</div>
                    <img className="mountain" src={mountain} alt="mountain" />
                    <div className="modal-text">
                        <h4>{name}</h4>
                        <br></br>
                        <p>{address} </p>
                        <p>{city}, {state} {postal_code}</p>
                        <div className="modal-icons">
                            <div className="phone">
                                <img src={phone} alt="phone" />
                                <a href="tel:1-562-867-5309" className="phone-number">562-867-5309</a>
                            </div>
                            <div className="directions">
                                <img src={car} alt="car" />
                                <a href={directions} rel="noreferrer" target="_blank" className="car">Get Directions</a>
                            </div>
                        </div>
                        <br></br><br></br>
                        <div className="modal-dates">
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

export default DesktopModal;