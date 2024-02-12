export const styles = () => ({
    root: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      color: "#000133",
    },
    appBar: {
      width: '100%', // Occupy the entire width
      flexDirection: 'row', // Display children in a row
      justifyContent: 'space-between', // Align children to the start and end of the container
    },
    closed: {
      width: '50px', // Adjust the width as needed
      overflowX: 'hidden',
      transition: 'width 0.5s', // Adjust the transition duration as needed
    },
    opened: {
      width: "240px",
      transition: 'width 0.5s', // Adjust the transition duration as needed
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