import FooterUser from '../../../layout/jsx/FooterUser'
import NavbarUser from '../../../layout/jsx/NavbarUser'
import SidebarHotelUser from '../../../layout/jsx/SidebarHotelUser'
import '../css/content.css'
import outdoor from '../../../assets/outdoor.png'
import indoor from '../../../assets/indoor.png'
import swimming from '../../../assets/swimming.png'
import doghotel from '../../../assets/doghotel.png'
import cathotel from '../../../assets/cathotel.png'
import play from '../../../assets/play.png'

const HotelFacilities = () => {
    return (
    <>
    <NavbarUser/>
      
      {/* sidebar */}
      <div className="container-fluid">
        <div className="row">

          <SidebarHotelUser/>
          {/* content */}

          <div className="col-9">
            <div className="content">

              <div className="content-font px-5 py-5">
                <p className="content-title">Hotel Facilities</p>
              </div>

              <div className="row row-cols-1 row-cols-md-3 g-4 pb-5">

                <div className="col">
                  <div className="card h-90 card-layout">
                    <img
                      src={outdoor}
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
                      src={indoor}
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
                      src={swimming}
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
                      src={doghotel}
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
                      src={cathotel}
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
                      src={play}
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
