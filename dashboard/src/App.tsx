import React from 'react'
import LineChart from './LineChart'
import useFetchData from './useFetchData'
import { ResponsiveBar } from '@nivo/bar'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import { ArrowDownRightIcon } from '@heroicons/react/24/solid'
import { BanknotesIcon } from '@heroicons/react/24/outline'
import Button from './Button'

const App = () => {
  // const { data, loading } = useFetchData()

  const data = [
    {
      id: 'Yearly',
      color: 'hsl(220, 60%, 40%)',
      data: [
        {
          x: 'Jan',
          y: 150,
        },
        {
          x: 'Feb',
          y: 115,
        },
        {
          x: 'Mar',
          y: 175,
        },
        {
          x: 'Apr',
          y: 248,
        },
        {
          x: 'May',
          y: 160,
        },
        {
          x: 'June',
          y: 121,
        },
        {
          x: 'July',
          y: 277,
        },
        {
          x: 'Aug',
          y: 184,
        },
        {
          x: 'Sept',
          y: 168,
        },
        {
          x: 'Oct',
          y: 34,
        },
        {
          x: 'Nov',
          y: 189,
        },
        {
          x: 'Dec',
          y: 217,
        },
      ],
    },
    {
      id: 'Monthly',
      color: 'hsl(205 100% 50%)',
      data: [
        {
          x: 'Jan',
          y: 120,
        },
        {
          x: 'Feb',
          y: 101,
        },
        {
          x: 'Mar',
          y: 143,
        },
        {
          x: 'Apr',
          y: 210,
        },
        {
          x: 'May',
          y: 130,
        },
        {
          x: 'June',
          y: 121,
        },
        {
          x: 'July',
          y: 277,
        },
        {
          x: 'Aug',
          y: 184,
        },
        {
          x: 'Sept',
          y: 168,
        },
        {
          x: 'Oct',
          y: 34,
        },
        {
          x: 'Nov',
          y: 189,
        },
        {
          x: 'Dec',
          y: 217,
        },
      ],
    },
  ]

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
          <BanknotesIcon className="h-7 w-7" />
        </div>
        <h3 className="text-center text-2xl font-bold">
          Annual Recurring Revenue
        </h3>
      </div>
      {false ? (
        <p className="text-center">Loading data...</p>
      ) : (
        <LineChart data={data} />
      )}
      <div className="flex justify-center">
        <Button text="Prev" />
        <Button text="Next" />
      </div>
    </div>
  )
}

export default App
