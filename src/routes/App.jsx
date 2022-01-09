import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Layout from "../components/Layout";
import Checkout from "../containers/Checkout";
import Home from "../containers/Home";
import Information from "../containers/Information";
import NotFound from "../containers/NotFound";
import Payment from "../containers/Payment";
import Success from "../containers/Success";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";


function App() {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState} >
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/checkout" exact element={<Checkout/>} />
            <Route path="/checkout/information" exact element={<Information/>} />
            <Route path="/checkout/payment" exact element={<Payment/>} />
            <Route path="/checkout/success" exact element={<Success/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App

