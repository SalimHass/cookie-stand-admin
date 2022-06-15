import { hours } from "../../data"; 
export default function ReportTable({ formList }) {
    const hourlySales=[48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36];
    
    return (
        <>
      <table className="w-1/2 mx-auto my-4 rounded bg-emerald-300">
        <thead>
            <th className="border border-black">location</th>

            { hours.map(hour=>{return (<th className="border border-black">{hour}</th>)})}
          <th className="border border-black">Totals</th>
        </thead>
            <tbody>
            { formList.map(element=>{return (<tr className="border border-black"><td>{element.location}</td>{hourlySales.map(hSales=>{return (<td className="border border-black">{hSales}</td>)})}
            
            <td>{hourlySales.reduce((total, sales) => total += (sales), 0)}</td></tr>)})}
 
            </tbody>
            <tfoot>
                <td>Totals</td>

            </tfoot>
      </table>
      
      {

          
      }
        </>
      
    );
  }