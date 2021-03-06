var data = [
{
    'name': 'Yellow',
    'tot_cost': '$8.89 billion',
    'marg_cost': '$152 million',
    'x2016': 'Refuel North Omaha Station units 1-3 with natural gas and retrofit units 4-5 with basic emissions controls. Retrofit Nebraska City Station unit 1 with basic emissions controls.',
    'x2018': null,
    'x2023': 'Refuel North Omaha Station units 4-5 with natural gas.',
    'nox': '20%',
    'sox': '36%',
    'merc': '66%',
    'co2': '10%',
    'bill': '$0-$9',
    'proj': {
            'f2018': {
                'coal': 3316,
                'nuke': 3647,
                'gas': 442,
                'ren': 3647
                },
            'f2023': {
                'coal': 2028,
                'nuke': 4294,
                'gas': 1909,
                'ren': 3698
                },
            'f2028': {
                'coal': 2077,
                'nuke': 3633,
                'gas': 3633,
                'ren': 3633
                },
            'f2033': {
                'coal': 2721,
                'nuke': 3724,
                'gas': 5012,
                'ren': 2865
                }        
       }
},

{
    'name': 'Orange',
    'tot_cost': '$8.89 billion',
    'marg_cost': '$159 million',
    'x2016': 'Retrofit North Omaha Station units 1-5 and Nebraska City unit 1 with basic emissions controls.',
    'x2018': null,
    'x2023': null,
    'nox': '6%',
    'sox': '27%',
    'merc': '64%',
    'co2': '4%',
    'bill': '$0-$9',
    'proj': {
            'f2018': {
                'coal': 3316,
                'nuke': 3647,
                'gas': 442,
                'ren': 3647
                },
            'f2023': {
                'coal': 2267,
                'nuke': 4294,
                'gas': 1670,
                'ren': 3698
                },
            'f2028': {
                'coal': 2595,
                'nuke': 3633,
                'gas': 3115,
                'ren': 3633
                },
            'f2033': {
                'coal': 3294,
                'nuke': 3724,
                'gas': 4440,
                'ren': 2864
                }        
       }
},

{
    'name': 'Red',
    'tot_cost': '$9.06 billion',
    'marg_cost': '$329 million',
    'x2016': 'Retire North Omaha Station units 1-3, replace with a new single-cycle natural gas peaking plant with 1,128 megawatts of capacity. Retrofit North Omaha units 4-5 and Nebraska City unit 1 with basic emissions controls.',
    'x2018': null,
    'x2023': null,
    'nox': '12%',
    'sox': '30%',
    'merc': '65%',
    'co2': '6%',
    'bill': '$0-$9',
    'proj': {
            'f2018': {
                'coal': 3316,
                'nuke': 3647,
                'gas': 442,
                'ren': 3647
                },
            'f2023': {
                'coal': 2267,
                'nuke': 4294,
                'gas': 1670,
                'ren': 3698
                },
            'f2028': {
                'coal': 2336,
                'nuke': 2633,
                'gas': 3374,
                'ren': 3633
                },
            'f2033': {
                'coal': 2864,
                'nuke': 3725,
                'gas': 4869,
                'ren': 2864
                }        
       }
},

{
    'name': 'Pink',
    'tot_cost': '$9.07 billion',
    'marg_cost': '$334 million',
    'x2016': 'Retire North Omaha Station units 1-3, replace with a new single-cycle natural gas peaking plant with 940 megawatts of capacity. Retrofit North Omaha units 4-5 and Nebraska City unit 1 with basic emissions controls.',
    'x2018': 'Reduce load by 100 megawatts through energy efficiency programs.',
    'x2023': null,
    'nox': '12%',
    'sox': '30%',
    'merc': '65%',
    'co2': '6%',
    'bill': '$0-$9',
    'proj': {
            'f2018': {
                'coal': 3316,
                'nuke': 3647,
                'gas': 331,
                'ren': 3758
                },
            'f2023': {
                'coal': 2267,
                'nuke': 4294,
                'gas': 1670,
                'ren': 3698
                },
            'f2028': {
                'coal': 2336,
                'nuke': 3763,
                'gas': 3244,
                'ren': 3633
                },
            'f2033': {
                'coal': 3008,
                'nuke': 3724,
                'gas': 4726,
                'ren': 2864
                }        
       }
},

{
    'name': 'Blue',
    'tot_cost': '$9.29 billion',
    'marg_cost': '$503 million',
    'x2016': 'Retire North Omaha Station units 1-3, replace with a new single-cycle natural gas peaking plant with 940 megawatts of capacity. Retrofit North Omaha units 4-5 and Nebraska City unit 1 with basic emissions controls.',
    'x2018': 'Increase by 100 megawatts the power generated by utility-scale solar installations.',
    'x2023': null,
    'nox': '15%',
    'sox': '32%',
    'merc': '66%',
    'co2': '9%',
    'bill': '$10-$19',
    'proj': {
            'f2018': {
                'coal': 2984,
                'nuke': 3647,
                'gas': 332,
                'ren': 4089
                },
            'f2023': {
                'coal': 2028,
                'nuke': 4294,
                'gas': 1431,
                'ren': 4023
                },
            'f2028': {
                'coal': 2336,
                'nuke': 3633,
                'gas': 2984,
                'ren': 3294
                },
            'f2033': {
                'coal': 2864,
                'nuke': 3724,
                'gas': 4440,
                'ren': 3294
                }        
       }
}
]

for (i=0; i<data.length; i++) {
    var eighteen, twentythree = '';
    if (data[i].x2018) {eighteen = '<p><strong>2018:</strong> ' + data[i].x2018 + '</p>'} else {eighteen = ''};
    if (data[i].x2023) {twentythree = '<p><strong>2023:</strong> ' + data[i].x2023 + '</p>'} else {twentythree = ''}

    $("#entries").append('<div id="' + data[i].name.toLowerCase() + '" class="offset"><h1>Option ' + data[i].name + ' <span style="float: right; font-size: 0.6em;"><a class="ico" href="https://twitter.com/intent/tweet?text=Checking%20out%20%22Option%20' + data[i].name + '%22%20in%20%40OPPDCares%20future%20generation%20options (via%20%40OWHNews)%3A%20http://dataomaha.com/media/oppd-gen/index.html%23' + data[i].name.toLowerCase() + '" target="_blank"><i class="fa fa-twitter"></i></a>&nbsp;&nbsp;&nbsp;<a href="http://www.facebook.com/sharer.php?u=http%3A%2F%2Fdataomaha.com/media/oppd-gen/index.html#' + data[i].name.toLowerCase() + '" class="ico"><i class="fa fa-facebook-square"></i></a></span><hr/></h1><div class="row"><div class="col-md-6"><h1><small>THE COST</small></h1><p>OPPD estimates the 20-year <a href="https://www.princeton.edu/~achaney/tmve/wiki100k/docs/Net_present_value.html" target="_blank">net present value</a> of this option at <strong>' + data[i].tot_cost + '</strong>, or ' + data[i].marg_cost + ' more than the "business as usual" scenario. Although a more detailed rate study is necessary, OPPD estimates this option would add between ' + data[i].bill + ' to an average ratepayer\'s monthly bill.</p></div><div class="col-md-6"><h1><small>THE PLAN</small></h1><p><strong>2016:</strong> ' + data[i].x2016 + '</li>' + eighteen + twentythree + '</p></div></div><h1><small>THE ENERGY MIX&nbsp;&nbsp;&nbsp; <small><span style="color:#4c0f4f;">Coal</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span style="color:#c2a5cf;">Nuclear</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span style="color:#008837;">Renewables</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span style="color:#a6dba0;">Natural gas/oil</span></small></small></h1><div class="row" style="padding-top:5px;"><div class="col-md-1 centered" style="margin-bottom:30px;"><span class="pie" data-diameter="60">64,25,1,10</span><br/><small><strong>2014</strong></small></div><div class="col-md-1 centered" style="margin-bottom:30px;"><span class="pie" data-diameter="60">' + data[i].proj.f2018.coal + ',' + data[i].proj.f2018.nuke + ',' + data[i].proj.f2018.gas + ',' + data[i].proj.f2018.ren + '</span><br/><small><strong>2018</strong></small></div><div class="col-md-1 centered" style="margin-bottom:30px;"><span class="pie" data-diameter="60">' + data[i].proj.f2023.coal + ',' + data[i].proj.f2023.nuke + ',' + data[i].proj.f2023.gas + ',' + data[i].proj.f2023.ren + '</span><br/><small><strong>2023</strong></small></div><div class="col-md-1 centered" style="margin-bottom:30px;"><span class="pie" data-diameter="60">' + data[i].proj.f2028.coal + ',' + data[i].proj.f2028.nuke + ',' + data[i].proj.f2028.gas + ',' + data[i].proj.f2028.ren + '</span><br/><small><strong>2028</strong></small></div><div class="col-md-1 centered" style="margin-bottom:30px;"><span class="pie" data-diameter="60">' + data[i].proj.f2033.coal + ',' + data[i].proj.f2033.nuke + ',' + data[i].proj.f2033.gas + ',' + data[i].proj.f2033.ren + '</span><br/><small><strong>2033</strong></small></div></div><h1 style="margin-top:0px;"><small>POLLUTION REDUCTION</small></h1><p>OPPD estimates this option will reduce:</p><ul><li><a href="http://www.epa.gov/mercury/" target="_blank">Mercury</a> emissions by <strong>' + data[i].merc + '</strong></li><li><a href="http://www.epa.gov/airquality/sulfurdioxide/" target="_blank">Sulfur oxide</a> emissions by <strong>' + data[i].sox + '</strong></li><li><a href="http://www.epa.gov/air/nitrogenoxides/" target="_blank">Nitrogen oxide</a> emissions by <strong>' + data[i].nox + '</strong></li><li><a href="http://www.epa.gov/climatechange/ghgemissions/gases/co2.html" target="_blank">CO2</a> emissions by <strong>' + data[i].co2 + '</strong></li></ul></div>')
};

$("span.pie").peity("pie", {
fill: ['#4c0f4f', '#c2a5cf', '#a6dba0', '#008837']
})

google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
      
  var dataTable = new google.visualization.DataTable();
  dataTable.addColumn('string', 'Year');
  dataTable.addColumn('number', 'Coal');
  dataTable.addColumn('number', 'Natural gas');
  dataTable.addRows([
    ['2014', 1.88, 3.67],
['2015', 1.93, 3.64],
['2016', 1.92, 4.01],
['2017', 1.95, 4.58],
['2018', 2.03, 5.16],
['2019', 2.11, 5.62],
['2020', 2.13, 5.97],
['2021', 2.20, 6.39],
['2022', 2.28, 6.57],
['2023', 2.35, 6.58],
['2024', 2.43, 6.63],
['2025', 2.51, 6.65],
['2026', 2.57, 6.85],
['2027', 2.64, 7.03],
['2028', 2.70, 7.18],
['2029', 2.77, 7.31],
['2030', 2.84, 7.49],
['2031', 2.90, 7.72],
['2032', 2.97, 7.99],
['2033', 3.05, 8.30]
        ]);
		
var dataTable2 = new google.visualization.DataTable();
  dataTable2.addColumn('string', 'Year');
  dataTable2.addColumn('number', 'Peak (MW)');
  dataTable2.addColumn('number', 'Energy (GWh)');
  dataTable2.addRows([
    ['2014', 2461, 11369],
    ['2015', 2505, 11580],
    ['2016', 2541, 11793],
    ['2017', 2590, 11989],
    ['2018', 2633, 12189],
    ['2019', 2679, 12412],
    ['2020', 2708, 12595],
    ['2021', 2762, 12812],
    ['2022', 2807, 13027],
    ['2023', 2851, 13236],
    ['2024', 2891, 13476],
    ['2025', 2949, 13713],
    ['2026', 3000, 13954],
    ['2027', 3050, 14200],
    ['2028', 3095, 14466],
    ['2029', 3165, 14756],
    ['2030', 3225, 15047],
    ['2031', 3286, 15343],
    ['2032', 3348, 15646],
    ['2033', 3412, 15954]
        ]);

var dataTable3 = new google.visualization.DataTable();
  dataTable3.addColumn('string', 'Year');
  dataTable3.addColumn('number', 'Per ton of CO2');
  dataTable3.addRows([
    ['2014', null],
    ['2015', null],
    ['2016', null],
    ['2017', null],
    ['2018', null],
    ['2019', null],
    ['2020', 14.95],
    ['2021', 16.22],
    ['2022', 17.61],
    ['2023', 19.11],
    ['2024', 20.75],
    ['2025', 22.52],
    ['2026', 24.44],
    ['2027', 26.53],
    ['2028', 28.80],
    ['2029', 31.26],
    ['2030', 33.93],
    ['2031', 36.83],
    ['2032', 39.98],
    ['2033', 43.39]
        ]);
        
        var options = {
		  colors:['#4c0f4f', '#008837'],
		  chartArea: {left:80, top:30, width:'100%'},
		  legend: {position: 'none'},
		  vAxis: {title: '$/MMBtu',  format:'$#', baseline: 0},
		  hAxis: {showTextEvery: 4}
        };
        
        var options2 = {
		  colors:['#4c0f4f', '#008837'],
		  chartArea: {left:80, top:30, width:'100%'},
		  legend: {position: 'none'},
		  vAxis: {baseline: 0},
		  hAxis: {showTextEvery: 4}
        };
        
        var options3 = {
		  colors:['#4c0f4f', '#008837'],
		  chartArea: {left:80, top:30, width:'100%'},
		  legend: {position: 'none'},
		  vAxis: {title: '$/ton',  format:'$#', baseline: 0},
		  hAxis: {showTextEvery: 4}
        };

        var chart = new google.visualization.LineChart(document.getElementById('fuel_chart'));
        var chart2 = new google.visualization.LineChart(document.getElementById('load_chart'));
        var chart3 = new google.visualization.LineChart(document.getElementById('co2_chart'));
        
        var formatter = new google.visualization.NumberFormat({prefix: '$'})
        var commas = new google.visualization.NumberFormat({pattern: '#,###'})

        formatter.format(dataTable, 1);
        formatter.format(dataTable, 2);
        commas.format(dataTable2, 1);
        commas.format(dataTable2, 2);
        formatter.format(dataTable3, 1);
        
        chart.draw(dataTable, options);
        chart2.draw(dataTable2, options2);
        chart3.draw(dataTable3, options3);
        
        function resizeHandler () {
        chart.draw(dataTable, options);
        chart2.draw(dataTable2, options2);
        chart3.draw(dataTable3, options3);
        }
    if (window.addEventListener) {
        window.addEventListener('resize', resizeHandler, false);
    }
    else if (window.attachEvent) {
        window.attachEvent('onresize', resizeHandler);
    }
        
      }

$('.ico').hover(
        function() {
    $( this ).fadeTo('fast', 1.0);
  }, function() {
    $( this ).fadeTo('fast', 0.4);
  }
);