import '../css/content.css'
import NavbarAdmin from '../../../layout/jsx/NavbarAdmin'
import SidebarGrooming from '../../../layout/jsx/SidebarGrooming'
import FooterAdmin from '../../../layout/jsx/FooterAdmin'
import Button from '../../../component/Button'
import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteGrooming } from '../../../GroomingReducer'

const GroomingHistory = () => {
  const navigate = useNavigate()

  const grooming = useSelector((state) => state.grooming)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteGrooming({id: id}))
  }

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
              <p className="content-title">Grooming History</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 pb-5">

            {
              grooming && grooming.length > 0
              ?
              grooming.map((grooming, index) => (
                <div className="col">
                <div className="card h-90 card-bg">
                  <div className="card-body" key ={index}>
                  <div className="container">
                    <div className="row">
                    <div className="col-10">
                      <h5 className="card-title card-font">{grooming.petName}</h5>
                    </div>
                    <div className="col-2">
                    <Link to={`/Grooming-Info/${grooming.id}`}>
                      <i className="bi bi-info-circle card-title card-font"></i>
                    </Link>
                    </div>
                    </div>
                  </div>
                    <p className="card-text card-font">species: <span>{grooming.species}</span></p>
                    <p className="card-text card-font">breed: <span>{grooming.breed}</span></p>
                    <p className="card-text card-font">packet: <span>{grooming.packet}</span></p>
                    <div className="row">
                      <div className="col-6">
                        <Link to={`/Grooming-History-Detail/${grooming.id}`}>
                          <Button
                            id = {'editbtn'}
                            className = {'btn button2 body-font'}
                            label = {'Edit'}
                            style={{ width: 150, textAlign: "center" }}
                          />
                        </Link>
                      </div>
                      <div className="col-6">
                        <Button 
                          id = {'deleltebtn'}
                          label = {'Delete'}
                          className = {'btn button1 body-font'}
                          style={{ width: 150, textAlign: "center" }}
                          onClick={() => handleDelete(grooming.id)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              ))
              :
              <h3 style={{ color: "#4054BB" }}>No Data History Available</h3>
            }

            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterAdmin/>
  </>
)}
export default GroomingHistory