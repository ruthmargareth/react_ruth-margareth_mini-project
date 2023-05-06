import '../css/content.css'
import Button from '../../../component/Button'
import { useDispatch, useSelector } from 'react-redux'
import { deleteHotel } from '../../../HotelReducer'
import { useNavigate, useParams } from 'react-router-dom'
import { gql, useMutation, useQuery } from '@apollo/client'
import { useState } from 'react'
import { getDetailHotelHistory } from './HotelInfo'

const REMOVE_HOTEL = gql`
  mutation MyQuery ($id: String!)  {
    delete_Hotel_by_pk(id: $id){
      id
    }
  }
`

const HotelModal = () => {
  const {id} = useParams();
  const {data, loading, error} = useQuery(getDetailHotelHistory, { variables : { id : id }})
  const [hotelModal, setModal] = useState([])

  //check if data is still fetching
    if (!loading && error !== undefined){
  //set "hotel" response to state "Hotel"
    setModal(data.Hotel)
  }

  const [removeHotel] = useMutation(REMOVE_HOTEL, {
    refetchQueries: [getDetailHotelHistory]
  })


  const hotel = useSelector((state) => state.hotel)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDelete = (id) => {
    dispatch(deleteHotel({
      id: id
    }))
    removeHotel({
      variables: { 
        id: id
      }
    })
  }
      
     
  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content modal-font">
            <div className="modal-body">

              {data?.Hotel.map(item =>
              <div className="container">

                <div className="modal-title font">
                    <div className="row">
                        <div className="col mt-3 modal-icon">
                            <i className="bi bi-trash3"></i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col my-3">
                            <h5 className="modal-title">Are you sure want to delete this history data?</h5>
                        </div>
                    </div>
                </div>

                <div className="modal-notif font">
                  <div className="row my-2">
                    <div className="col">
                      pet name
                    </div>
                    <div className="col">
                      breed
                    </div>
                    <div className="col">
                      pickup date
                    </div>
                  </div>

                  <div className="row my-2">
                    <div className="col">
                      {item.petName}
                    </div>
                    <div className="col">
                      {item.breed}
                    </div>
                    <div className="col">
                      {item.pickup}
                    </div>
                  </div>

                  <div className="row mt-5 mb-2">
                    <div className="col">
                      <Button
                        id={'editbtn'}
                        className={'btn button2 body-font'}
                        label={'Cancel'}
                        style={{ width: 150, textAlign: "center" }}
                        dismiss={"modal"}
                      />
                    </div>
                    <div className="col">
                    <Button
                      id={'deleltebtn'}
                      label={'Delete'}
                      className={'btn button1 body-font'}
                      style={{ width: 150, textAlign: "center" }}
                      onClick={() => handleDelete(hotel.id)}
                      dismiss={"modal"}
                    />
                    </div>
                  </div>
                </div>
              </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </>
  )}
export default HotelModal