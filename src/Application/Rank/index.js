import React from "react";

function Rank(props) {
  console.log("==>Get props", props);
  return <div>rank</div>;
}

export default React.memo(Rank);
