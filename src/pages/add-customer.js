const AddCustomer = () => {
    return <div className="row">
            <div className="col-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Thêm khách hàng</h4>
                            <form name="sualoai" className="forms-sample"  action="them_khach_hang.php" method="POST" enctype="multipart/form-data">
                                <div className="form-group">
                                    <label for="exampleInputUsername1">Tên</label>
                                    <input type="text" className="form-control" id="name" required  placeholder="Name" name="name"  />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputUsername1">Địa chỉ</label>
                                    <input type="text" className="form-control" id="name" required  placeholder="address" name="address" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputUsername1">Tên tài khoản</label>
                                    <input type="text" className="form-control" id="name" required  placeholder="username" name="username" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputUsername1">Mật khẩu</label>
                                    <input type="password" className="form-control" id="name" required  placeholder="password" name="password" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputUsername1">Số điện thoại</label>
                                    <input type="text" className="form-control" id="name" required  placeholder="phone number" name="phonenumber" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputUsername1">Hình ảnh</label>
                                    <img id="thumbnail" src="" alt="your image" hidden style={{width: '300px', height: 'auto', display:'inline-block'}}/>
                                    <div className="input-group">
                                        <input type="file" className="form-control file-upload-info" id="image" name="image" placeholder="Image" required/>
                                    </div>
                                </div>
                                <button type="submit" value="submit" className="btn btn-primary mr-2">Tạo</button>
                                <button className="btn btn-light">Hủy</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
}

export default AddCustomer;