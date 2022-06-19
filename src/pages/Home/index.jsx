
import { LayoutComponents } from "../../components/LayoutComponents";
import frutahome from "../../assets/frutahome.jpg";
import './styles.css'
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { AiOutlineLogout } from 'react-icons/ai';


export const HomeInicial = () => {
    const [logged, setLogged] = useState(() => {
       return localStorage.getItem("name");
    });

    const handleLogout = () => {
        localStorage.clear();
        setLogged(false);
    }

  return (
      <div className="container-home">
          <LayoutComponents>
        <section className="home">
        <header className="header">
            <nav>
                <img className="logo" src={logo} alt="logo" />
                <ul>
                    <li>Home</li>
                    <li>Nossa Equipe</li>
                    <li>Produtos</li>
                    <li>Ofertas</li>
                    <li>Contatos</li>
                </ul>
                {logged ? (
                    <div className="logged">
                        <span>{logged}</span>
                        <button onClick={handleLogout} className="logout">
                            <AiOutlineLogout 
                                size={20}
                                color="#fff"
                            />
                        </button>
                    </div>
                ) :(
                    <div className="sessions">
                        <Link className="txt4" to="/login">
                        <li>Login</li>
                        </Link>
                        <Link className="txt3" to="/cadastro">
                        <li>Cadastro</li>
                        </Link>
                    </div>
                )}
            </nav>
        </header>
        <hr></hr>

        

        <div className="name-distri">
            <h1>Distribuidora de Frutas Pangaré</h1>
        </div>

        <section className="card-princ">

        <div className="card-cupom">
            <img src={frutahome} alt="fruta card" />
            <p>Cadastre sua empresa e tenha as melhores ofertas</p>
        </div>

        <div className="card-cupom-2">
            <p className="p1">As frutas mais saborosas de todo o país, onde sua empresa encontra qualidade, 
                melhores preços e prazos e, entraga em qualquer região da nação</p>

            <p>Somos especializados na comercialização e distribuição para Restaurantes, Hotéis,
                 Empresas fornecedoras de refeições coletivas, supermercados, merenda escolar, entre outros.</p>
        </div>
        

        </section>
        <footer className="footer-initial">
                <p> Distribuidora de Frutas Pangará - Frutas, Legumes e Verduras. Todos os direitos reservados</p>
        </footer>

        

        

        </section>
       
    </LayoutComponents>
      </div>
      
    
  );
};
