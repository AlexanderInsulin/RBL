import React from "react";
import DuractionIndicator from "./DurationIndicator";
import Time from "./Time";

const TimeControll = () => (
  <div style={{ flex: 1 }}>
    <Time seconds={30} />
    <DuractionIndicator past={30} whole={100} />
    <Time seconds={100} />
  </div>
);

export default TimeControll;
