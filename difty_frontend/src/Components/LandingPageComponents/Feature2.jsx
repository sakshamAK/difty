import myimage from "../../assets/poem.jpg";
function Feature2() {
  return (
    <>
      <div style={{ backgroundColor: "#f5f5dc", display: "flex" }}>
        <img
          src={myimage}
          style={{
            width: "50vw",
            borderRadius: "5vw",
            paddingTop: "2vw",
            paddingBottom: "2vw",
            paddingLeft: "2vw",
          }}
        ></img>
        <div>
          <h2
            style={{
              paddingTop: "13vw",
              paddingLeft: "2vw",
              fontSize: "6.2vw",
              color: "#A86326",
              textAlign: "center",
            }}
          >
            "Poems & Stories"
          </h2>
          <h2
            style={{
              paddingTop: "2vw",
              paddingLeft: "3vw",
              paddingRight: "3vw",
              fontSize: "4vw",
              color: "#963519",
              textAlign: "center",
              fontStyle: "italic",
              fontFamily: "serif",
            }}
          >
            Generate unique custom poems and stories and express yourself
          </h2>
        </div>
      </div>
    </>
  );
}

export default Feature2;
