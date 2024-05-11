import { Link } from "react-router-dom";

function Company({ head, desc, src, btn }) {
    return (
      <div className="company-cont">
        <div>
          <h2>{head}</h2>
        </div>
        <div className="description">
          <div className="para">
            <p>{desc}</p>
            <button><Link to='/contact'>{btn}</Link></button>
          </div>
        { src&&
        
        <div className="img-container">
            <img src={src} alt="house" />
          </div>}
        </div>
      </div>
    );
  }
  
  export default Company;