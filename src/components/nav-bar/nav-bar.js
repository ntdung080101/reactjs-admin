import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="navbar-brand-wrapper d-flex align-items-center">
            <Link  style={{width:'179px'}} className="navbar-brand brand-logo" to="/">
                <img  style={{height: '49px', width:'150px'}} src="../img/logoblack.png" alt="logo" className="logo-dark" />
            </Link>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center flex-grow-1">

            <h5 className="mb-0 font-weight-medium d-none d-lg-flex">Welcome admin</h5> 
            <ul className="navbar-nav navbar-nav-right ml-auto">
                <form className="search-form d-none d-md-block" action="#">
                <i className="icon-magnifier"></i>
                <input type="search" className="form-control" placeholder="Search Here" title="Search here" />
                </form>
                <li className="nav-item"><a href="#" className="nav-link"><i className="icon-basket-loaded"></i></a></li>
                <li className="nav-item"><a href="#" className="nav-link"><i className="icon-chart"></i></a></li>
                <li className="nav-item dropdown">
                    
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0" aria-labelledby="messageDropdown">
                    <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                        <img src="images/faces/face10.jpg" alt="image" className="img-sm profile-pic" />
                    </div>
                    <div className="preview-item-content flex-grow py-2">
                        <p className="preview-subject ellipsis font-weight-medium text-dark">Marian Garner </p>
                        <p className="font-weight-light small-text"> The meeting is cancelled </p>
                    </div>
                    </a>
                    <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                        <img src="images/faces/face12.jpg" alt="image" className="img-sm profile-pic" />
                    </div>
                    <div className="preview-item-content flex-grow py-2">
                        <p className="preview-subject ellipsis font-weight-medium text-dark">David Grey </p>
                        <p className="font-weight-light small-text"> The meeting is cancelled </p>
                    </div>
                    </a>
                    <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                        <img src="images/faces/face1.jpg" alt="image" className="img-sm profile-pic" />
                    </div>
                    <div className="preview-item-content flex-grow py-2">
                        <p className="preview-subject ellipsis font-weight-medium text-dark">Travis Jenkins </p>
                        <p className="font-weight-light small-text"> The meeting is cancelled </p>
                    </div>
                    </a>
                </div>
                </li>
                
                <li className="nav-item dropdown d-none d-xl-inline-flex user-dropdown">
                <a className="nav-link dropdown-toggle" id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                    <img className="img-xs rounded-circle ml-2" src="" alt="Profile image" /> <span className="font-weight-normal"> admin </span></a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                    <div className="dropdown-header text-center">
                    <img className="img-xs rounded-circle" src="" alt="Profile image" />
                    <p className="mb-1 mt-3">admin</p>
                    <p className="font-weight-light text-muted mb-0">
                    </p>

                    </div>
                    <a className="dropdown-item"><i className="dropdown-item-icon icon-user text-primary"></i> Hồ Sơ </a>
                    <a href="logout.php" className="dropdown-item" ><i className="dropdown-item-icon icon-power text-primary"></i>Đăng Xuât</a>
                </div>
                </li>
            </ul>
            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                <span className="icon-menu"></span>
            </button>
            </div>
        </nav>
    )
}