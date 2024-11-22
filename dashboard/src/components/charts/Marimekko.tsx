// https://nivo.rocks/marimekko/

// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/marimekko
import { ResponsiveMarimekko } from '@nivo/marimekko'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
  {
    name: 'Gross',
    total: 13213,
    revenue: 47000,
    variable: 50000,
    netIncome: 50000,
  },
  {
    name: 'Operating',
    total: 13213,
    revenue: 68000,
    variable: 19500,
    netIncome: 50000,
  },
  {
    name: 'Net Profit',
    total: 13213,
    revenue: 93000,
    variable: 19000,
    netIncome: 50000,
  },
  {
    name: 'CAC',
    total: 13213,
    revenue: 56000,
    variable: 25900,
    netIncome: 50000,
  },
]

const Marimekko = () => {
  return (
    <ResponsiveMarimekko
      data={data}
      id="name"
      value="total"
      dimensions={[
        {
          id: 'revenue',
          value: 'revenue',
        },
        {
          id: 'variable',
          value: 'variable',
        },
        {
          id: 'netIncome',
          value: 'netIncome',
        },
      ]}
      innerPadding={9}
      axisTop={null}
      axisRight={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendOffset: 0,
        truncateTickAt: 0,
      }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'cost',
        legendOffset: 36,
        legendPosition: 'middle',
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'total',
        legendOffset: -40,
        legendPosition: 'middle',
        truncateTickAt: 0,
      }}
      margin={{ top: 40, right: 80, bottom: 100, left: 80 }}
      colors={{ scheme: 'spectral' }}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
      defs={[
        {
          id: 'lines',
          type: 'patternLines',
          background: 'rgba(0, 0, 0, 0)',
          color: 'inherit',
          rotation: -45,
          lineWidth: 4,
          spacing: 8,
        },
      ]}
      fill={[
        {
          match: {
            id: 'revenue',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'netIncome',
          },
          id: 'lines',
        },
      ]}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 80,
          itemsSpacing: 0,
          itemWidth: 140,
          itemHeight: 18,
          itemTextColor: '#999',
          itemDirection: 'right-to-left',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'square',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
  )
}
export default Marimekko
