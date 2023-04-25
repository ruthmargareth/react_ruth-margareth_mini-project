import FooterUser from '../../../layout/jsx/FooterUser'
import NavbarUser from '../../../layout/jsx/NavbarUser'
import SidebarUser from '../../../layout/jsx/SidebarUser'
import '../css/content.css'

const GroomingFacilities = () => {
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
                <p className="content-title">Grooming Facilities</p>
              </div>
              {/* card */}
              <div className="row row-cols-1 row-cols-md-3 g-4 pb-5">
                <div className="col">
                  <div className="card h-90 card-layout">
                    <img
                      src="src/assets/bath.png"
                      className="card-img-top"
                      alt="bath"
                    />
                    <div className="card-body">
                      <h5 className="card-title card-font">wash and dry</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-90 card-layout">
                    <img
                      src="src/assets/blowdry.png"
                      className="card-img-top"
                      alt="blow dry"
                    />
                    <div className="card-body">
                      <h5 className="card-title card-font">blow dry</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-90 card-layout">
                    <img
                      src="src/assets/cut.png"
                      className="card-img-top"
                      alt="basic grooming"
                    />
                    <div className="card-body">
                      <h5 className="card-title card-font">basic grooming</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-90 card-layout">
                    <img
                      src="src/assets/styling.png"
                      className="card-img-top"
                      alt="styling"
                    />
                    <div className="card-body">
                      <h5 className="card-title card-font">styling</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-90 card-layout">
                    <img
                      src="src/assets/nail.png"
                      className="card-img-top"
                      alt="nail cut"
                    />
                    <div className="card-body">
                      <h5 className="card-title card-font">nail cut</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-90 card-layout">
                    <img
                      src="src/assets/trimming.png"
                      className="card-img-top"
                      alt="trimming"
                    />
                    <div className="card-body">
                      <h5 className="card-title card-font">trimming</h5>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-90 card-layout">
                    <img
                      src="src/assets/brush.png"
                      className="card-img-top"
                      alt="brushing"
                    />
                    <div className="card-body">
                      <h5 className="card-title card-font">brushing</h5>
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
export default GroomingFacilities