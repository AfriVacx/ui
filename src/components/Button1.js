import React from "react";

import EastIcon from "@mui/icons-material/East";

function Button1({link}) {
  return (
    <div className="button_1">
      <a href={link}>
        <button>
          View details <EastIcon />
        </button>
      </a>
    </div>
  );
}

export default Button1;
