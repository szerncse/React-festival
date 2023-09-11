import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./component/GlobalStyle";
import Main from "./Pages/Main";
import Datail from "./Pages/Datail";
import Aside from "./component/Aside";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
// import Example3 from "./Pages/Example3";
import Example4 from "./Pages/Example4";
import Datepicker from "./Pages/Datepicker";

// import Example from "./Pages/Example";
// import Example2 from "./Pages/Example2";
// import Example3 from "./Pages/Example3";


function App() {
  
  const light = {
    colors : {
      Primary : "orange",
      Secondary : "orangered",
      BgColor: "#e9f1f6",
      Color : "#000",
      ContentBg: "#fff"
    }
  }
  const dark = {
    colors : {
      Primary : "#272929",
      Secondary : "#e9e9e9",
      BgColor: "#333",
      Color : "#e9e9e9",
      ContentBg: "#272929"
    }
  }
  
  const [themeConfig, setThemeConfig] = useState("light");
  const DarkMode = themeConfig === 'light' ? light : dark;
  const ThemeSelect = ()=>{
    setThemeConfig(themeConfig === 'light' ? 'dark' : 'light')
  }

  return (
    <>
    {/* {themeConfig} */}
    <ThemeProvider theme={DarkMode}>

{/* 모든 컴퍼런트에 다 적용됨 */}
  <GlobalStyle/>
  {/* <ul>
    <li><NavLink to="/">홈</NavLink></li>
    <li><NavLink to="/detail">디테일</NavLink></li>
  </ul> */}

  <Routes>
    <Route path="/" element={<Main/>}></Route>
    {/* <Route path="/" element={<Example/>}></Route> */}
    {/* <Route path="/Example2" element={<Example2/>}></Route> */}
  {/* <Route path="/Example3" element={<Example3/>}></Route> */}
    {/* <Route path="/Example3" element={<Example3/>}></Route> */}
   <Route path="/Example4" element={<Example4/>}></Route>
   <Route path="/Datepicker" element={<Datepicker/>}></Route>
    <Route path="/datail/:seq" element={<Datail/>}></Route>
  </Routes>
  <Aside ThemeSelect={ThemeSelect} themeConfig={themeConfig}/>
  </ThemeProvider>
</>
  );
}

export default App;
