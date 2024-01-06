import { useEffect, useState } from "react";
import axios from "../utils/axios";
import { ValidateEmail, ValidatePhoneNumber } from "../utils/data-type";
import RequestResult from "../components/request/request-result";
import { Link, useParams } from "react-router-dom";
import { SERVER_URL } from "../constraint";

const UpdateStaff = () => {
  const { id } = useParams();

  const [token, setToken] = useState(localStorage.getItem("authAdmin") || "");
  const [status, setStatus] = useState(0);
  const [error, setErrors] = useState("");
  const [success, setSuccess] = useState("");

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState(0);
  const [permission, setPermission] = useState(0);
  const [image, setImage] = useState(null);
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios
      .get("staff/get", {
        params: {
            code: id
        }
      }, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        const data = response.data.message;

        console.log(data);

        setUsername(data.ten_dang_nhap)
        setPermission(data.phan_quyen)
        setName(data.ten)
        setAddress(data.dia_chi)
        setGender(data.gioi_tinh)
        setPhoneNumber(data.so_dien_thoai)
        setImage(data.hinh_anh === ''? null:data.hinh_anh)
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      })
      .finally(() => {
        setStatus(0);
      });
  }, []);

  const updateStaff = () => {
    if (!ValidatePhoneNumber(phoneNumber)) {
      setErrors("Số điện thoại không phù hợp");
      return;
    }

    setStatus(1);

    const formData = new FormData();

    if (image !== null) {
      formData.append("file", image);
    }

    formData.append("code", id);
    formData.append("gender", gender);
    formData.append("name", name);
    formData.append("permission", permission);
    formData.append("address", address);
    formData.append("phoneNumber", phoneNumber);

    console.log(JSON.stringify({
      code: id,
      gender,
      name,
      permission,
      address,
      phoneNumber
    }))

    axios
      .put("staff/update", formData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((reponse) => {
        setSuccess("Cập nhật thành công");
        setErrors("");
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      })
      .finally(() => {
        setStatus(0);
      });
  };

  return (
    <div className="row">
      <div className="col-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Cập nhật nhân viên</h4>
            <RequestResult status={status} error={error} success={success} />

            <form name="add_staff" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Tên</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputUsername2">Địa chỉ</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="address"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Số điện thoại</label>
                <input
                  type="text"
                  className="form-control"
                  id="phonenumber"
                  placeholder="phonenumber"
                  name="phonenumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Giới tính</label>
                <select
                  className="form-control"
                  id="exampleInputUsername2"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="0">Nam</option>
                  <option value="1">Nữ</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Hình ảnh</label>
                <img
                  id="thumbnail"
                  src={image ? 
                    typeof(image) === 'string'? 
                      SERVER_URL + image : URL.createObjectURL(image) : ""}
                  alt="your image"
                  style={{
                    width: "300px",
                    height: "auto",
                    display: image === null ? "none" : "inline-block",
                  }}
                />
                <div className="input-group">
                  <input
                    type="file"
                    className="form-control file-upload-info"
                    id="image"
                    name="image"
                    placeholder="Image"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
              </div>

              <button
                type="submit"
                value="submit"
                className="btn btn-primary mr-2"
                onClick={updateStaff}
              >
                Cập nhật
              </button>
              <Link to="/danh_sach_nhan_vien" className="btn btn-light">
                Quay về
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateStaff;
