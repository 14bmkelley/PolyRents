const React = require("react");
var Header = require("./Header.jsx");
var Form = require("./Form.jsx");

var TenantOnboardingPage = React.createClass({
  "componentDidMount": function() {
    
  },
  "render": function() {
    return (
      <div>
        <Header progress="2%"/>
        <Form />
      </div>
    );
  }
});

module.exports = TenantOnboardingPage;
