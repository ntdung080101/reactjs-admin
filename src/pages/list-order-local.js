const ListOrderLocal = () => {
    return <div className="row">
            <div className="col-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Danh sách đơn hàng tại quầy</h4>
                        <form name="sualoai">
                            <div className="form-group">
                                <label for="exampleInputUsername1">Tổng tiền</label>
                                <input type="text" className="form-control" id="name" value="" disabled placeholder="price" name="price" required />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputUsername1">Số lượng</label>
                                <input type="number" className="form-control" id="name" value="" disabled placeholder="price" name="price" required />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputUsername1">Nhân viên</label>
                                <input type="text" className="form-control" id="name" value="" disabled placeholder="price" name="price" required />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputUsername1">Bàn</label>
                                <input type="number" className="form-control" id="name" value="" disabled placeholder="price" name="price" required />
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
                                    <td></td>
                                    <td className="py-1">
                                        <img src="../img/f" alt="image" />
                                    </td>
                                    <td></td>
                                    <td>
                                        <span className="text-danger font-weight-bold"></span>
                                    </td>

                                    <td className="col-4" style={{whiteSpace: 'normal'}}></td>                      
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