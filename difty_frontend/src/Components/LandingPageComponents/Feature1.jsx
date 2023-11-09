import { Link } from "react-router-dom";

function Feature1() {
  return (
    <>
      <div style={{ backgroundColor: "#f3e1cb", paddingBottom: "2vw" }}>
        <Link to="/generate_message">
          <button
            style={{
              marginLeft: "39vw",
              fontSize: "4vw",
              padding: "0.5vw",
              paddingLeft: "4vw",
              paddingRight: "4vw",
              backgroundColor: "#A86326",
              border: "none",
              color: "#f3e1cb",
              fontFamily: "cursive",
              borderRadius: "12px",
            }}
          >
            Dift it !!
          </button>
        </Link>

        <h6
          style={{
            textAlign: "center",
            paddingTop: "1vw",
            color: "#963519",
            fontSize: "2.6vw",
          }}
        >
          " Spread happiness with unique and custom digital gifts with difty "
        </h6>
      </div>
    </>
  );
}

export default Feature1;
