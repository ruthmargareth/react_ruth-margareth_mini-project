import '../css/Sidebar.css'
import { Link } from 'react-router-dom'

const SidebarGroomingUser = () => {
    return (
    <>
        <div className="col-3">
            <div className="sidenav-bg">
              <Link to ='/Grooming-History-User' className="sidenav-content">
                Grooming History
              </Link>
              
              <Link to ='/Grooming-Facilities' className="sidenav-content">
                Grooming Facilities
              </Link>
            </div>
          </div>
    </>
)}
export default SidebarGroomingUser
