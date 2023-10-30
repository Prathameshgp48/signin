import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SignImg from "./SignImg";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); // Use the useNavigate hook to programmatically navigate

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  console.log(inpval);

  const getdata = (e) => {
    const { value, name } = e.target;
    setInpval((prevInpval) => ({
      ...prevInpval,
      [name]: value,
    }));
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("user");
    console.log(getuserArr);

    const { email, password } = inpval;

    if (email === "") {
      alert("Email field is required");
    } else if (!email.includes("@")) {
      alert("Please enter a valid email address");
    } else if (password === "") {
      alert("Password field is required");
    } else if (password.length < 8) {
      alert("Password should contain 8 characters");
    } else {
      if (getuserArr) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.find((user) => user.email === email && user.password === password);

        if (userlogin) {
          alert("User login successfully");
          localStorage.setItem("user_login", JSON.stringify(userlogin));
          navigate("/dashboard"); // Navigate to the dashboard or another page upon successful login
        } else {
          alert("Invalid details");
        }
      }
    }
  };

  return (
    <>
      <div className="container" style={{ backgroundColor: "#EEF7FF", width: "100%", height: "100vh" }}>
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">LOG IN</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                variant="primary"
                className="col-lg-6"
                onClick={addData}
                style={{ background: "#915EE4" }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Don't Have an Account?{" "}
              <span>
                <NavLink to={"/"}>Sign Up</NavLink>
              </span>
            </p>
          </div>
          <SignImg />
        </section>
      </div>
    </>
  );
};

export default Login;
