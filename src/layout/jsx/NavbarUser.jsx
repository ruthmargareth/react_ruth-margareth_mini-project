import '../css/Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../component/Button'
import woofgang from '../../assets/woofgang.png'

const NavbarUser = () => {
    const navigate = useNavigate() 
    
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-shadow navbar-bg pt-4">
            <div className="container-fluid">
                <img src={woofgang} className="logo" alt="woofgang" />
                <Link to="/" className="navbar-brand navbar-font navbar-title">
                    WOOFGANG
                </Link>
                <div
                    className="collapse navbar-collapse justify-content-center"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item mx-4">
                            <Link to ='/' className="nav-link navbar-font navbar-content" aria-current="page">
                                    Home
                            </Link>
                        </li>

                        <li className="nav-item mx-4">
                            <Link to ='/Grooming-History-User' className="nav-link navbar-font navbar-content" aria-current="page">
                                Grooming History
                            </Link>
                        </li>

                        <li className="nav-item mx-4">
                            <Link to ='/Hotel-History-User' className="nav-link navbar-font navbar-content" aria-current="page">
                                Hotel History
                            </Link>
                        </li>

                        <li className="nav-item mx-4">
                            <Link to ='#' className="nav-link navbar-font navbar-content" aria-current="page">
                                Contact us
                            </Link>
                        </li>
                        
                    </ul>
                </div>
                {/* login */}
                <div className="collapse navbar-collapse justify-content-center">
                    <Button
                        id = {'loginbtn'}
                        className = {'btn button1 navbar-font'}
                        label = {'Login'}
                        style={{ width: 150 }}
                        onClick={() => navigate('/Login-Admin')}
                    />
                </div>
            </div>
        </nav>
    </>
)}
export default NavbarUser