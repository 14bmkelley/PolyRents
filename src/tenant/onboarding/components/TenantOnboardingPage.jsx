const React = require("react");
var Header = require("./Header.jsx");
var Form = require("./Form.jsx");
var progressList = [ "0%", "7%", "28%", "50%", "50%", "50%" ];

var TenantOnboardingPage = React.createClass({
  
  "getInitialState": function() {
    var step = 0;
    return {
      "step": step,
      "progress": progressList[step]
    };
  },
  
  "incrementState": function() {
    var newStep = this.state.step + 1;
    this.setState({
      "step": newStep,
      "progress": progressList[newStep]
    });
  },
  
  "componentDidMount": function() {
    var Page = this;
    $.ajax({
      "url": "http://polyrents-dev.mkpkktgrns.us-west-2.elasticbeanstalk.com/api/tenant/info/",
      "type": "GET",
      "headers": { "Authorization": sessionStorage.token },
      "success": function(tenantInfo) {
        if (!tenantInfo.basic_completed) {
          var step = 1;
          Page.setState({
            "step": step,
            "progress": progressList[step]
          });
        }
        else if (!tenantInfo.rental_completed) {
          var step = 2;
          Page.setState({
            "step": step,
            "progress": progressList[step]
          });
        }
        else if (!tenantInfo.guarantor) {
          var step = 3;
          Page.setState({
            "step": step,
            "progress": progressList[step]
          });
        }
        else if (!tenantInfo.vehicle) {
          var step = 4;
          Page.setState({
            "step": step,
            "progress": progressList[step]
          });
        }
        else if (!tenantInfo.application_completed) {
          var step = 5;
          Page.setState({
            "step": step,
            "progress": progressList[step]
          });
        }
      },
      "error": function(data) {
        console.log(data);
      }
    });
  },
    
  "render": function() {
    return (
      <div>
        <Header progress={ this.state.progress }/>
        <Form step={ this.state.step }
              incrementState={ this.incrementState }/>
      </div>
    );
  },

});

module.exports = TenantOnboardingPage;
