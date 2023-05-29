import React from "react";
import { Logo } from "../components";
import main from "../assets/images/main.svg";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div class="container">
        <div class="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby pok pok chambray pour-over succulents praxis godard. Chia
            selfies. Try-hard tbh yuccie, narwhal marxism street art sus retro
            heirloom craft beer umami gatekeep tonx brunch microdosing.
          </p>
          <Link to="/register" class="btn btn-hero">
            Register
          </Link>
        </div>
        <img src={main} alt="job hunt" class="img main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;
