import { useState } from 'react'
import LineChart from './LineChart'
import useFetchData from './useFetchData'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import { ArrowDownRightIcon } from '@heroicons/react/24/solid'
import {
  ShoppingBagIcon,
  CurrencyDollarIcon,
  BanknotesIcon,
  NumberedListIcon,
  UserPlusIcon,
} from '@heroicons/react/24/outline'
import Button from './Button'
import Pagination from './Pagination'

const App = () => {
  const { data, loading } = useFetchData()
  const [index, setIndex] = useState<number>(1)
  const TOTAL_PAGES = 5

  type Icon = React.ComponentType<React.SVGProps<SVGSVGElement>>

  type HeaderData = {
    img: Icon
    header: string
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
    },
    {
      img: ShoppingBagIcon, // https://nivo.rocks/pie/
      header: 'Expenses',
    },
    {
      img: CurrencyDollarIcon, // https://nivo.rocks/area-bump/
      header: 'Cash Flow',
    },
    {
      img: NumberedListIcon, // stack bar chart - https://nivo.rocks/marimekko/
      header: 'Margins',
    },
    {
      img: UserPlusIcon, // Store the component here - line chart
      header: 'Customer Acquisition Cost',
    },
  ]

  const handleClick = (direction: 'prev' | 'next') => {
    setIndex((prevIndex) => {
      if (direction === 'prev') {
        return prevIndex === 1 ? TOTAL_PAGES : prevIndex - 1
      }
      if (direction === 'next') {
        return prevIndex === TOTAL_PAGES ? 1 : prevIndex + 1
      }
      return prevIndex
    })
  }

  return (
    <div className="w-[1000px] space-y-3 p-4">
      <div className="flex w-full justify-between rounded-md p-4 shadow-md">
        <div className="flex flex-col">
          <h5 className="text-lg font-bold text-gray-500">Runway</h5>
          <div className="flex items-center">
            <span className="text-lg font-bold text-green-600">$</span>
            <h5 className="text-lg font-bold">3.4M</h5>
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
              <span className="">572k</span>{' '}
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
              <h5 className="text-lg font-bold">10%</h5>
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
              <h5 className="text-lg font-bold">2%</h5>
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
          <IconDisplay icon={headers[index - 1].img} />
        </div>
        <h3 className="text-center text-2xl font-bold">
          {headers[index - 1].header}
        </h3>
      </div>
      {loading ? (
        <p className="text-center">Loading data...</p>
      ) : (
        <LineChart data={data} />
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
  )
}

export default App
