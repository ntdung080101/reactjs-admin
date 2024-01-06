const ListOrderOnline = () => {
    return <>
    <div className="row">
      <div className="col-md-12 grid-margin">
        <div className="card">
          <div className="card-body">
            <div className="row report-inner-cards-wrapper">
              <div className=" col-md-6 col-sm-6 col-xl report-inner-card">
                <div className="inner-card-text">
                  <span className="report-title">TỔNG ĐƠN</span>
                  <h4>tong</h4>
                  
                </div>
                <div className="inner-card-icon bg-success">
                  <i className="icon-rocket"></i>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xl report-inner-card">
                <div className="inner-card-text">
                  <span className="report-title">DOANH THU</span>
                  <h4> 101010 đ</h4>
                  
                </div>
                <div className="inner-card-icon bg-danger">
                  <i className="icon-briefcase"></i>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xl report-inner-card">
                <div className="inner-card-text">
                  <span className="report-title">ĐƠN HOÀN THÀNH</span>
                  <h4>hoan thanh</h4>
                  
                </div>
                <div className="inner-card-icon bg-warning">
                  <i className="icon-globe-alt"></i>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xl report-inner-card">
                <div className="inner-card-text">
                  <span className="report-title">ĐƠN CHỜ XỬ LÝ</span>
                  <h4>xu ly</h4>
                </div>
                <div className="inner-card-icon bg-primary">
                  <i className="icon-diamond"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card">
        <div className="card-body">
            <h4 className="card-title">Danh Sách Đơn Hàng Online</h4>
            <table className="table table-hover" id="example">
              <thead>
                <tr>
                  <th className="font-weight-bold">Mã đơn</th>
                  <th className="font-weight-bold">Tên Khách Hàng</th>
                  <th className="font-weight-bold">SDT</th>
                  <th className="font-weight-bold">Thành Tiền</th>
                  <th className="font-weight-bold">Ngày Đặt</th>
                  <th className="font-weight-bold">Ghi Chú</th>
                  <th className="font-weight-bold">Trạng Thái</th>
                  <th className="font-weight-bold">Hành Động</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td> Tuấn</td>
                  <td>0168532498</td>
                  <td className="text-danger"><b>10251 đ </b></td>
                  <td>
                    10/10/2023
                    </td>

                    <td><em>Không có ghi chú</em></td>
                    <td><label className="<?php echo $badgeClass; ?>">    Hoàn thành </label></td>
                    <td>
                        <a href="xem_don_hang_online.php?id=<?php echo $row['ma']?>">
                        <i className="fa-solid fa-eye text-success"></i>
                        </a>
                        &nbsp;
                        <a  href="sua_don_hang_online.php?id=<?php echo $row['ma']?>">
                        <i className="fa-solid fa-pen text-warning"></i>
                        </a>
                        &nbsp;
                        <a  href="xoa_don_hang_online.php?id=<?php echo $row['ma']?>">
                        <i className="fa-solid fa-trash text-danger"></i>
                        </a>
                    </td>            
                </tr>
              </tbody>
            </table>
        </div>
    </div>
    </>
}

export default ListOrderOnline;