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
import Login from './pages/login';
import Analytic from './pages/analytic';
import UpdateCategory from './pages/update-category';
import ViewCategory from './pages/view-category';
import UpdateStaff from './pages/update-staff';
import ViewCustomer from './pages/view-customer';
import UpdateProduct from './pages/update-product';


const TempComponent = () => {
  return <div className='row'>
    <div className='col-md-4 gred-margin stretch-card'>
      Temp Component
    </div>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

const Private = ({children}) => {
   const auth = localStorage.getItem('authAdmin') || '';

   return auth ? children : <Login/>;
}

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Private><App /></Private>} >
          {/* order */}
          <Route path="them_don_hang" element={<AddOrder />}></Route>
          <Route path="danh_sach_don_hang_tai_quay" element={<ListOrderLocal />}></Route>
          <Route path="danh_sach_don_hang_online" element={<ListOrderOnline />}></Route>
          {/* customer */}
          <Route path="danh_sach_khach_hang" element={<ListCustomer />}></Route>
          <Route path="xem_khach_hang/:id" element={<ViewCustomer />}></Route>
          {/* staff */}
          <Route path="them_nhan_vien" element={<AddStaff />}></Route>
          <Route path="danh_sach_nhan_vien" element={<ListStaff />}></Route>
          <Route path="sua_nhan_vien/:id" element={<UpdateStaff />}></Route>
          <Route path="xem_nhan_vien/:id" element={<ListStaff />}></Route>
          {/* product */}
          <Route path="them_san_pham" element={<AddProduct />}></Route>
          <Route path="danh_sach_san_pham" element={<ListProduct />}></Route>
          <Route path="xem_san_pham/:id" element={<ViewProduct />}></Route>
          <Route path="sua_san_pham/:id" element={<UpdateProduct />}></Route>
          {/* product category */}
          <Route path="them_loai_san_pham" element={<AddCategory />}></Route>
          <Route path="sua_loai_san_pham/:id" element={<UpdateCategory />}></Route>
          <Route path="xem_loai_san_pham/:id" element={<ViewCategory />}></Route>
          <Route path="danh_sach_loai_san_pham" element={<ListCategory />}></Route>
          {/* Analytic */}
          <Route path="thong_ke" element={<Analytic />}></Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
