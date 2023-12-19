import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// import pages
import AddProduct from './pages/add-product';
import AddOrder from './pages/add-order';
import ViewOrderOnline from './pages/view-order-online';
import ListOrderLocal from './pages/list-order-local';
import ViewProduct from './pages/view-product';
import ListStaff from './pages/list-staff';
import ListCustomer from './pages/list-customer';
import AddCustomer from './pages/add-customer';
import AddStaff from './pages/add-staff';
import ListProduct from './pages/list-product';
import AddCategory from './pages/add-category';
import ListCategory from './pages/list-category';
import ListOrderOnline from './pages/list-order-online';


const TempComponent = () => {
  return <div className='row'>
    <div className='col-md-4 gred-margin stretch-card'>
      Temp Component
    </div>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} >
          {/* order */}
          <Route path="them_don_hang" element={<AddOrder />}></Route>
          <Route path="danh_sach_don_hang_tai_quay" element={<ListOrderLocal />}></Route>
          <Route path="danh_sach_don_hang_online" element={<ListOrderOnline />}></Route>
          {/* customer */}
          <Route path="them_khach_hang" element={<AddCustomer />}></Route>
          <Route path="danh_sach_khach_hang" element={<ListCustomer />}></Route>
          {/* staff */}
          <Route path="them_nhan_vien" element={<AddStaff />}></Route>
          <Route path="danh_sach_nhan_vien" element={<ListStaff />}></Route>
          {/* product */}
          <Route path="them_san_pham" element={<AddProduct />}></Route>
          <Route path="danh_sach_san_pham" element={<ListProduct />}></Route>
          {/* product category */}
          <Route path="them_loai_san_pham" element={<AddCategory />}></Route>
          <Route path="danh_sach_loai_san_pham" element={<ListCategory />}></Route>
        </Route>
        <Route path='/login' exact element={()=><>Hello</>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
