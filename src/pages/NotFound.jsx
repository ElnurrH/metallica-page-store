
import Header from "../components/Header";
import gif from "../assets/images/404-glitch.gif";
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <Header linkColor="black" iconColor="black" position="relative" />
      <div className="notfound-section">
        <div className="container">
          <div className="row">
            <aside>
                <div className="top">
                <span>ACCOUNT SETTINGS</span>
              <ul>
                <li>
                  <Link>Create Account</Link>
                </li>
              </ul>
                </div>
                <div className="bottom">
                    <span>TRY NEW SEARCH</span>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/shop'>Shop</Link></li>
                    </ul>
                </div>
             
            </aside>
            <div className="notfound-content">
              <h1>PAGE NOT FOUND</h1>
              <div className="animation">
                <img src={gif} alt="404 not found" />
              </div>
              <h4>YOU'RE SHIT OUTTA LUCK.</h4>
              <h3>HARDWIRED TO SELF-DESTRUCT.</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
