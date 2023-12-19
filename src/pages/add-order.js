const AddOrder = () => {
    return <div className="row">
            <div className="col-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Thêm đơn hàng</h4>
                        <form name="sualoai" action="them_don_hang.php" method="POST">
                            <div className="form-group">
                                <label for="exampleInputUsername1">Tên</label>
                                <input type="text" className="form-control" id="name"  placeholder="Name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputUsername1">Bàn</label>
                                <select className="form-control" id="exampleInputUsername2" name="ban">
                                    <option value='$maban'>$ban_so</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputUsername2">Giá</label>
                                <input type="text" className="form-control" id="exampleInputUsername2" value="" disabled placeholder="price" name="price" required />
                            </div>
                        
                            <button type="submit" value="submit" className="btn btn-primary mr-2">Tạo</button>
                            <button className="btn btn-light">Hủy</button>
                        </form>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div className="form-group">
                                <label for="exampleInputUsername1">Danh sách đã chọn</label>
                                <table className="table table-hover">
                                <thead>
                                    <tr>  

                                    <th className="font-weight-bold">STT</th>
                                    <th className="font-weight-bold">Hình</th>
                                    <th className="font-weight-bold">Tên</th>
                                    <th className="font-weight-bold">Số lượng</th>
                                    
                                    <th className="font-weight-bold">Giá</th>
                                    <th className="font-weight-bold">Mô tả</th>
                                
                                    <th className="font-weight-bold"> Hành động </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                </tbody>
                            </table>
                            </div>

                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <label for="exampleInputUsername1">Danh sách chọn</label>
                        <table className="table table-hover">
                                <thead>
                                    <tr>  

                                    <th className="font-weight-bold">Mã</th>
                                    <th className="font-weight-bold">Hình</th>
                                    <th className="font-weight-bold">Tên</th>
                                    
                                    <th className="font-weight-bold">Giá</th>
                                    <th className="font-weight-bold">Loại</th>
                                    <th className="font-weight-bold">Mô tả</th>
                                
                                    <th className="font-weight-bold"> Hành động </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
}

export default AddOrder;