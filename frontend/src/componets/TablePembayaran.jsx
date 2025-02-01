import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import { Link } from "react-router-dom";


const TabelPembayaran = () => {
    const [data, setData] = useState([]);
    
  
    useEffect(() => {
      axios.get("http://127.0.0.1:8000/api/pembayaran") 
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
          <Link to="/Buat_Pembayaran" className="mt-2 mb-2 ml-2 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700">
         Buat Pembayaran
        </Link>
          <table className="table table-zebra w-full border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-blue-500  text-white">
              <tr>
                <th className="p-4 text-left">Nomor Payment</th>
                <th className="p-4 text-left">Nomor Transaksi</th>
                <th className="p-4 text-left">Tanggal</th>
                <th className="p-4 text-left">Jumlah Pembayaran</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data,index) => (
                <tr key={index}  className="hover">
                  <td className="p-4">{data.payment_number}</td>
                  <td className="p-4">{data.transaction_number}</td>
                  <td className="p-4">{data.date}</td>
                  <td className="p-4">{data.payment_amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};
  
export default TabelPembayaran;
