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

      <main className="mainWrapper">
        
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

        <section id="o-porque" className="porqueSection">
          <h2 className="porqueSection__title title">O por quê?</h2>
          <article className="porqueSection__article">
            <p>Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. In elementis mé pra quem é amistosis quis leo. Per aumento de cachacis, eu reclamis. Si num tem leite então bota uma pinga aí cumpadi!</p>
            <p>Atirei o pau no gatis, per gatis num morreus. Leite de capivaris, leite de mula manquis sem cabeça. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.</p>
            <p>Quem num gosta di mim que vai caçá sua turmis! Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!</p>        
          </article>
        </section>

        <section id="assinar" className="assinarSection">
          <h2 className="assinarSection__title title">Assinar</h2>
          <p className="assinarSection__description">Assine a petição para que possamos demonstrar nossa vontade</p>

          <form className="assinarSection__form" action="#" method="POST" rel="nofollow" enctype="multipart/form-data">
            <div className="assinarSection__form__inputGroup">
              <input type="text" className="assinarSection__form__inputGroup__input" name="first" placeholder="Nome"/>
              <input type="text" className="assinarSection__form__inputGroup__input" name="last" placeholder="Sobrenome"/>
              <input type="email" className="assinarSection__form__inputGroup__input" name="email" placeholder="E-mail" pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$"/>
            </div>
            <button type="submit" className="assinarSection__form__btnSubmit">Assinar petição</button>
          </form>

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
          <h2 className="title">Contato</h2>
          <p>Quer trocar uma ideia? Quer colaborar? Quer criar algo?</p>
          <p>Me mande um e-mail <a href="mailto:lorenzoni.brunno@gmail.com">lorenzoni.brunno@gmail.com</a></p>
          <div></div>
        </section>

      </main>

      <footer className="footerWrapper">
        <p>Footer</p>
      </footer>
    </>
  );
}

export default App;
