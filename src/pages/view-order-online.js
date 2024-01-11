
const ViewOrderOnline = () => {
    return <div class="row">
            <div class="col-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Xem thông tin đơn hàng</h4>
                        <form name="sualoai" action="them_nhan_vien.php" method="POST" enctype="multipart/form-data">
                            <div class="form-group">
                                <label htmlFor="exampleInputUsername1">Tên</label>
                                <input type="text" class="form-control" id="name" disabled value="" placeholder="Name" name="name" required />
                            </div>
                            <div class="form-group">
                                <label htmlFor="exampleInputUsername1">Địa chỉ</label>
                                <input type="text" class="form-control" id="name" disabled value="" placeholder="Name" name="name" required />
                            </div>
                            <div class="form-group">
                                <label htmlFor="exampleInputUsername1">Số điện thoại</label>
                                <input type="text" class="form-control" id="name" disabled value="" placeholder="Name" name="name" required />
                            </div>
                            <div class="form-group">
                                <label htmlFor="exampleInputUsername1">Giá</label>
                                <input type="text" class="form-control" id="name" value="" disabled placeholder="price" name="price" required />
                            </div>
                            <div class="form-group">
                                <label htmlFor="exampleInputUsername1">Ghi chú</label>
                                <textarea type="text" class="form-control" id="name" value="" disabled placeholder="price" name="price" required>
                        </textarea>
                            </div>
                            <div class="form-group">
                                <label htmlFor="exampleInputUsername1">Danh sách đã chọn</label>
                                <table class="table table-hover">
                                <thead>
                                    <tr>  

                                    <th class="font-weight-bold">STT</th>
                                    <th class="font-weight-bold">Hình</th>
                                    <th class="font-weight-bold">Tên</th>
                                    
                                    <th class="font-weight-bold">Giá</th>
                                    <th class="font-weight-bold">Mô tả</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                    <td></td>
                                    <td class="py-1">
                                        <img src="../img/f" alt="image" />
                                    </td>
                                    <td></td>
                                    <td>
                                        <span class="text-danger font-weight-bold"></span>
                                    </td>

                                    <td class="col-4" style={{whiteSpace: 'normal'}}></td>                      
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                            <button value="submit" class="btn btn-primary mr-2">
                                <a href="don_hang.php" style={{color:'white'}}>Quay về</a>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
}

export default ViewOrderOnline;