var morrisCharts = function() {

    Morris.Line({
      element: 'morris-line-example',
      data: [
        { y: 'Lundi', a: 100 },
        { y: '2007', a: 75 },
        { y: '2008', a: 50},
        { y: '2009', a: 75},
        { y: '2010', a: 50},
        { y: '2011', a: 75},
        { y: 'Dimanche', a: 100}
      ],
      xkey: 'y',
      ykeys: ['a'],
      labels: ['Series A'],
      resize: true,
      lineColors: ['#33414E']
    });


    Morris.Area({
        element: 'morris-area-example',
        data: [
            { y: '2006', a: 100, b: 90 },
            { y: '2007', a: 75,  b: 65 },
            { y: '2008', a: 50,  b: 40 },
            { y: '2009', a: 75,  b: 65 },
            { y: '2010', a: 50,  b: 40 },
            { y: '2011', a: 75,  b: 65 },
            { y: '2012', a: 100, b: 90 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        resize: true,
        lineColors: ['#1caf9a', '#FEA223']
    });


    Morris.Bar({
        element: 'morris-bar-example',
        data: [
            { y: 'Lundi', a: 100},
            { y: 'Mardi', a: 75},
            { y: 'Mercredi', a: 50},
            { y: 'Jeudi', a: 75},
            { y: 'Vendredi', a: 50},
            { y: 'Samedi', a: 75},
            { y: 'Dimanche', a: 100}
        ],
        xkey: 'y',
        ykeys: ['a'],
        labels: ['Étudiants'],
        barColors: ['#B64645']
    });


    Morris.Donut({
        element: 'morris-donut-example',
        data: [
            {label: "Google", value: 12},
            {label: "Coursera", value: 30},
            {label: "EDX", value: 20}
        ],
        colors: ['#95B75D', '#1caf9a', '#FEA223']
    });

}();
