function StyleOne () {

    const h1Style = {
        color: "blue",
        backgroundColor: "LightBlue",
      };
      const h2Style = {
        color: "red",
        backgroundColor: "IndianRed",
      };    
      const h3Style = {
        color: "green",
        backgroundColor: "GreenYellow",
      };    
      const h4Style = {
        color: "grey",
        backgroundColor: "Gainsboro",
      };    
      const h5Style = {
        color: "Magenta",
        backgroundColor: "LightPink",
      };    
      const h6Style = {
        color: "orange",
        backgroundColor: "Moccasin",
      };    
    
    return (
        <>
          <h1 style={h1Style}>Hello</h1>
          <h2 style={h2Style}>Hello</h2>
          <h3 style={h3Style}>Hello</h3>
          <h4 style={h4Style}>Hello</h4>
          <h5 style={h5Style}>Hello</h5>
          <h6 style={h6Style}>Hello</h6>
        </>
    )
}

export default StyleOne