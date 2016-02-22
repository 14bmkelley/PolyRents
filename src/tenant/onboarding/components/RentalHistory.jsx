const React = require("react");

var RentalHistory = React.createClass({
  
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
      var $currentForm = $(".open");
      var params = {
        "address": $currentForm.find(".address").val(),
        "city": $currentForm.find(".city").val(),
        "state": $currentForm.find(".state").val(),
        "zipcode": $currentForm.find(".zipcode").val(),
        "rent": $currentForm.find(".rent").val(),
        "start": $currentForm.find(".leaseStart").val(),
        "end": $currentForm.find(".leaseEnd").val(),
        "leave_reason": $currentForm.find(".reason").val(),
        "landlord_name": $currentForm.find(".landlordFirst").val()
          + " " + $currentForm.find(".landlordLast").val(),
        "landlord_email": $currentForm.find(".email").val(),
        "landlord_phone": $currentForm.find(".phone").val()
      };
      $.ajax({
        "url": "http://polyrents-dev.mkpkktgrns.us-west-2.elasticbeanstalk.com/api/tenant/rental_history/",
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
            "address": "address",
            "city": "city",
            "state": "state",
            "zipcode": "zip code",
            "rent": "rent amount",
            "start": "lease start date",
            "end": "lease end date",
            "leave_reason": "reason for leaving",
            "landlord_name": "landlord's name",
            "landlord_email": "landlord's email",
            "landlord_phone": "landlord's phone"
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
        <h2>Alright { this.props.name }, let's get your rental history.</h2>
        <br/>
        <div className="row">
          <div className="col-sm-8 col-xs-12">
            <div className="row open">
              <div className="col-xs-12">
                <div className="checkbox">
                  <label>
                    <input type="checkbox"/>
                    <span className="c-indicator"></span>
                    I currently live on campus
                  </label>
                </div>
              </div>
              <div className="col-xs-12">
                <input type="text" className="form-control form-group address" placeholder="Property Address"/>
              </div>
              <div className="col-sm-6 col-xs-12">
                <input type="text" className="form-control form-group city" placeholder="City"/>
              </div>
              <div className="col-sm-3 col-xs-6">
                <input type="text" className="form-control form-group state" placeholder="State"/>
              </div>
              <div className="col-sm-3 col-xs-6">
                <input type="text" className="form-control form-group zipcode" placeholder="Zip Code"/>
              </div>
              <div className="col-sm-4 col-xs-12">
                <input type="text" className="form-control form-group rent" placeholder="Rent Amount"/>
              </div>
              <div className="col-sm-4 col-xs-6">
                <div className="input-group form-group">
                  <span className="input-group-addon">
                    <span className="glyphicon glyphicon-calendar"></span>
                  </span>
                  <input type="text" className="form-control leaseStart" placeholder="Lease Start"/>
                </div>
              </div>
              <div className="col-sm-4 col-xs-6">
                <div className="input-group form-group">
                  <span className="input-group-addon">
                    <span className="glyphicon glyphicon-calendar"></span>
                  </span>
                  <input type="text" className="form-control leaseEnd" placeholder="Lease End"/>
                </div>
              </div>
              <div className="col-sm-6 col-xs-12">
                <input type="text" className="form-control form-group landlordFirst" placeholder="Landlord First Name"/>
              </div>
              <div className="col-sm-6 col-xs-12">
                <input type="text" className="form-control form-group landlordLast" placeholder="Landlord Last Name"/>
              </div>
              <div className="col-sm-6 col-xs-12">
                <input type="text" className="form-control form-group email" placeholder="Email"/>
              </div>
              <div className="col-sm-6 col-xs-12">
                <input type="text" className="form-control form-group phone" placeholder="Phone Number"/>
              </div>
              <div className="col-xs-12">
                <textarea className="form-control form-group reason" rows="3" placeholder="Reason for leaving"></textarea>
              </div>
            </div>
            <div className="alert alert-danger" role="alert" style={{ "display": "none" }}></div>
          </div>
          <div className="col-sm-4 col-xs-12">
            <button className="btn btn-primary"> Continue <span className="glyphicon glyphicon-chevron-right"></span></button>
          </div>
        </div>
      </form>
    );
  }
  
});

module.exports = RentalHistory;
