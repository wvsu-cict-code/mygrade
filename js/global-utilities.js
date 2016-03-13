function generateGUID() {
  var S4 = function() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
};

function getAverage(score, total) {
  var equiv = ((score / total) * 50 + 50);
  return equiv.toFixed(2);
};

function randomColorStyle() {
  var colors = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffc107", "#ff9800", "#ff5722", "#795548", "#9e9e9e", "#607d8b"];
  shuffle(colors);
  return colors;
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function cSum(elements) {
  var sum = 0;
  elements.forEach(function(e) {
    sum += e.value;
  });
  return sum;
};

function cMax(elements) {
  var sum = 0;
  elements.forEach(function(e) {
    sum += e.total;
  });
  return sum;
};

function sEquiv(score, total, percentage) {
  var equiv = ((score / total) * 50 + 50) * percentage;
  return equiv.toFixed(2);
};

function ggEquiv(grade) {
  if (grade < 75) {
    return '5.00'
  };
  if (grade >= 75 && grade <= 76) {
    return '3.00'
  };
  if (grade >= 76 && grade <= 79) {
    return '2.75'
  };
  if (grade >= 79 && grade <= 82) {
    return '2.50'
  };
  if (grade >= 82 && grade <= 84) {
    return '2.25'
  };
  if (grade >= 84 && grade <= 86) {
    return '2.00'
  };
  if (grade >= 86 && grade <= 88) {
    return '1.75'
  };
  if (grade >= 88 && grade <= 92) {
    return '1.50'
  };
  if (grade >= 92 && grade <= 96) {
    return '1.25'
  };
  if (grade >= 96 && grade <= 100) {
    return '1.00'
  };
}

function ggDesc(grade) {
  if (grade < 75) {
    return 'ENDANGERED'
  };
  if (grade >= 75 && grade <= 76) {
    return 'FINE'
  };
  if (grade >= 76 && grade <= 79) {
    return 'FINE'
  };
  if (grade >= 79 && grade <= 82) {
    return 'SUPERIOR'
  };
  if (grade >= 82 && grade <= 84) {
    return 'EXQUISITE'
  };
  if (grade >= 84 && grade <= 86) {
    return 'FLAWLESS'
  };
  if (grade >= 86 && grade <= 88) {
    return 'FLAWLESS'
  };
  if (grade >= 88 && grade <= 92) {
    return 'EPIC'
  };
  if (grade >= 92 && grade <= 96) {
    return 'EPIC'
  };
  if (grade >= 96 && grade <= 100) {
    return 'LEGENDARY'
  };
}
