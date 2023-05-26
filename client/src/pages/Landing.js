import React from "react";
import { Logo } from "../components";
import main from "../assets/images/main.svg";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";

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
          <button class="btn btn-hero">Login</button>
        </div>
        <img src={main} alt="job hunt" class="img main-img" />
      </div>
    </Wrapper>
  );
}

export default Landing;
