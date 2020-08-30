import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => (
    <nav className="navbar shadow-sm">
        <div className="navbar--logo-holder">
            <a href='https://betterlifesavings.com' target='_blank'>
            <img src="/new-logo.png" alt="BetterLifesavings" className="navbar-logo" height={100}/>
            </a>
        </div>
        <ul className="navbar--link">
             <li>
             <a
                href="https://chat.whatsapp.com/J6HglRuoLVX8KzGEhAnnPh"
                title="whatsapp"
              >
                <FontAwesomeIcon
                  icon={["fab", "whatsapp"]}
                />
              </a>
             </li>
              <li>
              <a
                href="https://www.facebook.com/FehintolaMrJerry/"
                title="facebook"
              >
                <FontAwesomeIcon
                  icon={["fab", "facebook"]}
                />
              </a>
              </li>
              <li>
              <a
                href="https://www.instagram.com/betterlifesavings2020/"
                title="instagram"
              >
                <FontAwesomeIcon
                  icon={["fab", "instagram"]}
                />
              </a>
              </li>
        </ul>
    <style jsx>{`
        .navbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 2px 2%;
        }
        .navbar-logo {
            border-radius: 50%;
            margin-left: 2%;
        }
        .navbar--link {
            display: flex;
            list-style: none;
            margin: 6px 0 0;
        }
        .navbar--link li {
            margin: 20px 2px -5px;
            padding: 4px 12px;
            border-bottom: 2px solid #fff; 
        }
        @media screen and (max-width: 28rem) {
            .navbar-logo {
                width: 70px;
                height: auto;
            }
            .navbar--link li {
                margin: 2px 1px -5px;
                padding: 2px;
                border-bottom: 2px solid #fff; 
            }
            .navbar--link {
                display: inline-block;
            }
        }
    `}</style>
    </nav>
);

export default Navbar;
