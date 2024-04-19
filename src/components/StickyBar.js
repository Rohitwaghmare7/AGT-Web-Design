import React, { useState } from 'react';
import { IoPeople, IoExitOutline } from 'react-icons/io5';

export default function StickyMenu() {
    const [isInGroup, setIsInGroup] = useState(false);
    const handleButtonClick = () => {
        setIsInGroup(!isInGroup);
    };

    return (
        <div className="sticky-menu-container bg-white p-3 d-none d-lg-block">
            <div className="container" style={{ paddingLeft: '70px', paddingRight: '100px' }}>

                <div className="d-flex justify-content-between align-items-center">

                    <div className="d-flex">
                        <a href="#all-post" className="nav-link fw-bold me-3">
                            All Post
                        </a>
                        <a href="#article" className="nav-link fw-bold me-3">
                            Article
                        </a>
                        <a href="#education" className="nav-link fw-bold me-3">
                            Education
                        </a>
                        <a href="#job" className="nav-link fw-bold">
                            Job
                        </a>
                    </div>


                    <div className="d-flex">
                        <button className="btn btn-outline-primary me-2">Write Post</button>
                        <button
                            className={`btn ${isInGroup ? 'btn-outline-danger' : 'btn-outline-secondary'}`}
                            onClick={handleButtonClick}
                        >

                            {isInGroup ? (
                                <>
                                    <IoExitOutline /> Leave Group
                                </>
                            ) : (
                                <>
                                    <IoPeople /> Join Group
                                </>
                            )}
                        </button>
                    </div>
                </div>
                <div className="mt-3 mb-2">
                    <hr />
                </div>
            </div>
        </div>
    );
}
