import '../css/content.css'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../../component/Button'
import Label from '../../../component/Label'
import Input from '../../../component/Input'
import { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { app } from '../../../firebaseConfig'
import woofgang from '../../../assets/woofgang.png'
import login from '../../../assets/login.png'

const SignUp = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  //get auth function from firebase
  const auth = getAuth(app)

  const onSubmit = async (e) => {
    e.preventDefault()

    //send email & password to firebase sign up auth service 
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('signed in: ', user);
      navigate('/Login-Admin')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('error: ', errorCode + 'message: ', errorMessage);
    });
  }

  return (
    <>
      <div className="container-fluid login-bg">
        <div className="row align-items-start pt-4">
          <div className="col ps-3p">
            <img src={woofgang} className="logo" alt="woofgang" />
            <a className="login-font" href="#">
              WOOFGANG
            </a>
          </div>
        </div>

        <section className="text-center">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 login-font">

              <div className="fw-bold mb-2 login-title">
                <span style={{ color: "#FAC75C" }}>Sign</span> Up
              </div>

              <div>
                Welcome to WOOFGANG,{" "}
                <span style={{ color: "#FAC75C" }}>please</span> Sign up
              </div>

              <div className="mb-5">
                <span style={{ color: "#FAC75C" }}> before </span> using this website
              </div>

              <form>
                <div className="row pb-3">
                  <div className="col-25">
                    <Label
                      htmlFor = {'Email'}
                      label = {'email'}
                    />
                  </div>
                  <div className="col-75">
                    <Input
                      id = {'email'}
                      name = {'email'}
                      type = {'email'}
                      placeholder={'insert email'}
                      onChange={(e) => setEmail(e.target.value)}
                      required
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
                      placeholder={'insert password'}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="row pt-3 ps-5">
                  <Button
                    id = {'signup'}
                    className={'btn button1 contact-font'}
                    label = {'Sign up'}
                    style={{ width: "100%", textAlign: "center" }}
                    type="submit"
                    onClick={onSubmit}
                  />
                </div>
              </form>

              <div
                className="footer-font text-left ps-5 pb-3"
                style={{ fontSize: 20 }}
              >
                Already have account? 
                  <Link to={'/Login-Admin'}>
                    Log in
                  </Link>
              </div>
              
            </div>
          </div>
        </section>

      </div>
      <img src={login} alt="login" className="login-pic login-bg" />
    </>
  )}
export default SignUp