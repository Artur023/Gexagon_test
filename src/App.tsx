import React from "react";
import {Route, Router, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {AuthPage} from "./pages/AuthPage";
import {RegistrationPage} from "./pages/RegistrationPage";
import {Navigation} from "./components/Navigation";

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/auth" element={<AuthPage/>}/>
                <Route path="/registration" element={<RegistrationPage/>}/>
            </Routes>
        </>
    )
}

export default App;
