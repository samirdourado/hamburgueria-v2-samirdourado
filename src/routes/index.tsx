import { Routes, Route } from "react-router-dom"
import { HomePage } from "../pages/home"
import { LoginPage } from "../pages/login"
import { NotFoundPage } from "../pages/notFound"
import { RegisterPage } from "../pages/register"

export const RoutesCentral = () => {
    return(
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="register" element={<RegisterPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
            <Route path="home" element={<HomePage/>}/>
        </Routes>
    )
    
}