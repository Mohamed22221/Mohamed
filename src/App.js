import styled from "styled-components";
import {  Routes,Route,} from "react-router-dom";
import SideBar from './components/SideBar';
import Home from "./pages/Home";
import About from "./pages/About";
import Lines from "./components/Lines";
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';

function App() {
  return (
    <StyleApp> 
       <SideBar />

       <div className="content">
        <Lines />
     <Routes>
     <Route path="/" element={ <Home />} /> 
       <Route path="/Mohamed" element={ <Home />} /> 
       <Route path="/about" element={ <About />} />
       <Route path="/blogs" element={ <Blogs/>} />
       <Route path="/contact" element={ <Contact/>} /> 

     </Routes>
       </div>
    </StyleApp>
  );
}

const StyleApp = styled.div`
background-color: var(--background-dark-color);

.content{
  position: relative;
  margin-left: 300px;
  height: 100vh;
}
`;
export default App;
