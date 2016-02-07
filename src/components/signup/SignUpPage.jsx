const React = require("react");
var Navbar0 = require("../common/Navbar0.jsx");

var SignUpPage = React.createClass({
  "render": function() {
    return (
      <form className="col-xs-10 col-xs-offset-1">
        <h2 className="eq text-center">Welcome to PolyRents!</h2>
        <br/>
        <fieldset className="form-group">
          <select className="form-control" id="form-type">
            <option>Tenant</option>
            <option>Landlord</option>
            <option>Guarantor</option>
          </select>
        </fieldset>
        <div className="row">
          <fieldset className="form-group col-md-6">
            <input type="text" className="form-control" id="firstName" placeholder="First Name"/>
          </fieldset>
          <fieldset className="form-group col-md-6">
            <input type="text" className="form-control" id="lastName" placeholder="Last Name"/>
          </fieldset>
        </div>
        <fieldset className="form-group">
          <input type="email" className="form-control" id="email" placeholder="Email"/>
        </fieldset>
        <fieldset className="form-group">
          <input type="password" className="form-control" id="password" placeholder="Password"/>
        </fieldset>
        <div className="checkbox">
          <label>
            <input type="checkbox"/>
            <span className="c-indicator"></span>
            I've read and agree to the PolyRents Terms of Service
          </label>
        </div>
        <br/>
        <button className="btn btn-primary center-block">Make my life easier!</button>
        <br/>
        <p className="text-center"><a href="#">If you already have an account, please sign in here.</a></p>
      </form>
    );
  }
});

module.exports = SignUpPage;
