

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TableKomisi from "./componets/TableKomisi";
import TablePenjualan from "./componets/TablePenjualan";
import TabelPembayaran from "./componets/TablePembayaran";
import TambahPembayaran from "./componets/TambahPembayaran";





const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TablePenjualan/>} />
        <Route path="/Komisi" element={<TableKomisi/>} />
        <Route path="/Pembayaran" element={<TabelPembayaran/>} />
        <Route path="/Buat_Pembayaran" element={<TambahPembayaran />} />
      </Routes>
    </Router>
  );
};

export default App;