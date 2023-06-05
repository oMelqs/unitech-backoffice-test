const data = {
  options: {
    chart: {
      id: "basic-bar",
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      show: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        gradientToColors: ["#0346F2"],
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0,
      },
    },
    colors: ["#0346F2"],
    grid: {
      show: false,
      padding: {
        left: -8,
        right: -8,
      },
    },
    stroke: {
      width: 1.5,
      curve: "smooth",
    },
    xaxis: {
      labels: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  },
  series: [
    {
      name: "R$",
      data: [1000, 1200, 1000, 1000, 600, 900, 750, 500],
      labels: {
        show: false,
      },
    },
  ],
};

export default data;
