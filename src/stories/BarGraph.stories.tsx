import React from "react";

import BarGraph from "../components/BarGraph";

export default {
  component: BarGraph,
  title: "Recharts BarGraph",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/
};

export const StaticData = [
  {
    a: 400,
    b: 600
  },
  {
    a: 300,
    b: 700
  },
  {
    a: 200,
    b: 800
  },
  {
    a: 400,
    b: 600
  },
  {
    a: 100,
    b: 900
  },
  {
    a: 300,
    b: 700
  },
  {
    a: 900,
    b: 100
  }
];

export const Default = () => <BarGraph data={StaticData} />;

// @ts-ignore-next-line
function useInterval(callback, delay) {
  const savedCallback = React.useRef();

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    function tick() {
      // @ts-ignore-next-line
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const randomDataArray = (NmbElem: number) => {
  const dataBar = [];
  // eslint-disable-next-line
  for (let i = 0; i < NmbElem; i++) {
    const a = Math.round(Math.random() * 1000);
    const b = 1000 - a;

    dataBar.push({
      a,
      b
    });
  }

  return dataBar;
};

export const OneSecondTick = () => {
  const [data, setData] = React.useState(randomDataArray(10));

  const tick = () => {
    setData(randomDataArray(10));
  };

  useInterval(() => tick(), 1000);

  return <BarGraph data={data} />;
};

export const TickOnHover = () => {
  const [data, setData] = React.useState(randomDataArray(10));
  const [activeTick, setActiveTick] = React.useState(false);

  const tick = () => {
    if (activeTick) {
      setData(randomDataArray(10));
    }
  };

  useInterval(() => tick(), 1000);

  return (
    <BarGraph
      onMouseEnter={() => setActiveTick(true)}
      onMouseLeave={() => setActiveTick(false)}
      data={data}
    />
  );
};
