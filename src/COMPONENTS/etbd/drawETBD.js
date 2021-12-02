import * as d3 from "d3";

export function drawETBD(data) {

    var margin = { top: 100, left: 120, bottom: 75, right: 120 }
    var svgWidth = document.getElementById("svgMatching").clientWidth
    var svgHeight = document.getElementById("svgMatching").clientHeight
    var width = svgWidth - margin.left - margin.right
    var height = svgHeight - margin.top - margin.bottom

    var x_domain = [250, 550]
    var y_domain = [0, 5]
    var c1 = d3.range(300, 401)
    var c2 = d3.range(401, 501)
    var nr_bins = 200

    const groupHistogram = d3.select("#svgMatching")
        .append("g")
        .attr("id", "groupHistogram")
        .attr("transform",
            `translate(${margin.left},${margin.top})`);

    const X_scale = d3.scaleLinear()
        .domain(x_domain)
        .range([0, width]);

    groupHistogram.append("g").attr("id", "hist_X_axis")
        .attr("class", "axisLine")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(X_scale).tickValues([300, 500,]))

    // Turn data array into bins; 
    // Must be done before calling the Y_axis.
    const binGenerator = d3.bin()
        .value(function (d) { return d; })
        .domain(X_scale.domain())
        .thresholds(X_scale.ticks(nr_bins));

    const bins = binGenerator(data);

    const Y_scale = d3.scaleLinear()
        .range([height, 0])
        .domain(y_domain)

    groupHistogram.append("g").attr("id", "hist_Y_axis")
        .attr("class", "axisLine")
        .call(d3.axisLeft(Y_scale).ticks(5));

    groupHistogram.append("line")
        .attr("id", "classSeparator")
        .attr("stroke", '#2d816efc')
        .attr("stroke-width", 2)
        .attr("stroke-dasharray", 5)
        .attr("x1", X_scale(400))
        .attr("x2", X_scale(400))
        .attr("y1", Y_scale(-2))
        .attr("y2", Y_scale(5))


    var updateHistogram = () => {

        groupHistogram.selectAll("rect")
            .data(bins)
            .join("rect")
            .attr("class", "histRect")
            .attr("x", 1)
            .attr("transform", function (d) { return `translate(${X_scale(d.x0)} , ${Y_scale(d.length)})` })
            .attr("width", function (d) { return X_scale(d.x1) - X_scale(d.x0) - 1 })
            .attr("height", function (d) { return height - Y_scale(d.length); })
            .attr("fill", (d) => {
                if (c1.includes(d.x0)) {
                    return 'rgb(255, 128, 49)'
                };

                if (c2.includes(d.x0)) {
                    return 'rgb(10, 136, 10)'
                };

                return 'rgba(150, 150, 150, .99)'
            })
    };

    updateHistogram()
};





export function addData(data) {

    var margin = { top: 100, left: 120, bottom: 75, right: 120 }
    var svgWidth = document.getElementById("svgMatching").clientWidth
    var svgHeight = document.getElementById("svgMatching").clientHeight
    var width = svgWidth - margin.left - margin.right
    var height = svgHeight - margin.top - margin.bottom

    var x_domain = [250, 550]
    var y_domain = [0, 5]
    var c1 = d3.range(300, 401)
    var c2 = d3.range(401, 501)
    var nr_bins = 200



    var groupHistogram = d3.select("#groupHistogram")

    const X_scale = d3.scaleLinear()
        .domain(x_domain)
        .range([0, width]);

    const Y_scale = d3.scaleLinear()
        .range([height, 0])
        .domain(y_domain)

    // Turn data array into bins; 
    // Must be done before calling the Y_axis.
    const binGenerator = d3.bin()
        .value(function (d) { return d; })
        .domain(X_scale.domain())
        .thresholds(X_scale.ticks(nr_bins));

    const bins = binGenerator(data);

    groupHistogram.selectAll("rect")
        .data(bins)
        .join("rect")
        .attr("class", "histRect")
        .attr("x", 1)
        .attr("transform", function (d) { return `translate(${X_scale(d.x0)} , ${Y_scale(d.length)})` })
        .attr("width", function (d) { return X_scale(d.x1) - X_scale(d.x0) - 1 })
        .attr("height", function (d) { return height - Y_scale(d.length); })
        .attr("fill", (d) => {
            if (c1.includes(d.x0)) {
                return 'rgb(255, 128, 49)'
            };

            if (c2.includes(d.x0)) {
                return 'rgb(10, 136, 10)'
            }

            return 'rgba(150, 150, 150, .99)' // 'rgba(105, 179, 162, .7)'
        })
};



