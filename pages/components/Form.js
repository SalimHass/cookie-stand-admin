

function Form({SubForm}) {
  return (
    
    <dev className="grid grid-cols-1 gap-1 place-items-center mx-auto bg-emerald-100  py-8  ">
        <dev className="relative  grid gap-2 bg-emerald-300 px-8 py-8 w-3/4 rounded-md">
            

            <h1 className="place-self-center text-xl ">Create Cookie Stand</h1>
            


        <form className="grid gap-2 grid-cols-4 grid-rows-2" onSubmit={SubForm}>
       
            
        <lable className="col-span-4  ">Location

        <input className="w-9/12" type={"text"}  name="location" />
        </lable>
        
           
        <lable className="bg-emerald-200 rounded p-1">Minimum Customers per Hour

        <input className="w-full" type={"number"} name="minCust" />
        </lable>
            

        <lable className="bg-emerald-200 rounded p-1">Maximum Customers per Hour

        <input className="w-full" type={"number"} name="maxCust" />
        </lable>
            
        <lable className="bg-emerald-200 rounded p-1 ">Average Cookies per Sale

        <input className="w-full" type={"number"}  name="avgCookies"/>
        </lable>
       
        
        <input className=" felx bg-emerald-500 h-4/6 w-5/6 rounded "  type={"submit"} ></input>
        
    </form>
  
        </dev>
    </dev>
    
    
  )
}

export default Form