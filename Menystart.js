import React from "react";

class Menystart extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div className="button-container">
            <a href="/" className="button">Startsida</a>
          </div>
          <div className="top-left">0612-12344</div>
          <div className="top-right">Öppettider<br />Mån-Fre 10:00-21:00<br />Lör-Sön 11:00-21:00</div>
          <h1>Meny</h1>
          <div className="menu-line"></div>
        </header>

        <nav>
          <div className="button-container">
            <a href="/Menypizza" className="button">Pizza</a>
          </div>
          <div className="button-container">
            <a href="#" className="button">Hamburgare</a>
          </div>
        </nav>
        <nav>
          <div className="button-container">
            <a href="#" className="button">Kebab</a>
          </div>
          <div className="button-container">
            <a href="/Menypizza" className="button">Pasta</a>
          </div>
        </nav>
        <nav>
          <div className="button-container">
            <a href="/Menypizza" className="button">Varmrätter</a>
          </div>
          <div className="button-container">
            <a href="#" className="button">Sallader</a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Menystart;
