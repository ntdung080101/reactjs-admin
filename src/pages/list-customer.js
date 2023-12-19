const ListCustomer = () => {
    return <div className="card-body">
            <h4 className="card-title">Danh Sách Khách Hàng</h4>
            <table className="table table-hover" id="example">
            <thead>
                <tr> 
                <th className="font-weight-bold">Mã</th>
                <th className="font-weight-bold">Hình</th>
                <th className="font-weight-bold">Tên</th>
                <th className="font-weight-bold">Username</th>
                <th className="font-weight-bold">SDT</th>
                <th className="font-weight-bold">Địa chỉ</th>
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
                    <td > username</td>
                    <td>
                        1642165498
                    </td>

                    <td>
                    address
                    </td>
                    <td>
                    <a href="xem_khach_hang.php?id=<?php echo $row['ma'];?>">
                        <i className="fa-solid fa-eye text-success"></i>
                    </a>
                    &nbsp;
                    <a href="sua_khach_hang.php?id=<?php echo $row['ma'];?>">
                        <i className="fa-solid fa-pen text-warning"></i>
                    </a>
                    &nbsp;
                    <a href="xoa_khach_hang.php?id=<?php echo $row['ma'];?>">
                        <i className="fa-solid fa-trash text-danger"></i>
                    </a>
                    </td>   

                </tr>
            </tbody>
            </table>
        </div>
};

export default ListCustomer;