import React from "react";
import './Footer.css'
import Images from '../../components/imgs/Images'
export default props =>
    <div className="footer-container-principal" id="footer">
        <div className="text-footer">
            <h1>Seu lar perfeito está pronto</h1>
            <p>Onde a vida excepcional começa. Descubra propriedades que redefinem o conceito de luxo e exclusividade.</p>
            <button>Dê o primeiro passo</button>
        </div>
        <div className="nav-footer">
            <div className="links-footer">
                
                <a href="https://andersonhaah.github.io/anderson-haah-portfolio/" target="_blank">Portfolio</a>
                
                <a href="#homepage">Inicio</a>
            </div>
            <img src={Images.Logo} alt="Logo" />
            <p>™Direitos reservados AH</p>
        </div>
    </div>