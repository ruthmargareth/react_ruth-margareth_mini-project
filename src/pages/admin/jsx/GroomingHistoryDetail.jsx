import '../css/content.css'
import NavbarAdmin from '../../../layout/jsx/NavbarAdmin'
import SidebarGrooming from '../../../layout/jsx/SidebarGrooming'
import FooterAdmin from '../../../layout/jsx/FooterAdmin'
import Label from '../../../component/Label'
import Button from '../../../component/Button'
import Input from '../../../component/Input'
import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { getDetailGroomingHistory } from './GroomingInfo'
import { UPDATE_GROOMING } from './GroomingHistory'

const GroomingHistoryDetail = () => {

  const navigate = useNavigate();

  const {id} = useParams();
  const { data, loading, error } = useQuery(getDetailGroomingHistory, { variables : { id : id }})
  const [update, setUpdate] = useState({
    ownerName: '',
    ownerPhone:'',
    petName: '',
    species: '',
    breed: '',
    gender: '',
    weight: '',
    packet: '',
    date: '',
    time: ''
  })

  useEffect(() => {
    if (!loading && error === undefined){
      setUpdate({
        ownerName: data?.Grooming[0].ownerName,
        ownerPhone: data?.Grooming[0].ownerPhone,
        petName: data?.Grooming[0].petName,
        species: data?.Grooming[0].species,
        breed: data?.Grooming[0].breed,
        gender: data?.Grooming[0].gender,
        weight: data?.Grooming[0].weight,
        packet: data?.Grooming[0].packet,
        date: data?.Grooming[0].date,
        time: data?.Grooming[0].time
      })
    }
    console.log ('loading: ', loading);
    console.log ('data gql: ', data);
    console.log('error: ', error);
  },[data])

  //2
  const [updateAppointment] = useMutation(UPDATE_GROOMING, {
    refetchQueries: [getDetailGroomingHistory]
  })

  const handleOnChange = (e) => {
    setUpdate({
        ... update,
        [e.target.name]: e.target.value 
    }) 
}
 
  const handleUpdate = (e) => {
    e.preventDefault();
    updateAppointment({
      variables: {
        id: id, 
        ownerName: update.ownerName,
        ownerPhone:update.ownerPhone,
        petName: update.petName,
        species: update.species,
        breed: update.breed,
        gender: update.gender,
        weight: update.weight,
        packet: update.packet,
        date: update.date,
        time: update.time
        }
    })
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
                      value = {update?.ownerName}
                      onChange={handleOnChange}
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
                      value = {update?.ownerPhone}
                      onChange={handleOnChange}
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
                      value = {update?.petName}
                      onChange={handleOnChange}
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
                        value = {update?.species}
                        onChange={handleOnChange}
                        name={"species"}
                      >
                        <option selected="" disabled="">
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
                      value = {update?.breed}
                      onChange={handleOnChange}
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
                        value = {update?.gender}
                        onChange={handleOnChange}
                        name={"gender"}
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
                        value = {update?.weight}
                        onChange={handleOnChange}
                        name={"weight"}
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
                        value = {update?.packet}
                        onChange={handleOnChange}
                        name={"packet"}
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
                      value = {update?.date}
                      onChange={handleOnChange}
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
                      value = {update?.time}
                      onChange={handleOnChange}
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