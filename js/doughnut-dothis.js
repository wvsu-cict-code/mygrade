var doughnutDoThis = {
  options: {
    segmentShowStroke: true,
    segmentStrokeColor: "#fff",
    segmentStrokeWidth: 2,
    percentageInnerCutout: 60, // This is 0 for Pie charts
    animationSteps: 100,
    animationEasing: "easeOutCircle",
    animateRotate: true,
    animateScale: false,
    responsive: true
  },
  createChart: function(contextObjectId, max, score, color1, color2) {
    this.extendDoughnut(score);
    new Chart($(contextObjectId)[0].getContext('2d')).DoughnutTextInside([
      {value: score, color: color1},
      {value: max-score, color: color2}
    ], this.options);
  },
  extendDoughnut: function(label) {
    Chart.types.Doughnut.extend({
      name: "DoughnutTextInside",
      showTooltip: function() {
        this.chart.ctx.save();
        Chart.types.Doughnut.prototype.showTooltip.apply(this, arguments);
        this.chart.ctx.restore();
      },
      draw: function() {
        Chart.types.Doughnut.prototype.draw.apply(this, arguments);

        var width = this.chart.width,
          height = this.chart.height;

        var fontSize = (height / 114).toFixed(2);
        this.chart.ctx.font = fontSize + "em Roboto";
        this.chart.ctx.textBaseline = "middle";

        var text = label+"%",
          textX = Math.round((width - this.chart.ctx.measureText(text).width) / 2),
          textY = height / 2;

        this.chart.ctx.fillText(text, textX, textY);
      }
    });
  }
}
