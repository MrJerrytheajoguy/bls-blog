import React from 'react';

const FooterDetails = () => (
    <div className="footer-area">
        <hr  className='divider'/>
      <div className="flex-container">
          <div className="footer-flex-item">
              <h3>BetterLifesavings</h3>
              <p>6, Omokudu Ajayi Street, Okuneye Estate, Egbe, Lagos Nigeria</p>
              <p><a href="tel:+2348055018140">+2348055018140</a></p>
              <p><a href="mailto:betterlifesavings2020@gmail.com">betterlifesavings2020@gmail.com</a></p>
          </div>
          <div className="footer-flex-item">
              <h3>Quick Links</h3>
              <p><a href="http://eloshines.com" target="_blank">Register</a></p>

          </div>
          <div className="footer-flex-item">
              <h3>We are social</h3>
              <div className="social-media">
                  <span><a href="https://www.facebook.com/FehintolaMrJerry/" target="_blank">Facebook</a></span>
                  <span><a href="https://www.instagram.com/betterlifesavings2020/" target="_blank">Instagram</a></span>
                  <span><a href="https://chat.whatsapp.com/J6HglRuoLVX8KzGEhAnnPh" target="_blank">Whatsapp</a></span>
              </div>
          </div>
      </div>
      <div className="copyright">
          <p>&copy; 2020 BetterLifesavings</p>
          <p><a href="http://eloshines.com" target="_blank">Eloshines</a></p>
      </div>
      <style jsx>{`
      hr.divider{
          border: 1px solid #eee;
      }
      .social-media span{
          padding: 10px;
      }
        .footer-area{
            word-wrap: break-word;
            padding: 3rem 2%;
        }
        .copyright,
        .flex-container {
            display: flex;
            flex-wrap: wrap;
            width: 90%;
            justify-content: space-between;
        }
        .footer-flex-item {
            width: 30%;
            align-items: center;
        }
        .footer-flex-item:first-child {
            flex-grow: 1;
        }
        @media screen and (max-width: 769px) {
            .flex-container {
                display: block;
                word-wrap: break;
            }
            .footer-flex-item {
                // display: inline-block;
                width: 100%;
                margin: 0 auto;
                padding: 0.6rem 0.8rem;
            }
        }
      `}</style>
    </div>
)

export default FooterDetails;
