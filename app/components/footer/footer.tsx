'use client'

import "./footer.css";

export default function Footer() {
    function openPage(page:string) {
        window.open(page, "_blank");
    }

    return(
        <div>
      <div className="footer">
          <div className="socials-bar">
              <div className="social" id="github" onClick={() => openPage("https://github.com/LandonHarter")} />
              <div className="social" id="mail" onClick={() => openPage("mailto:landonharter@outlook.com")} />
              <div className="social" id="twitter" onClick={() => openPage("https://twitter.com/harter_landon")} />
              <div className="social" id="medium" onClick={() => openPage("https://medium.com/@landonharter")} />
              <div className="social" id="stackoverflow" onClick={() => openPage("https://stackoverflow.com/users/14927852/landon-harter")} />
          </div>
      </div>
            <div className="copyright">
                <p>© Landon Harter 2023</p>
            </div>
        </div>
    );
}