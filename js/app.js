// MyGrade - Grade Viewer App
// @version v0.0.1
// @author Mark Joseph J. Solidarios | Part-time faculty | WVSU - IICT
// @link

var app = {
  initialize: function() {
    $("#account-pass").hide();
    // $(".grade-breakdown").hide();

    $(".next-button").on("click", function() {
      $("#account-id").hide();
      $("#account-pass").show();
    });

    $("#section-dashboard").hide();

    $("#logout-button").on("click", function() {
      location.reload();
    });


    //scroll effect

    $("a[href*='#to-components']").on("click",function () {
      $(".mdl-layout__content").animate({
          scrollTop: $(".page-content").height() - $("#to-components").height()*2.5
      }, "slow");
    });

    $("a[href*='#to-guides']").on("click",function () {
      $(".mdl-layout__content").animate({
          scrollTop: $(".page-content").height() - 1100
      }, "slow");
    });

    $("a[href*='attachments']").on("click",function () {
      $(".mdl-layout__content").animate({
          scrollTop: $(".page-content").height() - $(".mygrade-card").height() - 300
      }, "slow");
    });

    $("a[href*='mygrade']").on("click",function () {
      $(".mdl-layout__content").animate({
          scrollTop: $(".page-content").height()
      }, "slow");
    });

  },
  hideLogin: function() {
    $("#section-login").hide();
  },
  displayGrade: function() {
    $("#section-dashboard").show();
  },
  errorLogin: function() {
    $("#account-pass").hide();
    $("#account-id").show();
    this.showSnackBar({
      message: "Something wicked happend. Please try again."
    })
  },
  showSnackBar: function(data) {
    var snackbar = document.querySelector('#toast');
    snackbar.MaterialSnackbar.showSnackbar(data)
  },
  showLoginDialog: function() {
    var dialog = document.querySelector('#login-help-dialog');
    if (!dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    };
    dialog.showModal();

    dialog.querySelector('.ok').addEventListener('click', function() {
      dialog.close();
    });
  },
  showGenHelpDialog: function() {
    var dialog = document.querySelector('#gen-help-dialog');
    if (!dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    };
    dialog.showModal();

    dialog.querySelector('.ok').addEventListener('click', function() {
      dialog.close();
    });
  },
  showProgressDialog: function(){
    var dialog = document.querySelector('#wait');
    if (!dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    };
    dialog.showModal();

    setTimeout(function(){
      dialog.close();
      $("#dashboard-contents").removeClass("wait");
    }, 3000);
  },
  setProfile: function(fbid, full_name) {
    var fbpp_src = 'https://graph.facebook.com/' + fbid + '/picture?width=100&height=100';
    $('.profile-picture').attr('src', fbpp_src);
    var firstName = full_name.split(" ")[1];
    $('.profile-name').html(firstName);
  },
  setDashboard: function(components) {
    google.charts.load('current', {
      'packages': ['corechart', 'bar']
    });
    google.charts.setOnLoadCallback(drawCharts);

    // Slice user account id to determine the course
    var accountID = $('#acct_id').val();

    // Build Components
    var dataSetMidtermComponents = [];
    var dataSetFinaltermComponents = [];

    var header = ['Component', 'Score'];
    dataSetMidtermComponents.push(header);
    dataSetFinaltermComponents.push(header);

    components.forEach(function(item) {
      //determine item type
      if (item.type == "m") {
        var avg = getAverage(item.value, item.total);
        if (item.calc == "post") {
          dataSetMidtermComponents.push([item.name, parseFloat(avg)]);
        } else {
          dataSetMidtermComponents.push([item.name, item.value]);
        }
      } else {
        var avg = getAverage(item.value, item.total);
        if (item.calc == "post") {
          dataSetFinaltermComponents.push([item.name, parseFloat(avg)]);
        } else {
          dataSetFinaltermComponents.push([item.name, item.value]);
        }
      }
    });

    //Build Guide

    // Call the guide
    var guideStr = "fx." + accountID.slice(10, accountID.length) + "_guide()",
    guideObj = eval(guideStr);

    console.log(JSON.stringify(guideObj));

    var dataSetMidtermGuide = [],
    dataSetFinaltermGuide = [],
    header = ['Guide', '%'];
    dataSetMidtermGuide.push(header);
    dataSetFinaltermGuide.push(header);

    $.each(guideObj, function(key, item) {
      if (item.type == "m") {
        dataSetMidtermGuide.push([item.name, item.value]);
      }else{
        dataSetFinaltermGuide.push([item.name, item.value]);
      }
    });

    // Build Charts
    function drawCharts() {
      if (dataSetMidtermComponents.length > 1) {
        drawChartMidtermComponents();
        drawChartMidtermGuide();
      }
      if (dataSetFinaltermComponents.length > 1) {
        drawChartFinaltermComponents();
        drawChartFinaltermGuide();
      }
      if(dataSetMidtermComponents.length > 1 && dataSetFinaltermComponents.length > 1){
        drawGeneralGradeChart();
      }
    }

    function drawChartMidtermComponents() {
      var data = google.visualization.arrayToDataTable(dataSetMidtermComponents),
      options = {
        hAxis: {
          minValue: 0,
        },
        vAxis: {
          minValue: 0,
          maxValue: 100
        },
        bars: 'horizontal',
        axes: {
          y: {
            0: {
              side: 'right'
            }
          }
        },
        width: 900,
        height: 450
      },
      formatter = new google.visualization.NumberFormat({
        decimalSymbol: '.',
        groupingSymbol: '.'
      });
      formatter.format(data, 1);

      var material = new google.charts.Bar(document.getElementById('chart-midterm-components'));
      material.draw(data, options);
    };

    function drawChartFinaltermComponents() {
      var data = google.visualization.arrayToDataTable(dataSetFinaltermComponents),
      options = {
        hAxis: {
          minValue: 0,
        },
        vAxis: {
          minValue: 0,
          maxValue: 100
        },
        bars: 'horizontal',
        axes: {
          y: {
            0: {
              side: 'right'
            }
          }
        },
        width: 900,
        height: 300
      };

      var formatter = new google.visualization.NumberFormat({
        decimalSymbol: '.',
        groupingSymbol: '.'
      });
      formatter.format(data, 1);

      var material = new google.charts.Bar(document.getElementById('chart-finalterm-components'));
      material.draw(data, options);
    };

    function drawChartMidtermGuide(){
        var data = google.visualization.arrayToDataTable(dataSetMidtermGuide),
        colorStyle = randomColorStyle().slice(0,dataSetFinaltermGuide.length),
        options = {
          pieHole: 0.4,
          width: 460,
          height: 300,
          colors: colorStyle
        },
        chart = new google.visualization.PieChart(document.getElementById('chart-midterm-guide'));
        chart.draw(data, options);
    };

    function drawChartFinaltermGuide(){
        var data = google.visualization.arrayToDataTable(dataSetFinaltermGuide),
        colorStyle = randomColorStyle().slice(0,dataSetFinaltermGuide.length),
        options = {
          pieHole: 0.4,
          width: 460,
          height: 300,
          colors: colorStyle
        },
        chart = new google.visualization.PieChart(document.getElementById('chart-finalterm-guide'));
        chart.draw(data, options);
    };

    //final grade

    var generalGradeComponents = [],
    header = ['Component', 'Grade'];
    generalGradeComponents.push(header);

    // Call the formula and get the results
    var courseFormulaObj = "fx." + accountID.slice(10, accountID.length) + "(components)",
    result = eval(courseFormulaObj);

    $("#ggEquiv").html(ggEquiv(result.general));
    $("#ggDesc").html(ggDesc(result.general));

    generalGradeComponents.push(['Midterm',result.midterm]);
    generalGradeComponents.push(['Finals',result.finalterm]);
    generalGradeComponents.push(['General',result.general]);

    function drawGeneralGradeChart(){
      {
        var data = google.visualization.arrayToDataTable(generalGradeComponents),
        options = {
          hAxis: {
            minValue: 0,
          },
          vAxis: {
            minValue: 0,
            maxValue: 100
          },
          bars: 'horizontal',
          axes: {
            y: {
              0: {
                side: 'right'
              }
            }
          },
          width: 900,
          height: 250,
          colors:['#ff9800']
        },
        formatter = new google.visualization.NumberFormat({
          decimalSymbol: '.',
          groupingSymbol: '.'
        });
        formatter.format(data, 1);

        var material = new google.charts.Bar(document.getElementById('chart-final-grade'));
        material.draw(data, options);
      };
    };

  },
  getAttachments: function(attachments) {
    if (attachments == null) {} else {
      console.log("Attachments received: " + attachments);
      this.setAttachments(attachments);
    }
  },
  setAttachments: function(attachments) {
    $("#attachments").html("");
    attachments.forEach(function(item) {
      $trElement = $('<tr></tr>');
      var tdElementStr = "";
      tdElementStr += '<td class="mdl-data-table__cell--non-numeric">' + item.desc + '</td>';
      tdElementStr += '<td class="mdl-data-table__cell--non-numeric"><a target="_blank" href="attachments/' + item.url + '">Download</a></td>';
      $tdElement = $(tdElementStr);
      $tdElement.appendTo($trElement);
      $trElement.appendTo($("#attachments"));
    });
  }
};
