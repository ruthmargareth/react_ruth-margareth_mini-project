import '../css/Sidebar.css'
import { Link } from 'react-router-dom'

const SidebarGrooming = () => {
    return (
        <>
            <div className="col-3">
                <div className="sidenav-bg">
                    <Link to ='/Grooming-Appointment' className="sidenav-content">
                        Appointment
                    </Link>

                    <Link to ='/Grooming-History' className="sidenav-content">
                        History
                    </Link>
                    
                    <Link to ='/Grooming-Facilities-Admin' className="sidenav-content">
                        Facilities
                    </Link>
                </div>
            </div>
        </>
    )}
export default SidebarGrooming