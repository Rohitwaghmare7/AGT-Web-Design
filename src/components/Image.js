import React, { useState, useEffect } from "react";
import img from "../assets/image.jpg";

export default function Image() {
    const [hasJoinedGroup, setHasJoinedGroup] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const handleButtonClick = () => {
        setHasJoinedGroup((prev) => !prev);
    };

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const maxHeight = screenWidth < 990 ? "250px" : "500px";

    return (
        <div>
            <div className="card w-40 d-block mx-auto">
                <img
                    className="card-img-top"
                    src={img}
                    alt="Logo"
                    style={{
                        maxHeight: maxHeight,
                        objectFit: 'cover',
                    }}
                />
                <div className="card-img-overlay mb-5 mx-4">
                    <h1 className="position-absolute bottom-0 mb-5 text-white">
                        Computer Engineering
                    </h1>
                    <h5 className="position-absolute bottom-0 mb-3 text-white">
                        142,765 Computer Engineers follow this
                    </h5>
                    {screenWidth < 990 && (
                        <button
                            className="btn btn-outline-light position-absolute end-0"
                            style={{
                                top: '10px',
                                right: '10px',
                                border: '1px solid white',
                                backgroundColor: 'rgba(255, 255, 255, 0)',
                                color: 'white',
                            }}
                            onClick={handleButtonClick}
                        >
                            <strong>{hasJoinedGroup ? 'Leave Group' : 'Join Group'}</strong>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
