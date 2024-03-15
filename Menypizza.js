import React from "react";
import "../menypizza.css";
import pastaLink from "./Link";


class Menypizza extends React.Component {
  render() {
    return (
      <div id = "menyPizzaBackground"> 
        <header id="pizza1">
          <div className="button-container">
            <a href="/" className="button">Startsida</a>
          </div>
          <div className="top-left">0612-12344</div>
          <div className="top-right">Öppettider<br />Mån-Fre 10:00-21:00<br />Lör-Sön 11:00-21:00</div>
          <h2>Pizzor</h2>
          <h1>Pizzor grupp 1</h1>
        </header>

        <nav>
          <div className="button-container">
            <a href="#" className="button">
              <span className="name">1. Margherita</span><br />
              <span className="description">Tomatsås, ost</span>
            </a>
          </div>
          <div className="button-container">
            <a href="#" className="button">
              <span className="name">2. Vesuvio</span><br />
              <span className="description">Tomatsås, ost, skinka</span>
            </a>
          </div>
        </nav>
	<nav>
	<div class="button-container">
		<a href="#" class="button">
			<span class="name">3. Capricciosa</span><br/>
			<span class="description">Tomatsås, ost, skinka, champinjoner</span></a>
	</div>
	<div class="button-container">
		<a href="#" class="button">
			<span class="name">4. Hawaii</span><br/>
			<span class="description">Tomatsås, ost, skinka, anannas</span></a>
		</div>
    </nav>
    <nav>
	<div class="button-container">
		<a href="#" class="button">
			<span class="name">5.Rimni</span><br/>
			<span class="description">Tomatsås, ost, köttförs, tabasco</span></a>	
	</div>
	<div class="button-container">
		<a href="#" class="button">
			<span class="name">6. Opera</span><br/>
			<span class="description">Tomatsås, ost, skinka, tonfisk</span></a>
	</div>
    </nav>
    <nav>
	<div class="button-container">
		<a href="#" class="button">
			<span class="name">7.Primavera</span><br/>
			<span class="description">Tomatsås, ost, skinka, bacon</span></a>	
	</div>
	<div class="button-container">
		<a href="#" class="button">
			<span class="name">8. Campagnola</span><br/>
			<span class="description">Tomatsås, ost, lök, salami</span></a>
	</div>
    </nav>
    <nav>
	<div class="button-container">
		<a href="#" class="button">
			<span class="name">9.Azteka</span><br/>
			<span class="description">Tomatsås, ost, skinka, jalapeno, tacokryddmix</span></a>
	</div>
	<div class="button-container">
		<a href="#" class="button">
			<span class="name">10. Calzone(inbakad)</span><br/>
			<span class="description">Tomatsås, ost, skinka</span></a>
	</div>
    </nav>
    <div class="sidemenu">
        <ul>
            <li><a href="#" id = "pizzalink">Pizzor</a></li>
            <li><a href="#" id = "pizzalink">Grupp 1</a></li>
            <li><a href="#">Grupp 2</a></li>
	    <li><a href="#">Grupp 3</a></li>
	    <li><a href="#">Grupp 4</a></li>
	    <li><a href="#">Special</a></li>
        </ul>
    </div>
    <div class="sidemenu2">
        <ul>
            <li><a href="#">Hamburgare</a></li>
            <li><a href="#">Kebab</a></li>
            <li><a href="#" id ="pastalink">Pasta</a></li>
	    <li><a href="#" id = "varmlink">Varmrätter</a></li>
	    <li><a href="#">Sallader</a></li>
        </ul>
    </div>
<header id="pasta1">
	<h2>Pastarätter</h2>
</header>
<nav>
	<div class="button-container">
		<a href="#" class="button">
			<span class="name">Kycklingpasta</span><br/>
			<span class="description">Kyckling, lök, curry, gräddsås</span></a>	
	</div>
	<div class="button-container">
		<a href="#" class="button">
			<span class="name">Fläskfilépasta</span><br/>
			<span class="description">Fläskfilé, lök, paprika, champinjoner, gräddsås</span></a>
	</div>
    </nav>
    <nav>
	<div class="button-container">
		<a href="#" class="button">
			<span class="name">Oxfilépasta</span><br/>
			<span class="description">Oxfilé, lök, paprika, champinjoner, gräddsås</span></a>
	</div>
    </nav>
<header id  = "varm1">
	<h2>Varmrätter</h2>
	<div class="line"></div>
</header>
<nav>
	<div class="button-container">
		<a href="#" class="button">
			<span class="name">Black & White</span><br/>
			<span class="description">Oxfilé & Fläskfilé med béarnaisås och brunsås lök, curry, gräddsås</span></a>
	</div>
	<div class="button-container">
		<a href="#" class="button">
			<span class="name">Oxfilé</span><br/>
			<span class="description">Oxfilé med brunsås och béarnaisås</span></a>
	</div>
    </nav>
    <nav>
	<div class="button-container">
		<a href="#" class="button">
			<span class="name">Rödspettafilé</span><br/>
			<span class="description">Med husets sås</span></a>	
	</div>
	<div class="button-container">
		<a href="#" class="button">
			<span class="name">Plankstek</span><br/>
			<span class="description">Fläskfilé, tärnad paprika, champinjoner, räkor, bacon, ost serveras béarnaisås och rödvinsås</span></a>
	</div>
    </nav>
    <nav>
	<div class="button-container">
		<a href="#" class="button">
			<span class="name">Grillbiff</span><br/>
			<span class="description">Med béarnaisås och brunsås</span></a>	
	</div>
	<div class="button-container">
		<a href="#" class="button">
			<span class="name">Schnitzel</span><br/>
			<span class="description">Med béarnaisås och brunsås</span></a>
	</div>
    </nav>
       

      </div>
    );
  }
}

export default Menypizza;