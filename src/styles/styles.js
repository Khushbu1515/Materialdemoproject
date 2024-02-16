export const styles = () => ({
  root: {
    textAlign: "center",
    minHeight: "100vh",
    color: "#D8DCfgfg",
  },
  appBar: {
    width: "100%", // Occupy the entire width
    flexDirection: "row", // Display children in a row
    justifyContent: "space-between", // Align children to the start and end of the container
  },

  container: {
    display: "flex",
   
    flex: 1,
  },
  drawer: {
    background: "#D8DCD6",
    width: "240px",
    position: "static",
  },
  main: {
    flex: 1,
    background: "#f7f5f5",
    color: "black",
  },
  footer: {
    background: "#00022E",
    height: "50px",
    color: "#FC86AA",
  },
});
