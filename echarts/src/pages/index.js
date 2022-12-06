import Head from 'next/head';
import styles from '../styles/Home.module.css';

import ReactECharts from 'echarts-for-react';

import { mockData } from '../mockData';

export default function Home() {
  const getOption = (option) => {
    const { data, epoch } = option;
    return {
      title: { text: 'epoch' + epoch },
      xAxis: {
        type: 'category',
        // axisLine: {
        //   show: false,
        // },
        // axisTick: {
        //   show: false,
        // },
      },
      yAxis: { type: 'value' },
      dataset: {
        source: Object.entries(data).map(([key, value]) => [key].concat(value)),
      },
      legend: {},
      series: [
        {
          type: 'line',
          symbol: 'none',
          seriesLayoutBy: 'row',
        },
        {
          type: 'line',
          symbol: 'none',
          seriesLayoutBy: 'row',
        },
      ],
      tooltip: {
        trigger: 'axis',
      },
      toolbox: {
        feature: {
          dataZoom: {
            show: true,
          },
        },
      },
      dataZoom: [
        {
          type: 'inside',
        },
        {
          type: 'slider',
        },
      ],
    };
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            // padding: '40px',
          }}
        >
          {mockData.map((data) => (
            <ReactECharts
              key={data.epoch}
              option={getOption(data)}
              style={{
                width: '800px',
                height: '260px',
              }}
            />
          ))}
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
