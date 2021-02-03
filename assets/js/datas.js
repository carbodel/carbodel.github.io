var ctx = document.getElementById('myChart');
var pie = document.getElementById('myChart-pie');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Emissioni', 'Riduzione', 'Compensazione', 'Carbon-credit'],
        datasets: [{
            label: '# Emissioni',
            data: [32, 10, 3, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                display: true
            }],
            xAxes: [{
                display:true
            }]
        },
        legend: {
            display: false,
        }
    }
});

var myChart = new Chart(pie, {
    type: 'pie',
    data: {
        labels: ['Energia', 'Trasporti', 'Produzione', 'etc.'],
        datasets: [{
            data: [12, 3, 5, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                display: false

            }]
        },
        legend: {
            display: true,
        }
    }
});