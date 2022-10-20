<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      // Add your code below this line
      .style("font-family","verdana")
      .style("color", d => {
        if (d < 20)
          return "red";
        return "green";
      })


      // Add your code above this line
  </script>
</body>