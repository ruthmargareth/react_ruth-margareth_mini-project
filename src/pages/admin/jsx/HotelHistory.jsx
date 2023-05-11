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
import Input from '../../../component/Input'

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
//1
export const UPDATE_HOTEL = gql`
mutation MyMutation (
  $id: String!, 
  $ownerName: String!,
  $ownerPhone: String!,
  $petName: String!,
  $species: String!,
  $breed: String!,
  $gender: String!,
  $weight: String!,
  $booking: String!,
  $pickup: String!) {
    update_Hotel_by_pk(
      pk_columns: {id: $id}, 
  _set: {
    ownerName: $ownerName,
    ownerPhone: $ownerPhone,
    petName: $petName,
    species: $species,
    breed: $breed,
    gender: $gender,
    weight: $weight,
    booking: $booking,
    pickup: $pickup,
  }) {
    petName
  }
}
`

const HotelHistory = () => {
  const {data, loading, error} = useQuery(getHotelHistory)
  const [HotelAppointment, setHotel] = useState([])

  const [removeHotel] = useMutation(REMOVE_HOTEL, {
    refetchQueries: [getHotelHistory]
  })

  //lifecycle function after rendering
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

  const [search, setSearch] = useState ('')
  console.log(search)


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
              <div className="row">
                <div className="col">
                  <p className="content-title">Hotel History</p>
                </div>

                <div className="col-25">
                  <Input
                    id = {'search'}
                    name = {'search'}
                    type = {'text'}
                    placeholder = {'search pet name'}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>

              </div>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4 pb-5">

              
              {loading ? 
                <h3 style={{ color: "#4054BB" }}>No Data History Available</h3>
              :
              data?.Hotel
                .filter((item) => {
                  return search.toLowerCase() === ''
                  ? item 
                  : item.petName.toLowerCase().includes(search);
                })
              .map(item =>

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
                            label = {'Update'}
                            style={{ width: 150, textAlign: "center" }}
                          />
                        </Link>
                      </div>

                      <div className="col-6">
                        <Button
                          id = {'deleltebtn'}
                          label = {'Delete'}
                          type={"button"}
                          className={"btn button1 body-font"}
                          style={{ width: 150, textAlign: "center" }}
                          onClick={() => handleDelete(item.id)}
                        />
                      </div>
                    </div>
                    
                  </div>
                </div> 
              </div>
                )
              }
            </div>

          </div>
        </div>

      </div>
    </div>
  <FooterAdmin/>
  </>
)}
export default HotelHistory