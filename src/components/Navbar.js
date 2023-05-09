import { Link } from "react-router-dom"

const Navbar=()=>{

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand nav text-white ">
        <div className="container-fluid">
          <Link className="navbar-brand mx-2 text-white " to="/">Coding</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item it">
                <Link className="nav-link margin ps-4 text-white hvr" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ps-4 text-white hvr " to="/Mock">Mock Test</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ps-4 text-white hvr " to="/Interview">Interview questions</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ps-4 text-white hvr " to="/">Contact Us</Link>
              </li>
            </ul>           
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;