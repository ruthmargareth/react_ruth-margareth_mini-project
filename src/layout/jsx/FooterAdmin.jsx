import '../css/Footer.css'
import { Link } from 'react-router-dom'
import woofgang from '../../assets/woofgang.png'

const FooterAdmin = () => {
    return (
    <>
        <section className="footer footer-bg">
            <div className="container-fluid">
                <div className="row">

                    <div className="col-5">
                        <div className="d-flex flex-column text-left ps-5">
                            <div>
                                <img
                                    src={woofgang}
                                    className="logo"
                                    alt="woofgang"
                                />
                                <a className="footer-title" href="#">
                                    WOOFGANG
                                </a>
                            </div>
                                <p className="footer-font">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. iverra
                                nam libero justo laoreet sit amet cursus.
                                </p>
                        </div>
                    </div>

                    <div className="col-7">
                        <div className="row">

                            <div className="col-4">
                                <div className="flex-column text-center py-1">
                                    <p className="footer-font">Pages</p>
                                    <div className="d-flex flex-column justify-content-start">
                                        <Link to ='Landing-Page-Admin' className="my-1 footer-link">
                                            Home
                                        </Link>

                                        <Link to ='Grooming-Facilities-Admin' className="my-1 footer-link">
                                            Facilities
                                        </Link>

                                        <Link to ='Hotel-Appointment' className="my-1 footer-link">
                                            Hotel
                                        </Link>

                                        <Link to ='Grooming-Appointment' className="my-1 footer-link">
                                            Grooming
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="flex-column text-center py-1">
                                    <p className="footer-font">Link</p>
                                    <div className="d-flex flex-column justify-content-start">
                                        <Link to ='#' className="my-1 footer-link">
                                            Instagram
                                        </Link>

                                        <Link to ='#' className="my-1 footer-link">
                                            WhatsApp
                                        </Link>

                                        <Link to ='#' className="my-1 footer-link">
                                            Facebook
                                        </Link>

                                        <Link to ='#' className="my-1 footer-link">
                                            Join Partner
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="flex-column text-left py-1">
                                    <p className=" footer-font">Get in Touch</p>

                                    <div className="d-flex flex-column justify-content-start">
                                        <p className="my-1 footer-link" href="#">
                                            St. Chronosaurus 143, SKZ
                                        </p>
                                        <p className="my-1 footer-link" href="#">
                                            081-234-567-8
                                        </p>
                                        <p className="my-1 footer-link" href="#">
                                            woofgang@gmail.com
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <section className="footer">
                        <div className="footer-bg col-12">
                            <hr />
                            <div
                                className="footer-font text-left ps-5 pb-3"
                                style={{ fontSize: 20 }}
                            >
                                © 2023 WOOFGANG, All Right Served
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </section>
    </>
)}
export default FooterAdmin
