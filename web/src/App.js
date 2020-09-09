import React from 'react';
import './App.scss'
function App() {
  return (
    <>
      <header className="headerWrapper">
        <div className="headerWrapper__background">
          <div className="headerWrapper__background__backgroundContainer headerWrapper__background__backgroundSolid"></div>
          <div className="headerWrapper__background__backgroundContainer headerWrapper__background__backgroundImage"></div>
        </div>
        <div className="headerWrapper__mask"></div>
        <div className="headerWrapper__content">
          <h1>Oi</h1>
        </div>
      </header>
      <main>
        <h1>Main</h1>
        <p>xxxxxxxx</p>
        <p>xxxxxxxx</p>
        <p>xxxxxxxx</p>
        <p>xxxxxxxx</p>
        <p>xxxxxxxx</p>
        <p>xxxxxxxx</p>
        <form>
        </form>
      </main>
      <footer>
        <h3>Footer</h3>
      </footer>
    </>
  );
}

export default App;
