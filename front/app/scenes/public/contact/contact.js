import styles from './contact.css'
import { RootScene } from '../root/root';
import whatsapp from "../../../assets/logo/whatsapp_logo_icon_147205.png"
import instagram from "../../../assets/logo/instagram-logo-8B42D89FF5-seeklogo.com.png"
import facebook from "../../../assets/logo/facebook-icon-logo-03865A9BA2-seeklogo.com.png"

export function contact(){
    const root = document.getElementById('root');

    root.innerHTML=`
    <div>${RootScene()}</div>
    <div class="${styles["container"]}">
      <div class="${styles["card-container"]}">
            <div class="${styles["bg"]}">
            </div>
            <div class="${styles["nft"]}">
              <div class='${styles["main"]}'>
                <img class='${styles["tokenImage"]}' src="${whatsapp}" alt="NFT" />
                <h2>Whatsapp</h2>
                <p class='${styles["description"]}'>Our whatsapp contact!</p>
                <div class='${styles["tokenInfo"]}'>
                  <div class="${styles["price"]}">
                  </div>
                  <div class="${styles["duration"]}">
                  </div>
                </div>
                <hr />
                <div class='${styles["creator"]}'>
                  <div class='${styles["wrapper"]}'>
                  </div>
                  <button class="${styles["wppBtn"]}">Click me!</button>
                </div>
              </div>
            </div>
            <div class="${styles["bg"]}">
          </div>
          <div class="${styles["nft"]}">
            <div class='${styles["main"]}'>
              <img class='${styles["tokenImage"]}' src="${instagram}" alt="NFT" />
              <h2>Instagram</h2>
              <p class='${styles["description"]}'>Our instagram!</p>
              <div class='${styles["tokenInfo"]}'>
                <div class="${styles["price"]}">
                </div>
                <div class="${styles["duration"]}">
                </div>
              </div>
              <hr />
              <div class='${styles["creator"]}'>
                <div class='${styles["wrapper"]}'>
                </div>
                <button class="${styles["igBtn"]}">Click me!</button>
              </div>
            </div>
          </div>
          <div class="${styles["bg"]}">
          </div>
          <div class="${styles["nft"]}">
            <div class='${styles["main"]}'>
              <img class='${styles["tokenImage"]}' src="${facebook}" alt="NFT" />
              <h2>Facebook</h2>
              <p class='${styles["description"]}'>Our facebook!</p>
              <div class='${styles["tokenInfo"]}'>
                <div class="${styles["price"]}">
                </div>
                <div class="${styles["duration"]}">
                </div>
              </div>
              <hr />
              <div class='${styles["creator"]}'>
                <div class='${styles["wrapper"]}'>
                </div>
                <button class="${styles["fbBtn"]}">Click me!</button>
              </div>
            </div>
          </div>
          </div>
        <div class="${styles["stars"]}"></div>
                <div id="${styles["container-stars2"]}">
                    <div id="${styles["stars"]}">
                    </div>
                </div>
        </div>
    </div>
    `
}