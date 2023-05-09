import '../css/content.css'
import NavbarAdmin from '../../../layout/jsx/NavbarAdmin'
import SidebarHotel from '../../../layout/jsx/SidebarHotel'
import FooterAdmin from '../../../layout/jsx/FooterAdmin'
import Label from '../../../component/Label'
import Button from '../../../component/Button'
import Input from '../../../component/Input'
import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { getDetailHotelHistory } from './HotelInfo'
import { UPDATE_HOTEL } from './HotelHistory'

const HotelHistoryDetail = () => {
  
  const navigate = useNavigate();

  const {id} = useParams();
  const { data, loading, error } = useQuery(getDetailHotelHistory, { variables : { id : id }})
  const [update, setUpdate] = useState({
    ownerName: '',
    ownerPhone:'',
    petName: '',
    species: '',
    breed: '',
    gender: '',
    weight: '',
    booking: '',
    pickup: ''
  })

  useEffect(() => {
    if (!loading && error === undefined){
      setUpdate({
        ownerName: data?.Hotel[0].ownerName,
        ownerPhone: data?.Hotel[0].ownerPhone,
        petName: data?.Hotel[0].petName,
        species: data?.Hotel[0].species,
        breed: data?.Hotel[0].breed,
        gender: data?.Hotel[0].gender,
        weight: data?.Hotel[0].weight,
        booking: data?.Hotel[0].booking,
        pickup: data?.Hotel[0].pickup
      })
    }
    console.log ('loading: ', loading);
    console.log ('data gql: ', data);
    console.log('error: ', error);
  },[data])

  //2
  const [updateAppointment] = useMutation(UPDATE_HOTEL, {
    refetchQueries: [getDetailHotelHistory]
  })

  const handleOnChange = (e) => {
    setUpdate({
        ... update,
        [e.target.name]: e.target.value 
    }) 
}

  //3
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
        booking: update.booking,
        pickup: update.pickup
        }
    })
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
                        <option selected="" disabled="" value="">
                          Choose pet's species...
                        </option>
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
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
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
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
                        <option value="0-5kg">0-5kg</option>
                        <option value="5-10kg">5-10kg</option>
                        <option value="10-20kg">10-20kg</option>
                        <option value="20-30kg">20-30kg</option>
                        <option value="3-kg up">30kg up</option>
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
                      value = {update?.booking}
                      onChange={handleOnChange}
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
                      value = {update?.pickup}
                      onChange={handleOnChange}
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

          </div>
        </div>
      </div>
    </div>
  <FooterAdmin/>
</>
)}
export default HotelHistoryDetail