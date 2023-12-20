import React from "react";

function Singers(props) {
  console.log("==>Get props", props);
  return <div>Singers</div>;
}

export default React.memo(Singers);
