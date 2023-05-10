import '../../../LandingPage.css'
import NavbarAdmin from '../../../layout/jsx/NavbarAdmin'
import FooterAdmin from '../../../layout/jsx/FooterAdmin'
import Button from '../../../component/Button'
import Label from '../../../component/Label'
import Input from '../../../component/Input'
import TextArea from '../../../component/TextArea'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import catdog from '../../../assets/catdog.png'

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
                <span style={{ color: "#FAC75C" }}>WELCOME TO</span> ADMIN HOMEPAGE
              </p>

              <p>
                let's start make an appointment for our customer's pet
              </p>

              <div className="row">
                <div className="col">
                  <Button
                    id = {'groomingbtn'}
                    className = {'btn button1 body-font'}
                    label = {'Grooming'}
                    style={{ width: 250, textAlign: "center" }}
                    onClick={() => navigate('/Grooming-Appointment')}
                  />
                </div>
                <div className="col">
                  <Button
                    id = {'hotelbtn'}
                    className = {'btn button1 body-font'}
                    label = {'Hotel'}
                    style={{ width: 250, textAlign: "center" }}
                    onClick={() => navigate('/Hotel-Appointment')}
                  />
                </div>
              </div>

            </div>
          </div>

          <div className="col-6">
            <img src={catdog} alt="catdog" />
          </div>

        </div>
      </div>
    </section>

  <FooterAdmin/>
  </>
)}
export default LandingPageAdmin