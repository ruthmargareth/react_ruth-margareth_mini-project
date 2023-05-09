import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HotelFacilities from './pages/customers/jsx/HotelFacilities.jsx'
import GroomingFacilities from './pages/customers/jsx/GroomingFacilities.jsx'
import LoginAdmin from './pages/admin/jsx/LoginAdmin.jsx'
import LandingPageAdmin from './pages/admin/jsx/LandingPageAdmin.jsx'
import HotelFacilitiesAdmin from './pages/admin/jsx/HotelFacilitiesAdmin.jsx'
import GroomingFacilitiesAdmin from './pages/admin/jsx/GroomingFacilitiesAdmin.jsx'
import GroomingAppointment from './pages/admin/jsx/GroomingAppointment.jsx'
import HotelAppointment from './pages/admin/jsx/HotelAppointment.jsx'
import GroomingHistory from './pages/admin/jsx/GroomingHistory.jsx'
import HotelHistory from './pages/admin/jsx/HotelHistory.jsx'
import GroomingHistoryDetail from './pages/admin/jsx/GroomingHistoryDetail.jsx'
import HotelHistoryDetail from './pages/admin/jsx/HotelHistoryDetail.jsx'
import GroomingInfo from './pages/admin/jsx/GroomingInfo.jsx'
import HotelInfo from './pages/admin/jsx/HotelInfo.jsx'
import SignUp from './pages/admin/jsx/SignUp.jsx'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import HotelReducer from './HotelReducer.js'
import GroomingReducer from './GroomingReducer.js'
import { ApolloProvider } from '@apollo/client'
import client from './apollo-client.js'

const store = configureStore ({
  reducer: {
    hotel: HotelReducer,
    grooming: GroomingReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path ="/" exact element ={<App />} />
            <Route path ="Hotel-Facilities"  element ={<HotelFacilities />} />
            <Route path ="Grooming-Facilities"  element ={<GroomingFacilities />} />
            <Route path ="Login-Admin"  element ={<LoginAdmin />} />
            <Route path ="Landing-Page-Admin"  element ={<LandingPageAdmin />} />
            <Route path ="Hotel-Facilities-Admin"  element ={<HotelFacilitiesAdmin />} />
            <Route path ="Grooming-Facilities-Admin"  element ={<GroomingFacilitiesAdmin />} />
            <Route path ="Hotel-Appointment"  element ={<HotelAppointment />} />
            <Route path ="Grooming-Appointment"  element ={<GroomingAppointment />} />
            <Route path ="Hotel-History"  element ={<HotelHistory />} />
            <Route path ="Grooming-History"  element ={<GroomingHistory />} />
            <Route path ="Hotel-History-Detail/:id"  element ={<HotelHistoryDetail />} />
            <Route path ="Grooming-History-Detail/:id"  element ={<GroomingHistoryDetail />} />
            <Route path ="Grooming-Info/:id" element = {<GroomingInfo/>} />
            <Route path ="Hotel-Info/:id" element = {<HotelInfo/>} />
            <Route path ="Sign-Up" element = {<SignUp/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
)
