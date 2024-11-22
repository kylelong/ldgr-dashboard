import { ResponsiveLine } from '@nivo/line'
import { patternDotsDef, patternSquaresDef, patternLinesDef } from '@nivo/core'
const data = [
  {
    id: 'Monthly',
    color: 'hsl(276.9, 100%, 50%)',
    data: [
      {
        x: 'Jan',
        y: 20,
      },
      {
        x: 'Feb',
        y: 20.7,
      },
      {
        x: 'Mar',
        y: 15,
      },
      {
        x: 'Apr',
        y: 13,
      },
      {
        x: 'May',
        y: 17,
      },
      {
        x: 'June',
        y: 20,
      },
      {
        x: 'July',
        y: 26,
      },
      {
        x: 'Aug',
        y: 28,
      },
      {
        x: 'Sept',
        y: 22,
      },
      {
        x: 'Oct',
        y: 27,
      },
      {
        x: 'Nov',
        y: 29,
      },
      {
        x: 'Dec',
        y: 33,
      },
    ],
  },
]

const RevenueGrowthChart = () => {
  return (
    <ResponsiveLine
      data={data}
      enableArea={true}
      enablePoints={false}
      areaBlendMode="darken"
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      colors={['#5ce65c']}
      enableGridX={false} // Disable the x-axis grid lines
      enableGridY={false}
      areaOpacity={0.3}
      enableTouchCrosshair={true} // Enable touch crosshair
      curve="catmullRom"
      defs={[
        // using helpers (cannot be used with http rendering API)
        // will use color from current element
        patternDotsDef('dots', { color: 'inherit' }),
        // will use background color from current element
        patternSquaresDef('squares-pattern', {
          size: 7,
          padding: 1,
          stagger: true,
          background: '#ffffff',
          color: '#2E8B57',
        }),
        patternLinesDef('lines-pattern', {
          spacing: 5,
          rotation: -8,
          lineWidth: 2,
          background: '#ffffff',
          color: '#68ba7f',
        }),
        // using plain object
        {
          id: 'custom',
          type: 'patternSquares',
          size: 10,
          spacing: 4,
          rotation: 78,
          lineWidth: 1,
          background: '#253d2c',
          color: '#68ba7f',
        },
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
        { match: '*', id: 'squares-pattern' },
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
          Monthly: '#5ce65c',
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
                      <span className="">{value}%</span>
                    </div>
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
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Revenue Growth %',
        legendOffset: 36,
        legendPosition: 'middle',
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'percentage',
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

export default RevenueGrowthChart
