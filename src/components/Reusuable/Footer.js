import React from 'react'
import {FaLinkedinIn,FaInstagram, FaTwitter, FaCopyright,FaReact, FaGofore, FaDraftingCompass} from 'react-icons/fa'


// export default function Footer({props}) {
//   // props is carrier check Layout.js
//   return (
//       <section className="footer footer-bg">
//       <footer className="footer">
//       <a href="https://www.linkedin.com/in/sayed-sajid-ali/"><FaLinkedinIn className="footer-icon social-media"/></a>
//       <a href="https://www.facebook.com/profile.php?id=100004563371794"><FaFacebook className="footer-icon social-media"/></a>
//       <a href="https://www.instagram.com/syed_sajidali_/"><FaInstagram className="footer-icon social-media" /></a>
//       <a href="https://twitter.com/Sayed_Sajid_Ali"><FaTwitter className="footer-icon social-media"/></a>

//       <p className="fontSize"> <FaCopyright/> &copy; 2020 SCO<br/><br/>
//       <FaCode/> Webpage Designed by: Souvik Das <br/><br/>
//        <FaDraftingCompass/> Made with: React <FaReact/> and <FaGofore/> Gatsby
//        </p>
//       </footer>
//       </section>

//   )
// }
export default function Footer() {
  //superman---> Must be same name as in the layout; Hint superman=Thor;
  return (
        //This is not HTML .This is JSX
        <footer>  
           <div className="footer-block">
            <div className="container-fluid">
               <div className="row">
                 <div className="col-12 pt-2 mx-auto text-center bg-dark text-light">
                 <a href="https://"><FaLinkedinIn className="footer-icon social-media"/></a>&nbsp;&nbsp;

                 <a href="https://"><FaInstagram className="footer-icon social-media" /></a>&emsp;
                 <a href="https://"><FaTwitter className="footer-icon social-media"/></a>
                  <br/>
                  <br/>
                <p className="fontSize"> <FaCopyright/>
                Webpage Designed by: Souvik Das <br/><br/>
                <FaDraftingCompass/> Made with: <FaReact/> React and <FaGofore/> Gatsby
                </p>    
                 <h6>Awesome copyright footer &copy; SouvikSCO</h6>
                 </div>
               </div>
             </div>
            </div>
           
         </footer>
     )
 }
