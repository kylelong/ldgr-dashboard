// https://nivo.rocks/line/

import { ResponsiveLine } from '@nivo/line'
import { patternDotsDef, patternSquaresDef } from '@nivo/core'
import { useMediaQuery } from 'usehooks-ts'

const data = [
  {
    id: 'Monthly',
    color: 'hsl(276.9, 100%, 50%)',
    data: [
      {
        x: 'Jan',
        y: 1450,
      },
      {
        x: 'Feb',
        y: 1010,
      },
      {
        x: 'Mar',
        y: 1430,
      },
      {
        x: 'Apr',
        y: 2400,
      },
      {
        x: 'May',
        y: 1300,
      },
      {
        x: 'June',
        y: 1210,
      },
      {
        x: 'July',
        y: 2770,
      },
      {
        x: 'Aug',
        y: 1840,
      },
      {
        x: 'Sept',
        y: 1680,
      },
      {
        x: 'Oct',
        y: 1900,
      },
      {
        x: 'Nov',
        y: 2190,
      },
      {
        x: 'Dec',
        y: 1670,
      },
    ],
  },
]

const CACLine = () => {
  const largerScreen = useMediaQuery('(min-width: 768px)')
  return (
    <ResponsiveLine
      data={data}
      enableArea={true}
      areaBlendMode="darken"
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      colors={['#9900FF']}
      enableGridX={false} // Disable the x-axis grid lines
      enableGridY={false}
      areaOpacity={0.3}
      enableTouchCrosshair={true} // Enable touch crosshair
      crosshairType="cross"
      defs={[
        // using helpers (cannot be used with http rendering API)
        // will use color from current element
        patternDotsDef('dots', { color: 'inherit' }),
        // will use background color from current element
        patternSquaresDef('squares', { background: 'inherit' }),
        // using plain object
        { id: 'custom', type: 'patternSquares', size: 24 },
      ]}
      // 2. defining rules to apply those patterns
      fill={[
        // match using query object
        // (can be used with http rendering API
        { match: { id: 'react' }, id: 'dots' },
        // match using function
        // (cannot be used with http rendering API
        { match: (d) => d.id === 'vue', id: 'squares' },
        // match all, will only affect 'elm' because once
        // a rule match, others are skipped
        // (can be used with http rendering API
        { match: '*', id: 'dots' },
      ]}
      yScale={{
        type: 'linear',
        min: 0,
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      tooltip={({ point }) => {
        // Extract data for the hovered x-axis value
        const hoveredX = point.data.x as string // The current "x" value (e.g., "Sept")
        const colors = {
          Monthly: '#9900FF',
        }
        const valuesForX = data.map((serie) => {
          const match = serie.data.find((d: any) => d.x === hoveredX)
          return {
            id: serie.id,
            value: match ? match.y : 0,
          }
        })

        return (
          <div className="relative left-36 top-8 w-56 rounded border border-gray-300 bg-white p-2.5">
            <strong>{hoveredX}</strong>

            <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
              {valuesForX.map(({ id, value }) => {
                return (
                  <li
                    key={id}
                    className="my-2 flex list-none items-center justify-between border-gray-200"
                  >
                    <div className="flex items-center space-x-2">
                      <span
                        style={{
                          backgroundColor: colors[id as keyof typeof colors],
                        }}
                        className="h-3 w-3 rounded-full"
                      ></span>
                      <span className="">${value}</span>
                    </div>

                    <span className="font-semibold text-gray-500">{id}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickRotation: largerScreen ? 0 : -45,
        tickSize: 5,
        tickPadding: 5,
        legend: 'CAC',
        legendOffset: 36,
        legendPosition: 'middle',
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'cost',
        legendOffset: -40,
        legendPosition: 'middle',
        truncateTickAt: 0,
      }}
      pointSize={10}
      pointColor={{ theme: 'grid.line.stroke' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      enableCrosshair={true}
      useMesh={true}
      legends={[]}
    />
  )
}

export default CACLine
