"use client";

import React from "react";
import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <button className="get-started flex items-center font-mont font-[500] text-[1.2rem] px-4 py-4 border-none rounded-xl relative shadow-[0_0_1.5em_-.3em] shadow-[#3d8bff4d] hover:shadow-[#f95e3f6b]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-[2rem] h-[2rem] rocket transition-transform mr-2 fill-[var(--color-text-primary)]"
        >
          <path d="M23.371 29.529c0 0 0.335-2.012-1.731-4.469 2.011-5.641 2.29-10.778 2.29-10.778s4.133 0.95 4.133 5.026c-0.001 6.981-4.692 10.221-4.692 10.221zM11.979 27.078c0 0-2.768-8.883-2.768-12.568 0-1.658 0.187-3.133 0.478-4.472h12.61c0.293 1.34 0.481 2.816 0.481 4.473 0 3.629-2.76 12.567-2.76 12.567h-8.041zM15.99 12.069c-1.418 0-2.568 1.15-2.568 2.569 0 1.418 1.15 2.569 2.568 2.569s2.569-1.15 2.569-2.569c0.001-1.419-1.15-2.569-2.569-2.569zM15.438 0.596v-3.498h1v3.409c1.143 0.832 4.236 3.478 5.635 8.575h-12.16c1.352-4.957 4.296-7.574 5.525-8.486zM8.629 29.529c0 0-4.691-3.24-4.691-10.221 0-4.076 4.133-5.026 4.133-5.026s0.279 5.137 2.289 10.778c-2.067 2.458-1.731 4.469-1.731 4.469zM17.691 30.045l-0.838-0.838-0.893 2.793-1.062-2.793-0.726 1.451-1.062-2.625h5.752l-1.171 2.012z" />
        </svg>
        <span>GET STARTED</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .get-started {
    background: linear-gradient(
      135deg,
      var(--color-accent-blue-primary),
      var(--color-accent-red)
    );
    letter-spacing: 0.05em;
    color: white;
    cursor: pointer;
    transition: all 0.2s;
  }

  .get-started:hover {
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
    .rocket {
      rotate: 45deg;
    }
  }

  .get-started:active {
    box-shadow: 0 0.3em 1.5em -0.3em #f95e3f6b;
    transform: scale(0.95);
  }

  .get-started::before {
    content: "";
    width: 0.32rem;
    height: 40%;
    background-color: white;
    position: absolute;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    left: 0;
    transition: all 0.2s;
  }

  .get-started::after {
    content: "";
    width: 0.32rem;
    background-color: var(--color-base-content);
    height: 40%;
    background-color: white;
    position: absolute;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    right: 0;
    transition: all 0.2s;
  }

  .get-started:hover::before,
  .get-started:hover::after {
    height: 60%;
  }

  .get-started:hover::before {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    transform: translate(5px, -15px) rotate(45deg);
  }

  .get-started:hover::after {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    transform: translate(-5px, 15px) rotate(45deg);
  }
`;

export default Button;
