const React = require("react");
var Header = require("./Header.jsx");
var Form = require("./Form.jsx");

var TenantRegisterPage = React.createClass({
  "render": function() {
    return (
      <div>
        <Header />
        <Form />
      </div>
    );
  }
});

module.exports = TenantRegisterPage;
