const React = require("react");
var Navbar = require("../common/Navbar.jsx");

var TenantRegisterPage = React.createClass({
  "render": function() {
    return (
      <div>
        <Navbar tenant="true"/>
        <form>
          <h1>Sign up here!</h1>
          <fieldset className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" className="form-control" id="phone" placeholder="5555555555"/>
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="birthdate">Birth Date</label>
            <input type="text" className="form-control" id="birthdate" placeholder="YYYY-MM-DD"/>
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="school">School</label>
            <input type="text" className="form-control" id="school" placeholder="Enter your school here"/>
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="major">Major</label>
            <input type="text" className="form-control" id="major" placeholder="Enter your major here"/>
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="grad">Graduation Date</label>
            <input type="text" className="form-control" id="grad" placeholder="YYYY-MM-DD"/>
          </fieldset>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
});

module.exports = TenantRegisterPage;
