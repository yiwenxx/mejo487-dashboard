
Highcharts.chart('chart1', {

    title: {
        text: 'Average Life Expectancy of Developed and Developing Countries, 2000-2015'
    },

    subtitle: {
        text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>'
    },

    yAxis: {
        title: {
            text: 'Life Expectancy (years)'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2000 to 2015'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2000
        }
    },

    series: [{
        name: 'Developing Countries',
        data: [64.6, 65.0, 65.2, 65.2, 65.4, 66.0,
            66.5, 66.9, 67.4, 67.9, 67.9, 68.5, 68.9, 69.2, 69.5, 69.7]
    }, {
        name: 'Developed Countries',
        data: [76.8, 77.1, 77.5, 77.9, 78.4, 78.6,
            79.1, 79.3, 78.9, 79.6, 80.1, 80.7, 80.4, 80.7, 81.1, 80.7]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 600
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});


Highcharts.chart('chart2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Top 10 Countries with Highest Life Expectancy'
    },
    subtitle: {
        text: '2015'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 75,
        title: {
            text: 'Life Expectancy (years)'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Life Expectancy in 2015: <b>{point.y:.1f} years</b>'
    },
    series: [{
        name: 'Life Expectancy',
        data: [
            ['Slovenia', 88],
            ['Denmark', 86],
            ['Chile', 85],
            ['Cyprus', 85],
            ['Japan', 83.7],
            ['Switzerland', 83.4],
            ['Singapore', 83.1],
            ['Australia', 82.8],
            ['Spain', 82.8],
            ['Iceland', 82.7],
            ['Italy', 82.7],
            ['Israel', 82.5],
            ['France', 82.4],
            ['Sweden', 82.4],
            ['Republic of Korea', 82.3],
            ['Canada', 82.2],
            ['Luxembourg', 82],
            ['Netherlands', 81.9],
            ['Norway', 81.8],
            ['Malta', 81.7]
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '12px',
                fontFamily: 'Verdana, sans-serif',
                textOutline: false
            }
        }
    }]
});


Highcharts.chart('chart3', {

    chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zoomType: 'xy'
    },

    legend: {
        enabled: false
    },

    title: {
        text: 'Adult Mortality and Infant Deaths per Country'
    },

    subtitle: {
        text: '2015'
    },

    accessibility: {
        point: {
            valueDescriptionFormat: '{index}. {point.name}, Adult Mortality: {point.x}, Infant Deaths: {point.y}, Life Expectancy: {point.z} years.'
        }
    },

    xAxis: {
        gridLineWidth: 1,
        title: {
            text: 'Adult Mortality'
        },
        labels: {
            format: '{value}'
        },
        
        accessibility: {
            rangeDescription: 'Range: 0 to 500.'
        }
    },

    yAxis: {
        startOnTick: false,
        endOnTick: false,
        title: {
            text: 'Infant Deaths'
        },
        labels: {
            format: '{value}'
        },
        maxPadding: 0.2,
    
        accessibility: {
            rangeDescription: 'Range: 50 to 80 years.'
        }
    },

    tooltip: {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
            '<tr><th>Adult Mortality:</th><td>{point.x}</td></tr>' +
            '<tr><th>Infant Deaths:</th><td>{point.y}</td></tr>'+
            '<tr><th>Life Expectancy:</th><td>{point.z} years</td></tr>',
        footerFormat: '</table>',
        followPointer: true
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },

    series: [{
        data: [
            { x: 484, y: 4 , z: 53.7, name: 'LS', country: 'Lesotho' },
            { x: 413, y: 22, z: 51, name: 'SL', country: 'Sierra Leone' },
            { x: 397, y: 57, z: 53.3, name: 'CD', country: 'Côte dIvoire' },
            { x: 397, y: 15, z: 52.5, name: 'CF', country: 'Central African Republic' },
            { x: 373, y: 2, z: 58.9, name: 'SZ', country: 'Swaziland' },
            { x: 365, y: 26, z: 58.3, name: 'MW', country: 'Malawi' },
            { x: 13, y: 0, z: 76.4, name: 'AG', country: 'Antigua and Barbuda' },
            { x: 13, y: 23, z: 79.3, name: 'US', country: 'United States of America' },
            { x: 13, y: 0, z: 72, name: 'VU', country: 'Vanuatu' },
            { x: 12, y: 0, z: 75.7, name: 'MK', country: 'Macedonia' },
            { x: 1, y: 3, z: 75.3, name: 'TN', country: 'Tunisia' },
            { x: 143, y: 10, z: 74.8, name: 'CO', country: 'Colombia' },
            { x: 142, y: 42, z: 75, name: 'BR', country: 'Brazil' },
            { x: 138, y: 3, z: 74.9, name: 'LK', country: 'Sri Lanka' },
            { x: 127, y: 28, z: 76, name: 'VN', country: 'Viet Nam' },
            { x: 125, y: 1, z: 76.2, name: 'JM', country: 'Jamaica' },
            { x: 74, y: 0, z: 88, name: 'SI', country: 'Slovenia' },
            { x: 55, y: 2, z: 83.7, name: 'JP', country: 'Japan' },
            { x: 69, y: 3, z: 81.2, name: 'UK', country: 'United Kingdom' },
            { x: 159, y: 51, z: 79, name: 'EG', country: 'Egypt' },
            { x: 122, y: 30, z: 76.7, name: 'MX', country: 'Mexico' },
            { x: 195, y: 4, z: 71.3, name: 'UA', country: 'Ukraine' },
            { x: 211, y: 52, z: 68.5, name: 'PH', country: 'Philippines' },
            { x: 336, y: 22, z: 67, name: 'ZW', country: 'Zimbabwe' },
            { x: 267, y: 7, z: 64.7, name: 'CG', country: 'Congo' },
            { x: 328, y: 42, z: 62.9, name: 'SA', country: 'South Africa' },
            { x: 259, y: 8, z: 61.4, name: 'LR', country: 'Liberia' },
            { x: 335, y: 66, z: 52.4, name: 'AO', country: 'Angola' },
            { x: 397, y: 15, z: 52.5, name: 'CF', country: 'Central African Republic' },
            { x: 332, y: 26, z: 57.3, name: 'SS', country: 'South Sudan' },
            { x: 356, y: 46, z: 53.1, name: 'TD', country: 'Chad' },
            { x: 33, y: 27, z: 61.8, name: 'ZM', country: 'Zambia' },
            { x: 249, y: 37, z: 62.4, name: 'GH', country: 'Ghana' },
            { x: 249, y: 54, z: 63.4, name: 'KE', country: 'Kenya' },
            { x: 357, y: 45, z: 57.3, name: 'CM', country: 'Cameroon' },
        ]
    }]

});



$(document).ready(function () {
    $('#tabular').DataTable({
        ajax: 'tabular.json',
    });
});