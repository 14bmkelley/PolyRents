const React = require("react");

var Header = React.createClass({
  "render": function() {
    return (
      <header className="row">
        <div id="logo" className="col-sm-2 col-xs-12">
          <img className="img-responsive" src="/assets/images/logo600x600blue.png" />
        </div>
        <div className="col-sm-2 hidden-xs">
          <p>Personal Info</p>
        </div>
        <div className="col-sm-2 hidden-xs">
          <p>Rental History</p>
        </div>
        <div className="col-sm-2 hidden-xs">
          <p>Guarantor</p>
        </div>
        <div className="col-sm-2 hidden-xs">
          <p>Additional Info</p>
        </div>
        <div className="col-sm-2 hidden-xs">
          <p>Bio</p>
        </div>
        <div className="col-sm-10 hidden-xs">
          <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: this.props.progress }}></div>
          </div>
        </div>
      </header>
    );
  }
});

module.exports = Header;
