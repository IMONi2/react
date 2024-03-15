import React from "react";
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";

class Omoss extends React.Component {
  render() {
    return (
      <div id = "omossB">
        <header>
          <nav>
            <div className="button-container">
              <a href="/" className="button">
                Startsida
              </a>
            </div>
          </nav>

          <div className="top-left">0612-12344</div>
          <div className="top-right">
            Öppettider<br />
            Mån-Fre 10:00-21:00<br />
            Lör-Sön 11:00-21:00
          </div>
          <h1>Om oss på</h1>
          <h1>Dallas Restaurang</h1>
        </header>

        <div className="rectangle">
          <p>
            Välkommen till Dallas Restaurang! Vi erbjuder en läcker meny med
            olika rätter för alla smaker .
          </p>
          <p>Det är bäst för dig att du provar.</p>
        </div>
        <img id="img1" src = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRmUCcvPvqJ77-cK1HPoTlBVBbG0k-Ep_0BzVuOo87o5f0oxrcB" alt="" />
        <img id="img2" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRbeQJUpTRrNytjPLJmlE570a9pRwxooMluSqrPegyf0Uzw63ly" alt="" />
        <img id="img3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Humn_Q2J-7ryXMxaSZxB5H1QiFpcxMpmlYbygARjvgs2yXF4" alt="" />
	<LikeButton />
	<DislikeButton />
        <div className="formular" id="form">
          <h2>
            Frågor?<br />
            Kontakta oss!
          </h2>
          <form action="https://formspree.io/random@email.com" method="POST">
            <label htmlFor="name">Namn:</label>
            <br />
            <input type="text" id="name" name="name" required />
            <br />
            <label htmlFor="email">E-post:</label>
            <br />
            <input type="email" id="email" name="_replyto" required />
            <br />
            <label htmlFor="message">Meddelande:</label>
            <br />
            <textarea id="message" name="message" rows="4" required></textarea>
            <br />
            <input type="submit" value="Skicka" />
          </form>
        </div>
      </div>
    );
  }
}

export default Omoss;
