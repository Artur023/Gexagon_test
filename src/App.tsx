import React from "react";
import {Route,Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import SignUp from "./pages/SignUp";
import {Navigation} from "./components/Navigation";
import SignIn from "./pages/SignIn";

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/auth" element={<SignIn/>}/>
                <Route path="/registration" element={<SignUp/>}/>
            </Routes>
        </>
    )
}

export default App;
