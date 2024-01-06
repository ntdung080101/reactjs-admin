import SubMenu from './sub-menu';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function SideBar(){
  const [listMenuTitle,setListMenuTitle] = useState([
    {
      title:'Đơn hàng',
      icon: 'fa-solid fa-truck-fast',
      listLink: [
        {
            link: 'them_don_hang',
            name: 'Thêm đơn hàng'
        },
        {
            link: 'danh_sach_don_hang_online',
            name: 'Danh sách đơn hàng online '
        },
        {
            link: 'danh_sach_don_hang_tai_quay',
            name: 'Danh sách đơn hàng tại quầy'
        },
      ],
    },
    {
      title: 'Khách hàng',
      icon: 'fa-solid fa-user',
      listLink: [
        {
          link: 'danh_sach_khach_hang',
          name: 'Danh sách khách hàng',
        },
      ],
    },
    {
      title: 'Nhân viên',
      icon: 'fa-solid fa-solid fa-user-tie',
      listLink: [
        {
          link: 'danh_sach_nhan_vien',
          name: 'Danh sách nhân viên',
        },
        {
          link: 'them_nhan_vien',
          name: 'Thêm nhân viên',
        }
      ],
    },
    {
      title: 'Sản phẩm',
      icon: 'fa-solid fa-solid fa-martini-glass',
      listLink: [
        {
          link: 'danh_sach_san_pham',
          name: 'Danh sách sản phẩm',
        },
        {
          link: 'them_san_pham',
          name: 'Thêm sản phẩm',
        }
      ],
    },
    {
      title: 'Loại sản phẩm',
      icon: 'fa-solid fa-solid fa-mug-saucer',
      listLink: [
        {
          link: 'danh_sach_loai_san_pham',
          name: 'Danh sách lọai sản phẩm',
        },
        {
          link: 'them_loai_san_pham',
          name: 'Thêm lọai sản phẩm',
        }
      ],
    },
    {
      title: 'Thống kê',
      icon: 'fa-solid fa-truck-fast',
      listLink: [
        {
          link: 'thong_ke',
          name: 'Thống kê',
        },
      ]
    },
  ])

  return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-profile">
            <a href="#" className="nav-link">
              <div className="profile-image">
                <img className="img-xs rounded-circle" src="../img/hinh.jpg" alt="profile image" />
                <div className="dot-indicator bg-success"></div>
              </div>
              <div className="text-wrapper">
                <p className="profile-name">Admin</p>
                <p className="designation">admin</p>

              </div>
              <div className="icon-container">
                <i className="icon-bubbles"></i>
                <div className="dot-indicator bg-danger"></div>
              </div>
            </a>
          </li>
          <li className="nav-item nav-category">
            <span className="nav-link">Dashboard</span>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <span className="menu-title">Dashboard</span>
              <i className="icon-screen-desktop menu-icon"></i>
            </Link>
          </li>
          <li className="nav-item nav-category"><span className="nav-link">Quản Lý</span></li>
          {/* Main side bar */}
          {listMenuTitle.map((el,index)=> <SubMenu key={`SubMenu_${index}`} menuTitle={el.title} menuIcon={el.icon} listLink={listMenuTitle[index]['listLink']} subIndex={index} ></SubMenu>)}
        </ul>
      </nav>
  )
}
