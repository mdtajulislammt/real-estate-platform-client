
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
const Footer = () => {
     return (
          <footer className="footer p-20 bg-slate-300 text-base-content">
  <aside>
     <Link to={'/'}>
      <img src={logo} alt="logo"  className=" w-72" />
     </Link>
   
  </aside> 
 <div className=" grid grid-cols-3 lg:gap-32 gap-10">
 <nav>
    <header className="footer-title">Services</header> 

     <a className="link link-hover">Branding</a><br />
    <a className="link link-hover">Design</a><br />
    <a className="link link-hover">Marketing</a><br />
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a><br />
    <a className="link link-hover">Contact</a><br />
    <a className="link link-hover">Jobs</a><br />
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a><br />
    <a className="link link-hover">Privacy policy</a><br />
    <a className="link link-hover">Cookie policy</a>
  </nav>
 </div>
</footer>
     );
};

export default Footer;