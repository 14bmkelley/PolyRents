const React = require("react");
var PersonalInfo = require("./PersonalInfo.jsx");
var RentalHistory = require("./RentalHistory.jsx");

var Form = React.createClass({
  
  "render": function() {
    switch (this.props.step) {
      case 0:
        return <div></div>;
        break;
      case 1:
        return <PersonalInfo
                incrementState={ this.props.incrementState }/>;
        break;
      case 2:
        return <RentalHistory
                incrementState={ this.props.incrementState }/>;
        break;
      case 3:
        return <Guarantor
                incrementState={ this.props.incrementState }/>;
        break;
      case 4:
        return <Vehicle
                incrementState={ this.props.incrementState }/>;
        break;
      case 5:
        return <Bio
                incrementState={ this.props.incrementState }/>;
    }
  }

});

module.exports = Form;
