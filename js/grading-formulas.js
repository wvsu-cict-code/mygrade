//c paramater == components
var fx = {
  it227: function(c) {

    //Midterm
    var lexList_m = [c[2], c[3], c[4]], // Lab Exercises
    lxmList_m = [c[1]], // Lab Exam
    hwList_m = [c[5]], // homework
    mjrexmList_m = [c[6]]; // Major Exam

    var mgComponents = [],
    mgScore = 0;

    mgComponents.push(sEquiv(c[0].value, c[0].total, 0.15));
    mgComponents.push(sEquiv(cSum(lxmList_m), cMax(lxmList_m), 0.10));
    mgComponents.push(sEquiv(cSum(lexList_m), cMax(lexList_m), 0.25));
    mgComponents.push(sEquiv(cSum(hwList_m), cMax(hwList_m), 0.20));
    mgComponents.push(sEquiv(cSum(mjrexmList_m), cMax(mjrexmList_m), 0.30));

    mgComponents.forEach(function(val){
      mgScore += parseFloat(val)
    });

    var lexList_f = [c[8]], // Lab Exercises
    hwList_f = [c[9]], // homework
    mjrprjList_f = [c[10]]; // Major Project

    //finals
    var fgComponents = [],
    fgScore = 0;

    fgComponents.push(sEquiv(c[7].value, c[7].total, 0.10));
    fgComponents.push(sEquiv(cSum(lexList_f), cMax(lexList_f), 0.10));
    fgComponents.push(sEquiv(cSum(hwList_f), cMax(hwList_f), 0.20));
    fgComponents.push(sEquiv(cSum(mjrprjList_f), cMax(mjrprjList_f), 0.60));

    fgComponents.forEach(function(val){
      fgScore += parseFloat(val)
    });

    //general
    var ggScore = ((mgScore*0.5)+(fgScore*0.5)).toFixed(2);

    return {
      midterm: mgScore,
      finalterm: fgScore,
      general: ggScore
    }
  },
  it227_guide: function() {
    var d = [
      {
        name: "Class Standing",
        value: 15,
        type: "m"
      },
      {
        name: "Lab Exams",
        value: 10,
        type: "m"
      },
      {
        name: "Lab Exercises",
        value: 25,
        type: "m"
      },
      {
        name: "Homework",
        value: 20,
        type: "m"
      },
      {
        name: "Major Exam",
        value: 30,
        type: "m"
      },
      {
        name: "Class Standing",
        value: 10,
        type: "f"
      },
      {
        name: "Lab Exercises",
        value: 10,
        type: "f"
      },
      {
        name: "Homework",
        value: 20,
        type: "f"
      },
      {
        name: "Major Project",
        value: 60,
        type: "f"
      }
    ];
    return d;
  },
  it238: function(c) {

    //Midterm
    var lexList_m = [c[2], c[3], c[4],c[5],c[6]], // Lab Exercises
    lxmList_m = [c[1]], // Lab Exam
    mjrexmList_m = [c[7]]; // Major Exam

    var mgComponents = [],
    mgScore = 0;

    mgComponents.push(sEquiv(c[0].value, c[0].total, 0.15));
    mgComponents.push(sEquiv(cSum(lxmList_m), cMax(lxmList_m), 0.15));
    mgComponents.push(sEquiv(cSum(lexList_m), cMax(lexList_m), 0.30));
    mgComponents.push(sEquiv(cSum(mjrexmList_m), cMax(mjrexmList_m), 0.40));

    mgComponents.forEach(function(val){
      mgScore += parseFloat(val)
    });

    //general
    var ggScore = mgScore.toFixed(2);

    return {
      general: mgScore
    }
  },
  it238_guide: function() {
    var d = [
      {
        name: "Class Standing",
        value: 15,
        type: "m"
      },
      {
        name: "Lab Exams",
        value: 15,
        type: "m"
      },
      {
        name: "Lab Exercises",
        value: 30,
        type: "m"
      },
      {
        name: "Major Exam",
        value: 40,
        type: "m"
      }
    ];
    return d;
  }
}
