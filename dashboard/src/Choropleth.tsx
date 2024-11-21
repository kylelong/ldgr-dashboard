// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/geo
import { ResponsiveChoropleth } from '@nivo/geo'
import features from './world_countries'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const data = [
  {
    id: 'AFG',
    value: 538657,
  },
  {
    id: 'AGO',
    value: 478144,
  },
  {
    id: 'ALB',
    value: 167876,
  },
  {
    id: 'ARE',
    value: 583444,
  },
  {
    id: 'ARG',
    value: 897757,
  },
  {
    id: 'ARM',
    value: 453827,
  },
  {
    id: 'ATA',
    value: 5737,
  },
  {
    id: 'ATF',
    value: 515438,
  },
  {
    id: 'AUT',
    value: 312690,
  },
  {
    id: 'AZE',
    value: 988155,
  },
  {
    id: 'BDI',
    value: 816084,
  },
  {
    id: 'BEL',
    value: 775457,
  },
  {
    id: 'BEN',
    value: 390939,
  },
  {
    id: 'BFA',
    value: 303575,
  },
  {
    id: 'BGD',
    value: 449873,
  },
  {
    id: 'BGR',
    value: 237552,
  },
  {
    id: 'BHS',
    value: 10422,
  },
  {
    id: 'BIH',
    value: 352433,
  },
  {
    id: 'BLR',
    value: 254294,
  },
  {
    id: 'BLZ',
    value: 403633,
  },
  {
    id: 'BOL',
    value: 621932,
  },
  {
    id: 'BRN',
    value: 434847,
  },
  {
    id: 'BTN',
    value: 128362,
  },
  {
    id: 'BWA',
    value: 652178,
  },
  {
    id: 'CAF',
    value: 167589,
  },
  {
    id: 'CAN',
    value: 758673,
  },
  {
    id: 'CHE',
    value: 458714,
  },
  {
    id: 'CHL',
    value: 862349,
  },
  {
    id: 'CHN',
    value: 568870,
  },
  {
    id: 'CIV',
    value: 869568,
  },
  {
    id: 'CMR',
    value: 295042,
  },
  {
    id: 'COG',
    value: 159301,
  },
  {
    id: 'COL',
    value: 468895,
  },
  {
    id: 'CRI',
    value: 706052,
  },
  {
    id: 'CUB',
    value: 983799,
  },
  {
    id: '-99',
    value: 572538,
  },
  {
    id: 'CYP',
    value: 295298,
  },
  {
    id: 'CZE',
    value: 429271,
  },
  {
    id: 'DEU',
    value: 364299,
  },
  {
    id: 'DJI',
    value: 325954,
  },
  {
    id: 'DNK',
    value: 484885,
  },
  {
    id: 'DOM',
    value: 582475,
  },
  {
    id: 'DZA',
    value: 783079,
  },
  {
    id: 'ECU',
    value: 661117,
  },
  {
    id: 'EGY',
    value: 540425,
  },
  {
    id: 'ERI',
    value: 770671,
  },
  {
    id: 'ESP',
    value: 449447,
  },
  {
    id: 'EST',
    value: 617005,
  },
  {
    id: 'ETH',
    value: 873004,
  },
  {
    id: 'FIN',
    value: 895533,
  },
  {
    id: 'FJI',
    value: 213091,
  },
  {
    id: 'FLK',
    value: 402051,
  },
  {
    id: 'FRA',
    value: 899628,
  },
  {
    id: 'GAB',
    value: 909863,
  },
  {
    id: 'GBR',
    value: 248877,
  },
  {
    id: 'GEO',
    value: 358587,
  },
  {
    id: 'GHA',
    value: 617613,
  },
  {
    id: 'GIN',
    value: 687174,
  },
  {
    id: 'GMB',
    value: 563601,
  },
  {
    id: 'GNB',
    value: 447902,
  },
  {
    id: 'GNQ',
    value: 698787,
  },
  {
    id: 'GRC',
    value: 90735,
  },
  {
    id: 'GTM',
    value: 580982,
  },
  {
    id: 'GUY',
    value: 52506,
  },
  {
    id: 'HND',
    value: 706181,
  },
  {
    id: 'HRV',
    value: 218126,
  },
  {
    id: 'HTI',
    value: 937915,
  },
  {
    id: 'HUN',
    value: 890397,
  },
  {
    id: 'IDN',
    value: 317141,
  },
  {
    id: 'IND',
    value: 150856,
  },
  {
    id: 'IRL',
    value: 607628,
  },
  {
    id: 'IRN',
    value: 294076,
  },
  {
    id: 'IRQ',
    value: 615820,
  },
  {
    id: 'ISL',
    value: 446290,
  },
  {
    id: 'ISR',
    value: 746469,
  },
  {
    id: 'ITA',
    value: 38676,
  },
  {
    id: 'JAM',
    value: 760830,
  },
  {
    id: 'JOR',
    value: 50917,
  },
  {
    id: 'JPN',
    value: 591781,
  },
  {
    id: 'KAZ',
    value: 399004,
  },
  {
    id: 'KEN',
    value: 656297,
  },
  {
    id: 'KGZ',
    value: 180899,
  },
  {
    id: 'KHM',
    value: 492121,
  },
  {
    id: 'OSA',
    value: 512214,
  },
  {
    id: 'KWT',
    value: 316920,
  },
  {
    id: 'LAO',
    value: 327148,
  },
  {
    id: 'LBN',
    value: 821287,
  },
  {
    id: 'LBR',
    value: 97212,
  },
  {
    id: 'LBY',
    value: 778945,
  },
  {
    id: 'LKA',
    value: 108506,
  },
  {
    id: 'LSO',
    value: 398863,
  },
  {
    id: 'LTU',
    value: 493609,
  },
  {
    id: 'LUX',
    value: 447659,
  },
  {
    id: 'LVA',
    value: 319046,
  },
  {
    id: 'MAR',
    value: 324430,
  },
  {
    id: 'MDA',
    value: 37468,
  },
  {
    id: 'MDG',
    value: 169204,
  },
  {
    id: 'MEX',
    value: 969292,
  },
  {
    id: 'MKD',
    value: 507991,
  },
  {
    id: 'MLI',
    value: 358085,
  },
  {
    id: 'MMR',
    value: 681398,
  },
  {
    id: 'MNE',
    value: 922424,
  },
  {
    id: 'MNG',
    value: 276987,
  },
  {
    id: 'MOZ',
    value: 416812,
  },
  {
    id: 'MRT',
    value: 761467,
  },
  {
    id: 'MWI',
    value: 341646,
  },
  {
    id: 'MYS',
    value: 838313,
  },
  {
    id: 'NAM',
    value: 82747,
  },
  {
    id: 'NCL',
    value: 333687,
  },
  {
    id: 'NER',
    value: 296455,
  },
  {
    id: 'NGA',
    value: 453450,
  },
  {
    id: 'NIC',
    value: 570969,
  },
  {
    id: 'NLD',
    value: 782072,
  },
  {
    id: 'NOR',
    value: 820862,
  },
  {
    id: 'NPL',
    value: 321829,
  },
  {
    id: 'NZL',
    value: 655615,
  },
  {
    id: 'OMN',
    value: 724174,
  },
  {
    id: 'PAK',
    value: 296339,
  },
  {
    id: 'PAN',
    value: 710756,
  },
  {
    id: 'PER',
    value: 669910,
  },
  {
    id: 'PHL',
    value: 996463,
  },
  {
    id: 'PNG',
    value: 498122,
  },
  {
    id: 'POL',
    value: 571522,
  },
  {
    id: 'PRI',
    value: 612595,
  },
  {
    id: 'PRT',
    value: 871576,
  },
  {
    id: 'PRY',
    value: 42640,
  },
  {
    id: 'QAT',
    value: 970961,
  },
  {
    id: 'ROU',
    value: 505878,
  },
  {
    id: 'RUS',
    value: 715587,
  },
  {
    id: 'RWA',
    value: 424550,
  },
  {
    id: 'ESH',
    value: 772789,
  },
  {
    id: 'SAU',
    value: 23544,
  },
  {
    id: 'SDN',
    value: 449205,
  },
  {
    id: 'SDS',
    value: 43592,
  },
  {
    id: 'SEN',
    value: 312736,
  },
  {
    id: 'SLB',
    value: 949354,
  },
  {
    id: 'SLE',
    value: 996274,
  },
  {
    id: 'SLV',
    value: 190903,
  },
  {
    id: 'ABV',
    value: 716613,
  },
  {
    id: 'SOM',
    value: 261836,
  },
  {
    id: 'SRB',
    value: 416162,
  },
  {
    id: 'SUR',
    value: 531104,
  },
  {
    id: 'SVK',
    value: 673401,
  },
  {
    id: 'SVN',
    value: 395137,
  },
  {
    id: 'SWZ',
    value: 744831,
  },
  {
    id: 'SYR',
    value: 95640,
  },
  {
    id: 'TCD',
    value: 684300,
  },
  {
    id: 'TGO',
    value: 20602,
  },
  {
    id: 'THA',
    value: 824044,
  },
  {
    id: 'TJK',
    value: 640964,
  },
  {
    id: 'TKM',
    value: 560262,
  },
  {
    id: 'TLS',
    value: 526539,
  },
  {
    id: 'TTO',
    value: 622250,
  },
  {
    id: 'TUN',
    value: 709965,
  },
  {
    id: 'TUR',
    value: 585885,
  },
  {
    id: 'TWN',
    value: 640833,
  },
  {
    id: 'TZA',
    value: 293133,
  },
  {
    id: 'UGA',
    value: 556086,
  },
  {
    id: 'UKR',
    value: 8604,
  },
  {
    id: 'URY',
    value: 107383,
  },
  {
    id: 'USA',
    value: 958971,
  },
  {
    id: 'UZB',
    value: 446571,
  },
  {
    id: 'VEN',
    value: 175475,
  },
  {
    id: 'VNM',
    value: 411554,
  },
  {
    id: 'VUT',
    value: 430866,
  },
  {
    id: 'PSE',
    value: 842638,
  },
  {
    id: 'YEM',
    value: 887173,
  },
  {
    id: 'ZAF',
    value: 780611,
  },
  {
    id: 'ZMB',
    value: 90655,
  },
  {
    id: 'ZWE',
    value: 872837,
  },
  {
    id: 'KOR',
    value: 678469,
  },
]
const Choropleth = () => {
  return (
    <ResponsiveChoropleth
      data={data}
      features={features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="nivo"
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionTranslation={[0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      enableGraticule={true}
      graticuleLineColor="#dddddd"
      borderWidth={0.5}
      borderColor="#152538"
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
        {
          id: 'gradient',
          type: 'linearGradient',
          colors: [
            {
              offset: 0,
              color: '#000',
            },
            {
              offset: 100,
              color: 'inherit',
            },
          ],
        },
      ]}
      fill={[
        {
          match: {
            id: 'CAN',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'CHN',
          },
          id: 'lines',
        },
        {
          match: {
            id: 'ATA',
          },
          id: 'gradient',
        },
      ]}
      legends={[
        {
          anchor: 'bottom-left',
          direction: 'column',
          justify: true,
          translateX: 20,
          translateY: -100,
          itemsSpacing: 0,
          itemWidth: 94,
          itemHeight: 18,
          itemDirection: 'left-to-right',
          itemTextColor: '#444444',
          itemOpacity: 0.85,
          symbolSize: 18,
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000000',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  )
}

export default Choropleth
