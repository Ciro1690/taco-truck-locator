import React from 'react';
import '../styles/Modal.css'

const Modal = ({ clickedTruck, showModal, setShowModal }) => {

    const { name, address, city, state, postal_code, latitude, longitude } = clickedTruck
    const directions = `https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=${latitude},${longitude}`

    function handleDate(day, id) {
        let today = new Date().getDay();
        if (today === id) {
            return <p id={id}><strong>{day} {clickedTruck.sunday_open} - {clickedTruck.sunday_close}</strong></p>
        }
        return <p id={id}>{day} {clickedTruck.sunday_open} - {clickedTruck.sunday_close}</p>
    }

    return (
        <>
                {showModal ? 
                    <div className="modal-div">
                        <div className="close text-right m-3" onClick={() => setShowModal(false)}>X</div>
                        <p>{name}</p>
                        <br></br>
                        <p>{address} </p>
                        <p>{city}, {state} {postal_code}</p>
                            <div className="phone">
                                <i className="fas fa-phone-square"></i>
                                <a href="tel:1-562-867-5309" className="phone-number">562-867-5309</a>
                            </div>
                            <br></br>
                            <br></br>
                            <div className="directions">
                                <i class="fas fa-car"></i>
                                <p href={directions} target="_blank">Get Directions</p>
                            </div>
                        <br></br>
                        {handleDate('Monday', 1)}
                        {handleDate('Tuesday', 2)}
                        {handleDate('Wednesday', 3)}
                        {handleDate('Thursday', 4)}
                        {handleDate('Friday', 5)}
                        {handleDate('Saturday', 6)}
                        {handleDate('Sunday', 0)}
                    <a className="btn btn-dark btn-sm btn-block" href={clickedTruck.url} target="_blank" rel="noreferrer">VIEW FULL DETAILS</a>
                    </div>
                :
                null
                }
            
        </>
    )
}

export default Modal;