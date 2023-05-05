import '../css/content.css'
import NavbarAdmin from '../../../layout/jsx/NavbarAdmin'
import SidebarHotel from '../../../layout/jsx/SidebarHotel'
import FooterAdmin from '../../../layout/jsx/FooterAdmin'
import Label from '../../../component/Label'
import Button from '../../../component/Button'
import Input from '../../../component/Input'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
import { updateHotel } from '../../../HotelReducer'
import { gql, useMutation, useQuery } from '@apollo/client'
import { getHotelHistory } from './HotelHistory'

// const UPDATE_HOTEL = gql`
//   mutation MyQuery (
//     $id: String!,
//     $ownerName: String!,
//     $ownerPhone: String!,
//     $petName: String!,
//     $species: String!,
//     $breed: String!,
//     $gender: String!,
//     $weight: String!,
//     $booking: String!,
//     $pickup: String!
//     ) {
//     update_Hotel_by_pk(
//       pk_columns: { id: $id }
//       _set: {
//         ownerName: $ownerName,
//         ownerPhone: $ownerPhone,
//         petName: $petName,
//         species: $species,
//         breed: $breed,
//         gender: $gender,
//         weight: $weight,
//         booking: $booking,
//         pickup: $pickup,
//       }
//     ) {
//       id
//     }
//   }
// `

const HotelHistoryDetail = () => {

  const {id} = useParams();
  const hotel = useSelector((state) => state.hotel)
  const existingHotel = hotel.filter(f => f.id == id);
  const {
    ownerName,
    ownerPhone,
    petName,
    species,
    breed,
    gender,
    weight,
    booking,
    pickup
  } = existingHotel[0];

  const [uownerName, setOwnerName] = useState(ownerName)
  const [uownerPhone, setOwnerPhone] = useState(ownerPhone)
  const [upetName, setPetName] = useState(petName)
  const [uspecies, setSpecies] = useState(species)
  const [ubreed, setBreed] = useState(breed)
  const [ugender, setGender] = useState(gender)
  const [uweight, setWeight] = useState(weight)
  const [ubooking, setBooking] = useState(booking)
  const [upickup, setPickup] = useState(pickup)

  // const {data, loading, error} = useQuery(getHotelHistory)
  // const [update, setUpdate] = useState([])

  // const [updateAppointment] = useMutation(UPDATE_HOTEL, {
  //   refetchQueries: [getHotelHistory]
  // })

    // //check if data is still fetching
    // if (!loading && error !== undefined){
    //   //set "hotel" response to state "Hotel"
    //   setUpdate(data.Hotel)
    // }


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateHotel({
      id: id,
      ownerName: uownerName,
      ownerPhone: uownerPhone,
      petName: upetName,
      species: uspecies,
      breed: ubreed,
      gender: ugender,
      weight: uweight,
      booking: ubooking,
      pickup: upickup
    }))
    // const item = data?.Hotel.find((v) => v.id === id)
    // updateAppointment({
    //   variables: {
    //     id: id, 
    //     ownerName: !item.ownerName,
    //     ownerPhone: !item.ownerPhone,
    //     petName: !item.petName,
    //     species: !item.species,
    //     breed: !item.breed,
    //     gender: !item.gender,
    //     weight: !item.weight,
    //     booking: !item.booking,
    //     pickup: !item.pickup
    //     }
    // })
    navigate ('/Hotel-History')
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
              <p className="content-title">Hotel History Update</p>
            </div>
            {/* {
              data?.Hotel.map(item => */}
            <form onSubmit={handleUpdate}>
              <div className="px-5 pb-5 appointment-font">
                <div className="row pb-3">
                  <div className="col-25">
                    <Label
                      htmlFor = {'ownerName'}
                      label = {"Owner's name"}
                    />
                  </div>
                  <div className="col-75">
                    <Input
                      id = {'ownerName'}
                      name = {'ownerName'}
                      type = {'text'}
                      value = {uownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-25">
                    <Label
                      htmlFor = {'ownerPhone'}
                      label = {"Owner's phone"}
                    />
                  </div>
                  <div className="col-75">
                    <Input
                      id = {'ownerPhone'}
                      name = {'ownerPhone'}
                      type = {'text'}
                      value = {uownerPhone}
                      onChange={(e) => setOwnerPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-25">
                    <Label
                      htmlFor = {'petName'}
                      label = {"Pet's name"}
                    />
                  </div>
                  <div className="col-75">
                    <Input
                      id = {'petName'}
                      name = {'petName'}
                      type = {'text'}
                      value = {upetName}
                      onChange={(e) => setPetName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-25">
                    <Label
                      htmlFor = {'species'}
                      label = {"Species"}
                    />
                  </div>
                  <div className="col-75">
                    <div className="dropdown dropdown-input">
                      <select 
                        className="form-select appointment-font"
                        value = {uspecies}
                        onChange={(e) => setSpecies(e.target.value)}
                      >
                        <option selected="" disabled="">
                          Choose pet's species...
                        </option>
                        <option>cat</option>
                        <option>dog</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-25">
                    <Label
                      htmlFor = {'breeds'}
                      label = {"Breeds"}
                    />
                  </div>
                  <div className="col-75">
                    <Input
                      id = {'breed'}
                      name = {'breed'}
                      type = {'text'}
                      value = {ubreed}
                      onChange={(e) => setBreed(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row pb-3">
                 <div className="col-25">
                  <Label
                      htmlFor = {'gender'}
                      label = {"Gender"}
                    />
                  </div>
                  <div className="col-75">
                    <div className="dropdown dropdown-input">
                      <select 
                        className="form-select appointment-font"
                        value = {ugender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option selected="" disabled="" value="">
                          Choose pet's gender...
                        </option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-25">
                    <Label
                      htmlFor = {'weight'}
                      label = {"Weight"}
                    />
                  </div>
                  <div className="col-75">
                    <div className="dropdown dropdown-input">
                      <select 
                        className="form-select appointment-font"
                        value = {uweight}
                        onChange={(e) => setWeight(e.target.value)}
                      >
                        <option selected="" disabled="" value="">
                          Choose pet's weight...
                        </option>
                        <option>0-5kg</option>
                        <option>5-10kg</option>
                        <option>10-20kg</option>
                        <option>20-30kg</option>
                        <option>30kg up</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-25">
                    <Label
                      htmlFor = {'booking'}
                      label = {"Booking date"}
                    />
                  </div>
                  <div className="col-75">
                    <Input
                      className={'form-control appointment-font'}
                      id = {'booking'}
                      name = {'booking'}
                      type = {'date'}
                      value = {ubooking}
                      onChange={(e) => setBooking(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col-25">
                    <Label
                      htmlFor = {'pickup'}
                      label = {"Pickup date"}
                    />
                  </div>
                  <div className="col-75">
                    <Input
                      className={'form-control appointment-font'}
                      id = {'pickup'}
                      name = {'pickup'}
                      type = {'date'}
                      value = {upickup}
                      onChange={(e) => setPickup(e.target.value)}
                    />
                  </div>
                </div>
                <Button
                  id = {'submitHotel'}
                  className={'btn button1 contact-font mt-3'}
                  label = {'Update Booking'}
                  style={{ width: "100%", textAlign: "center" }}
                />
              </div>
            </form>
            {/* )
          } */}
          </div>
        </div>
      </div>
    </div>
  <FooterAdmin/>
</>
)}
export default HotelHistoryDetail