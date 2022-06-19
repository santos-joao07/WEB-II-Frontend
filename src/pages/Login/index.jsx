import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import frut from "../../assets/frutt.png";
import { LayoutComponents } from "../../components/LayoutComponents";
import { api } from "../../service/api";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await api.post("/sessionDistribuidores", {
        email,
        senha: password,
      });

      console.log(response.data)

      if (response.status === 200) {
        localStorage.setItem("name", response.data.distribuidor.nome);
        localStorage.setItem("token-distribuidor", response.data.token);
        localStorage.setItem("id", response.data.distribuidor.id);
        navigate("/painel");
      } else {
        alert("Erro ao realizar o login, check suas credenciais");
      }
    } catch (error) {
      alert("Erro ao realizar o login, por favor tente novameante mais tarde");
    }
  }

  return (
    <LayoutComponents>
      <form className="login-form" onSubmit={handleSubmit}>
        <span className="login-form-title">Distribuidora de Frutas</span>

        <span className="login-form-title">
          <img src={frut} alt="frut login" />
        </span>

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            name="senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>

        <div className="contanier-login-form-btn">
          <button type="submit" className="login-form-btn">Login</button>
        </div>

        <div className="text-center">
          <span className="txt1">Não possui conta</span>

          <Link className="txt2" to="/cadastro">
            Cadastro de Distribuidor
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};
