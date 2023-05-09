import '../css/content.css'
import NavbarAdmin from '../../../layout/jsx/NavbarAdmin'
import SidebarGrooming from '../../../layout/jsx/SidebarGrooming'
import FooterAdmin from '../../../layout/jsx/FooterAdmin'
import Label from '../../../component/Label'
import Input from '../../../component/Input'
import Button from '../../../component/Button'
import { useState } from 'react'
import { addGrooming } from '../../../GroomingReducer'
import { useDispatch, useSelector } from 'react-redux'
import {v4 as uuid} from 'uuid'
import { useNavigate } from 'react-router-dom'
import { gql, useMutation } from '@apollo/client'
import { getGroomingHistory } from './GroomingHistory'

const ADD_GROOMING = gql`
  mutation MyQuery ($object: Grooming_insert_input!)  {
    insert_Grooming_one(object: $object){
      id
      ownerName
      ownerPhone
      petName
      species
      breed
      gender
      weight
      packet
      date
      time
    }
  }
`

const GroomingAppointment = () => {
  const [insertGrooming] = useMutation (ADD_GROOMING, {
    refetchQueries: [getGroomingHistory]
  })

  const [ownerName, setOwnerName] = useState('')
  const [ownerPhone, setOwnerPhone] = useState('')
  const [petName, setPetName] = useState('')
  const [species, setSpecies] = useState('')
  const [breed, setBreed] = useState('')
  const [gender, setGender] = useState('')
  const [weight, setWeight] = useState('')
  const [packet, setPacket] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const grooming = useSelector((state) => state.grooming)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addGrooming({
      id: uuid(),
      ownerName,
      ownerPhone,
      petName,
      species,
      breed,
      gender,
      weight,
      packet,
      date,
      time
    }))
    insertGrooming({
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
          packet: packet,
          date: date,
          time: time
        }
      }})
    navigate('/Grooming-History')
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
              <p className="content-title">Grooming Appointment</p>
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
                      required
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
                      required
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
                      required
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
                        name={"species"}
                        required
                      >
                        <option selected="" disabled="" value="">
                          Choose pet's species...
                        </option>
                        <option>Dog</option>
                        <option>Cat</option>
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
                      required
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
                        name={"gender"}
                        required
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
                        name={"weight"}
                        required
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
                      htmlFor = {'packet'}
                      label = {"Packet"}
                    />
                  </div>
                  <div className="col-75">
                    <div className="dropdown dropdown-input">
                      <select 
                        className="form-select appointment-font"
                        onChange={(e) => setPacket(e.target.value)}
                        name={"packet"}
                        required
                      >
                        <option selected="" disabled="" value="">
                          Choose pet's packet...
                        </option>
                        <option>styling</option>
                        <option>basic grooming</option>
                        <option>blow dry</option>
                        <option>wash + dry</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row pb-3">
                  <div className="col-25">
                    <Label
                      htmlFor = {'date'}
                      label = {"Date"}
                    />
                  </div>
                  <div className="col-75">
                    <Input
                      className={'form-control appointment-font'}
                      id = {'date'}
                      name = {'date'}
                      type = {'date'}
                      required
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </div>

                <div className="row pb-3">
                  <div className="col-25">
                    <Label
                      htmlFor = {'time'}
                      label = {"Time"}
                    />
                  </div>
                  <div className="col-75">
                    <Input
                      className={'form-control appointment-font'}
                      id = {'time'}
                      name = {'time'}
                      type = {'time'}
                      required
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </div>
                </div>

                  <Button
                    id = {'submitGrooming'}
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
export default GroomingAppointment