import React from "react";

function Recommend(props) {
  console.log("==>Get props", props);
  return <div>Recommend</div>;
}

export default React.memo(Recommend);
