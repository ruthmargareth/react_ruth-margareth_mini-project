import FooterUser from '../../../layout/jsx/FooterUser'
import NavbarUser from '../../../layout/jsx/NavbarUser'
import SidebarUser from '../../../layout/jsx/SidebarUser'
import '../css/content.css'

const HotelFacilities = () => {
    return (
    <>
      <NavbarUser/>
      {/* sidebar */}
      <div className="container-fluid">
        <div className="row">
          <SidebarUser/>
          {/* content */}
          <div className="col-9">
            <div className="content">
              <div className="content-font px-5 py-5">
                <p className="content-title">Hotel Facilities</p>
              </div>
              {/* card */}
              <div className="row row-cols-1 row-cols-md-3 g-4 pb-5">
                <div className="col">
                  <div className="card h-90 card-layout">
                    <img
                      src="src/assets/outdoor.png"
                      className="card-img-top"
                      alt="outdoor"
                    />
                    <div className="card-body">
                      <h5 className="card-title card-font">outdoor</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-90 card-layout">
                    <img
                      src="src/assets/indoor.png"
                      className="card-img-top"
                      alt="indoor"
                    />
                    <div className="card-body">
                      <h5 className="card-title card-font">indoor</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-90 card-layout">
                    <img
                      src="src/assets/swimming.png"
                      className="card-img-top"
                      alt="swimming pool"
                    />
                    <div className="card-body">
                      <h5 className="card-title card-font">swimming pool</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-90 card-layout">
                    <img
                      src="src/assets/doghotel.png"
                      className="card-img-top"
                      alt="dog hotel"
                    />
                    <div className="card-body">
                      <h5 className="card-title card-font">dog's hotel</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-90 card-layout">
                    <img
                      src="src/assets/cathotel.png"
                      className="card-img-top"
                      alt="cat hotel"
                    />
                    <div className="card-body">
                      <h5 className="card-title card-font">cat's hotel</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-90 card-layout">
                    <img
                      src="src/assets/play.png"
                      className="card-img-top"
                      alt="playground"
                    />
                    <div className="card-body">
                      <h5 className="card-title card-font">playground</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterUser/>
    </>
    )}
export default HotelFacilities
