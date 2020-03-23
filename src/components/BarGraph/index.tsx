import React from "react";
import { ResponsiveContainer, Bar, BarChart, XAxis, YAxis } from "recharts";

import styles from "./index.module.scss";

// @ts-ignore
type PropsType = {
  data: any;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const BarGraph = (props: PropsType) => {
  const { data, onMouseEnter, onMouseLeave } = props;

  return (
    <div className={styles.ChartWrapper}>
      {data && (
        <ResponsiveContainer
          minWidth="700px"
          minHeight="700px"
          width="100%"
          height="100%"
          className={styles.Chart}
        >
          <BarChart
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            layout="vertical"
            width={700}
            height={700}
            data={data}
            style={{ opacity: 0.7 }}
          >
            <YAxis hide type="category" />
            <XAxis hide type="number" />
            <Bar stackId="1" dataKey="a" fill="#51BFCA" />
            <Bar stackId="1" dataKey="b" fill="#1B7181" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default BarGraph;
