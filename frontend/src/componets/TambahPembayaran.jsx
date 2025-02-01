import  { useEffect,useState } from "react";
import axios from "axios";
import Header from "./Header";
import { useNavigate,Link } from "react-router-dom";


const TambahPembayaran = () => {
  const [formData, setFormData] = useState({ transaction_number: "", jumlah_pembayaran: "", tanggal_pembayaran: "" });
  const navigate = useNavigate();

  const [dataPenjualan, setDataPenjualan] = useState([]);
    
  
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/penjualan") 
      .then(
        function (response) {
            setDataPenjualan(response.data.data)
        }
      
      )
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/buat_pembayaran", formData); 
      alert("Berhasil Disimpan");
      navigate("/Pembayaran"); // Redirect ke halaman tabel
    } catch (error) {
      console.error("Error", error);
      alert("Gagal Tersimpan.");
    }
  };

  return (
    <div className="p-6  min-h-screen flex flex-col items-center">
      <Header />
      <h2 className="text-2xl font-semibold mt-6">Buat Pembayaran</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 mt-4 rounded-lg shadow-lg w-full max-w-md">
        <div className="form-control">
          <label className="label">Nomor Transaksi</label>
          <select name="transaction_number" value={formData.transaction_number} onChange={handleChange} className="select select-bordered" required>
            <option value="">Select Nomor Transaksi</option>
            {dataPenjualan.map((data) => (
              <option key={data.id} value={data.transaction_number}>{data.transaction_number}</option>
            ))}
          </select>
        </div>
        <div className="form-control mt-4">
          <label className="label">Tanggal Pembayaran</label>
          <input type="date" name="tanggal_pembayaran" value={formData.tanggal_pembayaran}  onChange={handleChange} className="input input-bordered" required />
        </div>
        <div className="form-control mt-4">
          <label className="label">Jumlah Pembayaran</label>
          <input type="number" name="jumlah_pembayaran" value={formData.jumlah_pembayaran}  onChange={handleChange} className="input input-bordered" required />
        </div>
        
        <button type="submit" className="btn btn-primary w-full mt-6">Simpan</button>
      </form>
      <Link to="/pembayaran" className="mt-4 text-blue-600 hover:underline">Kembali</Link>
    </div>
  );
};




export default TambahPembayaran;
