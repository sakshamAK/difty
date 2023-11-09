import myimage from "../../assets/_.jpeg";

function Feature3() {
  return (
    <>
      <div style={{ backgroundColor: "#f3e1cb", display: "flex" }}>
        <div>
          <h2
            style={{
              paddingTop: "12vw",
              paddingLeft: "4vw",
              fontSize: "6.2vw",
              color: "#A86326",
              textAlign: "left",
            }}
          >
            " Custom Games "
          </h2>
          <h2
            style={{
              paddingTop: "1vw",
              paddingLeft: "3vw",
              paddingRight: "3vw",
              fontSize: "4vw",
              color: "#963519",
              textAlign: "center",
              fontFamily: "serif",
              fontStyle: "italic",
            }}
          >
            Custom games to provide you a unique personalised gifiting
          </h2>
        </div>
        <img
          src={myimage}
          style={{
            width: "95vw",
            borderRadius: "5vw",
            paddingTop: "1vw",
            paddingBottom: "2vw",
            paddingRight: "2vw",
            height: "50vw",
          }}
        ></img>
      </div>
    </>
  );
}

export default Feature3;
