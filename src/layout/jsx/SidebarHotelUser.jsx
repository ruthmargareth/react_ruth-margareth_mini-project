import '../css/Sidebar.css'
import { Link } from 'react-router-dom'

const SidebarHotelUser = () => {
    return (
    <>
        <div className="col-3">
            <div className="sidenav-bg">
              <Link to ='/Hotel-History-User' className="sidenav-content">
                Hotel History
              </Link>
              
              <Link to ='/Hotel-Facilities' className="sidenav-content">
                Hotel Facilities
              </Link>
            </div>
          </div>
    </>
)}
export default SidebarHotelUser
