import React from "react";

function MainContent() {
  const date = new Date();
  const today = date.toDateString();

  return <main className="navbar"> Goals for {today} </main>;
}

export default MainContent;
