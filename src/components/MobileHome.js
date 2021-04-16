import React, {useState} from 'react';
import TruckCard from './TruckCard';
import Map from './Map';
import Modal from './Modal';
import mobileLogo from '../assets/rioseo-logo-mobile.png'
import locationIcon from '../assets/location-icon.png'
import axios from 'axios';
import '../styles/Home.css'

const MobileHome = () => {

    const testData = [
        {
            "id": 1,
            "name": "Johns and Sons",
            "url": "http://independent.co.uk/a.jpg",
            "address": "5078 Golf View Center",
            "city": "Concord",
            "state": "CA",
            "postal_code": "94522",
            "latitude": 37.7772,
            "longitude": -121.9554,
            "monday_open": "9:39 AM",
            "monday_close": "7:38 PM",
            "tuesday_open": "8:31 AM",
            "tuesday_close": "6:15 PM",
            "wednesday_open": "6:50 AM",
            "wednesday_close": "9:55 PM",
            "thursday_open": "8:19 AM",
            "thursday_close": "7:55 PM",
            "friday_open": "8:05 AM",
            "friday_close": "4:30 PM",
            "saturday_open": "8:13 AM",
            "saturday_close": "8:42 PM",
            "sunday_open": "6:49 AM",
            "sunday_close": "4:04 PM"
        },
        {
            "id": 2,
            "name": "Padberg Inc",
            "url": "https://google.pl/massa/quis/augue/luctus/tincidunt/nulla/mollis.png",
            "address": "5586 Briar Crest Road",
            "city": "Albuquerque",
            "state": "NM",
            "postal_code": "87201",
            "latitude": 35.0443,
            "longitude": -106.6729,
            "monday_open": "8:12 AM",
            "monday_close": "9:38 PM",
            "tuesday_open": "6:53 AM",
            "tuesday_close": "9:30 PM",
            "wednesday_open": "7:26 AM",
            "wednesday_close": "4:58 PM",
            "thursday_open": "9:54 AM",
            "thursday_close": "5:28 PM",
            "friday_open": "8:58 AM",
            "friday_close": "9:48 PM",
            "saturday_open": "8:19 AM",
            "saturday_close": "8:05 PM",
            "sunday_open": "8:16 AM",
            "sunday_close": "8:07 PM"
        },
        {
            "id": 3,
            "name": "Hirthe-Maggio",
            "url": "http://networkadvertising.org/congue/diam/id/ornare/imperdiet.png",
            "address": "5504 American Lane",
            "city": "Oakland",
            "state": "CA",
            "postal_code": "94660",
            "latitude": 37.6802,
            "longitude": -121.9215,
            "monday_open": "8:20 AM",
            "monday_close": "4:30 PM",
            "tuesday_open": "8:49 AM",
            "tuesday_close": "8:27 PM",
            "wednesday_open": "7:23 AM",
            "wednesday_close": "4:28 PM",
            "thursday_open": "7:36 AM",
            "thursday_close": "5:27 PM",
            "friday_open": "9:45 AM",
            "friday_close": "5:24 PM",
            "saturday_open": "7:36 AM",
            "saturday_close": "8:47 PM",
            "sunday_open": "7:59 AM",
            "sunday_close": "9:30 PM"
        },
        {
            "id": 4,
            "name": "Langosh-Leffler",
            "url": "https://live.com/nam.json",
            "address": "49 Kings Crossing",
            "city": "Chattanooga",
            "state": "TN",
            "postal_code": "37410",
            "latitude": 35.0018,
            "longitude": -85.3138,
            "monday_open": "7:31 AM",
            "monday_close": "4:28 PM",
            "tuesday_open": "7:28 AM",
            "tuesday_close": "5:31 PM",
            "wednesday_open": "9:01 AM",
            "wednesday_close": "7:18 PM",
            "thursday_open": "7:16 AM",
            "thursday_close": "6:21 PM",
            "friday_open": "8:20 AM",
            "friday_close": "7:24 PM",
            "saturday_open": "6:45 AM",
            "saturday_close": "7:28 PM",
            "sunday_open": "8:15 AM",
            "sunday_close": "8:07 PM"
        },
        {
            "id": 5,
            "name": "Koepp, Hessel and Lubowitz",
            "url": "http://usda.gov/neque/aenean/auctor/gravida/sem/praesent/id.jpg",
            "address": "83 Lakewood Road",
            "city": "Glendale",
            "state": "AZ",
            "postal_code": "85311",
            "latitude": 33.2765,
            "longitude": -112.1872,
            "monday_open": "7:04 AM",
            "monday_close": "6:42 PM",
            "tuesday_open": "6:59 AM",
            "tuesday_close": "7:37 PM",
            "wednesday_open": "9:48 AM",
            "wednesday_close": "9:33 PM",
            "thursday_open": "9:41 AM",
            "thursday_close": "7:53 PM",
            "friday_open": "8:44 AM",
            "friday_close": "7:22 PM",
            "saturday_open": "9:42 AM",
            "saturday_close": "9:31 PM",
            "sunday_open": "6:14 AM",
            "sunday_close": "7:44 PM"
        },
        {
            "id": 6,
            "name": "Hudson LLC",
            "url": "https://prweb.com/pede/venenatis/non.png",
            "address": "0794 Mandrake Center",
            "city": "Richmond",
            "state": "VA",
            "postal_code": "23285",
            "latitude": 37.5242,
            "longitude": -77.4932,
            "monday_open": "7:55 AM",
            "monday_close": "4:24 PM",
            "tuesday_open": "8:05 AM",
            "tuesday_close": "4:55 PM",
            "wednesday_open": "9:20 AM",
            "wednesday_close": "8:44 PM",
            "thursday_open": "9:54 AM",
            "thursday_close": "7:35 PM",
            "friday_open": "9:30 AM",
            "friday_close": "5:24 PM",
            "saturday_open": "8:18 AM",
            "saturday_close": "7:09 PM",
            "sunday_open": "8:27 AM",
            "sunday_close": "6:25 PM"
        },
        {
            "id": 7,
            "name": "Ullrich-Kuhn",
            "url": "https://canalblog.com/congue/eget/semper.png",
            "address": "13071 Fieldstone Plaza",
            "city": "Fort Lauderdale",
            "state": "FL",
            "postal_code": "33345",
            "latitude": 26.1654,
            "longitude": -80.2959,
            "monday_open": "6:37 AM",
            "monday_close": "9:34 PM",
            "tuesday_open": "8:33 AM",
            "tuesday_close": "7:49 PM",
            "wednesday_open": "6:24 AM",
            "wednesday_close": "9:27 PM",
            "thursday_open": "6:02 AM",
            "thursday_close": "6:51 PM",
            "friday_open": "6:02 AM",
            "friday_close": "7:58 PM",
            "saturday_open": "6:52 AM",
            "saturday_close": "8:39 PM",
            "sunday_open": "6:49 AM",
            "sunday_close": "9:06 PM"
        },
        {
            "id": 8,
            "name": "Muller-Balistreri",
            "url": "http://answers.com/bibendum.jpg",
            "address": "23 Lien Hill",
            "city": "Columbia",
            "state": "MO",
            "postal_code": "65218",
            "latitude": 38.9033,
            "longitude": -92.1022,
            "monday_open": "6:06 AM",
            "monday_close": "6:24 PM",
            "tuesday_open": "9:28 AM",
            "tuesday_close": "7:28 PM",
            "wednesday_open": "8:36 AM",
            "wednesday_close": "6:51 PM",
            "thursday_open": "7:54 AM",
            "thursday_close": "8:21 PM",
            "friday_open": "7:08 AM",
            "friday_close": "8:53 PM",
            "saturday_open": "6:57 AM",
            "saturday_close": "4:41 PM",
            "sunday_open": "9:03 AM",
            "sunday_close": "8:23 PM"
        },
        {
            "id": 9,
            "name": "Torp and Sons",
            "url": "http://census.gov/a/odio/in.jsp",
            "address": "7 Dawn Plaza",
            "city": "Houston",
            "state": "TX",
            "postal_code": "77293",
            "latitude": 29.834,
            "longitude": -95.4342,
            "monday_open": "7:42 AM",
            "monday_close": "9:40 PM",
            "tuesday_open": "6:31 AM",
            "tuesday_close": "4:52 PM",
            "wednesday_open": "8:17 AM",
            "wednesday_close": "6:09 PM",
            "thursday_open": "6:01 AM",
            "thursday_close": "7:05 PM",
            "friday_open": "9:59 AM",
            "friday_close": "8:40 PM",
            "saturday_open": "9:08 AM",
            "saturday_close": "7:24 PM",
            "sunday_open": "9:41 AM",
            "sunday_close": "8:35 PM"
        },
        {
            "id": 10,
            "name": "Rath-Parisian",
            "url": "https://bluehost.com/sit/amet/lobortis/sapien/sapien.png",
            "address": "578 4th Place",
            "city": "Manchester",
            "state": "NH",
            "postal_code": "03105",
            "latitude": 42.9521,
            "longitude": -71.6539,
            "monday_open": "6:46 AM",
            "monday_close": "4:41 PM",
            "tuesday_open": "9:57 AM",
            "tuesday_close": "8:27 PM",
            "wednesday_open": "6:39 AM",
            "wednesday_close": "9:47 PM",
            "thursday_open": "9:44 AM",
            "thursday_close": "9:53 PM",
            "friday_open": "6:25 AM",
            "friday_close": "6:26 PM",
            "saturday_open": "7:15 AM",
            "saturday_close": "8:11 PM",
            "sunday_open": "6:47 AM",
            "sunday_close": "9:20 PM"
        },
        {
            "id": 11,
            "name": "Buckridge-Goyette",
            "url": "https://hud.gov/quis/odio/consequat/varius/integer/ac.png",
            "address": "186 Grayhawk Way",
            "city": "Florence",
            "state": "SC",
            "postal_code": "29505",
            "latitude": 34.1231,
            "longitude": -79.6893,
            "monday_open": "9:51 AM",
            "monday_close": "6:31 PM",
            "tuesday_open": "7:54 AM",
            "tuesday_close": "7:54 PM",
            "wednesday_open": "7:32 AM",
            "wednesday_close": "8:06 PM",
            "thursday_open": "8:41 AM",
            "thursday_close": "4:54 PM",
            "friday_open": "7:06 AM",
            "friday_close": "4:47 PM",
            "saturday_open": "8:48 AM",
            "saturday_close": "6:32 PM",
            "sunday_open": "9:57 AM",
            "sunday_close": "7:58 PM"
        },
        {
            "id": 12,
            "name": "Stokes, Pfannerstill and Jerde",
            "url": "http://ocn.ne.jp/lectus.jpg",
            "address": "7 Hansons Plaza",
            "city": "El Paso",
            "state": "TX",
            "postal_code": "79911",
            "latitude": 31.8925,
            "longitude": -106.5426,
            "monday_open": "7:23 AM",
            "monday_close": "9:15 PM",
            "tuesday_open": "8:53 AM",
            "tuesday_close": "4:55 PM",
            "wednesday_open": "7:14 AM",
            "wednesday_close": "4:31 PM",
            "thursday_open": "6:53 AM",
            "thursday_close": "8:22 PM",
            "friday_open": "6:20 AM",
            "friday_close": "9:01 PM",
            "saturday_open": "7:29 AM",
            "saturday_close": "5:13 PM",
            "sunday_open": "8:41 AM",
            "sunday_close": "5:53 PM"
        },
        {
            "id": 13,
            "name": "Koepp, Mertz and Kub",
            "url": "http://oracle.com/luctus/tincidunt/nulla/mollis/molestie.aspx",
            "address": "15 Northland Circle",
            "city": "Austin",
            "state": "TX",
            "postal_code": "78721",
            "latitude": 30.2721,
            "longitude": -97.6868,
            "monday_open": "6:04 AM",
            "monday_close": "9:12 PM",
            "tuesday_open": "6:48 AM",
            "tuesday_close": "5:41 PM",
            "wednesday_open": "7:36 AM",
            "wednesday_close": "8:11 PM",
            "thursday_open": "9:27 AM",
            "thursday_close": "7:28 PM",
            "friday_open": "8:16 AM",
            "friday_close": "4:07 PM",
            "saturday_open": "7:07 AM",
            "saturday_close": "9:35 PM",
            "sunday_open": "6:18 AM",
            "sunday_close": "5:46 PM"
        },
        {
            "id": 14,
            "name": "Corwin, Davis and Streich",
            "url": "https://nationalgeographic.com/pellentesque/viverra/pede/ac/diam/cras.jpg",
            "address": "21 Riverside Trail",
            "city": "Trenton",
            "state": "NJ",
            "postal_code": "08608",
            "latitude": 40.2204,
            "longitude": -74.7622,
            "monday_open": "7:04 AM",
            "monday_close": "6:47 PM",
            "tuesday_open": "9:20 AM",
            "tuesday_close": "8:34 PM",
            "wednesday_open": "9:14 AM",
            "wednesday_close": "7:14 PM",
            "thursday_open": "9:52 AM",
            "thursday_close": "7:20 PM",
            "friday_open": "6:01 AM",
            "friday_close": "4:54 PM",
            "saturday_open": "7:44 AM",
            "saturday_close": "9:30 PM",
            "sunday_open": "9:38 AM",
            "sunday_close": "4:39 PM"
        },
        {
            "id": 15,
            "name": "Effertz Inc",
            "url": "https://ycombinator.com/magnis/dis/parturient/montes/nascetur/ridiculus/mus.jpg",
            "address": "96 Anniversary Trail",
            "city": "Tyler",
            "state": "TX",
            "postal_code": "75705",
            "latitude": 32.3766,
            "longitude": -95.1252,
            "monday_open": "6:42 AM",
            "monday_close": "4:55 PM",
            "tuesday_open": "8:56 AM",
            "tuesday_close": "6:03 PM",
            "wednesday_open": "9:16 AM",
            "wednesday_close": "5:54 PM",
            "thursday_open": "6:29 AM",
            "thursday_close": "8:53 PM",
            "friday_open": "7:05 AM",
            "friday_close": "9:31 PM",
            "saturday_open": "8:08 AM",
            "saturday_close": "6:38 PM",
            "sunday_open": "6:50 AM",
            "sunday_close": "8:10 PM"
        },
        {
            "id": 16,
            "name": "Rogahn-Davis",
            "url": "http://youku.com/nonummy/integer/non/velit.html",
            "address": "4 Waywood Trail",
            "city": "Tampa",
            "state": "FL",
            "postal_code": "33680",
            "latitude": 27.872,
            "longitude": -82.4388,
            "monday_open": "9:48 AM",
            "monday_close": "6:00 PM",
            "tuesday_open": "6:00 AM",
            "tuesday_close": "6:21 PM",
            "wednesday_open": "6:14 AM",
            "wednesday_close": "6:33 PM",
            "thursday_open": "7:06 AM",
            "thursday_close": "6:28 PM",
            "friday_open": "8:40 AM",
            "friday_close": "5:43 PM",
            "saturday_open": "9:33 AM",
            "saturday_close": "6:50 PM",
            "sunday_open": "6:35 AM",
            "sunday_close": "9:06 PM"
        },
        {
            "id": 17,
            "name": "Lemke LLC",
            "url": "http://blogspot.com/adipiscing.js",
            "address": "6 Porter Circle",
            "city": "Miami",
            "state": "FL",
            "postal_code": "33190",
            "latitude": 25.5593,
            "longitude": -80.3483,
            "monday_open": "8:38 AM",
            "monday_close": "9:15 PM",
            "tuesday_open": "7:31 AM",
            "tuesday_close": "8:50 PM",
            "wednesday_open": "8:17 AM",
            "wednesday_close": "9:32 PM",
            "thursday_open": "6:21 AM",
            "thursday_close": "9:05 PM",
            "friday_open": "8:24 AM",
            "friday_close": "7:23 PM",
            "saturday_open": "6:31 AM",
            "saturday_close": "9:34 PM",
            "sunday_open": "8:58 AM",
            "sunday_close": "4:41 PM"
        },
        {
            "id": 18,
            "name": "Erdman-Jerde",
            "url": "https://zdnet.com/sed/sagittis/nam/congue.png",
            "address": "2 Spaight Point",
            "city": "Baltimore",
            "state": "MD",
            "postal_code": "21216",
            "latitude": 39.3093,
            "longitude": -76.6699,
            "monday_open": "7:35 AM",
            "monday_close": "8:37 PM",
            "tuesday_open": "7:32 AM",
            "tuesday_close": "9:30 PM",
            "wednesday_open": "9:57 AM",
            "wednesday_close": "4:08 PM",
            "thursday_open": "9:11 AM",
            "thursday_close": "9:50 PM",
            "friday_open": "6:08 AM",
            "friday_close": "6:13 PM",
            "saturday_open": "6:28 AM",
            "saturday_close": "8:13 PM",
            "sunday_open": "7:48 AM",
            "sunday_close": "5:52 PM"
        },
        {
            "id": 19,
            "name": "Gerhold, Crooks and Gerlach",
            "url": "https://reference.com/accumsan/tortor.js",
            "address": "75345 Green Ridge Drive",
            "city": "Washington",
            "state": "DC",
            "postal_code": "20051",
            "latitude": 38.8933,
            "longitude": -77.0146,
            "monday_open": "7:10 AM",
            "monday_close": "8:24 PM",
            "tuesday_open": "9:07 AM",
            "tuesday_close": "6:47 PM",
            "wednesday_open": "9:51 AM",
            "wednesday_close": "5:34 PM",
            "thursday_open": "7:16 AM",
            "thursday_close": "7:45 PM",
            "friday_open": "9:00 AM",
            "friday_close": "7:07 PM",
            "saturday_open": "6:15 AM",
            "saturday_close": "8:59 PM",
            "sunday_open": "6:04 AM",
            "sunday_close": "6:00 PM"
        },
        {
            "id": 20,
            "name": "Shanahan-Lehner",
            "url": "https://feedburner.com/nullam/molestie/nibh/in/lectus/pellentesque.js",
            "address": "637 Calypso Point",
            "city": "Olympia",
            "state": "WA",
            "postal_code": "98506",
            "latitude": 47.1042,
            "longitude": -122.87,
            "monday_open": "9:49 AM",
            "monday_close": "4:53 PM",
            "tuesday_open": "9:58 AM",
            "tuesday_close": "5:59 PM",
            "wednesday_open": "6:09 AM",
            "wednesday_close": "8:32 PM",
            "thursday_open": "7:36 AM",
            "thursday_close": "4:52 PM",
            "friday_open": "7:26 AM",
            "friday_close": "5:46 PM",
            "saturday_open": "9:14 AM",
            "saturday_close": "7:32 PM",
            "sunday_open": "7:34 AM",
            "sunday_close": "4:07 PM"
        }
    ]

    const [trucks, setTrucks] = useState([]);
    const [clickedTruck, setClickedTruck] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [mapSelected, setMapSelected] = useState(false);
    const BASE_URL = 'https://my.api.mockaroo.com/locations.json?key=a45f1200'

    function getTruckInfo() {
        // try {
            // const results = await axios.get(BASE_URL)
            // setTrucks(results.data)
            setTrucks(testData)
        }
    //     catch (err) {
    //         console.log(err)
    //     }
    // }

    return (
        <>
            <nav className="nav-mobile">
                <i className="fas fa-bars nav-left"></i>
                <img className="nav-logo" src={mobileLogo} alt="logo" />
                <i class="fa fa-map-marker nav-right" aria-hidden="true"></i>
                <img className="location-icon nav-right" src={locationIcon} alt="location-icon" />
            </nav>

        {mapSelected ? 
        <>
            <div className="wrapper">
                <Map 
                    className="MobileMap"
                    clickedTruck={clickedTruck} 
                />
                <Modal 
                    clickedTruck={clickedTruck}
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
            </div>
                <div className="navButtons">
                    <button onClick={() => setMapSelected(false)} className="white navList">List</button>
                    <button className="orange navMap">Map</button>
                </div>
            </>
        :
            <>
            {trucks.length > 0 ?
                trucks.map(truck => (
                    <TruckCard
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
                    <div className="navButtons">
                        <button className="orange navList">List</button>
                        <button onClick={() => setMapSelected(true)} className="white navMap">Map</button>
                    </div>
            </>
            }
    </>
    )
}

export default MobileHome;