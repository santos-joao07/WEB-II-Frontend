import { useState } from "react";
import { api } from "../../../service/api";

import './styles.css'

export const Modal = ({ closeModal }) => {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = localStorage.getItem("id");

        const response = api.post("/produtos", {
            nome,
            preco,
            Distribuidor_id: id
        });
        alert("Produto cadastrado com sucesso!");
        closeModal();
    }

    return (
        <div className="container-modal">
            <form 
                className="form-modal"
                onSubmit={handleSubmit}
            >

            <div className="container-header">
                <span className="login-form-title">
                    Nova fruta
                </span>
                <button onClick={closeModal}>X</button>
            </div>

            <div className="wrap-input">
            <input
            className={nome !== "" ? "has-val input" : "input"}
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Nome da fruta"></span>
        </div>

        <div className="wrap-input">
            <input
            className={preco !== "" ? "has-val input" : "input"}
            type="number"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            />
            <span className="focus-input" data-placeholder="Preço"></span>
        </div>

        <button type="submit">Cadastrar</button>
            
        </form>
    </div>
    )
}