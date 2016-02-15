const React = require("react");
var PersonalInfo = require("./PersonalInfo.jsx");

var Form = React.createClass({
  
  "componentDidMount": function() {
    console.log(sessionStorage.token);
  },
  
  "getInitialState": function() {
    return { "form": 1 };
  },
  
  "render": function() {
    switch (this.state.form) {
      case 1:
        return <PersonalInfo />;
    }
  }

});

module.exports = Form;
