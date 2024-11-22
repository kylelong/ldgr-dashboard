import { ResponsiveBar } from '@nivo/bar'

const ChurnBar = () => {
  const data = [
    {
      month: 'Jan',
      'New Users': 85,
      Upgrades: 45,
      Downgrades: -25,
      Churned: -40,
    },
    {
      month: 'Feb',
      'New Users': 95,
      Upgrades: 55,
      Downgrades: -30,
      Churned: -45,
    },
    {
      month: 'Mar',
      'New Users': 120,
      Upgrades: 70,
      Downgrades: -35,
      Churned: -50,
    },
    {
      month: 'Apr',
      'New Users': 150,
      Upgrades: 85,
      Downgrades: -25,
      Churned: -40,
    },
    {
      month: 'May',
      'New Users': 200,
      Upgrades: 95,
      Downgrades: -30,
      Churned: -45,
    },
    {
      month: 'Jun',
      'New Users': 180,
      Upgrades: 80,
      Downgrades: -40,
      Churned: -60,
    },
    {
      month: 'Jul',
      'New Users': 160,
      Upgrades: 75,
      Downgrades: -45,
      Churned: -70,
    },
    {
      month: 'Aug',
      'New Users': 190,
      Upgrades: 90,
      Downgrades: -35,
      Churned: -55,
    },
    {
      month: 'Sep',
      'New Users': 220,
      Upgrades: 100,
      Downgrades: -30,
      Churned: -45,
    },
    {
      month: 'Oct',
      'New Users': 250,
      Upgrades: 120,
      Downgrades: -40,
      Churned: -65,
    },
    {
      month: 'Nov',
      'New Users': 280,
      Upgrades: 140,
      Downgrades: -45,
      Churned: -70,
    },
    {
      month: 'Dec',
      'New Users': 300,
      Upgrades: 150,
      Downgrades: -50,
      Churned: -80,
    },
  ]

  return (
    <ResponsiveBar
      data={data}
      keys={['New Users', 'Upgrades', 'Downgrades', 'Churned']}
      indexBy="month"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={['#4CAF50', '#81C784', '#EF5350', '#E57373']}
      borderColor="inherit:darker(1.6)"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Month',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Count',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
        },
      ]}
      role="application"
      ariaLabel="Churn Analysis Chart"
      barAriaLabel={(e) =>
        `${e.id}: ${e.formattedValue} in month: ${e.indexValue}`
      }
    />
  )
}
export default ChurnBar
