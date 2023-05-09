import './LandingPage.css'
import NavbarUser from './layout/jsx/NavbarUser'
import FooterUser from './layout/jsx/FooterUser'
import { useNavigate } from 'react-router-dom'
import Button from './component/Button'
import Label from './component/Label'
import Input from './component/Input'
import TextArea from './component/TextArea'
import { useState } from 'react'
import catdog from '../../../assets/catdog.png'
import hotel from '../../../assets/hotel.png'
import grooming from '../../../assets/grooming.png'
import cat from '../../../assets/cat.png'

const App = () => {
  const navigate = useNavigate()

  const [fullname, setFullname] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [contact, setContact] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    const Contact ={
      fullname: fullname,
      phone: phone,
      message:message
    }
    setContact([...contact, Contact])
    console.log(contact)
  }


  return (
    <>
    <NavbarUser/>

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
                  onClick={() => navigate('/Grooming-Facilities')}
                />
              </div>
            </div>

            <div className="col-6">
              <img src={catdog} alt="catdog" />
            </div>

          </div>
        </div>
      </section>

      {/* facilities */}
      <section className="facilities">
        <div className="container-fluid">
          <div className="row">

            <div className="col-9">
              <img src={hotel} alt="hotel" width="100%" />
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
                  onClick={() => navigate('/Hotel-Facilities')}
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
                  onClick={() => navigate('/Grooming-Facilities')}
                />
              </div>
            </div>

            <div className="col-9">
              <img src={grooming} alt="grooming" width="100%" />
            </div>

          </div>
        </div>
      </section>

      {/* contact us */}
      <section className="contact">
        <div className="container-fluid">
          <div className="row">

            <div className="col-5 ps-5 pt-3">
              <img src={cat} alt="cat" width={600} />
            </div>

            <div className="col-7">
              <div className="contact-font px-5">
                <p className="contact-title">Contact us</p>

                <form onSubmit={handleSubmit}>
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
                      value = {fullname}
                      onChange={(e) => setFullname(e.target.value)}
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
                      value = {phone}
                      onChange={(e) => setPhone(e.target.value)}
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
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="px-5">
                    <Button
                    id = {'submitForm'}
                    className = {'btn button1 contact-font'}
                    label = {'Submit'}
                    style={{ width: "100%", textAlign: "center" }}
                    type={"button"}
                    toggle={"modal"}
                    target={"#exampleModal"}
                    />

                    {/* Modal */}
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-font modal-title" id="exampleModalLabel">
                              Notification Success
                            </h5>
                            <Button 
                            type={"button"}
                            className={"btn-close"}
                            dismiss={"modal"}
                            aria-label="Close"
                            />
                          </div>

                          <div className="modal-body">
                            <div className="container "> 
                              <div className="row">
                                <div className="col my-3 modal-font">
                                  your data has been submitted. Thank you for your message
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                </form>

              </div>
            </div>
            
          </div>
        </div>
      </section>
    <FooterUser/>
    </>
  )}

export default App
