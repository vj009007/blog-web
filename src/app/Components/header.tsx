import {useState} from "react";
import Image from "next/image";
import logo from "./../../../public/logo.svg";
import Ads from "./../images/header-ad.jpeg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className='ad-slot'>
        <Image src={Ads} alt='header Ad' />
      </div>
      <header className='relative'>
        <div className='container'>
          <div className='flex items-center justify-between pb-4 border-b border-solid border-[#ddd]'>
            {!menuOpen && (
              <div className='date-style block'>
                <span>Thursday,</span> March 21, 2024
              </div>
            )}
            <div className='max-w-[220px]'>
              <a href='#'>
                <Image src={logo} alt='' />
              </a>
            </div>
            <div className='header-icons list-none items-center gap-4 hidden lg:flex'>
              <li>
                <a href='#'>
                  <i className='fa-brands fa-x-twitter'></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fa-brands fa-facebook-f'></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fa-solid fa-rss'></i>
                </a>
              </li>
            </div>
            <div className='hamburger block lg:hidden' onClick={toggleMenu}>
              <i
                className={`fa-solid ${menuOpen ? "fa-times" : "fa-bars"}`}
              ></i>
            </div>
          </div>
          {/* Mobile Menu */}
          <nav
            className={`bg-white ${
              menuOpen ? "block" : "hidden"
            } lg:block lg:bg-transparent lg:static lg:w-auto lg:flex lg:justify-center lg:items-center`}
          >
            <ul className='menu lg:flex lg:gap-4'>
              <li className='menu-item'>
                <a href='#'>Home</a>
              </li>
              <li className='menu-item'>
                <a href='#'>News</a>
              </li>
              <li className='menu-item'>
                <a href='#'>Money</a>
              </li>
              <li className='menu-item'>
                <a href='#'>Sports</a>
              </li>
              <li className='menu-item'>
                <a href='#'>Entertainment</a>
              </li>
              <li className='menu-item'>
                <a href='#'>Science</a>
              </li>
              <li className='menu-item'>
                <a href='#'>Lifestyle</a>
              </li>
              <li className='menu-item'>
                <a href='#'>Travel</a>
              </li>
              <li className='menu-item'>
                <a href='#'>Local</a>
              </li>
              <li className='menu-item'>
                <a href='#'>About Us</a>
              </li>
              {/* Social icons for mobile */}
              <ul className='flex flex-row justify-center header-icons list-none items-center gap-4 block lg:hidden'>
                <li>
                  <a href='#'>
                    <i className='fa-brands fa-x-twitter'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa-brands fa-facebook-f'></i>
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <i className='fa-solid fa-rss'></i>
                  </a>
                </li>
              </ul>
            </ul>
          </nav>
        </div>
      </header>
      <style jsx>{`
        .menu {
          padding: 20px;
          list-style-type: none;
          text-align: center;
        }
        .menu-item {
          margin-bottom: 10px;
        }
        .menu-item a {
          color: #333;
          text-decoration: none;
          font-size: 16px;
        }
        .menu-item a:hover {
          color: #141739;
        }
      `}</style>
    </>
  );
}
