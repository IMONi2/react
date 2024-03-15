import React from "react";

class Start extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div className="top-left">0612-12344</div>
                    <div className="top-right">
                        Öppettider<br />
                        Mån-Fre 10:00-21:00<br />
                        Lör-Sön 11:00-21:00
                    </div>
                    <h1>Välkommen till</h1>
                    <h1>Dallas Restaurang</h1>
                </header>

                <nav>
                    <div className="button-container">
                        <a href="/Menystart" className="button">Meny</a>
                    </div>
                    <div className="button-container">
                        <a href="/Video" className="button">Beställ Online</a>
                    </div>
                </nav>

                <nav>
                    <div className="button-container">
                        <a href="https://www.google.com/maps/dir//Dallas+Restaurang+Nyland,+Storgatan+18,+870+52+Nyland/@63.0060768,-0.7002278,5z/data=!4m18!1m8!3m7!1s0x4664bf2cca1c8dc3:0xbd394dd3a65ab139!2sDallas+Restaurang+Nyland!8m2!3d63.0060768!4d17.7568034!15sCg9kYWxsYXMgcGl6emVyaWFaESIPZGFsbGFzIHBpenplcmlhkgEKcmVzdGF1cmFudJoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSSGMyWjVZbEJSRUFF4AEA!16s%2Fg%2F1hc23z0vj!4m8!1m0!1m5!1m1!1s0x4664bf2cca1c8dc3:0xbd394dd3a65ab139!2m2!1d17.7566807!2d63.0060757!3e2?entry=ttu" className="button">Hitta till oss</a>
                    </div>
                    <div className="button-container">
                        <a href="https://www.facebook.com/dallaspizzeria/?locale=sv_SE" className="button">Facebook</a>
                    </div>
                </nav>

                <nav>
                    <div className="button-container">
                        <a href="/omoss" className="button">Om Oss</a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Start;