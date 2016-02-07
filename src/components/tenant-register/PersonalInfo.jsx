const React = require("react");

var PersonalInfo = React.createClass({
  "render": function() {
    return (
      <div>
        <h2>Let's get started Brandon...</h2>
        <fieldset className="form-group">
          <label htmlFor="phone"></label>
          <input type="email" className="form-control" id="phone" placeholder="Email"/>
        </fieldset>
      </div>
    );
  }
});

module.exports = PersonalInfo;
