import React from "react";
import './About.css'
import Images from "../../components/imgs/Images";

export default props =>
    <div className="about-container-principal" id="about">

        <div className="about-primary">
            <h1>Nossa História. <br /> Nosso Compromisso.</h1>
            <p>Com um compromisso inabalável com a excelência, cada detalhe de nossa história é sobre o seu sucesso.</p>
        </div>

        <div className="about-secondary">
            <span className="img-about"></span>
            <div className="about-secondary-text">
                <h1>Quem Somos? <br /> Excelência e Paixão em Cada Negócio.</h1>
                <p>
                    Em um mercado imobiliário onde o luxo é a norma, nós vamos além. Somos a <strong>AH MANSION</strong>, uma corretora dedicada a conectar você não apenas a uma propriedade, mas a um verdadeiro legado. Acreditamos que cada residência de alto padrão é uma obra de arte única, e nossa paixão é guiar nossos clientes na jornada para encontrar o lar que reflete suas conquistas e seu estilo de vida.
                    <br />
                    <br />
                    O nosso compromisso é pautado pela excelência e pela exclusividade. Com uma curadoria impecável de propriedades selecionadas a dedo, garantimos que nosso portfólio seja uma vitrine dos imóveis mais desejados e valiosos do mercado. Nossa equipe é composta por especialistas que combinam conhecimento de mercado e uma dedicação inabalável, assegurando que cada negociação seja conduzida com o máximo de profissionalismo e discrição.
                    <br />
                    <br />
                    Nossa dedicação vai muito além da transação. Nós nos tornamos seu parceiro de confiança, trabalhando para entender suas aspirações mais profundas e transformá-las em realidade. É a sua visão, a nossa expertise, e a certeza de que a sua experiência será tão extraordinária quanto a casa que você está prestes a chamar de lar.</p>
            </div>
        </div>

        <div className="about-t">
            <span className="about-img aimg1"></span>
            <span className="about-img aimg2"></span>
            <span className="about-img aimg3"></span>
        </div>
    </div>