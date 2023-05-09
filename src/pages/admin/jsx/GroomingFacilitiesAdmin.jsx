import '../css/content.css'
import NavbarAdmin from '../../../layout/jsx/NavbarAdmin'
import SidebarGrooming from '../../../layout/jsx/SidebarGrooming'
import FooterAdmin from '../../../layout/jsx/FooterAdmin'
import bath from '../../../assets/bath.png'
import blowdry from '../../../assets/blowdry.png'
import cut from '../../../assets/cut.png'
import styling from '../../../assets/styling.png'
import nail from '../../../assets/nail.png'
import trimming from '../../../assets/trimming.png'
import brush from '../../../assets/brush.png'

const GroomingFacilitiesAdmin = () => {
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
                <p className="content-title">Grooming Facilities</p>
              </div>

              <div className="row row-cols-1 row-cols-md-3 g-4 pb-5">

                <div className="col">
                  <div className="card h-90 card-layout">
                    <img
                      src={bath}
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
                      src={blowdry}
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
                      src={cut}
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
                      src={styling}
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
                      src={nail}
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
                      src={trimming}
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
                      src={brush}
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
    <FooterAdmin/>
  </>
)}
export default GroomingFacilitiesAdmin