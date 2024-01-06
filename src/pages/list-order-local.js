const ListOrderLocal = () => {
    return <div className="row">
            <div className="col-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Danh sách đơn hàng tại quầy</h4>
                        <form name="sualoai">
                            <div className="form-group">
                                <label for="exampleInputUsername1">Tổng tiền</label>
                                <input type="text" className="form-control" id="name" value="" disabled placeholder="" name="price" required />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputUsername1">Số lượng</label>
                                <input type="number" className="form-control" id="name" value="" disabled placeholder="" name="price" required />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputUsername1">Nhân viên</label>
                                <input type="text" className="form-control" id="name" value="" disabled placeholder="" name="price" required />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputUsername1">Danh sách đã chọn</label>
                                <table className="table table-hover">
                                <thead>
                                    <tr>  

                                    <th className="font-weight-bold">STT</th>
                                    <th className="font-weight-bold">Hình</th>
                                    <th className="font-weight-bold">Tên</th>
                                    
                                    <th className="font-weight-bold">Giá</th>
                                    <th className="font-weight-bold">Mô tả</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            <img src="https://cdn.tgdd.vn/Products/Images/44/313084/Slider/vi-vn-hp-15s-fq5229tu-i3-8u237pa-slider-2.jpg"/>
                                        </td>
                                        <td>
                                            Laptop HP thinkpad i5 8/256GB 
                                        </td>
                                        <td>
                                            12500000
                                        </td>
                                        <td>
                                         Laptop HP sử dụng bộ vi xử lý Intel Core i5...
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                            </div>
                            <button value="submit" className="btn btn-primary mr-2">
                                <a href="don_hang_tai_quay.php" style={{color:'white'}}>Quay về</a>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
}

export default ListOrderLocal;