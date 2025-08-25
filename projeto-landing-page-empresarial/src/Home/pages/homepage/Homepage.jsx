import React from "react";
import { motion } from "framer-motion";
import Images from '../../components/imgs/Images'
import './Homepage.css'
import HamburguerMenu from "../../components/animations/menuhamburguer/Hamburger";

export default props =>
    <div className="homepage-container-principal" id="homepage">
        <div className="logo">
            <img src={Images.Logo} alt="Logo" />
        </div>

        <div className="menu">
            <HamburguerMenu />
        </div>

        <div className="text">
            <h1>A Vida Excepcional</h1>
            <h1>Começa Aqui</h1>
            <p>
                Descubra uma coleção cuidadosamente selecionada de residências de prestígio. <br />
                A sua jornada de compra de luxo começa com a nossa dedicação.</p>
        </div>
    </div>