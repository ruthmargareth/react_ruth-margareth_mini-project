// import '../../../LandingPage.css'
import '../css/content.css'
import NavbarAdmin from '../../../layout/jsx/NavbarAdmin'
import SidebarGrooming from '../../../layout/jsx/SidebarGrooming'
import FooterAdmin from '../../../layout/jsx/FooterAdmin'
import Button from '../../../component/Button'
import { useNavigate } from 'react-router-dom'

const GroomingHistory = () => {
  const navigate = useNavigate()

  return (
    <>
    <NavbarAdmin/>
    {/* sidebar */}
    <div className="container-fluid">
      <div className="row">
        <SidebarGrooming/>
        {/* content */}
        <div className="col-9">
          <div className="content">
            <div className="content-font px-5 py-5">
              <p className="content-title">Grooming History</p>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4 pb-5">
              <div className="col">
                <div className="card h-90 card-bg">
                  <div className="card-body">
                    <h5 className="card-title card-font">Berry</h5>
                    <p className="card-text card-font">species: dog</p>
                    <p className="card-text card-font">breed: corgi-poodle</p>
                    <p className="card-text card-font">packet: styling</p>
                    <div className="row">
                      <div className="col-6">
                      <Button
                        id = {'editbtn'}
                        className = {'btn button2 body-font'}
                        label = {'Edit'}
                        style={{ width: 150, textAlign: "center" }}
                        onClick={() => navigate('/Grooming-History-Detail')}
                      />
                      </div>
                      <div className="col-6">
                        <a href="#">
                          <button
                            className="btn button1 body-font"
                            style={{ width: 150, textAlign: "center" }}
                          >
                            Delete
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <FooterAdmin/>
  </>
)}
export default GroomingHistory