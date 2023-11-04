import myimage from "../../assets/sorry.jpg";
function Feature4() {
  return (
    <>
      <div style={{ backgroundColor: "#f5f5dc", display: "flex" }}>
        <img
          src={myimage}
          style={{
            width: "50vw",
            borderRadius: "5vw",
            paddingTop: "2vw",
            paddingBottom: "3vw",
            paddingLeft: "2vw",
          }}
        ></img>
        <div>
          <h2
            style={{
              paddingTop: "12vw",
              paddingLeft: "2.7vw",
              fontSize: "6.2vw",
              color: "#A86326",
              textAlign: "center",
            }}
          >
            "Oops you forgot"
          </h2>
          <h2
            style={{
              paddingTop: "1.5vw",
              paddingLeft: "3vw",
              paddingRight: "3vw",
              fontSize: "4vw",
              color: "#963519",
              textAlign: "center",
              fontFamily: "serif",
              fontStyle: "italic",
            }}
          >
            Forgot a special day, dont worry we have got you covered
          </h2>
        </div>
      </div>
    </>
  );
}

export default Feature4;
