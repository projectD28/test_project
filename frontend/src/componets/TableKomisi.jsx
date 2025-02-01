import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";


const TableKomisi = () => {
    const [data, setData] = useState([]);
    
  
    useEffect(() => {
      axios.get("http://127.0.0.1:8000/api/komisi") 
        .then(
          function (response) {
            setData(response.data.data)
          }
        
        )
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
  
    return (
      <div className="p-4">
        <Header />
    
        <div className="overflow-x-auto mt-6">

          
          <table className="table table-zebra w-full border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-blue-500  text-white">
              <tr>
                <th className="p-4 text-left">Marketing</th>
                <th className="p-4 text-left">Bulan</th>
                <th className="p-4 text-left">Omzet</th>
                <th className="p-4 text-left">Komisi %</th>
                <th className="p-4 text-left">Komisi Nominal</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data,index) => (
                <tr key={index}  className="hover">
                  <td className="p-4">{data.marketing}</td>
                  <td className="p-4">{data.bulan}</td>
                  <td className="p-4">{data.omzet}</td>
                  <td className="p-4">{data.komisi}%</td>
                  <td className="p-4">{data.komisi_nominal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};
  
export default TableKomisi;
