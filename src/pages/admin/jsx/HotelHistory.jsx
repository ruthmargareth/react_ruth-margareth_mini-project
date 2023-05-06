import '../css/content.css'
import NavbarAdmin from '../../../layout/jsx/NavbarAdmin'
import SidebarHotel from '../../../layout/jsx/SidebarHotel'
import FooterAdmin from '../../../layout/jsx/FooterAdmin'
import Button from '../../../component/Button'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteHotel } from '../../../HotelReducer'
import { gql, useMutation, useQuery } from '@apollo/client'
// import HotelModal from './HotelModal'

export const getHotelHistory = gql`
query MyQuery {
  Hotel {
    id
    ownerName
    ownerPhone
    petName
    species
    breed
    gender
    weight
    booking
    pickup
  }
}
`
const REMOVE_HOTEL = gql`
  mutation MyQuery ($id: String!)  {
    delete_Hotel_by_pk(id: $id){
      id
    }
  }
`

const HotelHistory = () => {
  const {data, loading, error} = useQuery(getHotelHistory)
  const [HotelAppointment, setHotel] = useState([])

  const [removeHotel] = useMutation(REMOVE_HOTEL, {
    refetchQueries: [getHotelHistory]
  })

  useEffect(() => {
    console.log ('loading: ', loading);
    console.log ('data gql: ', data);
    console.log('error: ', error);
  })

  //check if data is still fetching
  if (!loading && error !== undefined){
    //set "hotel" response to state "Hotel"
    setHotel(data.Hotel)
  }

  //mengambil data hotel dengan menggunakan useSelector
  const hotel = useSelector((state) => state.hotel)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteHotel({
      id: id
    }))
    removeHotel({
      variables: { 
        id: id
      }
    })
  }

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
              <p className="content-title">Hotel History</p>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4 pb-5">

              
              {loading ? 
                <h3 style={{ color: "#4054BB" }}>No Data History Available</h3>
              :
              data?.Hotel.map(item =>

              <div className="col">
                <div className="card h-90 card-bg">
                  <div className="card-body">

                    <div className="container">
                      <div className="row">
                        <div className="col-10">
                          <h5 className="card-title card-font">{item.petName}</h5>
                        </div>
                        <div className="col-2">
                          <Link to={`/Hotel-Info/${item.id}`}>
                            <i className="bi bi-info-circle card-title card-font"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <p className="card-text card-font">species: <span>{item.species}</span></p>
                    <p className="card-text card-font">breed: <span>{item.breed}</span></p>
                    <p className="card-text card-font">pickup date: <span>{item.pickup}</span></p>

                    <div className="row">
                      <div className="col-6">
                        <Link to={`/Hotel-History-Detail/${item.id}`}>
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
                          type={"button"}
                          className={"btn button1 body-font"}
                          style={{ width: 150, textAlign: "center" }}
                          onClick={() => handleDelete(item.id)}
                          toggle={"modal"}
                          target={"#staticBackdrop"}
                          label = {"Delete"}
                        />
                      </div>
                    </div>
                    
                  </div>
                </div> 
              </div>
                )
              }

              {/* modal */}
              {/* <HotelModal/> */}
              {/* <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex={-1}
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
              >
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="container modal-font"> */}
                        {/* title */}
                        {/* <div className="modal-title font">
                          <div className="row">
                            <div className="col mt-3 modal-icon">
                              <i className="bi bi-trash3"></i>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col my-3">
                              <h5 className="modal-title">Are you sure want to delete this history data?</h5>
                            </div>
                          </div>
                        </div> */}
                        {/* data */}
                        {/* {
                          data?.Hotel.map(item =>
                        <div className="modal-notif font">
                          <div className="row my-2">
                            <div className="col">
                              pet name
                            </div>
                            <div className="col">
                              breed
                            </div>
                            <div className="col">
                              pickup date
                            </div>
                          </div>
                          <div className="row my-2">
                            <div className="col">
                              {item.petName}
                            </div>
                            <div className="col">
                              {item.breed}
                            </div>
                            <div className="col">
                              {item.pickup}
                            </div>
                          </div> */}
                          {/* button */}
                          {/* <div className="row mt-5 mb-2">
                            <div className="col">
                              <Button
                                id={'editbtn'}
                                className={'btn button2 body-font'}
                                label={'Cancel'}
                                style={{ width: 150, textAlign: "center" }}
                                dismiss={"modal"}
                              />
                            </div>
                            <div className="col">
                              <Button
                                id={'deleltebtn'}
                                label={'Delete'}
                                className={'btn button1 body-font'}
                                style={{ width: 150, textAlign: "center" }}
                                onClick={() => handleDelete(hotel.id)}
                                dismiss={"modal"}
                              />
                            </div>
                          </div>
                        </div>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

            </div>

          </div>
        </div>

      </div>
    </div>
  <FooterAdmin/>
  </>
)}
export default HotelHistory