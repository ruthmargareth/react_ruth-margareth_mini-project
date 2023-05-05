import '../css/content.css'
import NavbarAdmin from '../../../layout/jsx/NavbarAdmin'
import SidebarHotel from '../../../layout/jsx/SidebarHotel'
import FooterAdmin from '../../../layout/jsx/FooterAdmin'
import Label from '../../../component/Label'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const HotelInfo = () => {

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
              <p className="content-title">Hotel History Information</p>
            </div>

            <form>
                <div className="px-5 pb-5 appointment-font" >
                    <div className="row pb-3 ps-5">
                        <div className="col-25">
                            <Label
                            htmlFor = {'ownerName'}
                            label = {"Owner's name"}
                            />
                        </div>
                        <div className="col-1">
                            <Label 
                            className={"ms-5"}
                            label = {":"}
                            />
                        </div>
                        <div className="col-50">
                            <Label
                            htmlFor = {'ownerName'}
                            label = {uownerName}
                            />
                        </div>
                    </div>

                    <div className="row pb-3 ps-5">
                        <div className="col-25">
                            <Label
                            htmlFor = {'ownerPhone'}
                            label = {"Owner's phone"}
                            />
                        </div>
                        <div className="col-1">
                            <Label 
                            className={"ms-5"}
                            label = {":"}
                            />
                        </div>
                        <div className="col-50">
                            <Label
                            htmlFor = {'ownerPhone'}
                            label = {uownerPhone}
                            />
                        </div>
                    </div>

                    <div className="row pb-3 ps-5">
                        <div className="col-25">
                            <Label
                            htmlFor = {'petName'}
                            label = {"Pet's name"}
                            />
                        </div>
                        <div className="col-1">
                            <Label 
                            className={"ms-5"}
                            label = {":"}
                            />
                        </div>
                        <div className="col-50">
                            <Label
                            htmlFor = {'petName'}
                            label = {upetName}
                            />
                        </div>
                    </div>

                    <div className="row pb-3 ps-5">
                        <div className="col-25">
                            <Label
                            htmlFor = {'species'}
                            label = {"Species"}
                            />
                        </div>
                        <div className="col-1">
                            <Label
                            className={"ms-5"}
                            label = {":"}
                            />
                        </div>
                        <div className="col-50">
                            <Label
                            htmlFor = {'species'}
                            label = {uspecies}
                            />
                        </div>
                    </div>

                    <div className="row pb-3 ps-5">
                        <div className="col-25">
                            <Label
                            htmlFor = {'breed'}
                            label = {"Breed"}
                            />
                        </div>
                        <div className="col-1">
                            <Label
                            className={"ms-5"}
                            label = {":"}
                            />
                        </div>
                        <div className="col-50">
                            <Label
                            htmlFor = {'breed'}
                            label = {ubreed}
                            />
                        </div>
                    </div>

                    <div className="row pb-3 ps-5">
                        <div className="col-25">
                            <Label
                            htmlFor = {'gender'}
                            label = {"Gender"}
                            />
                        </div>
                        <div className="col-1">
                            <Label
                            className={"ms-5"}
                            label = {":"}
                            />
                        </div>
                        <div className="col-50">
                            <Label
                            htmlFor = {'gender'}
                            label = {ugender}
                            />
                        </div>
                    </div>

                    <div className="row pb-3 ps-5">
                        <div className="col-25">
                            <Label
                            htmlFor = {'weight'}
                            label = {"Weight"}
                            />
                        </div>
                        <div className="col-1">
                            <Label
                            className={"ms-5"}
                            label = {":"}
                            />
                        </div>
                        <div className="col-50">
                            <Label
                            htmlFor = {'weight'}
                            label = {uweight}
                            />
                        </div>
                    </div>

                    <div className="row pb-3 ps-5">
                        <div className="col-25">
                            <Label
                            htmlFor = {'booking'}
                            label = {"Booking date"}
                            />
                        </div>
                        <div className="col-1">
                            <Label
                            className={"ms-5"}
                            label = {":"}
                            />
                        </div>
                        <div className="col-50">
                            <Label
                            htmlFor = {'booking'}
                            label = {ubooking}
                            />
                        </div>
                    </div>

                    <div className="row pb-3 ps-5">
                        <div className="col-25">
                            <Label
                            htmlFor = {'pickup'}
                            label = {"Pickup date"}
                            />
                        </div>
                        <div className="col-1">
                            <Label
                            className={"ms-5"}
                            label = {":"}
                            />
                        </div>
                        <div className="col-50">
                            <Label
                            htmlFor = {'pickup'}
                            label = {upickup}
                            />
                        </div>
                    </div>
                </div>
                
            </form>
          </div>
        </div>
      </div>
    </div>
  <FooterAdmin/>
</>
)}
export default HotelInfo