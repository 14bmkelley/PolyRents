const React = require("react");

var SignInPage = React.createClass({
  "render": function() {
    return (
      <form className="col-xs-6 col-xs-offset-3">
        <h2 className="eq text-center">Welcome back to PolyRents!</h2>
        <br/>
        <fieldset className="form-group">
          <input type="email" className="form-control" id="email" placeholder="Email"/>
        </fieldset>
        <fieldset className="form-group">
          <input type="password" className="form-control" id="password" placeholder="Password"/>
        </fieldset>
        <br/>
        <button className="btn btn-primary center-block">Sign in</button>
        <br/>
        <p className="text-center"><a href="#">Don't have an account? Sign up here</a></p>
      </form>
    );
  }
});

module.exports = SignInPage;
