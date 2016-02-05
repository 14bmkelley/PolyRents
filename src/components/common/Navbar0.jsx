const React = require("react");

var Navbar0 = React.createClass({
  "render": function() {
    var signup = "";
    var signin = "";
    if (this.props.signup) {
      signup = "active";
    }
    if (this.props.signin) {
      signin = "active";
    }
    return (
      <nav>
        <ul className="nav nav-tabs nav-justified">
          <li role="presentation" className={ signup }>
            <a href="./signup.html">
              Sign Up
            </a>
          </li>
          <li role="presentation" className={ signin }>
            <a href="./signin.html">
              Sign In
            </a>
          </li>
        </ul>
      </nav>
    );
  }
});

module.exports = Navbar0;
