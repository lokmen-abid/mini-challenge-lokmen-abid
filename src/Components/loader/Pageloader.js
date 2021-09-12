import React, { useState } from "react";
import Loader from "./Loader";

function Pageloader() {
  const [loading, setloading] = useState(false);
  return [
    loading ? <Loader /> : null,
    () => setloading(true),
    () => setloading(false),
  ];
}

export default Pageloader;
