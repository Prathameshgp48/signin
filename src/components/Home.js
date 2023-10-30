import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SignImg from "./SignImg";
import { NavLink } from "react-router-dom"; // Import NavLink

const Home = () => {
  const privateColor = "#EEF7FF";

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);

  console.log(inpval);

  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const { name, email, password } = inpval;

    if (name === "") {
      alert("Name field is required");
    } else if (email === "") {
      alert("Email field is required");
    } else if (!email.includes("@")) {
      alert("Please enter a valid email address");
    } else if (password === "") {
      alert("Password field is required");
    } else if (password.length < 8) {
      alert("Password should contain 8 characters.");
    } else {
      alert("Signed up successfully");

      localStorage.setItem("user", JSON.stringify([...data, inpval]));
    }
  };

  return (
    <>
      <div
        className="container "
        style={{ backgroundColor: "#EEF7FF", width: "100%", height: "100vh" }}
      >
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">SIGN UP</h3>
            <Form style={{ marginTop: "20px" }}>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getdata}
                  placeholder="Enter your name"
                  style={{ marginBottom: "20px" }}
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                  style={{ marginBottom: "20px" }}
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                  style={{ marginBottom: "40px" }}
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
            <p className="mt-4">
              Already Have an Account?{" "}
              <span>
                <NavLink to="/log">Log in</NavLink>
              </span>
            </p>
          </div>
          <SignImg />
        </section>
      </div>
    </>
  );
};

export default Home;
