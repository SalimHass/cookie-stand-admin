import Head from "next/head";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { useState } from 'react';
import ReportTable from "./components/ReportTable";

function Home ()  {
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

export default Home
