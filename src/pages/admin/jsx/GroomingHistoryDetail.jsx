import '../css/content.css'
import NavbarAdmin from '../../../layout/jsx/NavbarAdmin'
import SidebarGrooming from '../../../layout/jsx/SidebarGrooming'
import FooterAdmin from '../../../layout/jsx/FooterAdmin'
import Label from '../../../component/Label'
import Button from '../../../component/Button'
import Input from '../../../component/Input'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
import { updateGrooming } from '../../../GroomingReducer'

const GroomingHistoryDetail = () => {
  
  const {id} = useParams();
  const grooming = useSelector((state) => state.grooming)
  const existingGrooming = grooming.filter(f => f.id == id);
  const {
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
  } = existingGrooming[0];

  const [uownerName, setOwnerName] = useState(ownerName)
  const [uownerPhone, setOwnerPhone] = useState(ownerPhone)
  const [upetName, setPetName] = useState(petName)
  const [uspecies, setSpecies] = useState(species)
  const [ubreed, setBreed] = useState(breed)
  const [ugender, setGender] = useState(gender)
  const [uweight, setWeight] = useState(weight)
  const [upacket, setPacket] = useState(packet)
  const [udate, setDate] = useState(date)
  const [utime, setTime] = useState(time)


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateGrooming({
      id:id,
      ownerName: uownerName,
      ownerPhone: uownerPhone,
      petName: upetName,
      species: uspecies,
      breed: ubreed,
      gender: ugender,
      weight: uweight,
      packet: upacket,
      date: udate,
      time: utime
    }))
    navigate ('/Grooming-History')
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
              <p className="content-title">Grooming History Update</p>
            </div>
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
                    <div className="form-check form-check-inline w-25">
                      <Input
                        id = {'male'}
                        name = {'gender'}
                        type = {'radio'}
                        className={'form-check-input'}
                        defaultValue={'Male'}
                        value = {ugender}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <Label
                        htmlFor = {'male'}
                        label = {"Male"}
                      />
                    </div>
                    <div className="form-check form-check-inline">
                      <Input
                        id = {'female'}
                        name = {'gender'}
                        type = {'radio'}
                        className={'form-check-input'}
                        defaultValue={'Female'}
                        value = {ugender}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <Label
                        htmlFor = {'female'}
                        label = {"Female"}
                      />
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
                      htmlFor = {'packet'}
                      label = {"Packet"}
                    />
                  </div>
                  <div className="col-75">
                    <div className="dropdown dropdown-input">
                      <select 
                        className="form-select appointment-font"
                        value = {upacket}
                        onChange={(e) => setPacket(e.target.value)}
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
                      value = {udate}
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
                      value = {utime}
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </div>
                </div>
                <Button
                  id = {'submitGrooming'}
                  className={'btn button1 contact-font mt-3'}
                  label = {'Update Booking'}
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
export default GroomingHistoryDetail