window.onload = () => {
  document.querySelectorAll('.panel').forEach(panel => {
    panel.classList.add('visible');
  });

  renderChart();
};

function showMap(type) {
  const map = document.getElementById("map");
  const label = document.getElementById("map-label");
  map.classList.add("active");

  if (type === "sbsp") {
    label.textContent = "SBSP Deployment: Orbital Platforms · Disaster Zones · Remote Access";
  } else {
    label.textContent = "Nuclear Deployment: Urban Grids · Industrial Hubs · Secure Zones";
  }
}

function renderChart() {
  const ctx = document.getElementById('emissionsChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['SBSP', 'Advanced Nuclear'],
      datasets: [{
        label: 'Lifecycle Emissions (gCO₂/kWh)',
        data: [3.5, 5.5],
        backgroundColor: ['#007C91', '#D97700'],
        borderColor: ['#005f6b', '#aa5c00'],
        borderWidth: 1
      }]
    },
    options: {
      animation: {
        duration: 1000,
        easing: 'easeOutBounce'
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'gCO₂/kWh'
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.label}: ${context.raw} gCO₂/kWh`;
            }
          }
        }
      }
    }
  });
}
