import React from "react";
import "./runTime.css";
import StudyTime from "./StudyTime";
function RunTime({ data }) {
  console.log(data);
  return (
    <>
      {data.map((p, i) => (
        <div className="studyStatus">
          <div className="studyStatusLeft">
            <p className="writeIcon">{i + 1}</p>
          </div>
          <div className="studyStatusCenter">
            <div className="targetName">
              <div>대학생</div>
              <div class="nameTime">
                <div>{p.username}</div>
                <StudyTime p={p.time}></StudyTime>
              </div>
              <div className="rel">
                <div className="graph">.</div>
                <div className="graph2">.</div>
              </div>
            </div>
          </div>
          <div className="studyStatusRight"></div>
        </div>
      ))}
    </>
  );
}

export default RunTime;
