import React from "react";

function Board({ members, title }) {
  return (
    <div className="af">
      <div className="board_title">
        <h1>{title}</h1>
      </div>
      <div className="afrivacx_board">
        {members.map((member, i) => (
          <div className="member" key={i}>
            <img src={member.profileImage} alt="member" />
            <p>
              <b>{member.details.title}.</b> {member.fullName}
            </p>
            <h4>{member.details.position}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;
