const React = require("react");
var Navbar = require("../common/Navbar.jsx");

var TenantRegisterPage = React.createClass({
  "render": function() {
    return (
      <Navbar landlord="true"/>
    );
  }
});

module.exports = TenantRegisterPage;
