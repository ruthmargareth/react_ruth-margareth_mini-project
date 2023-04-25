// import '../../../LandingPage.css'
import '../css/content.css'
import NavbarAdmin from '../../../layout/jsx/NavbarAdmin'
import SidebarHotel from '../../../layout/jsx/SidebarHotel'
import FooterAdmin from '../../../layout/jsx/FooterAdmin'
import Label from '../../../component/Label'
import Button from '../../../component/Button'

const HotelHistoryDetail = () => {
  return (
    <>
    <NavbarAdmin/>
    {/* sidebar */}
    <div className="container-fluid">
      <div className="row">
        <SidebarHotel/>
        {/* content */}
        <div className="col-9">
          <div className="content">
            <div className="content-font px-5 py-5">
              <p className="content-title">Hotel History Detail</p>
            </div>
            <div className="row" />
            <div className="" />
            <div className="px-5 pb-5 ms-5 appointment-font">
              <div className="row pb-3">
              <div className="col-4 ps-5">
                    <Label
                      htmlFor = {'ownerName'}
                      label = {"Owner's name"}
                    />
                  </div>
                  <div className="col-1">
                    <label>:</label>
                  </div>
                  <div className="col">
                    <Label
                      htmlFor = {'ownerName'}
                      label = {"Han Jisung"}
                    />
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-4 ps-5">
                    <Label
                      htmlFor = {'ownerPhone'}
                      label = {"Owner's phone"}
                    />
                  </div>
                  <div className="col-1">
                    <label>:</label>
                  </div>
                  <div className="col">
                    <Label
                      htmlFor = {'ownerPhone'}
                      label = {"08123456789"}
                    />
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-4 ps-5">
                    <Label
                      htmlFor = {'petName'}
                      label = {"pet's name"}
                    />
                  </div>
                  <div className="col-1">
                    <label>:</label>
                  </div>
                  <div className="col">
                    <Label
                      htmlFor = {'petName'}
                      label = {"Berry"}
                    />
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-4 ps-5">
                    <Label
                      htmlFor = {'species'}
                      label = {"Species"}
                    />
                  </div>
                  <div className="col-1">
                    <label>:</label>
                  </div>
                  <div className="col">
                    <Label
                      htmlFor = {'species'}
                      label = {"Dog"}
                    />
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-4 ps-5">
                    <Label
                      htmlFor = {'breeds'}
                      label = {"Breeds"}
                    />
                  </div>
                  <div className="col-1">
                    <label>:</label>
                  </div>
                  <div className="col">
                    <Label
                      htmlFor = {'breeds'}
                      label = {"Corgi-poodle"}
                    />
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-4 ps-5">
                    <Label
                      htmlFor = {'gender'}
                      label = {"Gender"}
                    />
                  </div>
                  <div className="col-1">
                    <label>:</label>
                  </div>
                  <div className="col">
                    <Label
                      htmlFor = {'gender'}
                      label = {"Female"}
                    />
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-4 ps-5">
                    <Label
                      htmlFor = {'weight'}
                      label = {"Weight"}
                    />
                  </div>
                  <div className="col-1">
                    <label>:</label>
                  </div>
                  <div className="col">
                    <Label
                      htmlFor = {'weight'}
                      label = {"5-10kg"}
                    />
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-4 ps-5">
                    <Label
                      htmlFor = {'booking'}
                      label = {"Booking date"}
                    />
                  </div>
                  <div className="col-1">
                    <label>:</label>
                  </div>
                  <div className="col">
                    <Label
                      htmlFor = {'booking'}
                      label = {"23/01/23"}
                    />
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-4 ps-5">
                    <Label
                      htmlFor = {'pickup'}
                      label = {"Pickup date"}
                    />
                  </div>
                  <div className="col-1">
                    <label>:</label>
                  </div>
                  <div className="col">
                    <Label
                      htmlFor = {'pick'}
                      label = {"25/01/23"}
                    />
                  </div>
                </div>
                <Button
                    id = {'editGrooming'}
                    className={'btn button1 contact-font mt-3'}
                    label = {'Edit'}
                    style={{ width: "75%", textAlign: "center" }}
                    // onClick={}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    <FooterAdmin/>
  </>
)}
export default HotelHistoryDetail