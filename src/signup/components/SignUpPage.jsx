const React = require("react");

var SignUpPage = React.createClass({
  
  "componentDidMount": function() {
    $("button").click(this.handleSubmit);
  },
  
  "handleSubmit": function(clickEvent) {
    clickEvent.preventDefault();
    $(".alert-danger").slideUp(function() {
      if (!$("input[type='checkbox']").prop("checked")) {
        $(".alert-danger").text("Please read and agree to the PolyRents Terms of Service.");
        $(".alert-danger").slideDown();
        return;
      }
      if ($("#form-type").val() === "Tenant") {
        var params = {
          "first_name": $("#firstName").val(),
          "last_name": $("#lastName").val(),
          "email": $("#email").val(),
          "password": $("#password").val()
        };
        $.ajax({
          "url": "http://polyrents-dev.mkpkktgrns.us-west-2.elasticbeanstalk.com/api/tenant/register/",
          "type": "POST",
          "contentType": "application/json",
          "data": JSON.stringify(params),
          "success": function(data) {
            sessionStorage.token = data.token;
            sessionStorage.name = params.first_name;
            window.location.pathname = "/tenant/onboarding";
          },
          "error": function(data) {
            var error = JSON.parse(data.responseText);
            var field = Object.keys(error)[0];
            var fieldDict = {
              "email": "email",
              "password": "password",
              "first_name": "first name",
              "last_name": "last name"
            };
            $(".alert-danger").text("The " + fieldDict[field] 
              + " field has an error: " + error[field]);
            $(".alert-danger").slideDown();
          }
        });
      }
    });
  },
  
  "render": function() {
    return (
      <form className="col-xs-8 col-xs-offset-2">
        <h2 className="eq text-center">Welcome to PolyRents!</h2>
        <br/>
        <fieldset className="form-group">
          <select className="form-control" id="form-type">
            <option>Tenant</option>
            <option>Landlord</option>
            <option>Guarantor</option>
          </select>
        </fieldset>
        <div className="row">
          <fieldset className="form-group col-md-6">
            <input type="text" className="form-control" id="firstName" placeholder="First Name"/>
          </fieldset>
          <fieldset className="form-group col-md-6">
            <input type="text" className="form-control" id="lastName" placeholder="Last Name"/>
          </fieldset>
        </div>
        <fieldset className="form-group">
          <input type="email" className="form-control" id="email" placeholder="Email"/>
        </fieldset>
        <fieldset className="form-group">
          <input type="password" className="form-control" id="password" placeholder="Password"/>
        </fieldset>
        <div className="checkbox">
          <label>
            <input type="checkbox"/>
            <span className="c-indicator"></span>
            I've read and agree to the PolyRents Terms of Service
          </label>
        </div>
        <div className="alert alert-danger" role="alert" style={{ "display": "none" }}></div>
        <button className="btn btn-primary center-block">Make my life easier!</button>
        <br/>
        <p className="text-center"><a href="#">Already have an account? Sign in here.</a></p>
      </form>
    );
  }
  
});

module.exports = SignUpPage;
