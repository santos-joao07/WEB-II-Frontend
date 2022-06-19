import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { CadastroForm } from "../pages/Cadastro"
import { Login } from "../pages/Login"
import { HomeInicial } from "../pages/Home"
import { Painel } from "../pages/fruta.jsx"


const name = localStorage.getItem("name");

export const RotaPrivada = ({ redirectPath = '/', children }) => {
    if (!name) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children ? children : <Painel />;
  };

export const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path="/login" exact element={<Login />} />
                <Route path="/cadastro" exact element={<CadastroForm />} />
                <Route path="/" exact element={<HomeInicial />} /> 
                <Route path="/painel" exact element={
                    <RotaPrivada>
                        <Painel />
                    </RotaPrivada>} /> 
            </Routes>
        </Router>

    )
    
    }
