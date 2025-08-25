import React from "react";
import './Contact.css'
import Accordion from "../../components/animations/accordion/Accordion";

export default props =>
    <div className="contact-container-principal" id="contact">
        <div className="contacts-container">
            <div className="contacts">
                <h1>Entre em Contato</h1>
                <p>
                    Sua jornada para o lar de luxo dos seus sonhos começa com uma conversa. Estamos prontos para entender suas aspirações e guiá-lo em cada passo do caminho. Fale com nossos especialistas e descubra como a nossa dedicação pode transformar a sua visão em uma realidade de legado.
                </p>
            </div>
            <h2>Nossa Central de Atendimento</h2>
            <p>
                <strong>Telefone:</strong> (xx) xxxxx-xxxx
                <br />
                <strong>E-mail:</strong> contato@ahmansion.com.br
                <br />
                <strong>Endereço:</strong> Rua Exclusiva, 1234 - Bairro Nobre, Cidade - XX
            </p>
            <div className="faq-container">
                <h2>Perguntas frequentes</h2>
                <Accordion />
            </div>

        </div>
        <div className="form-container">
            <div className="form">
                <h1>Deixe sua mensagem</h1>
                <p>Preferimos a conveniência? Preencha o formulário abaixo e entraremos em contato com você o mais breve possível.</p>
                <input type="text" name="nome" id="nome" placeholder="Nome"/>
                <input type="email" name="email" id="email" placeholder="Email"/>
                <input type="tel" name="tel" id="tel" placeholder="(xx)-x-xxxx-xxxx"/>
                <textarea id="text" name="mensagem" rows="5" cols="40" placeholder="Escreva sua mensagem">
                </textarea>
                <input type="submit" value="enviar" id="enviar" />
            </div>
        </div>
    </div>