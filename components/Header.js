import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark mb-4 py-4">
  <a className="navbar-brand textbig"  href="/">Navbar</a>
<style jsx>
  {`
  .textbig {
    font-size: 24px;
    color: white;
    font-weight: bold;
  }
  `}
</style>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item ml-5">
        <Link className="nav-link" href="/">Home</Link>
      </li>
      <li className="nav-item ml-5">
        <Link className="nav-link" href="/about">About</Link>
      </li>
      <li className="nav-item ml-5">
        <Link className="nav-link" href="/contact-us">Contact-us</Link>
      </li>
    </ul>
  </div>
</nav>
  );
};

export default Header;
