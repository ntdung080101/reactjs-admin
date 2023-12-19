const ListProduct = () => {
    return <div className="card">
            <div className="card-body">
            <h4 className="card-title">Danh sách sảm phẩm</h4>
                <table className="table table-hover" id="example">
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
                        <tr>
                            <td>ma</td>
                            <td className="py-1">
                            <img src="../img/" alt="image" />
                            </td>
                            <td>ten</td>
                            <td>
                                <span className="text-danger font-weight-bold">100 VNĐ</span>
                            </td>

                            <td><label className="badge badge-warning">loai</label></td>
                            <td className="col-4" style={{'white-space': 'normal'}}>descr</td>
                            <td>
                            <a href="xem_thuc_uong.php?id=<?php echo $row['ma'];?>">
                                <i className="fa-solid fa-eye text-success"></i>
                            </a>
                            &nbsp;
                            <a href="sua_thuc_uong.php?id=<?php echo $row['ma'];?>">
                                <i className="fa-solid fa-pen text-warning"></i>
                            </a>
                            &nbsp;
                            <a href="xoa_thuc_uong.php?id=<?php echo $row['ma'];?>">
                                <i className="fa-solid fa-trash text-danger"></i>
                            </a>
                            </td>                        
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
}

export default ListProduct;