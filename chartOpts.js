function makeChart(e,avg) {
    $('#chart').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Regional Statistics'
        },
        xAxis: {
            categories: [
                'Regions'
            ],
            crosshair: false
        },
        yAxis: {
            min: 0,
            title: {
                text: '% Coverage'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Current',
            data: [e]

        }, {
            name: "Ontario",
            data: [avg]

        }]
    });
}
