data_address = "http://localhost:63342/InDash/data/"

var width = document.body.scrollWidth;
var iconSize = (width - 1259) * 0.00002 + 0.086;


// ------------------------------ visualize of the data from database -----------------------------------------------
// function getValuesURL(cate) {
//     var url = '/data/value/cate/' + cate + '/city/3200'
//     return url
// }


// ------------------------------ city legend -----------------------------------------------
function addCities(originalCities) {
    var createDiv1 = document.createElement("div");
    var label1 = document.createElement("label");
    var button1 = document.createElement("button");
    var input1 = document.createElement("input");
    createDiv1.id = "citySet13";
    createDiv1.className = "form-check";
    label1.id = "city13";
    label1.className = "form-check-label";
    label1.innerText = "All"
    button1.className = "button3D"
    button1.value = "1";
    button1.id = "city13bt"
    button1.type = "city"
    input1.className = "form-check-input";
    input1.name = 'city';
    input1.value = "全选"
    input1.type = "checkbox";
    input1.id = "all"
    createDiv1.style = "position: absolute; left:0px;top:30px";
    label1.style = 'color:#ffffff;font-weight: bold'
    button1.style = 'position: relative;top:-20px;left: 25px;font-size:11px;height:19px'
    input1.style = 'position: relative;left:5px;top:2px;color:#696969;'
    document.getElementById('cityGroup').appendChild(createDiv1);
    document.getElementById(createDiv1.id).appendChild(input1);
    document.getElementById(createDiv1.id).appendChild(button1);
    // document.getElementById(createDiv1.id).appendChild(button1);
    // document.getElementById(button1.id).appendChild(input1);
    document.getElementById(button1.id).appendChild(label1);
    // document.getElementById(label1.id).appendChild(button1)
    for (var i = 1; i < originalCities.length + 1; i++) {
        // var createDiv1 = document.createElement("div");
        var createDiv = document.createElement("div");
        // var lable1 = document.createElement("div");
        var label = document.createElement("label");
        var button = document.createElement("button");
        // var lable2 = document.createElement("p");
        var input = document.createElement("input");
        createDiv.id = "citySet" + (i - 1).toString();
        createDiv.className = "form-check";
        label.id = "city" + (i - 1).toString();
        // lable1.className = "rectangle"
        label.className = "form-check-label";
        label.innerText = originalCities[i - 1];
        //button.innerText = originalCities[i - 1];
        button.className = "button3D"
        button.id = "city" + (i - 1).toString() + "bt";
        button.name = "citybt";
        button.style = 'position: relative;font-size:11px;'
        button.value = "1";
        // lable2.id = "city" + i.toString();
        // lable2.className = "cityName"
        input.className = "form-check-input";
        input.value = originalCities[i - 1];
        input.name = 'city';
        input.type = "checkbox";
        createDiv.style = "position: absolute; left:" + ((i % 5) * 105).toString() + "px;top:" + (Math.floor(i / 5) * 23 + 30).toString() + "px";
        label.style = 'color:#ffffff;font-weight: bold'
        input.style = 'position: absolute;top:-1px;left:5px;color:#696969;'
        button.style = 'position: absolute;top:1px;left: 25px;font-size:11px;height:19px'
        // lable2.innerText = originalCities[i];
        document.getElementById('cityGroup').appendChild(createDiv);
        document.getElementById(createDiv.id).appendChild(input);
        document.getElementById(createDiv.id).appendChild(button);
        document.getElementById(button.id).appendChild(label)
        // document.getElementById('cityGroup').appendChild(createDiv);
        // document.getElementById(createDiv.id).appendChild(button);
        // document.getElementById(button.id).appendChild(input);
        // document.getElementById(button.id).appendChild(label)
    }


}

// ------------------------------ Jiangsu Values -----------------------------------------------
function updateValues(cate) {
    document.getElementById('valueGroup').innerHTML = "";
    d3.csv("data/" + cate + "-jiangsu.csv", function (error, csvdata) {
        for (i = 0; i < 6; i++) {
            var createDiv1 = document.createElement("div");
            //var createDiv2 = document.createElement("div");
            var lable1 = document.createElement("label");
            var lable2 = document.createElement("p");
            var lable3 = document.createElement("p");
            var button = document.createElement("button")
            createDiv1.id = "valueSet1" + i.toString();
            //createDiv2.id = "valueSet2" + i.toString();
            lable1.id = "name" + i.toString();
            lable2.id = "value" + i.toString();
            lable3.id = "unit" + i.toString();
            button.id = "name" + i.toString() + "bt";
            button.className = "button3D namebt";
            createDiv1.style = "border:1.5px solid  #C0C0C0;width:80%; height: 40px;position: absolute; left: 10px;top:" + (Math.floor(i * 54 + 45)).toString() + "px";
            //createDiv2.style = " border:1.5px solid  #C0C0C0;width:90%;height:40px;margin-top:10px;"
            //lable1.style = " font-size:12px;background: white;position: relative; top:-13px;left: 5px;color:#454545;font-weight:bold;"
            // lable1.style = " font-size:12px;background: white;position: relative; top:-13px;right: 5px;color:#454545;font-weight:bold;"
            button.style = " font-size:12px;position: relative; top:-12px;left:-5px;font-weight:bold;height:20px"
            lable2.style = "font-size:18px;margin-top:-8px;margin-left:35%;font-weight:bold;color:#696969;"
            lable3.style = "font-size:13px;margin-top:-30px;margin-right:3px;color:#696969;text-align: right;"
            lable1.innerHTML = csvdata[i].name;
            //button.innerText = csvdata[i].name;
            // lable2.innerHTML = csvdata[i].value + "&nbsp;" + csvdata[i].unit
            lable2.innerHTML = csvdata[i].value
            lable3.innerHTML = csvdata[i].unit
            document.getElementById('valueGroup').appendChild(createDiv1);
            //document.getElementById(createDiv1.id).appendChild(createDiv2);
            //document.getElementById(createDiv2.id).appendChild(lable1);
            document.getElementById(createDiv1.id).appendChild(button);
            document.getElementById(button.id).appendChild(lable1)
            document.getElementById(createDiv1.id).appendChild(lable2);
            document.getElementById(createDiv1.id).appendChild(lable3);

        }
    })
}

// function updateValues(cate) {
//     document.getElementById('valueGroup').innerHTML = "";
//     var temp_url = getValuesURL(cate);
//     fetch(temp_url)
//         .then(r => r.json())
//         .then(r => {
//             for (j = r.length - 1; j >= 0; j--) {
//                 if (r[j].name == "社会消费品零售总额" || r[j].value == null) {
//                     r.splice(j, 1);
//                 }
//             }
//             for (i = 0; i < 6; i++) {
//                 var createDiv1 = document.createElement("div");
//                 var createDiv2 = document.createElement("div");
//                 var lable1 = document.createElement("label");
//                 var lable2 = document.createElement("p");
//                 // var lable3 = document.createElement("p");
//                 createDiv1.id = "valueSet1" + i.toString();
//                 createDiv2.id = "valueSet2" + i.toString();
//                 lable1.id = "name" + i.toString();
//                 lable2.id = "value" + i.toString();
//                 // lable3.id = "unit" + i.toString();
//                 createDiv1.style = "width:200px; height: 50px;position: absolute; left: 10px;top:" + (Math.floor(i * 54 + 30)).toString() + "px";
//                 createDiv2.style = " border:1.5px solid  #C0C0C0;width:170px;height:40px;margin-top:10px;"
//                 lable1.style = " font-size:12px;background: white;position: relative; top:-13px;left: 5px;color:#ff7800;font-weight:normal;"
//                 lable2.style = "font-size:16px;margin-top:-12px;margin-right:5px;font-weight:bold;color:#696969;text-align: right;"
//                 // lable3.style = "font-size:12px;margin-top:-10px;margin-right:5px;color:#696969;text-align: right;"
//                 lable1.innerHTML = r[i].name + "<br>"
//                 lable2.innerHTML = r[i].value + "&nbsp;" + r[i].unit
//                 // lable3.innerHTML = r[i].unit
//                 document.getElementById('valueGroup').appendChild(createDiv1);
//                 document.getElementById(createDiv1.id).appendChild(createDiv2);
//                 document.getElementById(createDiv2.id).appendChild(lable1);
//                 document.getElementById(createDiv2.id).appendChild(lable2);
//                 // document.getElementById(createDiv2.id).appendChild(lable3);
//
//             }
//         })
// }

// ------------------------------ Parallel Coordinates -----------------------------------------------
function updatePC(cate) {
    document.getElementById('pc').innerHTML = "";
    d3.csv("data/" + cate + ".csv", function (error, csvdata) {
        if (error) {
            console.log(error);
        }
        var pc = d3.parcoords()("#pc")
            .data(csvdata)
            .hideAxis(["id"])
            .color(function (d) {
                return originalColorList[d.id % 14 - 1]
            })
            .render()
            .createAxes();
    })
}

function updateHighlightPC(highlightCities, cate) {
    var highlightData = new Array();
    //var colorList = getColors(highlightCities);
    document.getElementById('pc').innerHTML = "";
    d3.csv("data/" + cate + ".csv", function (error, csvdata) {
        if (error) {
            console.log(error);
        }
        for (var i = 0; i < csvdata.length; i++) {
            for (var j = 0; j < highlightCities.length; j++)
                if (csvdata[i].City == highlightCities[j]) {
                    highlightData.push(csvdata[i])
                }
        }
        var pc = d3.parcoords()("#pc")
            .data(csvdata)
            .hideAxis(["id"])
            .color(function (d) {
                return originalColorList[d.id % 14 - 1]
            })
            .render()
            .createAxes()
            .highlight(highlightData);
        // .brushMode("1D-axes")  // enable brushing
        // .interactive(); // command line mode
        //
    })
}

// ------------------------------Correlation Image-----------------------------------------------
function addCorrImage(cate) {
    image = document.getElementById('img1')
    image.src = 'data/' + cate + ".png"
    if (cate == "enco")
        image.style = "width:70%;margin-left: 35px"
    else if (cate == "soci")
        image.style = "width:73%;margin-left: 18px"
    else if (cate == "envi")
        image.style = "width:73%;margin-left: 18px"
    else if (cate == "tech")
        image.style = "width:73%;margin-left: 18px"
}

// ------------------------------Map Legend Image-----------------------------------------------
function addMapLegend(cate) {
    image = document.getElementById('img2')
    image.src = 'data/' + cate + "-legend.png"
}

// ------------------------------Update Subtitles-----------------------------------------------
function updateSubTitles(cate) {
    var subTitle1 = document.getElementById("cate1")
    var subTitle2 = document.getElementById("cate2")
    var subTitle3 = document.getElementById("cate3")
    if (cate == "enco") {
        subTitle1.innerText = "Economy";
        subTitle2.innerText = "Economy";
        subTitle3.innerText = "Economy";
    } else if (cate == "soci") {
        subTitle1.innerText = "Inhabitance";
        subTitle2.innerText = "Inhabitance";
        subTitle3.innerText = "Inhabitance";
    } else if (cate == "envi") {
        subTitle1.innerText = "Infrastructure";
        subTitle2.innerText = "Infrastructure";
        subTitle3.innerText = "Infrastructure";

    } else if (cate == "tech") {
        subTitle1.innerText = "R&D";
        subTitle2.innerText = "R&D";
        subTitle3.innerText = "R&D";

    }
}

// ------------------------------ Map-----------------------------------------------
var map;

function addMap(cate) {
    document.getElementById('map').innerHTML = "";
    mapboxgl.accessToken = 'pk.eyJ1IjoiaHVpLXpoYW5nIiwiYSI6ImNrZ2I0OHJyMzAwcjcycXBtNDVmbnd4OHUifQ.N3NAGcSWpwvrGCzc9HBxDg';
    if (cate == "enco")
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/hui-zhang/ckgb5mibc0ssv19pmo32dya7d', // stylesheet location
            center: [119.2, 33], // starting position [lng, lat]
            zoom: 5.9 // starting zoom
        });
    else if (cate == "soci")
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/hui-zhang/ckgrfhnae06qb19ms99eh3ew1', // stylesheet location
            center: [119.2, 33], // starting position [lng, lat]
            zoom: 5.9 // starting zoom
        });
    else if (cate == "envi")
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/hui-zhang/ckgrg0qzr075619mk1x14l8u3', // stylesheet location
            center: [119.2, 33], // starting position [lng, lat]
            zoom: 5.9 // starting zoom
        });
    else if (cate == "tech")
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/hui-zhang/ckgrgg4al07ks19rx1ndgsnty', // stylesheet location
            center: [119.2, 33], // starting position [lng, lat]
            zoom: 5.9 // starting zoom
        });
}

// function addMap(cate) {
//     document.getElementById('map').innerHTML = "";
//     map = new mapboxgl.Map({
//         container: 'map',
//         center: [119.2, 33], // starting position [lng, lat]
//         zoom: 5.9, // starting zoom
//         style: {
//             "version": 8,
//             // "sprite": "http://10.162.94.112:9000/InDash/data/mapbox_resource/sprite/" + cate,
//             // "glyphs": "http://10.162.94.112:9000/InDash/data/mapbox_resource/fonts/{fontstack}/{range}.pbf",
//             "sprite": data_address + "mapbox_resource/sprite/" + cate,
//             "glyphs": data_address + "mapbox_resource/fonts/{fontstack}/{range}.pbf",
//             "sources": {
//                 'boundary': {
//                     type: 'geojson',
//                     data: city_geojson,
//                 },
//                 'city': {
//                     type: 'geojson',
//                     data: city_points,
//                 }
//             },
//             "layers": [
//                 {
//                     'id': 'boundary',
//                     'type': 'fill',
//                     'source': 'boundary',
//                     'layout': {},
//                     "paint": {
//                         "fill-color": "hsl(0, 0%, 86%)",
//                         "fill-outline-color": "#696969"
//                     }
//                 },
//                 {
//                     "id": "highlight",
//                     "type": "line",
//                     "source": "boundary",
//                     "layout": {"visibility": "none"},
//                     "paint": {"line-color": "#696969", "line-width": 1.5}
//                 },
//                 {
//                     "id": "cityname",
//                     "type": "symbol",
//                     "source": "city",
//                     "layout": {
//                         "text-field": ["to-string", ["get", "city_en"]],
//                         "text-size": 10,
//                         "text-allow-overlap": true,
//                         "text-offset": [
//                             "match",
//                             ["get", "city_cn"],
//                             ["淮安"],
//                             ["literal", [2, -2.5]],
//                             ["徐州市"],
//                             ["literal", [3.8, 0]],
//                             ["镇江市"],
//                             ["literal", [2.9, -2.0]],
//                             ["无锡"],
//                             ["literal", [1.5, -2.3]],
//                             ["苏州市"],
//                             ["literal", [2, -2.6]],
//                             ["扬州市"],
//                             ["literal", [0.2, -2.8]],
//                             ["泰州市"],
//                             ["literal", [0.4, -2.5]],
//                             ["常州市"],
//                             ["literal", [-2.5, 2]],
//                             ["宿迁市"],
//                             ["literal", [2.5, -2.5]],
//                             ["连云港"],
//                             ["literal", [0.5, -2.8]],
//                             ["盐城"],
//                             ["literal", [-1, -3.3]],
//                             ["南通市"],
//                             ["literal", [1.5, -2.5]],
//                             ["南京市"],
//                             ["literal", [0, -2.9]],
//                             ["literal", [2, -3]]
//                         ]
//                     },
//                     "paint": {"text-color": "#696969"}
//                 }
//             ]
//         },
//     });
//     if (cate == "enco") {
//         map.on('load', function () {
//             map.addLayer({
//                 "id": "icon",
//                 "type": "symbol",
//                 "source": "city",
//                 "layout": {
//                     "icon-offset": [0, 0],
//                     "icon-image": [
//                         "match",
//                         ["get", "city_cn"],
//                         ["南京市"],
//                         "lianyungang_enco",
//                         ["无锡"],
//                         "wuxi_enco",
//                         ["徐州市"],
//                         "xuzhou_enco",
//                         ["常州市"],
//                         "changzhou",
//                         ["苏州市"],
//                         "suzhou_enco",
//                         ["南通市"],
//                         "nantong_enco",
//                         ["连云港"],
//                         "lianyungang_enco",
//                         ["淮安"],
//                         "huaian_enco",
//                         ["盐城"],
//                         "yancheng_enco",
//                         ["扬州市"],
//                         "yangzhou_enco",
//                         ["镇江市"],
//                         "zhenjiang_enco",
//                         ["泰州市"],
//                         "taizhou_enco",
//                         ["宿迁市"],
//                         "suqian_enco",
//                         "%E5%9B%BE%E7%89%871"
//                     ],
//                     "icon-size": iconSize
//                 },
//                 "paint": {"icon-translate": [0, 0]}
//             })
//         })
//     } else if (cate == "soci") {
//         map.on('load', function () {
//             map.addLayer({
//                 "id": "icon",
//                 "type": "symbol",
//                 "source": "city",
//                 "layout": {
//                     "icon-offset": [0, 0],
//                     "icon-image": [
//                         "match",
//                         ["get", "city_cn"],
//                         ["南京市"],
//                         "nanjing_soci",
//                         ["无锡"],
//                         "wuxi_soci",
//                         ["徐州市"],
//                         "xuzhou_soci",
//                         ["常州市"],
//                         "changzhou_soci",
//                         ["苏州市"],
//                         "suzhou_soci",
//                         ["南通市"],
//                         "nantong_soci",
//                         ["连云港"],
//                         "lianyungang_soci",
//                         ["淮安"],
//                         "huaian_soci",
//                         ["盐城"],
//                         "yancheng_soci",
//                         ["扬州市"],
//                         "yangzhou_soci",
//                         ["镇江市"],
//                         "zhenjiang_soci",
//                         ["泰州市"],
//                         "taizhou_soci",
//                         ["宿迁市"],
//                         "suqian_soci",
//                         "%E5%9B%BE%E7%89%871"
//                     ],
//                     "icon-size": iconSize
//                 },
//                 "paint": {"icon-translate": [0, 0]}
//             })
//         })
//     } else if (cate == "envi") {
//         map.on('load', function () {
//             map.addLayer({
//                 "id": "icon",
//                 "type": "symbol",
//                 "source": "city",
//                 "layout": {
//                     "icon-offset": [0, 0],
//                     "icon-image": [
//                         "match",
//                         ["get", "city_cn"],
//                         ["南京市"],
//                         "nanjing_envi",
//                         ["无锡"],
//                         "wuxi_envi",
//                         ["徐州市"],
//                         "xuzhou_envi",
//                         ["常州市"],
//                         "changhzou_envi",
//                         ["苏州市"],
//                         "suzhou_envi",
//                         ["南通市"],
//                         "nantong_envi",
//                         ["连云港"],
//                         "lianyungang_envi",
//                         ["淮安"],
//                         "huaian_envi",
//                         ["盐城"],
//                         "yancheng_envi",
//                         ["扬州市"],
//                         "yangzhou_envi",
//                         ["镇江市"],
//                         "zhenjiang_envi",
//                         ["泰州市"],
//                         "taizhou_envi",
//                         ["宿迁市"],
//                         "suqian_envi",
//                         "%E5%9B%BE%E7%89%871"
//                     ],
//                     "icon-size": iconSize
//                 },
//                 "paint": {"icon-translate": [0, 0]}
//             })
//         })
//     } else if (cate == "tech") {
//         map.on('load', function () {
//             map.addLayer({
//                 "id": "icon",
//                 "type": "symbol",
//                 "source": "city",
//                 "layout": {
//                     "icon-offset": [0, 0],
//                     "icon-image": [
//                         "match",
//                         ["get", "city_cn"],
//                         ["南京市"],
//                         "nanjing_tech",
//                         ["无锡"],
//                         "wuxi_tech",
//                         ["徐州市"],
//                         "xuzhou_tech",
//                         ["常州市"],
//                         "changzhou_tech",
//                         ["苏州市"],
//                         "suzhou_tech",
//                         ["南通市"],
//                         "nantong_tech",
//                         ["连云港"],
//                         "lianyungang_tech",
//                         ["淮安"],
//                         "huaiai_tech",
//                         ["盐城"],
//                         "yancheng_tech",
//                         ["扬州市"],
//                         "yangzhou_tech",
//                         ["镇江市"],
//                         "zhenjiang_tech",
//                         ["泰州市"],
//                         "taizhou_tech",
//                         ["宿迁市"],
//                         "suqian_tech",
//                         "%E5%9B%BE%E7%89%871"
//                     ],
//                     "icon-size": iconSize
//                 },
//                 "paint": {"icon-translate": [0, 0]}
//             })
//         })
//     }
//
// }

function addHighlightMap(highlightCities, cate) {
    var highlightGeoJson = getHighlightGeoJson(highlightCities);
    document.getElementById('map').innerHTML = "";
    mapboxgl.accessToken = 'pk.eyJ1IjoiaHVpLXpoYW5nIiwiYSI6ImNrZ2I0OHJyMzAwcjcycXBtNDVmbnd4OHUifQ.N3NAGcSWpwvrGCzc9HBxDg';
    if (cate == "enco") {
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/hui-zhang/ckgb5mibc0ssv19pmo32dya7d', // stylesheet location
            center: [119.2, 33], // starting position [lng, lat]
            zoom: 5.9 // starting zoom
        });
        map.on('load', function () {
            var filter = [
                "match",
                [
                    "get",
                    "city"
                ],
                highlightCities,
                true,
                false
            ]
            map.setFilter('highlight', filter);
            map.setLayoutProperty('highlight', 'visibility', 'visible');
        })
    } else if (cate == "soci") {
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/hui-zhang/ckgrfhnae06qb19ms99eh3ew1', // stylesheet location
            center: [119.2, 33], // starting position [lng, lat]
            zoom: 5.9 // starting zoom
        });
        map.on('load', function () {
            var filter = [
                "match",
                [
                    "get",
                    "city"
                ],
                highlightCities,
                true,
                false
            ]
            map.setFilter('highlight', filter);
            map.setLayoutProperty('highlight', 'visibility', 'visible');
            // map.addSource('highlight', {
            //     "type": "geojson",
            //     "data": highlightGeoJson
            // });
            // map.addLayer({
            //     id: 'highlight-boundary',
            //     type: 'line',
            //     source: 'highlight',
            //     layout: {
            //         'line-cap': 'round',
            //         'line-join': 'round'
            //     },
            //     paint: {
            //         'line-color': '#696969',
            //         'line-width': 1.5,
            //         'line-opacity': 1,
            //         'line-gap-width': 0
            //     },
            // });
        })
    } else if (cate == "envi") {
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/hui-zhang/ckgrg0qzr075619mk1x14l8u3', // stylesheet location
            center: [119.2, 33], // starting position [lng, lat]
            zoom: 5.9 // starting zoom
        });
        map.on('load', function () {
            var filter = [
                "match",
                [
                    "get",
                    "city"
                ],
                highlightCities,
                true,
                false
            ]
            map.setFilter('highlight', filter);
            map.setLayoutProperty('highlight', 'visibility', 'visible');
        })
    } else if (cate == "tech") {
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/hui-zhang/ckgrgg4al07ks19rx1ndgsnty', // stylesheet location
            center: [119.2, 33], // starting position [lng, lat]
            zoom: 5.9 // starting zoom
        });
        map.on('load', function () {
            var filter = [
                "match",
                [
                    "get",
                    "city"
                ],
                highlightCities,
                true,
                false
            ]
            map.setFilter('highlight', filter);
            map.setLayoutProperty('highlight', 'visibility', 'visible');
        })
    }
}

// function addHighlightMap(highlightCities, cate) {
//     if (highlightCities.length != 0) {
//         var highlightGeoJson = getHighlightGeoJson(highlightCities);
//         addMap(cate);
//         if (cate == "enco") {
//             map.on('load', function () {
//                 var filter = [
//                     "match",
//                     [
//                         "get",
//                         "city"
//                     ],
//                     highlightCities,
//                     true,
//                     false
//                 ]
//                 map.setFilter('highlight', filter);
//                 map.setLayoutProperty('highlight', 'visibility', 'visible');
//             })
//         } else if (cate == "soci") {
//             map.on('load', function () {
//                 var filter = [
//                     "match",
//                     [
//                         "get",
//                         "city"
//                     ],
//                     highlightCities,
//                     true,
//                     false
//                 ]
//                 map.setFilter('highlight', filter);
//                 map.setLayoutProperty('highlight', 'visibility', 'visible');
//                 // map.addSource('highlight', {
//                 //     "type": "geojson",
//                 //     "data": highlightGeoJson
//                 // });
//                 // map.addLayer({
//                 //     id: 'highlight-boundary',
//                 //     type: 'line',
//                 //     source: 'highlight',
//                 //     layout: {
//                 //         'line-cap': 'round',
//                 //         'line-join': 'round'
//                 //     },
//                 //     paint: {
//                 //         'line-color': '#696969',
//                 //         'line-width': 1.5,
//                 //         'line-opacity': 1,
//                 //         'line-gap-width': 0
//                 //     },
//                 // });
//             })
//         } else if (cate == "envi") {
//             map.on('load', function () {
//                 var filter = [
//                     "match",
//                     [
//                         "get",
//                         "city"
//                     ],
//                     highlightCities,
//                     true,
//                     false
//                 ]
//                 map.setFilter('highlight', filter);
//                 map.setLayoutProperty('highlight', 'visibility', 'visible');
//             })
//         } else if (cate == "tech") {
//             map.on('load', function () {
//                 var filter = [
//                     "match",
//                     [
//                         "get",
//                         "city"
//                     ],
//                     highlightCities,
//                     true,
//                     false
//                 ]
//                 map.setFilter('highlight', filter);
//                 map.setLayoutProperty('highlight', 'visibility', 'visible');
//             })
//         }
//     } else return;
//
// }

function getHighlightGeoJson(cities) {
    var hlJson = {};
    hlJson.type = "FeatureCollection";
    hlJson.features = new Array;
    for (var i = 0; i < city_geojson.features.length; i++) {
        for (var j = 0; j < cities.length; j++)
            if (city_geojson.features[i].properties.city == cities[j]) {
                hlJson.features.push(city_geojson.features[i])
            }
    }
    return hlJson;
}

// ------------------------------ Update Dashboard -----------------------------------------------
function updateDashboard(cate) {
    // update titles
    updateSubTitles(cate)
    //add map
    addMap(cate)
    addMapLegend(cate)
    // add values
    updateValues(cate)
    // add Parallel Coordinates
    updatePC(cate)
    // add correlation image
    addCorrImage(cate)
}







