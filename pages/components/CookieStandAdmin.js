import React from 'react'
import Head from "next/head";
import Header from "./Header"
import Form from "./Form";
import Footer from "./Footer";
import { useState } from 'react';
import ReportTable from "./ReportTable";

const CookieStandAdmin = () => {
    const [formList,setFormList]=useState([]);
    const [counter, setCounter] = useState(0);
    
    const Subform= (e) =>{
      e.preventDefault();
      setCounter(counter + 1);
  
      let data={
        location : e.target.location.value,
        minCust : e.target.minCust.value,
        maxCust : e.target.maxCust.value,
        avgCookies : e.target.avgCookies.value,
      };
      setFormList([...formList,data])
     
    }
    
  return (
    <>
    <Head>
          <title>Welcome to Cookie Admin</title>
    </Head>
    <Header counter={counter}/>
    <Form SubForm={Subform}/>
    {formList.length >=1 ? (<ReportTable formList={formList}/>) : 
    (<p className="flex justify-center mx-auto bg-emerald-100 py-6  ">No Cookie Stands Valiable</p>)}
    <Footer counter={counter}/>
    
    
    </>
  )
}

export default CookieStandAdmin