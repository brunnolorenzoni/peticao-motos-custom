import React from 'react';
import './App.scss'
function App() {
  return (
    <>
      <header className="headerWrapper">
        <div className="headerWrapper__containerLink">
          <a href="#home" title="O que queremos?">O que queremos?</a>
        </div>
        <div className="headerWrapper__containerLink">
          <a href="#o-porque" title="O Por quê?">O por quê?</a>
        </div>
        <div className="headerWrapper__containerLink">
          <a href="#assinar" title="Assinar">Assinar Petição</a>
        </div>
        <div className="headerWrapper__containerLink">
          <a href="#contato" title="Entre em contato">Entre em contato</a>
        </div>
      </header>

      <section id="home" className="homeSection">
          <div className="homeSection__background">
            <div className="homeSection__background__backgroundContainer homeSection__background__backgroundSolid"></div>
            <div className="homeSection__background__backgroundContainer homeSection__background__backgroundImage"></div>
          </div>
          <div className="homeSection__mask"></div>
          <div className="homeSection__content">
            <article className="homeSection__content__article">
              <div className="homeSection__content__article__titleContainer">
                <span className="homeSection__content__article__titleContainer__welcome">Bem vindo à</span>
                <h1 className="homeSection__content__article__titleContainer__title">
                  <span className="homeSection__content__article__titleContainer__title__highlight">Petição</span> 
                  para a volta das 
                  <br />
                  <span className="homeSection__content__article__titleContainer__title__highlight">motos custom</span>
                </h1>
              </div>
              <div className="homeSection__content__article__descriptionContainer">
                <p>Queremos pedir a volta das motos custom para o mercado brasileiro.</p>
              </div>
            </article>
          </div>
        </section>

      <main className="mainWrapper">
        <section id="o-porque" className="porqueSection">
          <h2 className="porqueSection__title title">O por quê?</h2>
          <article className="porqueSection__article">
            <div className="porqueSection__article__articleParagraph">
              <p>Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. In elementis mé pra quem é amistosis quis leo. Per aumento de cachacis, eu reclamis. Si num tem leite então bota uma pinga aí cumpadi!</p>
            </div>
            <div className="porqueSection__article__articleParagraph">
              <p>Atirei o pau no gatis, per gatis num morreus. Leite de capivaris, leite de mula manquis sem cabeça. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.</p>
            </div>
            <div className="porqueSection__article__articleParagraph">
              <p>Quem num gosta di mim que vai caçá sua turmis! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!</p>        
            </div>
          </article>
        </section>

        <section id="assinar" className="assinarSection">
          <div className="assinarSection__headerContainer">
            <h2 className="assinarSection__headerContainer__title title">Assine já</h2>
            <p className="assinarSection__headerContainer__description">Assine a petição para que possamos demonstrar nossa vontade</p>
          </div>

          <div className="assinarSection__formContainer">
            <form className="assinarSection__formContainer__form" action="#" method="POST" rel="nofollow" encType="multipart/form-data">
              <div className="assinarSection__formContainer__form__inputGroup">
                <input type="text" className="assinarSection__formContainer__form__inputGroup__input" name="first" placeholder="Nome"/>
                <input type="text" className="assinarSection__formContainer__form__inputGroup__input" name="last" placeholder="Sobrenome"/>
                <input type="email" className="assinarSection__formContainer__form__inputGroup__input" name="email" placeholder="E-mail" pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$"/>
              </div>
              <button type="submit" className="assinarSection__formContainer__form__btnSubmit">Assinar petição</button>
            </form>
          </div>


          <div className="assinarSection__shareContainer">
            <button type="button" className="assinarSection__shareContainer__shareButton facebook">
              Compartilhe no Facebook
            </button>
            <button type="button" className="assinarSection__shareContainer__shareButton whatsapp">
              Compartilhe no Whatsapp
            </button>
          </div>
        </section>

        <section id="contato" className="contatoSection">
          <h2 className="title contatoSection__title">Contato</h2>
          <div className="contatoSection__emailContainer">
            <p>Quer trocar uma ideia? Quer colaborar? Quer criar algo?</p>
            <p>Me mande um e-mail: 
              <span className="email">lorenzoni.brunno@gmail.com</span>
            </p>
          </div>
          <div className="contatoSection__donateContainer">
            <p>Faça uma doação para ajudar o site a continuar no ar e alcançar mais gente</p>
            <button className="contatoSection__donateContainer__btnDonate">
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/" title="Faça uma doação" >Faça uma doação</a>
            </button>
          </div>
        </section>

        <section className="supportSection">
          <h2 className="title supportSection__title">Apoio</h2>
          <div className="supportSection__supportContainer">
            <a className="supportSection__supportContainer__linkSupport" title="Canal X" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/img/desktop/yt_1200.png">
              <figure>
                <img src="https://www.youtube.com/img/desktop/yt_1200.png" alt="Logo Canal X"/>
                <figcaption>Canal X</figcaption>
              </figure>
            </a>
          </div>
        </section>

      </main>

      <footer className="footerWrapper">
        <p>Se beber, não pilote!</p>
        <p>Criado e Desenvolvido por Brunno Lorenzoni</p>
        <p><a href="mailto:lorenzoni.brunno@gmail.com">lorenzoni.brunno@gmail.com</a></p>
      </footer>
    </>
  );
}

export default App;
