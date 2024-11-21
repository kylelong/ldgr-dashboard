// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/bump
import { ResponsiveAreaBump } from '@nivo/bump'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const data = [
  {
    id: 'Operational',
    data: [
      {
        x: 'Q1',
        y: 20,
      },
      {
        x: 'Q2',
        y: 29,
      },
      {
        x: 'Q3',
        y: 10,
      },
      {
        x: 'Q4',
        y: 16,
      },
    ],
  },
  {
    id: 'Investment',
    data: [
      {
        x: 'Q1',
        y: 18,
      },
      {
        x: 'Q2',
        y: 14,
      },
      {
        x: 'Q3',
        y: 16,
      },
      {
        x: 'Q4',
        y: 17,
      },
    ],
  },
  {
    id: 'Financing',
    data: [
      {
        x: 'Q1',
        y: 12,
      },
      {
        x: 'Q2',
        y: 26,
      },
      {
        x: 'Q3',
        y: 10,
      },
      {
        x: 'Q4',
        y: 29,
      },
    ],
  },
  {
    id: 'Free Cash Flow',
    data: [
      {
        x: 'Q1',
        y: 12,
      },
      {
        x: 'Q2',
        y: 11,
      },
      {
        x: 'Q3',
        y: 12,
      },
      {
        x: 'Q4',
        y: 19,
      },
    ],
  },
  {
    id: 'Customer',
    data: [
      {
        x: 'Q1',
        y: 11,
      },
      {
        x: 'Q2',
        y: 11,
      },
      {
        x: 'Q3',
        y: 14,
      },
      {
        x: 'Q4',
        y: 15,
      },
    ],
  },
]

const AreaBump = () => {
  return (
    <ResponsiveAreaBump
      data={data}
      margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
      spacing={8}
      colors={{ scheme: 'nivo' }}
      blendMode="multiply"
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'Operational',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'Customer',
          },
          id: 'lines',
        },
      ]}
      startLabel="id"
      endLabel="id"
      axisTop={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendPosition: 'middle',
        legendOffset: -36,
        truncateTickAt: 0,
      }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendPosition: 'middle',
        legendOffset: 32,
        truncateTickAt: 0,
      }}
    />
  )
}
export default AreaBump
