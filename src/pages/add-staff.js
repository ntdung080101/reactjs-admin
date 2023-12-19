const AddStaff = () => {
    return <div className="row">
                <div className="col-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Thêm nhân viên</h4>
                                <form name="sualoai" action="them_nhan_vien.php" method="POST" enctype="multipart/form-data">
                                    <div className="form-group">
                                        <label for="exampleInputUsername1">Tên</label>
                                        <input type="text" className="form-control" id="name"  placeholder="Name" name="name" required />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputUsername1">Địa chỉ</label>
                                        <input type="text" className="form-control" id="name"  placeholder="address" name="address" required />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputUsername1">Số điện thoại</label>
                                        <input type="text" className="form-control" id="name"  placeholder="phone number" name="phonenumber" required />
                                    </div>
                                    <div className="form-group">
                                    <label for="exampleInputUsername2">Chức vụ</label>
                                        <select className="form-control" id="exampleInputUsername2" name="role">
                                                    <option value="1">Quản lý</option>
                                                    <option value="2">Nhân viên</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputUsername1">Ngày vào làm</label>
                                        <input type="date" className="form-control" id="name"  placeholder="Name" name="start_date" required />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputUsername1">Giới tính</label>
                                        <select className="form-control" id="exampleInputUsername2" name="gender">
                                                    <option value="1">Nam</option>
                                                    <option value="2">Nu</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputUsername2">Phân quyền</label>
                                        <select className="form-control" id="exampleInputUsername2" name="permission">
                                                <option value="1">Quản lý</option>
                                                <option value="2">Nhân viên</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputUsername1">Hình ảnh</label>
                                        <img id="thumbnail" src="" alt="your image" required style={{width: '300px', height: 'auto', display:'inline-block'}} hidden/>
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
};

export default AddStaff;