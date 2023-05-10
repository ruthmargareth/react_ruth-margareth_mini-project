import '../css/content.css'
import NavbarUser from '../../../layout/jsx/NavbarUser'
import SidebarHotelUser from '../../../layout/jsx/SidebarHotelUser'
import FooterUser from '../../../layout/jsx/FooterUser'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { gql, useQuery } from '@apollo/client'
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

const HotelHistoryUser = () => {
  const {data, loading, error} = useQuery(getHotelHistory)

  //lifecycle function after rendering
  useEffect(() => {
    console.log ('loading: ', loading);
    console.log ('data gql: ', data);
    console.log('error: ', error);
  })

  //mengambil data hotel dengan menggunakan useSelector
  const hotel = useSelector((state) => state.hotel)

  const [search, setSearch] = useState ('')
  console.log(search)

  return (
    <>
    <NavbarUser/>

    {/* sidebar */}
    <div className="container-fluid">
      <div className="row">

        <SidebarHotelUser/>
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
                          <Link to={`/Hotel-Info-User/${item.id}`}>
                            <i className="bi bi-info-circle card-title card-font"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <p className="card-text card-font">species: <span>{item.species}</span></p>
                    <p className="card-text card-font">breed: <span>{item.breed}</span></p>
                    <p className="card-text card-font">pickup date: <span>{item.pickup}</span></p>
                    
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
  <FooterUser/>
  </>
)}
export default HotelHistoryUser