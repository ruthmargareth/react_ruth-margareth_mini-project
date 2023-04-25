import '../css/Sidebar.css'
import { Link } from 'react-router-dom'

const SidebarUser = () => {
    return (
    <>
        <div className="col-3">
            <div className="sidenav-bg">
              <Link to ='/Grooming-Facilities' className="sidenav-content">
                Grooming Facilities
              </Link>
              <Link to ='/Hotel-Facilities' className="sidenav-content">
                Hotel Facilities
              </Link>
            </div>
          </div>
    </>
)}
export default SidebarUser
