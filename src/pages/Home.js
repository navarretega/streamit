import React from "react";

import Browse from "./Browse";
import { useContent } from "../hooks";
import selectionMap from "../utils/selection-map";

export default function Home() {
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selectionMap({ series, films });

  return <Browse slides={slides} />;
}
