import '../css/content.css'
import { useNavigate } from 'react-router-dom'
import Button from '../../../component/Button'
import Label from '../../../component/Label'
import Input from '../../../component/Input'

const LoginAdmin = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="container-fluid login-bg">
        <div className="row align-items-start pt-4">
          <div className="col ps-3p">
            <img src="src/assets/woofgang.png" className="logo" alt="woofgang" />
            <a className="login-font" href="#">
              WOOFGANG
            </a>
          </div>
        </div>
        <section className="text-center">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 login-font">
              <div className="fw-bold mb-2 login-title">
                <span style={{ color: "#FAC75C" }}>Log</span> In
              </div>
              <div>
                Welcome to WOOFGANG PETSHOP,{" "}
                <span style={{ color: "#FAC75C" }}>please</span> put your
              </div>
              <div className="mb-5">
                <span style={{ color: "#FAC75C" }}>login credentials</span> below to
                start using this website
              </div>
              <div className="row pb-3">
                <div className="col-25">
                  <Label
                    htmlFor = {'username'}
                    label = {'Username'}
                  />
                </div>
                <div className="col-75">
                  <Input
                    id = {'username'}
                    name = {'username'}
                    type = {'text'}
                    // value = {fullname}
                    // onChangeText={(e) => setNama(e.target.value)}
                  />
                </div>
              </div>
              <div className="row pb-3">
                <div className="col-25">
                  <Label
                    htmlFor = {'password'}
                    label = {'Password'}
                  />
                </div>
                <div className="col-75">
                  <Input
                    id = {'password'}
                    name = {'password'}
                    type = {'password'}
                    // value = {fullname}
                    // onChangeText={(e) => setNama(e.target.value)}
                  />
                </div>
              </div>
              <div className="row pt-3 ps-5">
                <Button
                  id = {'login'}
                  className={'btn button1 contact-font'}
                  label = {'Log in'}
                  style={{ width: "100%", textAlign: "center" }}
                  onClick={() => navigate('/Landing-Page-Admin')}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <img src="src/assets/login.png" alt="login" className="login-pic login-bg" />
    </>
  )}
export default LoginAdmin