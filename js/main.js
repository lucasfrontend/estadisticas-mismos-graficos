var chartColors = {
    blue: "rgb(106, 147, 181)",
    green: 'rgb(97, 123, 114)',
    red: 'rgb(196, 78, 103)',
    yellow: 'rgb(251, 177, 52)',
    purple: 'rgb(151, 109, 127)',
    purple2: 'rgb(103, 97, 116)',
    white: 'rgb(255, 255, 255)'
};


/*----------CANTIDAD DE SUCESOS------------------*/

(function() {

    var json = {
        "cantidades": [
            ["Accidente", 6],
            ["Incidente", 2],
            ["Incidente grave", 1],
            ["Intervenci\u00f3n", 3]
        ]
    };

    var xAxis = [],

        yAxis = [];

    for (var i = 0; i < json.cantidades.length; i++) {
        xAxis.push(json.cantidades[i][0]);
        yAxis.push(json.cantidades[i][1]);
    }
    var lst = ["Accidente", "Incidente grave", "Incidente", "Intervenci\u00f3n"];

    for (var k in lst) {
        var i = lst[k];
        var e = false;

        for (var j = 0; j < xAxis.length; j++) {
            if (xAxis[j] === i) {
                e = true;
                break;
            }
        }
        if (e === false) {
            xAxis.splice(k, 0, i);
            yAxis.splice(k, 0, 0);
        }
    }
    jQuery(function() {
        const ctx = document.getElementById("eventsNumber").getContext("2d");
        const chart = new Chart(ctx, {
            type: "horizontalBar",
            data: {
                labels: lst,
                datasets: [{
                    label: "Cantidad de Sucesos",
                    data: yAxis,
                    backgroundColor: [
                        chartColors.blue,
                        chartColors.blue,
                        chartColors.blue,
                        chartColors.blue
                    ],
                }]
            },
            options: {
                enabled: true,
                mode: 'nearest',
                responsive: true,
                legend: {
                    position: 'bottom',
                    labels: {
                        fontSize: 15,
                        titleFontFamily: "Encode Sans",
                        boxWidth: 10,
                        fontStyle: 'normal',
                        padding: 5,
                        usePointStyle: true,
                    },
                    onHover: function(e) {
                        e.target.style.cursor = 'pointer';
                    }
                },
                hover: {
                    onHover: function(e) {
                        var point = this.getElementAtEvent(e);
                        if (point.length) e.target.style.cursor = 'pointer';
                        else e.target.style.cursor = 'default';
                    }
                },
                tooltips: {
                    intersect: true,
                    position: 'nearest',
                    titleFontFamily: "Encode Sans",
                    titleFontSize: 15,
                    titleAlign: 'center',
                    titleSpacing: 0,
                    titleMarginBottom: 10,
                    bodyFontFamily: "Encode Sans",
                    bodyFontSize: 13,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    bodyAlign: 'left',
                    bodySpacing: 5,
                    footerFontFamily: "Encode Sans",
                    footerFontSize: 0,
                    footerAlign: 'left',
                    caretSize: 25,
                    cornerRadius: 5,
                    xPadding: 20,
                    yPadding: 20,
                    displayColors: true,
                    rtl: true,
                    mode: "index",
                    intersect: true
                },
                scales: {
                    yAxes: [{
                        categories: xAxis,
                        barPercentage: 0.5,
                        ticks: {
                            fontSize: 15,
                            beginAtZero: true
                        },
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        }
                    }]
                }
            }
        });
    });
})();

/*----------------------------Operaciones Mensuales--------------------------------*/

(function() {
    var json = {
        "cantidades": [
            ["Enero", 8, 0, 1, 0, 0, 1],
            ["Febrero", 0, 0, 0, 0, 0, 0],
            ["Marzo", 0, 3, 0, 0, 0, 0],
            ["Abril", 0, 0, 0, 0, 0, 0],
            ["Mayo", 0, 0, 0, 0, 0, 0],
            ["Junio", 0, 0, 0, 0, 0, 0],
            ["Julio", 0, 0, 0, 0, 0, 0],
            ["Agosto", 0, 0, 0, 0, 0, 0],
            ["Septiembre", 0, 0, 0, 0, 0, 0],
            ["Octubre", 0, 0, 0, 0, 0, 0],
            ["Noviembre", 0, 0, 0, 0, 0, 0],
            ["Diciembre", 0, 0, 0, 0, 0, 0]
        ]
    };

    var meses = ["En", "Feb", "Mar", "May", "Jun", "Jul", "Ag", "Sep", "Oct", "Nov", "Dic"];

    var series = [],
        x = [],
        ag = [],
        ta = [],
        cr = [],
        sd = [],
        xq = [],
        ra = [];

    for (var i = 0; i < json.cantidades.length; i++) {
        var c = json.cantidades[i];
        x.push(c[0]);
        ag.push(c[1]);
        ta.push(c[2]);
        cr.push(c[3]);
        sd.push(c[4]);
        xq.push(c[5]);
        ra.push(c[6]);
    }

    series.push({
        type: 'line',
        label: 'Non-Commercial Operations',
        name: 'Non-Commercial Operations',
        data: ag,
        dataLabels: { enabled: true },
        borderColor: chartColors.blue,
        /*        backgroundColor: 'transparent', */
        pointBorderColor: chartColors.blue,
        pointBackgroundColor: chartColors.blue,
        pointBorderWidth: 3,
    });

    series.push({
        type: 'line',
        label: 'Specialised Operations',
        name: 'Specialised Operations',
        data: ta,
        dataLabels: { enabled: true },
        borderColor: chartColors.green,
        backgroundColor: 'transparent',
        pointBorderColor: chartColors.green,
        pointBackgroundColor: chartColors.green,
        pointBorderWidth: 2,
    });

    series.push({
        type: 'line',
        label: 'Commercial Air Transport',
        name: 'Commercial Air Transport',
        data: cr,
        dataLabels: { enabled: true },
        borderColor: chartColors.red,
        pointBorderColor: chartColors.red,
        pointBackgroundColor: chartColors.red,
        backgroundColor: 'transparent',
    });

    series.push({
        type: 'line',
        label: 'Nationally Regulated Operations',
        name: 'Nationally Regulated Operations',
        data: sd,
        dataLabels: { enabled: true },
        borderColor: chartColors.yellow,
        backgroundColor: 'transparent',
        pointBorderColor: chartColors.yellow,
        pointBackgroundColor: chartColors.yellow,
    });

    series.push({
        type: 'line',
        label: 'Illegal',
        name: 'Illegal',
        data: xq,
        dataLabels: { enabled: true },
        borderColor: chartColors.purple,
        backgroundColor: chartColors.purple,
        backgroundColor: 'transparent',
        pointBorderColor: chartColors.purple,
        pointBackgroundColor: chartColors.purple,
    });

    series.push({
        type: 'line',
        label: 'Unknown',
        name: 'Unknown',
        data: ra,
        dataLabels: { enabled: true },
        borderColor: chartColors.purple2,
        backgroundColor: 'transparent',
        pointBorderColor: chartColors.purple2,
        pointBackgroundColor: chartColors.purple2,
    });

    jQuery(function() {
        const operations = document.getElementById("operations").getContext("2d");

        console.log(series.name);
        var lineChart = new Chart(operations, {
            type: 'line',
            data: {
                labels: meses,
                datasets: series
            },
            options: {
                responsive: true,
                legend: {
                    position: 'bottom',
                    labels: {
                        fontSize: 15,
                        titleFontFamily: "Encode Sans",
                        boxWidth: 10,
                        fontStyle: 'normal',
                        padding: 5,
                        usePointStyle: true,
                    },
                    onHover: function(e) {
                        e.target.style.cursor = 'pointer';
                    }
                },
                hover: {
                    onHover: function(e) {
                        var point = this.getElementAtEvent(e);
                        if (point.length) e.target.style.cursor = 'pointer';
                        else e.target.style.cursor = 'default';
                    }
                },
                series: series,
                tooltips: {
                    intersect: true,
                    position: 'nearest',
                    titleFontFamily: "Encode Sans",
                    titleAlign: 'center',
                    titleSpacing: 0,
                    titleMarginBottom: 10,
                    bodyFontFamily: "Encode Sans",
                    bodyFontSize: 15,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    bodyAlign: 'left',
                    bodySpacing: 5,
                    footerFontFamily: "Encode Sans",
                    footerFontSize: 50,
                    footerAlign: 'left',
                    caretSize: 25,
                    cornerRadius: 5,
                    xPadding: 20,
                    yPadding: 20,
                    displayColors: true,
                    rtl: true,
                    mode: "index",
                    intersect: true
                },
                scales: {
                    yAxes: [{
                        barPercentage: 0.5,
                        ticks: {
                            fontSize: 18,
                            beginAtZero: true
                        },
                    }],
                    xAxes: [{
                        categories: x,
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        },
                        ticks: {
                            fontSize: 15,
                        }
                    }]
                }
            }
        });

    });
})();

/*-----------------------RESUMEN--------------------------- */

var summary = document.getElementById("summary");

var pieChart = new Chart(summary, {
    type: 'doughnut',
    data: {
        labels: [
            "Operaciones No Comerciales",
            "Operaciones especializadas",
            "Transporte aéreo comercial",
            "Operaciones Nacionales Reguladas",
            "Ilegales",
            "Desconocido"
        ],
        datasets: [{
            data: [57, 5, 104, 298, 7, 4],
            backgroundColor: [
                chartColors.blue,
                chartColors.green,
                chartColors.red,
                chartColors.yellow,
                chartColors.purple,
                chartColors.purple2

            ],
            /*
            borderColor: [
              "rgb(97, 123, 114)",
              "rgb(151, 109, 127)",
              "rgb(196, 78, 103)",
              "rgb(251, 177, 52)",
              chartColors.blue,
              "rgb(103, 97, 116)"
            ],
            borderWidth: 3
            */
        }]
    },
    options: {
        responsive: true,
        legend: {
            position: 'bottom',
            labels: {
                fontSize: 15,
                titleFontFamily: "Encode Sans",
                boxWidth: 10,
                fontStyle: 'normal',
                padding: 5,
                usePointStyle: true
            },
            legendCallback: function(chart) {
                var text = [];
                text.push('<ul class="0-legend">');
                var ds = chart.data.datasets[0];
                var sum = ds.data.reduce(function add(a, b) { return a + b; }, 0);
                for (var i = 0; i < ds.data.length; i++) {
                    text.push('<li>');
                    var perc = Math.round(100 * ds.data[i] / sum, 0);
                    text.push('<span style="background-color:' + chartColors + '">' + '</span>' + chart.data.labels[i] + ' (' + ds.data[i] + ') (' + perc + '%)');
                    text.push('</li>');
                }
                text.push('</ul>');
                return text.join("");
            },
            onHover: function(e) {
                e.target.style.cursor = 'pointer';
            }
        },
        hover: {
            onHover: function(e) {
                var point = this.getElementAtEvent(e);
                if (point.length) e.target.style.cursor = 'pointer';
                else e.target.style.cursor = 'default';
            }
        },
        tooltips: {
            intersect: true,
            position: 'nearest',
            titleFontFamily: "Encode Sans",
            titleAlign: 'center',
            titleSpacing: 0,
            titleMarginBottom: 10,
            bodyFontFamily: "Encode Sans",
            bodyFontSize: 15,
            backgroundColor: 'rgba(0,0,0,0.5)',
            bodyAlign: 'left',
            bodySpacing: 5,
            footerFontFamily: "Encode Sans",
            footerFontSize: 50,
            footerAlign: 'left',
            caretSize: 25,
            cornerRadius: 5,
            xPadding: 20,
            yPadding: 20,
            displayColors: true,
            rtl: true,
            mode: "index",
            intersect: true
        },
    }
});

/*----------------------------SUCESOS POR FASE DE VUELO--------------------------------------*/
(function() {
    var json = {
        "fases": ["Rodaje salida", "Despegue", "Ascenso", "Crucero", "Maniobras", "Aproximaci\u00f3n", "Descenso", "Aterrizaje", "Rodaje a plataforma", "Estacionado", "Se desconoce"],
        "cantidades": [26, 55, 39, 116, 26, 35, 2, 130, 34, 14, 4]
    };

    jQuery(function() {

        const faseDeVuelo = document.getElementById("faseDeVuelo").getContext("2d");
        const chart3 = new Chart(faseDeVuelo, {
            type: "bar",
            data: {
                labels: json.fases,
                datasets: [{
                    label: "Sucesos",
                    data: json.cantidades,
                    backgroundColor: [
                        chartColors.blue,
                        chartColors.blue,
                        chartColors.blue,
                        chartColors.blue,
                        chartColors.blue,
                        chartColors.blue,
                        chartColors.blue,
                        chartColors.blue,
                        chartColors.blue,
                        chartColors.blue,
                        chartColors.blue
                    ],
                }]
            },
            options: {

                responsive: true,
                legend: {
                    position: 'bottom',
                    align: 'end',
                    fontSize: 8,
                    labels: {
                        fontSize: 15,
                        titleFontFamily: "Encode Sans",
                        boxWidth: 10,
                        fontStyle: 'normal',
                        padding: 0,
                        usePointStyle: true
                    },
                    onHover: function(e) {
                        e.target.style.cursor = 'pointer';
                    }

                },
                hover: {
                    onHover: function(e) {
                        var point = this.getElementAtEvent(e);
                        if (point.length) e.target.style.cursor = 'pointer';
                        else e.target.style.cursor = 'default';
                    }
                },
                tooltips: {
                    intersect: true,
                    position: 'nearest',
                    titleFontFamily: "Encode Sans",
                    titleAlign: 'center',
                    titleSpacing: 0,
                    titleMarginBottom: 10,
                    bodyFontFamily: "Encode Sans",
                    bodyFontSize: 15,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    bodyAlign: 'left',
                    bodySpacing: 5,
                    footerFontFamily: "Encode Sans",
                    footerFontSize: 50,
                    footerAlign: 'left',
                    caretSize: 25,
                    cornerRadius: 5,
                    xPadding: 20,
                    yPadding: 20,
                    displayColors: true,
                    rtl: true,
                    mode: "index",
                    intersect: true
                },
                scales: {
                    yAxes: [{
                        categories: json.fases,
                        barPercentage: 0.5,
                        beginAtZero: true
                    }],
                    xAxes: [{
                        barPercentage: 0.6,
                        ticks: {
                            fontSize: 15,
                        },
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        }
                    }]
                }
            }

        });

    });
})();




/*-----------------Sucesos por categoría armonizada --------------------------*/

(function() {
    var json = {
        "categorias": [
            "CFIT (Controlled fligth into or toward terrain)", "LOC-I (Loss of control - inflight)", "RS (Runway Safety)", "GS (Ground Safety)", "OD (Operational Damage)", "MED ", "OTHER", "UNK"
        ],
        "cantidades": {
            "Commercial Air Transport": [1, 0, 13, 11, 52, 5, 31, 1],
            "Illegal": [1, 0, 1, 1, 0, 0, 1, 1],
            "Nationally Regulated Operations (State Operations)": [0, 1, 2, 1, 0, 0, 2, 0],
            "Non-Commercial Operations": [17, 30, 69, 27, 133, 2, 71, 0],
            "Specialised Operations": [3, 5, 9, 2, 28, 0, 19, 1],
            "Unknown": [1, 3, 1, 0, 4, 0, 3, 0]
        },
        "anio": 2020
    };

    var series = [];

    for (var i in json.cantidades) {
        console.log(json.cantidades[i])

        series.push({
            label: json.categorias[i],
            data: json.cantidades[i],
            backgroundColor: [chartColors.blue, chartColors.green, chartColors.red, chartColors.yellow, chartColors.purple]
        });
    }

    jQuery(function() {
        var harmonizedCategory = document.getElementById("harmonizedCategory").getContext("2d");

        var line1 = {
            label: 'Operaciones No Comerciales',
            data: [0, 0, 15, 15, 47, 10, 30, 0],

            /*
            borderColor: 'rgb(106, 127, 181)',
            borderWidth: 2,
            hoverBorderWidth: 0
            */
        };

        var line2 = {
            label: 'Operaciones Nacionales Reguladas',
            data: [0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: chartColors.green,
            /*
            borderColor: 'rgba(99, 112, 0)',
            borderWidth: 2,
            hoverBorderWidth: 0
            */
        };

        var line3 = {
            label: 'Operaciones Especiales',
            data: [0, 0, 5, 0, 0, 0, 7, 0],
            backgroundColor: chartColors.red,
            /*
            borderColor: 'rgb(97, 103, 114)',
            borderWidth: 2,
            hoverBorderWidth: 0
            */
        };

        var line4 = {
            label: 'Ilegales',
            data: [20, 35, 70, 35, 125, 0, 80, 0],
            backgroundColor: chartColors.yellow,
            /*
            borderColor: 'rgb(251, 157, 52)',
            borderWidth: 2,
            hoverBorderWidth: 0
            */
        };

        var line5 = {
            label: 'No comerciales',
            data: [0, 0, 0, 0, 25, 0, 25, 0],
            backgroundColor: chartColors.purple,
            /*
            borderColor: 'rgb(103, 77, 116)',
            borderWidth: 2,
            hoverBorderWidth: 0
            */
        };

        var line6 = {

            data: [0, 3, 0, 0, 3, 0, 0, 0],
            backgroundColor: chartColors.purple2,
        };

        var barChart = new Chart(harmonizedCategory, {
            type: 'horizontalBar',
            data: {
                labels: json.categorias,
                datasets: series,
            },
            options: {
                responsive: true,
                legend: {
                    position: 'bottom',
                    labels: {
                        fontSize: 15,
                        titleFontFamily: "Encode Sans",
                        boxWidth: 10,
                        fontStyle: 'normal',
                        padding: 5,
                        usePointStyle: true
                    },
                    onHover: function(e) {
                        e.target.style.cursor = 'pointer';
                    }
                },
                hover: {
                    onHover: function(e) {
                        var point = this.getElementAtEvent(e);
                        if (point.length) e.target.style.cursor = 'pointer';
                        else e.target.style.cursor = 'default';
                    }
                },
                tooltips: {
                    intersect: true,
                    position: 'nearest',
                    titleFontFamily: "Encode Sans",
                    titleAlign: 'center',
                    titleSpacing: 0,
                    titleMarginBottom: 10,
                    bodyFontFamily: "Encode Sans",
                    bodyFontSize: 15,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    bodyAlign: 'left',
                    bodySpacing: 5,
                    footerFontFamily: "Encode Sans",
                    footerFontSize: 50,
                    footerAlign: 'left',
                    caretSize: 25,
                    cornerRadius: 5,
                    xPadding: 20,
                    yPadding: 20,
                    displayColors: true,
                    rtl: true,
                    mode: "index",
                    intersect: true
                },
                scales: {
                    responsive: true,
                    xAxes: [{
                        categories: json.categorias,
                        barPercentage: 0.8,
                        ticks: {
                            fontSize: 15
                        },
                        categoryPercentage: 1,
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            fontSize: 15,
                        }
                    }, ]
                }
            }
        });
    });
})();




/*-----------------ACCIDENTES POR CATEGORIA --------------------------*/


(function() {
    var json = {
        "categorias": ["SCF-PP (Powerplant failure or malfunction)", "LOC-I (Loss of control - inflight)", "ARC (Abnormal runway contact)", "SCF-NP (System\/component failure or malfunction (No Powerplant)", "RE (Runway Excursion)", "LALT (Low altitude operations)", "LOC-G (Loss of control -ground)", "F-POST (Fire\/smoke Post-Impact)", "CTOL (Collision with obstacle during take-off and landing)", "FUEL (Fuel related)", "OTHR (Other)", "CFIT (Controlled fligth into or toward terrain)", "ADRM (Aerodrome)", "USOS (Undershoot\/overshoot)", "UIMC (Unintended Flight in IMC)", "AMAN (Abrupt Maneuvre)", "GCOL (Ground Collision)", "F-NI (Fire\/smoke non-impact)", "GTOW (Glider towing related events)", "RI (Runway Incursion)", "MAC (Airprox\/ACAS alert\/loss of separation\/ midair collision)", "NAV (Navigation Error)", "LOLI (Loss of lifting conditions en-route)", "RAMP (Ground Handling)", "WILD (Collision Wildlife)", "WSTRW (Windshear or thunderstorm)"],
        "datos": [{
            "name": "Accidentes",
            "data": [48, 38, 38, 25, 25, 19, 17, 11, 9, 9, 7, 6, 4, 4, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1]
        }, { "name": "Accidentes fatales", "data": [0, 17, 1, 2, 1, 6, 0, 8, 0, 0, 1, 4, 0, 0, 3, 2, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0] }],
        "anio": 2020
    };


    var acc = [];
    var accFat = [];

    for (var i in json.datos) {
        if (json.datos[i].name === "Accidentes") {
            acc.push(json.datos[i].data);
        } else {
            accFat.push(json.datos[i].data);
        }
    }

    jQuery(function() {
        var accidentCategory = document.getElementById("accidentCategory").getContext("2d");
        var newAccident = parseInt(acc);


        var newAr = acc.slice(0, 10);


        var barChart = new Chart(accidentCategory, {
            type: 'horizontalBar',
            data: {
                data: [1, 2, 3],
                labels: json.categorias,
                datasets: [{
                        label: 'Accidentes',
                        data: acc,
                        backgroundColor: "rgb(106, 147, 181)",
                        borderColor: "rgb(1, 94, 184)",
                        borderWidth: 2,
                        hoverBorderWidth: 0
                    },
                    {
                        label: 'Accidentes Fatales',
                        data: accFat,
                        backgroundColor: "rgb(45, 44, 43)",
                        borderColor: "rgb(45, 24, 43)",
                        borderWidth: 2,
                        hoverBorderWidth: 0
                    }
                ]
            },
            options: {
                responsive: true,
                legend: {
                    position: 'bottom',
                    labels: {
                        fontSize: 15,
                        titleFontFamily: "Encode Sans",
                        boxWidth: 10,
                        fontStyle: 'normal',
                        padding: 20,
                        usePointStyle: true
                    },
                    onHover: function(e) {
                        e.target.style.cursor = 'pointer';
                    }
                },
                hover: {
                    onHover: function(e) {
                        var point = this.getElementAtEvent(e);
                        if (point.length) e.target.style.cursor = 'pointer';
                        else e.target.style.cursor = 'default';
                    }
                },
                tooltips: {
                    intersect: true,
                    position: 'nearest',
                    titleFontFamily: "Encode Sans",
                    titleAlign: 'center',
                    titleSpacing: 0,
                    titleMarginBottom: 10,
                    bodyFontFamily: "Encode Sans",
                    bodyFontSize: 15,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    bodyAlign: 'left',
                    bodySpacing: 5,
                    footerFontFamily: "Encode Sans",
                    footerFontSize: 50,
                    footerAlign: 'left',
                    caretSize: 25,
                    cornerRadius: 5,
                    xPadding: 20,
                    yPadding: 20,
                    displayColors: true,
                    rtl: true,
                    mode: "index",
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        categories: json.datos,
                        barPercentage: 0.8,
                        categoryPercentage: 1,
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)",
                        },
                        ticks: {
                            fontSize: 15
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            fontSize: 15,
                        }
                    }, ]
                }
            }
        });

    });
})();