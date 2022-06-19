import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents";
import { Link, useNavigate } from "react-router-dom";
import frut from "../../assets/frutt.png";
import { api } from "../../service/api";

export const CadastroForm = () => {
  const [name, setName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await api.post("/distribuidores", {
      CNPJ: cnpj,
      nome: name,
      email: email,
      senha: password,
      endereco: endereco,
    });

    if (response.status === 200) {
      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } else {
      alert("Erro ao realizar o cadastro, por favor tente novameante mais tarde");
    }
  }
  
  return (
    <LayoutComponents>
      <form className="login-form" onSubmit={handleSubmit}>

        <span className="login-form-title">
          Cadastro Distribuidora de Frutas
        </span>

        <span className="login-form-title">
          <img src={frut} alt="frut login" />
        </span>


        <div className="wrap-input">
          <input
            className={name !== "" ? "has-val input" : "input"}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nome Distribuidora"></span>
        </div>

        <div className="wrap-input">
          <input
            className={cnpj !== "" ? "has-val input" : "input"}
            type="text"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
          />
          <span className="focus-input" data-placeholder="CNPJ"></span>
        </div>

        <div className="wrap-input">
          <input
            className={endereco !== "" ? "has-val input" : "input"}
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Endereço"></span>
        </div>

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>

        <div className="contanier-login-form-btn">
          <button type="submit" className="login-form-btn">Cadastrar</button>
        </div>

        <div className="text-center">
          <span className="txt1">Já é cadastrado?</span>

          <Link className="txt2" to="/login">
            Acessar com Email e Password
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};
