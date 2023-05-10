import '../css/content.css'
import NavbarUser from '../../../layout/jsx/NavbarUser'
import SidebarGroomingUser from '../../../layout/jsx/SidebarGroomingUser'
import FooterUser from '../../../layout/jsx/FooterUser'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { gql, useQuery } from '@apollo/client'

export const getGroomingHistory = gql`
query MyQuery {
  Grooming {
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

const GroomingHistoryUser = () => {
  const {data, loading, error} = useQuery(getGroomingHistory)

    //lifecycle function after rendering
  useEffect(() => {
    console.log ('loading: ', loading);
    console.log ('data gql: ', data);
    console.log('error: ', error);
  })
  
  const grooming = useSelector((state) => state.grooming)


  return (
    <>
    <NavbarUser/>

    {/* sidebar */}
    <div className="container-fluid">
      <div className="row">

        <SidebarGroomingUser/>
        {/* content */}

        <div className="col-9">
          <div className="content">

            <div className="content-font px-5 py-5">
              <p className="content-title">Grooming History</p>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4 pb-5">

              {loading ? 
                <h3 style={{ color: "#4054BB" }}>No Data History Available</h3>
              :
                data?.Grooming.map(item =>

                <div className="col">
                  <div className="card h-90 card-bg">
                    <div className="card-body">

                      <div className="container">
                        <div className="row">
                          <div className="col-10">
                            <h5 className="card-title card-font">{item.petName}</h5>
                          </div>
                          <div className="col-2">
                            <Link to={`/Grooming-Info-User/${item.id}`}>
                              <i className="bi bi-info-circle card-title card-font"></i>
                            </Link>
                          </div>
                        </div>
                      </div>

                      <p className="card-text card-font">species: <span>{item.species}</span></p>
                      <p className="card-text card-font">breed: <span>{item.breed}</span></p>
                      <p className="card-text card-font">packet: <span>{item.packet}</span></p>

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
export default GroomingHistoryUser