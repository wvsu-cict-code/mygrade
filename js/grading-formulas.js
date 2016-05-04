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

    //midterm
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

    var lxmList_f = [c[9], c[10]], // Lab Exams
    lexList_f = [c[11], c[12]], // Lab Exercises
    mjrprjList_f = [c[13]]; // Major Project

   //finals
    var fgComponents = [],
    fgScore = 0;

    fgComponents.push(sEquiv(c[8].value, c[8].total, 0.15));
    fgComponents.push(sEquiv(cSum(lxmList_f), cMax(lxmList_f), 0.25));
    fgComponents.push(sEquiv(cSum(lexList_f), cMax(lexList_f), 0.20));
    fgComponents.push(sEquiv(cSum(mjrprjList_f), cMax(mjrprjList_f), 0.40));

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
      },
           {
        name: "Class Standing",
        value: 10,
        type: "f"
      },
      {
        name: "Lab Exercises",
        value: 20,
        type: "f"
      },
      {
        name: "Lab Exams",
        value: 25,
        type: "f"
      },
      {
        name: "Major Project",
        value: 40,
        type: "f"
      }
    ];
    return d;
  },
    it230: function(c) {

    //Midterm
    var lexList_m = [c[2], c[3], c[4]], // Lab Exercises
    lxmList_m = [c[1]], // Lab Exam
    hwList_m = [c[5]], // homework
    mjrexmList_m = [c[6], c[7]]; // Major Exam

    var mgComponents = [],
    mgScore = 0;

    mgComponents.push(sEquiv(c[0].value, c[0].total, 0.10));
    mgComponents.push(sEquiv(cSum(lxmList_m), cMax(lxmList_m), 0.10));
    mgComponents.push(sEquiv(cSum(lexList_m), cMax(lexList_m), 0.30));
    mgComponents.push(sEquiv(cSum(hwList_m), cMax(hwList_m), 0.20));
    mgComponents.push(sEquiv(cSum(mjrexmList_m), cMax(mjrexmList_m), 0.30));

    mgComponents.forEach(function(val){
      mgScore += parseFloat(val)
    });

    var lxmList_f = [c[11], c[12]], // Lab Exams
    lexList_f = [c[9], c[10]], // Lab Exercises
    mjrprjList_f = [c[13]]; // Major Project

    //finals
    var fgComponents = [],
    fgScore = 0;

    fgComponents.push(sEquiv(c[8].value, c[8].total, 0.10));
    fgComponents.push(sEquiv(cSum(lxmList_f), cMax(lxmList_f), 0.20));
    fgComponents.push(sEquiv(cSum(lexList_f), cMax(lexList_f), 0.20));
    fgComponents.push(sEquiv(cSum(mjrprjList_f), cMax(mjrprjList_f), 0.50));

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
  it230_guide: function() {
    var d = [
      {
        name: "Class Standing",
        value: 10,
        type: "m"
      },
      {
        name: "Lab Exams",
        value: 10,
        type: "m"
      },
      {
        name: "Lab Exercises",
        value: 30,
        type: "m"
      },
      {
        name: "Homework",
        value: 20,
        type: "m"
      },
      {
        name: "Major Exams",
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
        value: 20,
        type: "f"
      },
      {
        name: "Lab Exams",
        value: 20,
        type: "f"
      },
      {
        name: "Major Project",
        value: 50,
        type: "f"
      }
    ];
    return d;
  },
  it219: function(c) {

    //Midterm
    var lexList_m = [c[4], c[5], c[6], c[7]], // Lab Exercises
    lxmList_m = [c[1], c[2], c[3]], // Lab Exam
    mjrexmList_m = [c[8]]; // Major Exam

    var mgComponents = [],
    mgScore = 0;

    mgComponents.push(sEquiv(c[0].value, c[0].total, 0.15));
    mgComponents.push(sEquiv(cSum(lxmList_m), cMax(lxmList_m), 0.20));
    mgComponents.push(sEquiv(cSum(lexList_m), cMax(lexList_m), 0.20));
    mgComponents.push(sEquiv(cSum(mjrexmList_m), cMax(mjrexmList_m), 0.45));

    mgComponents.forEach(function(val){
      mgScore += parseFloat(val)
    });

    var lxmList_f = [c[14], c[15], c[16]], // Lab Exams
    lexList_f = [c[10], c[11], c[12], c[13]], // Lab Exercises
    mjrprjList_f = [c[17]]; // Major Project

    //finals
    var fgComponents = [],
    fgScore = 0;

    fgComponents.push(sEquiv(c[9].value, c[9].total, 0.15));
    fgComponents.push(sEquiv(cSum(lxmList_f), cMax(lxmList_f), 0.30));
    fgComponents.push(sEquiv(cSum(lexList_f), cMax(lexList_f), 0.25));
    fgComponents.push(sEquiv(cSum(mjrprjList_f), cMax(mjrprjList_f), 0.30));

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
  it219_guide: function() {
    var d = [
      {
        name: "Class Standing",
        value: 15,
        type: "m"
      },
      {
        name: "Lab Exams",
        value: 20,
        type: "m"
      },
      {
        name: "Lab Exercises",
        value: 20,
        type: "m"
      },
      {
        name: "Major Exams",
        value: 45,
        type: "m"
      },
      {
        name: "Class Standing",
        value: 15,
        type: "f"
      },
      {
        name: "Lab Exercises",
        value: 25,
        type: "f"
      },
      {
        name: "Lab Exams",
        value: 30,
        type: "f"
      },
      {
        name: "Major Project",
        value: 30,
        type: "f"
      }
    ];
    return d;
  },
  it220a: function(c) {

    //Midterm
    var lexList_m = [c[1], c[2], c[3]], // Lab Exercises
    mjrexmList_m = [c[4]], // Major Exam
    mjrprjList_m = [c[5]]; // Major Project

    var mgComponents = [],
    mgScore = 0;

    mgComponents.push(sEquiv(c[0].value, c[0].total, 0.15));
    mgComponents.push(sEquiv(cSum(lexList_m), cMax(lexList_m), 0.25));
    mgComponents.push(sEquiv(cSum(mjrexmList_m), cMax(mjrexmList_m), 0.30));
    mgComponents.push(sEquiv(cSum(mjrprjList_m), cMax(mjrprjList_m), 0.30));

    mgComponents.forEach(function(val){
      mgScore += parseFloat(val)
    });

    var lexList_f = [c[7], c[8], c[9], c[10]], // Lab Exercises
    hmwrkList_f = [c[11]], // Homework
    mjrprjList_f = [c[12]]; // Major Project

    //finals
    var fgComponents = [],
    fgScore = 0;

    fgComponents.push(sEquiv(c[6].value, c[6].total, 0.15));
    fgComponents.push(sEquiv(cSum(lexList_f), cMax(lexList_f), 0.25));
    fgComponents.push(sEquiv(cSum(hmwrkList_f), cMax(hmwrkList_f), 0.20));
    fgComponents.push(sEquiv(cSum(mjrprjList_f), cMax(mjrprjList_f), 0.40));

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
  it220a_guide: function() {
    var d = [
      {
        name: "Class Standing",
        value: 15,
        type: "m"
      },
      {
        name: "Lab Exercises",
        value: 25,
        type: "m"
      },
      {
        name: "Major Exams",
        value: 30,
        type: "m"
      },      {
        name: "Major Project",
        value: 30,
        type: "m"
      },
      {
        name: "Major Exams",
        value: 30,
        type: "m"
      },
      {
        name: "Class Standing",
        value: 15,
        type: "f"
      },
      {
        name: "Lab Exercises",
        value: 25,
        type: "f"
      },
      {
        name: "Homework",
        value: 20,
        type: "f"
      },
      {
        name: "Major Project",
        value: 40,
        type: "f"
      }
    ];
    return d;
  },
    is217c: function(c) {

    //Midterm
    var lexList_m = [c[4], c[5], c[6]], // Lab Exercises
    lxmList_m = [c[1], c[2], c[3]], // Lab Exam
    mjrexmList_m = [c[7]]; // Major Exam

    var mgComponents = [],
    mgScore = 0;

    mgComponents.push(sEquiv(c[0].value, c[0].total, 0.15));
    mgComponents.push(sEquiv(cSum(lexList_m), cMax(lexList_m), 0.20));
    mgComponents.push(sEquiv(cSum(lxmList_m), cMax(lxmList_m), 0.20));
    mgComponents.push(sEquiv(cSum(mjrexmList_m), cMax(mjrexmList_m), 0.45));

    mgComponents.forEach(function(val){
      mgScore += parseFloat(val)
    });

    var lexList_f = [c[9], c[10]], // Lab Exercises
    lxmList_m = [c[11], c[12]], // Lab Exam
    mjrprjList_f = [c[13]]; // Major Project

    //finals
    var fgComponents = [],
    fgScore = 0;

    fgComponents.push(sEquiv(c[8].value, c[8].total, 0.15));
    fgComponents.push(sEquiv(cSum(lexList_f), cMax(lexList_f), 0.25));
    fgComponents.push(sEquiv(cSum(lxmList_m), cMax(lxmList_m), 0.20));
    fgComponents.push(sEquiv(cSum(mjrprjList_f), cMax(mjrprjList_f), 0.40));

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
  is217c_guide: function() {
    var d = [
      {
        name: "Class Standing",
        value: 15,
        type: "m"
      },
      {
        name: "Lab Exercises",
        value: 20,
        type: "m"
      },
      {
        name: "Major Exams",
        value: 20,
        type: "m"
      },      {
        name: "Major Exam",
        value: 45,
        type: "m"
      },
      {
        name: "Class Standing",
        value: 15,
        type: "f"
      },
      {
        name: "Lab Exercises",
        value: 25,
        type: "f"
      },
      {
        name: "Lab Exams",
        value: 20,
        type: "f"
      },
      {
        name: "Major Project",
        value: 40,
        type: "f"
      }
    ];
    return d;
  }
}
