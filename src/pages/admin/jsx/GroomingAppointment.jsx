// import '../../../LandingPage.css'
import '../css/content.css'
import NavbarAdmin from '../../../layout/jsx/NavbarAdmin'
import SidebarGrooming from '../../../layout/jsx/SidebarGrooming'
import FooterAdmin from '../../../layout/jsx/FooterAdmin'
import Label from '../../../component/Label'
import Input from '../../../component/Input'
import Button from '../../../component/Button'

const GroomingAppointment = () => {
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
              <p className="content-title">Grooming Appointment</p>
            </div>
            <form>
              <div className="px-5 pb-5 appointment-font">
                <div className="row pb-3">
                  <div className="col-25">
                    <Label
                      htmlFor = {'ownerName'}
                      label = {"Owner's name"}
                    />
                  </div>
                  <div className="col-75">
                    <Input
                      id = {'ownerName'}
                      name = {'ownerName'}
                      type = {'text'}
                      // value = {fullname}
                      // onChangeText={(e) => setNama(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-25">
                    <Label
                      htmlFor = {'ownerPhone'}
                      label = {"Owner's phone"}
                    />
                  </div>
                  <div className="col-75">
                    <Input
                      id = {'ownerPhone'}
                      name = {'ownerPhone'}
                      type = {'text'}
                      // value = {fullname}
                      // onChangeText={(e) => setNama(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-25">
                    <Label
                      htmlFor = {'petName'}
                      label = {"Pet's name"}
                    />
                  </div>
                  <div className="col-75">
                    <Input
                      id = {'petName'}
                      name = {'petName'}
                      type = {'text'}
                      // value = {fullname}
                      // onChangeText={(e) => setNama(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-25">
                    <Label
                      htmlFor = {'species'}
                      label = {"Species"}
                    />
                  </div>
                  <div className="col-75">
                    <div className="dropdown dropdown-input">
                      <select className="form-select appointment-font">
                        <option selected="" disabled="" value="">
                          Choose pet's species...
                        </option>
                        <option>cat</option>
                        <option>dog</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-25">
                    <Label
                      htmlFor = {'breeds'}
                      label = {"Breeds"}
                    />
                  </div>
                  <div className="col-75">
                    <Input
                      id = {'breed'}
                      name = {'breed'}
                      type = {'text'}
                      // value = {fullname}
                      // onChangeText={(e) => setNama(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-25">
                  <Label
                      htmlFor = {'gender'}
                      label = {"Gender"}
                    />
                  </div>
                  <div className="col-75">
                    <div className="form-check form-check-inline w-25">
                      <Input
                        id = {'male'}
                        name = {'gender'}
                        type = {'radio'}
                        className={'form-check-input'}
                        defaultValue={'Male'}
                        // value = {fullname}
                        // onChangeText={(e) => setNama(e.target.value)}
                      />
                      <Label
                        htmlFor = {'male'}
                        label = {"Male"}
                      />
                    </div>
                    <div className="form-check form-check-inline">
                      <Input
                        id = {'female'}
                        name = {'gender'}
                        type = {'radio'}
                        className={'form-check-input'}
                        defaultValue={'Female'}
                        // value = {fullname}
                        // onChangeText={(e) => setNama(e.target.value)}
                      />
                      <Label
                        htmlFor = {'female'}
                        label = {"Female"}
                      />
                    </div>
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-25">
                    <Label
                      htmlFor = {'weight'}
                      label = {"Weight"}
                    />
                  </div>
                  <div className="col-75">
                    <div className="dropdown dropdown-input">
                      <select className="form-select appointment-font">
                        <option selected="" disabled="" value="">
                          Choose pet's weight...
                        </option>
                        <option>0-5kg</option>
                        <option>5-10kg</option>
                        <option>10-20kg</option>
                        <option>20-30kg</option>
                        <option>30kg up</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-25">
                    <Label
                      htmlFor = {'packet'}
                      label = {"Packet"}
                    />
                  </div>
                  <div className="col-75">
                    <div className="dropdown dropdown-input">
                      <select className="form-select appointment-font">
                        <option selected="" disabled="" value="">
                          Choose pet's packet...
                        </option>
                        <option>styling</option>
                        <option>basic grooming</option>
                        <option>blow dry</option>
                        <option>wash + dry</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-25">
                    <Label
                      htmlFor = {'date'}
                      label = {"Date"}
                    />
                  </div>
                  <div className="col-75">
                    <Input
                      className={'form-control appointment-font'}
                      id = {'date'}
                      name = {'date'}
                      type = {'date'}
                      // value = {fullname}
                      // onChangeText={(e) => setNama(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-25">
                    <Label
                      htmlFor = {'time'}
                      label = {"Time"}
                    />
                  </div>
                  <div className="col-75">
                    <Input
                      className={'form-control appointment-font'}
                      id = {'time'}
                      name = {'time'}
                      type = {'time'}
                      // value = {fullname}
                      // onChangeText={(e) => setNama(e.target.value)}
                    />
                  </div>
                </div>
                  <Button
                    id = {'submitGrooming'}
                    className={'btn button1 contact-font mt-3'}
                    label = {'Booking Appointment'}
                    style={{ width: "100%", textAlign: "center" }}
                    // onClick={}
                  />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <FooterAdmin/>
  </>
)}
export default GroomingAppointment