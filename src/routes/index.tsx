import { Routes, Route } from "react-router-dom"
import { HomePage } from "../pages/home"
import { LoginPage } from "../pages/login"
import { NotFoundPage } from "../pages/notFound"
import { RegisterPage } from "../pages/register"

export const RoutesCentral = () => {

    return(
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="cadastro" element={<RegisterPage/>}/>
            <Route path="cadastro" element={<NotFoundPage/>}/>
            <Route path="cadastro" element={<NotFoundPage/>}/>
            <Route path="cadastro" element={<HomePage/>}/>
        </Routes>
    )
    
}