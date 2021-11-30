/* /pages/register.js */

import React, { useState, useContext } from "react";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { registerUser } from "../components/auth";
import AppContext from "../components/context";

const Register = () => {
  const [data, setData] = useState({ email: "", username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const appContext = useContext(AppContext);
  return (
    <Container>
<div class="row">
  <div class="col-sm-4">
    <div class="card">
    <img class="card-img-top" src="https://image-b354.s3.us-west-1.amazonaws.com/imperial1_Small_Phone_b3d63ac281.jpg" ></img>
      <div class="card-body">
        <h5 class="card-title">Register New Imperial Death Star ID</h5>
        <p class="card-text">Newly cloned or newley enlisted? Create an account here.</p>
        <a href="/register" class="btn btn-primary btn-lg btn-block">Register</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
    <img class="card-img-top" src="https://image-b354.s3.us-west-1.amazonaws.com/imperial3_Small_36fba79066.jpg" ></img>
      <div class="card-body">
        <h5 class="card-title">Login with Your Current Death Star ID</h5>
        <p class="card-text">Congratualations you have lasted this long.  Use your exitsitng login ID</p>
        <a href="/login" class="btn btn-primary btn-lg btn-block">Login</a>
      </div>
    </div>
  </div>

  <div class="col-sm-4">
    <div class="card">

  
    <img class="card-img-top" src="https://image-b354.s3.us-west-1.amazonaws.com/imperial2_Small_49cd3746f4.png" ></img>
    
      <div class="card-body">
        <h5 class="card-title">Login using Imperal Googlatic ID </h5>
        <p class="card-text">Just Transfered?  Login with your Imperial Google ID  </p>
        <a href="https://skw-strapi2.herokuapp.com/connect/google" class="btn btn-primary btn-lg btn-block">Login with Google</a>
      </div>
    </div>
  </div>

</div>




    </Container>
  );
};
export default Register;
