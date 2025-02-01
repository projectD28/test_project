import { Link } from "react-router-dom";



const Header = () => {
  return (
    <div className="navbar bg-blue-600">
      <div className="navbar-start">
       <h3 className="text-3xl font-bold text-white">Transaksi</h3>
      </div>
       <div className="navbar hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li> <Link to="/" className="mt-4 ml-2 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700">
                Penjualan
                </Link>
            </li>
            <li> <Link to="/Komisi" className="mt-4 ml-2 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700">
                Komisi
                </Link>
            </li>
            <li> <Link to="/Pembayaran" className="mt-4 ml-2 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700">
                Pembayaran
                </Link>
            </li>
          </ul>
      </div>
    </div>
    // <div className="p-6 bg-blue-600 text-white text-center text-2xl font-semibold shadow-lg">
    //   <h1 className="text-3xl mt-6">Transaksi</h1>
      
    //   <Link to="/" className="mt-4 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700">
    //     Penjualan
    //   </Link>
    //   <Link to="/Komisi" className="mt-4 ml-2 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700">
    //     Komisi
    //   </Link>
    //   <Link to="/Pembayaran" className="mt-4 ml-2 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700">
    //     Pembayaran
    //   </Link>
    // </div>
  );
};
  
export default Header;
