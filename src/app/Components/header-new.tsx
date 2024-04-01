import Image from "next/image";
import logo from "./../../../public/logo.svg";
export default function HeaderNew() {

    return (
      <header>
        <div className="container">
            <div className="flex items-center justify-between pb-4 border-b border-solid border-[#ddd]">
                <div className="date-style block">
                    <span>Thursday,</span> March 21, 2024
                </div>
                {/* <div className="max-w-[220px]">
                    <a href="#">
                        <Image src={logo} alt="" />
                    </a>
                </div> */}
                <nav className="nav-bar">
                    <ul className="menu">
                        <li className="active"><a href="#">Home </a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Money</a></li>
                        <li><a href="#">Sports</a></li>
                        <li><a href="#">Entertainment</a></li>
                        <li><a href="#">Science</a></li>
                        <li><a href="#">Lifestyle</a></li>
                    </ul>
                </nav>
                <ul className="header-icons list-none items-center gap-4 hidden lg:flex">
                    <li><a href="#"> <i className="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="#"> <i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="#"> <i className="fa-solid fa-rss"></i></a></li>
                </ul>
                <div className="humbauger block lg:hidden">
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
            
        </div>
      </header>
    );
  }