import { ResponsiveLine } from '@nivo/line'

const LineChart = ({ data }: { data: any[] }) => {
  console.log(data)

  return (
    <div className="h-96 rounded-md bg-white shadow-md">
      <ResponsiveLine
        data={data}
        enableArea={true}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        curve="cardinal"
        colors={['#6CB4EE', '#1560bd']}
        enableGridX={false} // Disable the x-axis grid lines
        enableGridY={false}
        areaOpacity={0.3}
        enableTouchCrosshair={true} // Enable touch crosshair
        crosshairType="x"
        yScale={{
          type: 'linear',
          min: 0,
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
        tooltip={({ point }) => {
          // Extract data for the hovered x-axis value
          const hoveredX = point.data.x // The current "x" value (e.g., "Sept")
          const colors = {
            Monthly: '#6CB4EE',
            Yearly: '#1560bd',
            Total: '#dddddd',
          }
          const valuesForX = data.map((serie) => {
            const match = serie.data.find((d: any) => d.x === hoveredX)
            return {
              id: serie.id,
              value: match ? match.y : 0,
            }
          })

          // Calculate total
          const total = Number(
            valuesForX.reduce((sum, item) => sum + item.value, 0),
          ).toFixed(2)

          return (
            <div className="relative left-36 top-8 w-56 rounded border border-gray-300 bg-white p-2.5">
              <strong>{hoveredX}</strong>

              <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
                {valuesForX.map(({ id, value }) => {
                  return (
                    <li
                      key={id}
                      className="my-2 flex list-none items-center justify-between border-b border-gray-200"
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
              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <span
                    className={`h-3 w-3 rounded-full bg-[${colors['Total']}]`}
                  ></span>
                  <span>${total}</span>
                </div>
                <strong>Total</strong>
              </div>
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
          legend: 'ARR',
          legendOffset: 36,
          legendPosition: 'middle',
          truncateTickAt: 0,
        }}
        axisLeft={null}
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
    </div>
  )
}

export default LineChart
