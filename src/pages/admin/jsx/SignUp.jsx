import '../css/content.css'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../../component/Button'
import Label from '../../../component/Label'
import Input from '../../../component/Input'
import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'


const SignUp = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  //get auth function from firebase
  const auth = getAuth()

  const onsubmit = async (e) => {
    e.preventDefault();

    //send email & password to firebase sign up auth service 
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // console.log('signed in: ', user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // console.log('error: ', errorCode + 'message: ', errorMessage);
    });
  }

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
                <Link to={'/Login-Admin'}>
                  <Button
                    id = {'signup'}
                    className={'btn button1 contact-font'}
                    label = {'Sign up'}
                    style={{ width: "100%", textAlign: "center" }}
                    type="submit"
                    onClick={onsubmit}
                  />
                </Link>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <img src="src/assets/login.png" alt="login" className="login-pic login-bg" />
    </>
  )}
export default SignUp