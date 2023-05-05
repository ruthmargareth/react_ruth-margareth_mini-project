import Button from '../../component/Button'
import '../css/Navbar.css'
import { Link, Navigate } from 'react-router-dom'


const NavbarAdmin = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-shadow navbar-bg font pt-4">
                <div className="container-fluid">
                <img src="/src/assets/woofgang.png" className="logo" alt="woofgang" />
                <Link to ='/Landing-Page-Admin' className="navbar-brand navbar-font navbar-title">
                    WOOFGANG
                </Link>
                <div
                    className="collapse navbar-collapse justify-content-center"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                    <li className="nav-item mx-4">
                        <Link to ='/Landing-Page-Admin' className="nav-link navbar-font navbar-content" aria-current="page">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item dropdown mx-4">
                        <Link to ='#' className="nav-link dropdown-toggle navbar-font navbar-content"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        >
                            Facilities
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <Link to ='/Grooming-Facilities-Admin' className="dropdown-item navbar-font">
                                Grooming facilities
                            </Link>
                        </li>
                        <li>
                            <Link to ='/Hotel-Facilities-Admin' className="dropdown-item navbar-font">
                                Hotel facilities
                            </Link>
                        </li>
                        </ul>
                    </li>
                    <li className="nav-item mx-4">
                        <Link to ='/Grooming-History' className="nav-link navbar-font navbar-content"
                        aria-current="page">
                            Grooming
                        </Link>
                    </li>
                    <li className="nav-item mx-4">
                        <Link to ='/Hotel-History' className="nav-link navbar-font navbar-content"
                        aria-current="page">
                            Hotel
                        </Link>
                    </li>
                    <li className="nav-item mx-4">
                        <Link to ='#' className="nav-link navbar-font navbar-content"
                        aria-current="page">
                            Contact us
                        </Link>
                    </li>
                    </ul>
                </div>
                {/* login */}
                <div className="collapse navbar-collapse justify-content-center">
                <Link to={'/'}>
                    <Button
                        id = {'loginbtn'}
                        className = {'btn button1 navbar-font'}
                        label = {'Log out'}
                        style={{ width: 150 }}
                        //onClick={() => navigate('/')}
                    />
                </Link>
                </div>
                </div>
            </nav>
        </>
    )}
export default NavbarAdmin