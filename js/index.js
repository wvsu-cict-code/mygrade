// Grade Viewer
// @version v0.0.1
// @author Mark Joseph J. Solidarios | Part-time faculty | WVSU - IICT
// @link

app.initialize();

$(".login-button").on("click", function() {
  appDB.child('_'+$('#acct_id').val()).on('value', function(snapshot){
    var result = snapshot.val();
    if(result==null||$('#acct_pass').val()!="1234567"){
      app.errorLogin();
    }else{
      app.hideLogin();
      console.log("Data fetched: "+result);
      app.setProfile(result.fbid,result.full_name);
      app.setDashboard(result.components);
      app.getAttachments(result.attachments);
      app.showProgressDialog();
      app.displayGrade();
      $(".mdl-layout__content").scrollTop(0);
    }
  });
});

$("#acct_id").on("focus", function(){
  app.showSnackBar({
    message: "Account ID is provided by your teacher.",
  })
});

$("#acct_pass").on("focus", function(){
  app.showSnackBar({
    message: "Pass code is the default Monsta FTP password."
  })
});

$("#login-help").on("click", function(){
  app.showLoginDialog()
});

$("#gen-help").on("click", function(){
  app.showGenHelpDialog()
});
