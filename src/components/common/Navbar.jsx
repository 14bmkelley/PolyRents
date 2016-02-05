const React = require("react");

var Navbar = React.createClass({
  "render": function() {
    var tenant = "";
    var landlord = "";
    var guarantor = "";
    if (this.props.tenant) {
      tenant = "active";
    }
    if (this.props.landlord) {
      landlord = "active";
    }
    if (this.props.guarantor) {
      guarantor = "active";
    }
    return (
      <nav>
        <ul className="nav nav-tabs nav-justified">
          <li role="presentation" className={ tenant }>
            <a href="./tenant-register.html">
              Register as a tenant
            </a>
          </li>
          <li role="presentation" className={ landlord }>
            <a href="./landlord-register.html">
              Register as a Landlord
            </a>
          </li>
          <li role="presentation" className={ guarantor }>
            <a href="./guarantor-register.html">
              Register as a Guarantor
            </a>
          </li>
        </ul>
      </nav>
    );
  }
});

module.exports = Navbar;
