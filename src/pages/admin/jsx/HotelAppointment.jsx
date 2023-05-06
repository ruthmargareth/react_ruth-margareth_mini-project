import '../css/content.css'
import NavbarAdmin from '../../../layout/jsx/NavbarAdmin'
import SidebarHotel from '../../../layout/jsx/SidebarHotel'
import FooterAdmin from '../../../layout/jsx/FooterAdmin'
import Label from '../../../component/Label'
import Input from '../../../component/Input'
import Button from '../../../component/Button'
import { useState } from 'react'
import { addHotel } from '../../../HotelReducer'
import { useDispatch, useSelector } from 'react-redux'
import {v4 as uuid} from 'uuid'
import { useNavigate } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'
import { getHotelHistory } from './HotelHistory'

const ADD_HOTEL = gql`
  mutation MyQuery ($object: Hotel_insert_input!)  {
    insert_Hotel_one(object: $object){
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

const HotelAppointment = () => {
  const [insertHotel] = useMutation (ADD_HOTEL, {
    refetchQueries: [getHotelHistory]
  })

  const [ownerName, setOwnerName] = useState('')
  const [ownerPhone, setOwnerPhone] = useState('')
  const [petName, setPetName] = useState('')
  const [species, setSpecies] = useState('')
  const [breed, setBreed] = useState('')
  const [gender, setGender] = useState('')
  const [weight, setWeight] = useState('')
  const [booking, setBooking] = useState('')
  const [pickup, setPickup] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const hotel = useSelector((state) => state.hotel)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addHotel({
      id: uuid(),
      ownerName,
      ownerPhone,
      petName,
      species,
      breed,
      gender,
      weight,
      booking,
      pickup
    }))
    insertHotel({
      variables: {
        object: {
          id: uuid(), 
          ownerName: ownerName,
          ownerPhone: ownerPhone,
          petName: petName,
          species: species,
          breed: breed,
          gender: gender,
          weight: weight,
          booking: booking,
          pickup: pickup
        }
      }})
    navigate('/Hotel-History')
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
              <p className="content-title">Hotel Appointment</p>
            </div>

            <form onSubmit={handleSubmit}>
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
                        onChange={(e) => setSpecies(e.target.value)}
                      >
                        <option selected="" disabled="" value="">
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
                      onChange={(e) => setPickup(e.target.value)}
                    />
                  </div>
                </div>

                  <Button
                    id = {'submitHotel'}
                    className={'btn button1 contact-font mt-3'}
                    label = {'Booking Appointment'}
                    style={{ width: "100%", textAlign: "center" }}
                  />

              </div>
            </form>

          </div>
        </div>

      </div>
    </div>
  <FooterAdmin/>
  </>
)}
export default HotelAppointment