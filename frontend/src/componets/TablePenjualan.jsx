import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";


const TablePenjualan = () => {
    const [data, setData] = useState([]);
    
  
    useEffect(() => {
      axios.get("http://127.0.0.1:8000/api/penjualan") 
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
                <th className="p-4 text-left">Nomor Transaksi</th>
                <th className="p-4 text-left">Marketing</th>
                <th className="p-4 text-left">Tanggal</th>
                <th className="p-4 text-left">Cargo Fee</th>
                <th className="p-4 text-left">Total Balance</th>
                <th className="p-4 text-left">Grand Total</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data,index) => (
                <tr key={index}  className="hover">
                  <td className="p-4">{data.transaction_number}</td>
                  <td className="p-4">{data.marketing_id}</td>
                  <td className="p-4">{data.date}</td>
                  <td className="p-4">{data.cargo_fee}</td>
                  <td className="p-4">{data.total_balance}</td>
                  <td className="p-4">{data.grand_total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};
  
export default TablePenjualan;
