import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import styled from "styled-components";

function Landing() {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobify" class="logo" />
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
    </main>
  );
}

const Wrapper = styled.main``;

export default Landing;
