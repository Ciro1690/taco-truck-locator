import React, {useState, useEffect} from 'react';
import MobileHome from './mobile/MobileHome';
import DesktopHome from './desktop/DesktopHome';

const HomeSwitch = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    return (
        <>
            {windowWidth > 800 ?
                <DesktopHome /> :
                <MobileHome />
            }
        </>
    );
}

export default HomeSwitch;
