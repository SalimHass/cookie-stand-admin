import Head from "next/head";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
function Home ()  {
  return (
    <>
    <Head>
          <title>Welcome to Cookie Admin</title>
    </Head>
    <Header/>
    <Form/>
    <Footer/>

    </>
    
  )
}

export default Home
