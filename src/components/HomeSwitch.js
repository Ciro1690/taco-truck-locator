import React, {useState, useEffect} from 'react';
import MobileHome from './MobileHome';
import DesktopHome from './DesktopHome';

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
            {windowWidth > 480 ?
                <DesktopHome /> :
                <MobileHome />
            }
        </>
    );
}

export default HomeSwitch;
