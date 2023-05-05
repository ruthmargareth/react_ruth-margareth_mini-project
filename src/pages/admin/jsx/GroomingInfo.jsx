import '../css/content.css'
import NavbarAdmin from '../../../layout/jsx/NavbarAdmin'
import SidebarGrooming from '../../../layout/jsx/SidebarGrooming'
import FooterAdmin from '../../../layout/jsx/FooterAdmin'
import Label from '../../../component/Label'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { gql, useMutation, useQuery } from '@apollo/client'
import { getGroomingHistory } from './GroomingHistory'


const GroomingInfo = () => {
    const {data, loading, error} = useQuery(getGroomingHistory)
    const [groomingInfo, setInfo] = useState([])

    // const {id} = useParams();
    // const grooming = useSelector((state) => state.grooming)
    // const existingGrooming = grooming.filter(f => f.id == id);
    // const {
    //   ownerName,
    //   ownerPhone,
    //   petName,
    //   species,
    //   breed,
    //   gender,
    //   weight,
    //   packet,
    //   date,
    //   time
    // } = existingGrooming[0];

    // const [uownerName, setOwnerName] = useState(ownerName)
    // const [uownerPhone, setOwnerPhone] = useState(ownerPhone)
    // const [upetName, setPetName] = useState(petName)
    // const [uspecies, setSpecies] = useState(species)
    // const [ubreed, setBreed] = useState(breed)
    // const [ugender, setGender] = useState(gender)
    // const [uweight, setWeight] = useState(weight)
    // const [upacket, setPacket] = useState(packet)
    // const [udate, setDate] = useState(date)
    // const [utime, setTime] = useState(time)

    useEffect(() => {
        console.log ('loading: ', loading);
        console.log ('data gql: ', data);
        console.log('error: ', error);
      })

      //check if data is still fetching
    if (!loading && error !== undefined){
    //set "grooming" response to state "Grooming"
    setInfo(data.Grooming)
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
              <p className="content-title">Grooming History Information</p>
            </div>

            {
                data?.Grooming.map(item =>
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
                            label = {item.ownerName}
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
                            label = {item.ownerPhone}
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
                            label = {item.petName}
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
                            label = {item.species}
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
                            label = {item.breed}
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
                            label = {item.gender}
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
                            label = {item.weight}
                            />
                        </div>
                    </div>

                    <div className="row pb-3 ps-5">
                        <div className="col-25">
                            <Label
                            htmlFor = {'packet'}
                            label = {"Packet"}
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
                            htmlFor = {'packet'}
                            label = {item.packet}
                            />
                        </div>
                    </div>

                    <div className="row pb-3 ps-5">
                        <div className="col-25">
                            <Label
                            htmlFor = {'date'}
                            label = {"Date"}
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
                            htmlFor = {'date'}
                            label = {item.date}
                            />
                        </div>
                    </div>

                    <div className="row pb-3 ps-5">
                        <div className="col-25">
                            <Label
                            htmlFor = {'time'}
                            label = {"Time"}
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
                            htmlFor = {'time'}
                            label = {item.time}
                            />
                        </div>
                    </div>
                </div>
                
            </form>
            )
        }
          </div>
        </div>
      </div>
    </div>
  <FooterAdmin/>
</>
)}
export default GroomingInfo