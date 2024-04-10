import React from "react";

function Board({members, title}) {
  return (
    <div className="af">
      <div className="board_title">
        <h1>{title}</h1>
      </div>
      <div className="afrivacx_board">
        {members.map((member, i) => (
          <div className="member" key={i}>
              <img src={member.picture} alt="member" width={230} height={260} />
            <p>{member.name}</p>
            <h4>{member.position}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;
