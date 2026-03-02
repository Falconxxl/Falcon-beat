
import './App.css';
import Beat from "./Pages/Beat";
import { Routes, Route } from "react-router-dom";
import Songs from "./Pages/Songs";
import License from "./Pages/License";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Faq from "./Pages/Faq";
import Commercial from "./Pages/Commercial";
import Collab from "./Pages/Collab";
import Test from "./Test/Test";
import New from "./Pages/New";


function App() {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<Beat/>}></Route>
                <Route exact path='/New' element={<New/>}></Route>
                <Route exact path='/Commercial' element={<Commercial/>}></Route>
                <Route path='/Songs' element={<Songs/>}></Route>
                <Route path='/License' element={<License/>}></Route>
                <Route path='/About' element={<About/>}></Route>
                <Route path='/Collab' element={<Collab/>}></Route>
                <Route path='/Contact' element={<Contact/>}></Route>
                <Route path='/Faq' element={<Faq/>}></Route>
                <Route path='/Test' element={<Test/>}></Route>
            </Routes>

        </>

    );
}

export default App;
