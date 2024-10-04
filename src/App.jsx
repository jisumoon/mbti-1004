import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "question",
        element: <Question />,
      },
      {
        path: "result",
        element: <Result />,
      },
    ],
  },
]);

const GlobalStyle = createGlobalStyle`
${reset} // cross browsing 

@font-face {
  font-family: "SimKyungha";
  src: url("/fonts/SimKyungha.ttf") format("truetype");
}

  *{
    margin : 0px;
    padding : 0px;
    box-sizing : border-box;
  }

  ul,li{
    list-style: none;
  }

  a{
    text-decoration: none;
    color : inherit;
  }

  body{
    font-family: "SimKyungha";
    background: url("http://jjaltoon.gallery/wp-content/uploads/kboard_attached/4/201804/5ac5e8bd6d4626106002.png") center/cover no-repeat;
    height: 100vh;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;

// src 폴더 해당 값을 가져오는 방법
// : import를 통해서 값을 변수로 찾아서 사용

// public 폴더 해당값을 가져오는 바법
// : 절대위치 좌표를 기준으로 문자열형태의 주소값을 사용
