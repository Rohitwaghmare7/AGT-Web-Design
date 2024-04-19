import React, { useState } from "react";
import Car from '../assets/car.jpg';
import Nature from '../assets/nature.jpg';
import Swing from '../assets/swing.jpg';
import User from '../assets/user.jpeg';
import leisure from '../assets/leisure.jpg';
import activism from '../assets/activism.jpg';
import mba from '../assets/mba.jpg';
import phy from '../assets/phy.jpg';
import { FaEllipsisH, FaEye, FaShareAlt, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { IoLocationOutline, IoInformationCircleSharp } from 'react-icons/io5';
import { MdEdit } from 'react-icons/md';
import { AiTwotoneLike } from 'react-icons/ai';
import { MdCancel } from "react-icons/md";
import { AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai";

function CardFeed() {

    return (
        <div style={{ maxWidth: '700px' }}>
            <div className="row mb-3">
                <div className="col-12">
                    <div className="card">
                        <img src={Nature} className="card-img-top" alt="Car" style={{ maxHeight: '200px' }} />
                        <div className="card-body">
                            <h3 className="card-title">✍🏻 Article</h3>

                            <div className="d-flex justify-content-between align-items-center">
                                <strong>
                                    <h4 className="card-text">What if famous brands had regular fonts? Meet RegulaBrands!</h4>
                                </strong>

                                <div className="dropdown">
                                    <button
                                        className="btn p-0 pb-4"
                                        type="button"
                                        id="ellipsisDropdown"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        style={{
                                            border: 'none',
                                            outline: 'none',
                                            padding: '0',
                                        }}
                                    >

                                        <FaEllipsisH style={{ color: 'black', fontSize: '1.5em' }} />
                                    </button>

                                    <ul className="dropdown-menu" aria-labelledby="ellipsisDropdown">
                                        <li><a className="dropdown-item" href="#">Edit</a></li>
                                        <li><a className="dropdown-item" href="#">Report</a></li>
                                    </ul>
                                </div>
                            </div>

                            <p className="mt-4">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>


                            <div className="d-flex justify-content-between align-items-center mt-4">
                                {/* Avatar and name */}
                                <div className="d-flex align-items-center">
                                    <img src={User} alt="Avatar" className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} />
                                    <p className="mb-0">Rohit Waghmare</p>
                                </div>


                                <div className="d-flex align-items-center">
                                    <FaEye style={{ marginRight: '5px' }} />
                                    <span>1.2k views</span>

                                    <div style={{ marginLeft: '10px', padding: '8px', borderRadius: '5px', backgroundColor: '#f0f0f0' }}>
                                        <FaShareAlt style={{ color: 'gray' }} />
                                        <span style={{ marginLeft: '5px' }}>Share</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row mb-3">
                <div className="col-12">
                    <div className="card">
                        <img src={Car} className="card-img-top" alt="Nature" style={{ maxHeight: '200px' }} />
                        <div className="card-body">
                            <h3 className="card-title">🔬 Education</h3>
                            <div className="d-flex justify-content-between align-items-center">
                                <strong>
                                    <h4 className="card-text">Tax Benefits for Investment under National Pension Scheme launched by Government</h4>
                                </strong>


                                <div className="dropdown">
                                    <button
                                        className="btn p-0 pb-4"
                                        type="button"
                                        id="ellipsisDropdown"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        style={{
                                            border: 'none',
                                            outline: 'none',
                                            padding: '0',
                                        }}
                                    >

                                        <FaEllipsisH style={{ color: 'black', fontSize: '1.5em' }} />
                                    </button>


                                    <ul className="dropdown-menu" aria-labelledby="ellipsisDropdown">
                                        <li><a className="dropdown-item" href="#">Edit</a></li>
                                        <li><a class="dropdown-item" href="#">Report</a></li>
                                    </ul>
                                </div>
                            </div>
                            <p className="mt-4">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>


                            <div className="d-flex justify-content-between align-items-center mt-4">

                                <div className="d-flex align-items-center">
                                    <img src={User} alt="Avatar" className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} />
                                    <p className="mb-0">Rohit Waghmare</p>
                                </div>


                                <div className="d-flex align-items-center">
                                    <FaEye style={{ marginRight: '5px' }} />
                                    <span>1.2k views</span>

                                    <div style={{ marginLeft: '10px', padding: '8px', borderRadius: '5px', backgroundColor: '#f0f0f0' }}>
                                        <FaShareAlt style={{ color: 'gray' }} />
                                        <span style={{ marginLeft: '5px' }}>Share</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row mb-3">
                <div className="col-12">
                    <div className="card">
                        <img src={Swing} className="card-img-top" alt="Swing" style={{ maxHeight: '200px' }} />
                        <div className="card-body">
                            <h3 className="card-title">🗓️ Meetup</h3>
                            <div className="d-flex justify-content-between align-items-center">
                                <strong>
                                    <h4 className="card-text">Finance & Investment Elite Social Mixer @Lujiazui</h4>
                                </strong>

                                <div className="dropdown">
                                    <button
                                        className="btn p-0 pb-1"
                                        type="button"
                                        id="ellipsisDropdown"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        style={{
                                            border: 'none',
                                            outline: 'none',
                                            padding: '0',
                                        }}
                                    >

                                        <FaEllipsisH style={{ color: 'black', fontSize: '1.5em' }} />
                                    </button>


                                    <ul className="dropdown-menu" aria-labelledby="ellipsisDropdown">
                                        <li><a className="dropdown-item" href="#">Edit</a></li>
                                        <li><a className="dropdown-item" href="#">Report</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">

                                <div className="d-flex align-items-center me-3 mt-2 mb-2">
                                    <FaCalendarAlt style={{ marginRight: '5px' }} />
                                    <span>April 15, 2024</span>
                                </div>

                                <div className="d-flex align-items-center mx-3">
                                    <FaMapMarkerAlt style={{ marginRight: '5px' }} />
                                    <span>Aurangabad, Maharashtra</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mt-2 mb-2">
                                <button
                                    style={{
                                        backgroundColor: 'white',
                                        color: 'red', 
                                        width: '100%', 
                                        padding: '5px', 
                                        border: '1px solid',
                                        borderColor: 'black',
                                        borderRadius: '10px', 
                                        fontWeight: 'bold', 
                                        cursor: 'pointer', 
                                        textAlign: 'center'
                                    }}
                                >
                                    Visit Website
                                </button>
                            </div>

                            <p className="card-text"><small className="text-muted">Last updated 7 mins ago</small></p>


                            <div className="d-flex justify-content-between align-items-center mt-4">

                                <div className="d-flex align-items-center">
                                    <img src={User} alt="Avatar" className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} />
                                    <p className="mb-0">Rohit Waghmare</p>
                                </div>


                                <div className="d-flex align-items-center">
                                    <FaEye style={{ marginRight: '5px' }} />
                                    <span>1.2k views</span>

                                    <div style={{ marginLeft: '10px', padding: '8px', borderRadius: '5px', backgroundColor: '#f0f0f0' }}>
                                        <FaShareAlt style={{ color: 'gray' }} />
                                        <span style={{ marginLeft: '5px' }}>Share</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">💼️ Job</h3>
                            <div className="d-flex justify-content-between align-items-center">
                                <strong>
                                    <h4 className="card-text">Software Developer</h4>
                                </strong>



                                <div className="dropdown">
                                    <button
                                        className="btn p-0 pb-4"
                                        type="button"
                                        id="ellipsisDropdown"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        style={{
                                            border: 'none',
                                            outline: 'none',
                                            padding: '0',
                                        }}
                                    >

                                        <FaEllipsisH style={{ color: 'black', fontSize: '1.5em' }} />
                                    </button>

                                    <ul className="dropdown-menu" aria-labelledby="ellipsisDropdown">
                                        <li><a className="dropdown-item" href="#">Edit</a></li>
                                        <li><a className="dropdown-item" href="#">Report</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">

                                <div className="d-flex align-items-center me-3 mt-2 mb-2">
                                    <FaCalendarAlt style={{ marginRight: '5px' }} />
                                    <span>April 15, 2024</span>
                                </div>

                                <div className="d-flex align-items-center mx-3">
                                    <FaMapMarkerAlt style={{ marginRight: '5px' }} />
                                    <span>Aurangabad, Maharashtra</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mt-2 mb-2">
                                <button
                                    style={{
                                        backgroundColor: 'white',
                                        color: 'green',
                                        width: '100%',
                                        padding: '5px',
                                        border: '1px solid',
                                        borderColor: 'black',
                                        borderRadius: '10px',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        textAlign: 'center'
                                    }}
                                >
                                    Apply on TimesJob
                                </button>
                            </div>

                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>

                            <div className="d-flex justify-content-between align-items-center mt-4">

                                <div className="d-flex align-items-center">
                                    <img src={User} alt="Avatar" className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} />
                                    <p className="mb-0">Rohit Waghmare</p>
                                </div>


                                <div className="d-flex align-items-center">
                                    <FaEye style={{ marginRight: '5px' }} />
                                    <span>1.2k views</span>

                                    <div style={{ marginLeft: '10px', padding: '8px', borderRadius: '5px', backgroundColor: '#f0f0f0' }}>
                                        <FaShareAlt style={{ color: 'gray' }} />
                                        <span style={{ marginLeft: '5px' }}>Share</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Sidebar() {
    return (

        <div className="sidebar" style={{ width: '400px', paddingLeft: '30px' }}>

            <div className="container-sm p-5">
                <div className="border-bottom" style={{ display: 'flex', alignItems: 'center' }}>
                    <span className="mb-2" style={{ fontSize: '28px' }}><IoLocationOutline /></span>
                    <input
                        className="p-2"
                        type="text"
                        placeholder="Enter Your Location"
                        style={{ border: 'none', outline: 'none', fontSize: '20px' }}
                    />
                    <span className="mb-2" style={{ fontSize: '30px' }}><MdEdit /></span>
                </div>
                <div className="mb-5">
                    <span><IoInformationCircleSharp /></span>
                    <span className="mx-2" style={{ color: "#b7afaf" }}>Your location will help us serve better and extend a personalised experience.</span>
                </div>


                <div className="mb-3">
                    <span><AiTwotoneLike /></span>
                    <span className="mx-2">RECOMMENDED GROUPS</span>
                </div>


                <div className="row mb-4">
                    <span className="me-2 col-2">
                        <img src={leisure} alt="Leisure" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                    </span>
                    <p className="col-6">Leisure</p>
                    <button type="button" className="btn col rounded-pill" style={{ backgroundColor: "#dddbdc" }}>Follow</button>
                </div>


                <div className="row mb-4">
                    <span className="me-2 col-2">
                        <img src={activism} alt="Activism" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                    </span>
                    <p className="col-6">Activism</p>
                    <button type="button" className="btn col rounded-pill" style={{ backgroundColor: "#dddbdc" }}>Follow</button>
                </div>

                <div className="row mb-4">
                    <span className="me-2 col-2">
                        <img src={mba} alt="MBA" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                    </span>
                    <p className="col-6">MBA</p>
                    <button type="button" className="btn col rounded-pill" style={{ backgroundColor: "#dddbdc" }}>Follow</button>
                </div>

                <div className="row mb-4">
                    <span className="me-2 col-2">
                        <img src={phy} alt="Physics" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                    </span>
                    <p className="col-6">Physics</p>
                    <button type="button" className="btn col rounded-pill" style={{ backgroundColor: "#dddbdc" }}>Follow</button>
                </div>

                <div className="row justify-content-end">
                    <button type="button" className="btn btn-outline-primary" style={{ border: "none" }}>See more...</button>
                </div>
            </div>
        </div>
    );
}
export default function BComponent() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [isLoginForm, setIsLoginForm] = useState(false);

    const toggleOffcanvas = () => {
        setShowOffcanvas(!showOffcanvas);
    };
    const toggleFormType = (e) => {
        e.preventDefault();
        setIsLoginForm(!isLoginForm);
    };
    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center' }}>

            <div className="row w-100" style={{ maxWidth: '1200px', margin: '0 auto' }}>

                <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 px-0">
                    <CardFeed />
                </div>

                <div className="col-lg-4 d-none d-lg-block px-0">
                    <Sidebar />
                </div>
            </div>
            <div>

                <div>

                    <div
                        className="float-icon-button d-md-none d-lg-none"
                        style={{
                            position: 'fixed',
                            bottom: '20px',
                            right: '20px',
                            width: '50px',
                            height: '50px',
                            backgroundColor: 'red',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                        }}
                        onClick={toggleOffcanvas}
                    >
                        <MdEdit size={24} color="white" />
                    </div>


                    <div
                        className={`offcanvas offcanvas-bottom ${showOffcanvas ? "show" : "close"}`}
                        tabIndex="-1"
                        id="offcanvasBottom"
                        aria-labelledby="offcanvasBottomLabel"
                        style={{ height: 'fit-content' }}
                    >
                        <div className="offcanvas-header" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h3 className="offcanvas-title" id="offcanvasBottomLabel">
                                {isLoginForm ? "Log In" : "Create Account"}
                            </h3>

                            <MdCancel
                                size={24}
                                color="black"
                                style={{ cursor: 'pointer' }}
                                onClick={toggleOffcanvas}
                                aria-label="Close"
                                data-bs-dismiss="offcanvas"
                            />
                        </div>
                        <div className="offcanvas-body small">

                            {isLoginForm ? (

                                <form>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" placeholder="Email" required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" placeholder="Password" required />
                                    </div>

                                    <div className="mb-3">
                                        <input type="password" className="form-control" placeholder="Confirm Password" required />
                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <button type="submit" className="btn btn-primary">Log In</button>

                                        <a
                                            href="#"
                                            onClick={toggleFormType}
                                            className="align-self-center"
                                            style={{ textDecoration: 'none', color: 'blue' }}
                                        >
                                            Create Account
                                        </a>
                                    </div>
                                </form>
                            ) : (

                                <form>

                                    <div className="row mb-3">
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="First Name" required />
                                        </div>
                                        <div className="col">
                                            <input type="text" className="form-control" placeholder="Last Name" required />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" className="form-control" placeholder="Email" required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" placeholder="Password" required />
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" placeholder="Confirm Password" required />
                                    </div>

                                    <div className="d-flex justify-content-between">

                                        <button type="submit" className="btn btn-primary">Create Account</button>

                                        <a
                                            href="#"
                                            onClick={toggleFormType}
                                            className="align-self-center"
                                            style={{ textDecoration: 'none', color: 'blue' }}
                                        >
                                            Sign In
                                        </a>
                                    </div>
                                </form>
                            )}

                            <div className="d-flex justify-content-center align-items-center mt-3" style={{ width: '100%', border: '1px solid gray' }}>
                                <button className="btn">
                                    <AiFillFacebook size={20} style={{ color: 'blue' }} /> Sign in with Facebook
                                </button>
                            </div>
                            <div className="d-flex justify-content-center align-items-center mt-2" style={{ width: '100%', border: '1px solid gray' }}>
                                <button className="btn">
                                    <AiFillGoogleCircle size={20} style={{ color: 'green' }} /> Sign in with Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

