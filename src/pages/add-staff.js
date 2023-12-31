import { useState } from "react";
import axios from "../utils/axios";
import { ValidateEmail, ValidatePhoneNumber } from "../utils/data-type";
import RequestResult from "../components/request/request-result";

const AddStaff = () => {
  const [token, setToken] = useState(localStorage.getItem("authAdmin") || "");
  const [status, setStatus] = useState(0);
  const [error, setErrors] = useState("");
  const [success, setSuccess] = useState("");

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState(0);
  const [image, setImage] = useState(null);
  const [password, setPassword] = useState("");

  const clear = () => {
    setName("");
    setAddress("");
    setPhoneNumber("");
    setGender(0);
    setImage(null);
    setUsername("");
    setPassword("");
  };

  const createAccount = () => {
    if (!ValidateEmail(username)) {
      alert(username);
      setErrors("Email không phù hợp");
      setSuccess("");
      return;
    }

    if (!ValidatePhoneNumber(phoneNumber)) {
      setErrors("Số điện thoại không phù hợp");
      return;
    }

    setStatus(1);

    const formData = new FormData();

    if (image !== null) {
      formData.append("file", image);
    }

    formData.append("username", username);
    formData.append("password", password);
    formData.append("name", name);
    formData.append("gender", gender);
    formData.append("address", address);
    formData.append("phoneNumber", phoneNumber);
    formData.append("role", 1);

    axios
      .post("staff/create", formData, {
        headers: {
          Authorization: "Bearer " + token
        },
      })
      .then((reponse) => {
        setSuccess("Thêm thành công");
        setErrors("");
        clear();
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
      })
      .finally(() => {
        setStatus(0);
      });
  };

  const cancel = () => {
    clear();
  };

  return (
    <div className="row">
      <div className="col-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Thêm nhân viên</h4>
            <RequestResult status={status} error={error} success={success} />

            <form name="add_staff" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Tên tài khoản</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputUsername1">Mật khẩu</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
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
                  src={image ? URL.createObjectURL(image) : ""}
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
                    value={image}
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
              </div>

              <button
                type="submit"
                value="submit"
                className="btn btn-primary mr-2"
                onClick={createAccount}
              >
                Tạo
              </button>
              <button className="btn btn-light" onClick={cancel}>
                Hủy
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStaff;
