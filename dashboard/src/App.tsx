import { useState, useEffect } from 'react'
import LineChart from './LineChart'
import CACLine from './CACLine'
import Pie from './Pie'
import AreaBump from './AreaBump'
import Marimekko from './Marimekko'
import useFetchData from './useFetchData'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import { ArrowDownRightIcon } from '@heroicons/react/24/solid'
import NumberFlow from '@number-flow/react'
import {
  ShoppingBagIcon,
  CurrencyDollarIcon,
  BanknotesIcon,
  NumberedListIcon,
  UserPlusIcon,
} from '@heroicons/react/24/outline'
import Button from './Button'
import Pagination from './Pagination'
import chart from './assets/bar-chart.png'

const App = () => {
  const { data, loading } = useFetchData()
  const [index, setIndex] = useState<number>(0)
  type Numbers = {
    runway: number
    burn: number
    growthRate: number
    churn: number
  }
  const [numbers, setNumbers] = useState<Numbers>({
    runway: 0,
    burn: 0,
    growthRate: 0,
    churn: 0,
  })
  const getRandomNumber = (min: number, max: number): number => {
    return Math.random() * (max - min) + min
  }

  const updateNumbers = () => {
    setNumbers({
      runway: parseFloat(getRandomNumber(2.1, 5.9).toFixed(1)),
      burn: Math.floor(getRandomNumber(217, 650)),
      growthRate: Math.floor(getRandomNumber(5, 30)),
      churn: Math.floor(getRandomNumber(1, 7)),
    })
  }
  const TOTAL_PAGES = 5

  type Icon = React.ComponentType<React.SVGProps<SVGSVGElement>>

  type HeaderData = {
    img: Icon
    header: string
    chart: any
  }

  interface IconProps {
    icon: Icon
  }

  const IconDisplay: React.FC<IconProps> = ({ icon: Icon }) => {
    return <Icon className="h-7 w-7" />
  }

  // Store the component, not the JSX element
  const headers: HeaderData[] = [
    {
      img: BanknotesIcon, // Store the component here
      header: 'Annual Recurring Revenue',
      chart: <LineChart data={data} />,
    },
    {
      img: ShoppingBagIcon, // https://nivo.rocks/pie/
      header: 'Expenses',
      chart: <Pie />,
    },
    {
      img: CurrencyDollarIcon, // https://nivo.rocks/area-bump/
      header: 'Cash Flow',
      chart: <AreaBump />,
    },
    {
      img: NumberedListIcon, // stack bar chart - https://nivo.rocks/marimekko/
      header: 'Margins',
      chart: <Marimekko />,
    },
    {
      img: UserPlusIcon, // Store the component here - line chart
      header: 'Customer Acquisition Cost',
      chart: <CACLine />,
    },
  ]

  const handleClick = (direction: 'prev' | 'next') => {
    setIndex((prevIndex) => {
      if (direction === 'prev') {
        return prevIndex === 0 ? TOTAL_PAGES - 1 : prevIndex - 1
      }
      if (direction === 'next') {
        return prevIndex === TOTAL_PAGES - 1 ? 0 : prevIndex + 1
      }
      return prevIndex
    })
  }
  useEffect(() => {
    updateNumbers()
  }, [index])

  return (
    <div className="flex w-screen flex-col items-center">
      <div className="h-24 w-screen bg-white p-4">
        <div className="flex items-center justify-between">
          <div>
            <img src={chart} />
            <div
              className="text-lg"
              style={{
                fontFamily: "'Gaegu', sans-serif",
                fontWeight: 700,
                fontStyle: 'normal',
                fontSize: '24px',
              }}
            >
              Ldgr
            </div>
          </div>
          <div className="h-10 w-10 rounded-full bg-blue-400 p-2 text-center text-white hover:cursor-pointer hover:opacity-75">
            KL
          </div>
        </div>
      </div>
      <div className="w-[1000px] space-y-3 p-4">
        <div className="flex w-full justify-between rounded-md p-4 shadow-md">
          <div className="flex flex-col">
            <h5 className="text-lg font-bold text-gray-500">Runway</h5>
            <div className="flex items-center">
              <span className="text-lg font-bold text-green-600">$</span>
              <h5 className="text-lg font-bold">
                <NumberFlow value={numbers.runway} />M
              </h5>

              <div className="ml-1 flex items-center">
                <ArrowDownRightIcon className="h-3 w-3 stroke-red-400" />
                <h5 className="text-sm font-bold text-red-400">8%</h5>
              </div>
            </div>
          </div>
          <div>
            <h5 className="text-lg font-bold text-gray-500">Burn Rate</h5>
            <div className="flex">
              <span className="text-lg font-bold text-green-600">$</span>
              <h5 className="text-lg font-bold">
                <span className="">
                  <NumberFlow value={numbers.burn} />k
                </span>{' '}
                <span className="text-sm text-gray-400">/yr</span>
              </h5>
              <div className="ml-1 flex items-center">
                <ArrowDownRightIcon className="h-3 w-3 stroke-green-400" />
                <h5 className="text-sm font-bold text-green-400">5%</h5>
              </div>
            </div>
          </div>
          <div>
            <h5 className="text-lg font-bold text-gray-500">
              Revenue Growth Rate
            </h5>
            <div className="flex space-x-2">
              <div>
                <h5 className="text-lg font-bold">
                  <NumberFlow value={numbers.growthRate} />%
                </h5>
              </div>
              <div className="ml-1 flex items-center">
                <ArrowUpRightIcon className="h-3 w-3 stroke-green-400" />
                <h5 className="text-sm font-bold text-green-400">30%</h5>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h5 className="text-lg font-bold text-gray-500">Churn</h5>
            <div className="flex space-x-2">
              <div className="flex">
                <h5 className="text-lg font-bold">
                  <NumberFlow value={numbers.churn} />%
                </h5>
              </div>
              <div className="ml-1 flex items-center">
                <ArrowUpRightIcon className="h-3 w-3 stroke-red-400" />
                <h5 className="text-sm font-bold text-red-400">0.5%</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-3">
          <div className="flex w-12 justify-center rounded-md bg-gray-100 p-2">
            <IconDisplay icon={headers[index].img} />
          </div>
          <h3 className="text-center text-2xl font-bold">
            {headers[index].header}
          </h3>
        </div>
        {loading ? (
          <p className="text-center">Loading data...</p>
        ) : (
          <div className="h-96 rounded-md bg-white shadow-md">
            {headers[index].chart}
          </div>
        )}
        <div className="flex flex-col items-center">
          <div className="mt-4">
            <Pagination currentPage={index} totalDots={TOTAL_PAGES} />
          </div>
          <div className="mt-2 flex justify-center">
            <Button text="Prev" action={() => handleClick('prev')} />
            <Button text="Next" action={() => handleClick('next')} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
