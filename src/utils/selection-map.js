export default function selectionMap({ series, films }) {
  return {
    series: [
      { title: "Netflix", data: series.filter((item) => item.stream === "Netflix") },
      { title: "HBO", data: series.filter((item) => item.stream === "HBO") },
      { title: "Apple TV+", data: series.filter((item) => item.stream === "Apple TV+") },
      { title: "Amazon Prime Video", data: series.filter((item) => item.stream === "Amazon Prime Video") },
    ],
    films: [
      { title: "Netflix", data: films.filter((item) => item.stream === "Netflix") },
      { title: "HBO", data: films.filter((item) => item.stream === "HBO") },
      { title: "Apple TV+", data: films.filter((item) => item.stream === "Apple TV+") },
      { title: "Amazon Prime Video", data: films.filter((item) => item.stream === "Amazon Prime Video") },
    ],
  };
}
