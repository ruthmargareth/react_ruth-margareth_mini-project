import '../css/Sidebar.css'
import { Link } from 'react-router-dom'

const SidebarHotel = () => {
    return (
        <>
            <div className="col-3">
                <div className="sidenav-bg">
                    <Link to ='/Hotel-Appointment' className="sidenav-content">
                        Appointment
                    </Link>
                    <Link to ='/Hotel-History' className="sidenav-content">
                        History
                    </Link>
                    <Link to ='/Hotel-Facilities-Admin' className="sidenav-content">
                        Facilities
                    </Link>
                </div>
            </div>
        </>
    )}
export default SidebarHotel