

function Form() {
  return (
    
    <dev className="grid grid-cols-1 gap-1 place-items-center mx-auto bg-emerald-100 h-96   ">
        <dev className="relative  grid gap-2 bg-emerald-300 px-8 py-8 w-3/4 rounded-md">
            

            <h1 className="place-self-center text-xl ">Create Cookie Stand</h1>
            


        <form className="grid gap-2 grid-cols-4 grid-rows-2" >
       
            
        <lable className="col-span-4  ">Location

        <input className="w-9/12" type={"text"}  />
        </lable>
        
           
        <lable>Minimum Customers per Hour

        <input className="w-full" type={"number"}  />
        </lable>
            

        <lable>Maximum Customers per Hour

        <input className="w-full" type={"number"}  />
        </lable>
            
        <lable>Average Cookies per Sale

        <input className="w-full" type={"number"}  />
        </lable>
       
        
        <input className="bg-emerald-500 h-16 w-60" type={"submit"} value={"Create"}></input>
        
    </form>
    <p className="bg-emerald-300 place-self-center text-xl">
        Report table comming soon...</p>
        </dev>
    </dev>
    
    
  )
}

export default Form