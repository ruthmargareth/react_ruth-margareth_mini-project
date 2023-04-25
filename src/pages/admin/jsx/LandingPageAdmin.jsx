import '../../../LandingPage.css'
import NavbarAdmin from '../../../layout/jsx/NavbarAdmin'
import FooterAdmin from '../../../layout/jsx/FooterAdmin'
import Button from '../../../component/Button'
import Label from '../../../component/Label'
import Input from '../../../component/Input'
import TextArea from '../../../component/TextArea'
import { useNavigate } from 'react-router-dom'

const LandingPageAdmin = () => {
  const navigate = useNavigate()
  return (
    <>
    <NavbarAdmin/>
    {/* welcome */}
    <section className="body">
          <div className="container-fluid">
            <div className="row">
              <div className="col-6">
                <div className="body-font pt-5 px-5">
                  <p className="body-title">
                    TAKE <span style={{ color: "#FAC75C" }}>CARE</span> OF YOUR LOVELY{" "}
                    <span style={{ color: "#FAC75C" }}>PET</span>
                  </p>
                  <p>
                    hotel, grooming, and the facilities that we have worth for your
                    pet
                  </p>
                  <Button
                    id = {'exploreFacilitiesbtn'}
                    className = {'btn button1 body-font'}
                    label = {'Explore facilities'}
                    style={{ width: 250, textAlign: "center" }}
                    onClick={() => navigate('/Grooming-Facilities-Admin')}
                  />
                </div>
              </div>
              <div className="col-6">
                <img src="src/assets/catdog.png" alt="catdog" />
              </div>
            </div>
          </div>
        </section>

        {/* facilities */}
        <section className="facilities">
          <div className="container-fluid">
            <div className="row">
              <div className="col-9">
                <img src="src/assets/hotel.png" alt="hotel" width="100%" />
              </div>
              <div className="col-3">
                <div className="px-5 py-5">
                  <p className="facilities-font">
                    Hotel
                    <br />
                    Facilities
                  </p>
                  <Button
                    id = {'hotelFacilitiesbtn'}
                    className = {'btn button2 button-font ms-3'}
                    label = {'explore'}
                    style={{ width: 250, textAlign: "center" }}
                    onClick={() => navigate('/Hotel-Facilities-Admin')}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="facilities">
          <div className="container-fluid">
            <div className="row">
              <div className="col-3">
                <div className="px-5 py-5">
                  <p className="facilities-font">Grooming Facilities</p>
                  <Button
                    id = {'GroomingFacilitiesbtn'}
                    className = {'btn button2 button-font ms-3'}
                    label = {'explore'}
                    style={{ width: 250, textAlign: "center" }}
                    onClick={() => navigate('/Grooming-Facilities-Admin')}
                  />
                </div>
              </div>
              <div className="col-9">
                <img src="src/assets/grooming.png" alt="grooming" width="100%" />
              </div>
            </div>
          </div>
        </section>

        {/* contact us */}
        <section className="contact">
          <div className="container-fluid">
            <div className="row">
              <div className="col-5 ps-5 pt-3">
                <img src="src/assets/cat.png" alt="cat" width={600} />
              </div>
              <div className="col-7">
                <div className="contact-font px-5">
                  <p className="contact-title">Contact us</p>
                  {/* form */}
                  <form>
                    <div className="row pb-3">
                      <div className="col-25">
                        <Label
                          htmlFor = {'fullName'}
                          label = {'Full Name'}
                        />
                      </div>
                      <div className="col-75">
                        <Input
                          id = {'fullName'}
                          name = {'fullName'}
                          type = {'text'}
                          // value = {fullname}
                          // onChangeText={(e) => setNama(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row pb-3">
                      <div className="col-25">
                        <Label
                          htmlFor = {'phone'}
                          label = {'Phone number'}
                        />
                      </div>
                      <div className="col-75">
                      <Input
                          id = {'phone'}
                          name = {'phone'}
                          type = {'text'}
                          // value = {fullname}
                          // onChangeText={(e) => setNama(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row pb-3">
                      <div className="col-25">
                        <Label
                          htmlFor = {'message'}
                          label = {'Message'}
                        />
                      </div>
                      <div className="col-75">
                        <TextArea
                          id = {'message'}
                          name = {'message'}
                          style={{ height: 150 }}
                          defaultValue={""}
                          // value = {desc}
                          // onChangeText={(e) => setDesc(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="px-5">
                      <Button
                        id = {'submitForm'}
                        className = {'btn button1 contact-font'}
                        label = {'Submit'}
                        style={{ width: "100%", textAlign: "center" }}
                        // onClick={() =>{onSubmit()}}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
    <FooterAdmin/>
  </>
)}
export default LandingPageAdmin