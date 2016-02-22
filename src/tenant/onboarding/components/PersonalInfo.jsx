const React = require("react");

var PersonalInfo = React.createClass({
  
  "getDefaultProps": function() {
    return { "name": sessionStorage.name };
  },
  
  "componentDidMount": function() {
    $("button").click(this.handleSubmit);
  },
  
  "handleSubmit": function(clickEvent) {
    clickEvent.preventDefault();
    var Page = this;
    $(".alert-danger").slideUp(function() {
      var params = {
        "phone": $("#phone").val(),
        "birth_date": $("#dob").val(),
        "school": $("#school").val(),
        "major": $("#major").val(),
        "graduation": $("#graduation").val()
      };
      $.ajax({
        "url": "http://polyrents-dev.mkpkktgrns.us-west-2.elasticbeanstalk.com/api/tenant/basic/",
        "type": "POST",
        "contentType": "application/json",
        "headers": { "Authorization": sessionStorage.token },
        "data": JSON.stringify(params),
        "success": function(data) {
          if (data.success) {
            Page.props.incrementState();
          }
        },
        "error": function(data) {
          var error = JSON.parse(data.responseText);
          var field = Object.keys(error)[0];
          var fieldDict = {
            "phone": "phone number",
            "birth_date": "date of birth",
            "school": "current school",
            "major": "major",
            "graduation": "graduation date"
          };
          $(".alert-danger").text("The " + fieldDict[field]
            + " field has an error: " + error[field]);
          $(".alert-danger").slideDown();
        }
      });
    });
  },
  
  "render": function() {
    return (
      <form>
        <h2>Let's get started { this.props.name }...</h2>
        <br/>
        <div className="row">
          <div className="col-sm-8 col-xs-12">
            <div className="row">
              <div className="col-sm-6 col-xs-12">
                <input type="text" className="form-control form-group" id="phone" placeholder="Phone Number (XXXXXXXXXX)"/>
              </div>
              <div className="col-sm-6 col-xs-12">
                <input type="text" className="form-control form-group" id="dob" placeholder="Date of Birth (YYYY-MM-DD)"/>
              </div>
              <div className="col-xs-12">
                <label htmlFor="school">Education</label>
                <input type="text" className="form-control form-group" id="school" placeholder="School Currently in Attendance"/>
              </div>
              <div className="col-sm-6 col-xs-12">
                <input type="text" className="form-control form-group" id="major" placeholder="Major"/>
              </div>
              <div className="col-sm-6 col-xs-12">
                <input type="text" className="form-control form-group" id="graduation" placeholder="Graduation Date (YYYY-MM-DD)"/>
              </div>
            </div>
            <div className="alert alert-danger" role="alert" style={{ "display": "none" }}></div>
          </div>
          <div className="col-sm-4 col-xs-12">
            <button className="btn btn-primary">Continue <span className="glyphicon glyphicon-chevron-right"></span></button>
          </div>
        </div>
      </form>
    );
  }

});

module.exports = PersonalInfo;
