import '../css/content.css'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../../component/Button'
import Label from '../../../component/Label'
import Input from '../../../component/Input'
import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth'
import woofgang from '../../../assets/woofgang.png'
import login from '../../../assets/login.png'


const LoginAdmin = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const auth = getAuth()

  const onLogin = (e) => {
    e.preventDefault();

    //send email and password to sign in method firebase
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log('login berhasil', user);
      navigate('/Landing-Page-Admin')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  return (
    <>
      <div className="container-fluid login-bg">

        <div className="row align-items-start pt-4">
          <div className="col ps-3p">
            <img src={woofgang} className="logo" alt="woofgang" />
            <Link to= "/" className="login-font">
              WOOFGANG
            </Link>
          </div>
        </div>

        <section className="text-center">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 login-font">

              <div className="fw-bold mb-2 login-title">
                <span style={{ color: "#FAC75C" }}>Log</span> In
              </div>

              <div>
                Welcome to WOOFGANG,{" "}
                <span style={{ color: "#FAC75C" }}>please</span> put your
              </div>

              <div className="mb-5">
                <span style={{ color: "#FAC75C" }}>login credentials</span> below to
                start using this website
              </div>
              <form>
                <div className="row pb-3">
                  <div className="col-25">
                    <Label
                      htmlFor = {'Email'}
                      label = {'Email'}
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
                    id = {'login'}
                    className={'btn button1 contact-font'}
                    label = {'Log in'}
                    style={{ width: "100%", textAlign: "center" }}
                    onClick={onLogin}
                  />
                </div>
              </form>
              {/* <div
                  className="footer-font text-left ps-5 pb-3"
                  style={{ fontSize: 20 }}
                >
                Dont have any account? 
                    <Link to={'/Sign-Up'}>
                      Sign Up
                    </Link>
              </div> */}
            </div>
          </div>
        </section>
        
      </div>
      <img src={login} alt="login" className="login-pic login-bg" />
    </>
  )}
export default LoginAdmin