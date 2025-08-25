import React from "react";
import './Moreinfo.css'
import Images from '../../components/imgs/Images'

export default props =>
    <div className="moreinfo-container-principal">

        <div className="moreinfo-principal">

            <div className="apresentacao-container">
                <div className="apresentacao-text">
                    <h1>Seu Lar, <br /> Seu Legado, <br />Para Sempre.</h1>
                    <p>Nós curamos o portfólio de residências mais exclusivas do mercado. Acreditamos que seu lar é a base do seu legado, e nossa missão é guiá-lo em uma jornada de descoberta, onde o luxo e a personalização se encontram. Transformamos a busca pela sua próxima mansão em uma experiência fluida e incomparável.</p>
                </div>
                <div className="apresentacao-img">
                    <div className="item-img">
                        <img src={Images.MoreinfoImg1} alt="Imagem casa" />
                    </div>
                    <div className="item-img">
                        <img src={Images.MoreinfoImg2} alt="Imagem casa" />
                    </div>
                </div>
            </div>

            <div className="moreinfo-principal-img">
                
            </div>

        </div>

        <div className="moreinfo-secundaria">
            <div className="title-secundary">
                <h1>Onde o Luxo e a Exclusividade Definem Seu Cotidiano</h1>

                <p>Viver em uma mansão é o privilégio de ter a grandiosidade e a tranquilidade definindo seu cotidiano. É encontrar um santuário particular onde o espaço e a privacidade são absolutos. Mais do que uma residência, é a oportunidade de construir um legado em um ambiente de paz, conforto e exclusividade.</p>
            </div>

            <div className="moreinfo-img-secondary">
               <span className="moreinfosimg img1"></span>
               <span className="moreinfosimg img2"></span>
               <span className="moreinfosimg img3"></span>
            </div>
        </div>
    </div>