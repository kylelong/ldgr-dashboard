// Custom list of top users

import heart from '@/assets/heart.png'
const TopCustomers = () => {
  type Customer = {
    name: string
    email: string
    ltv: number
    color: string
  }
  const customers: Customer[] = [
    {
      name: 'Matthew Jinai',
      email: 'mjiani@goldmansachs.com',
      ltv: 22000,
      color: 'bg-[#d4af37]',
    },
    {
      name: 'Taylor Hayberry',
      email: 'tayhay@jpmorgan.com',
      ltv: 19120,
      color: 'bg-[#C0C0C0]',
    },
    {
      name: 'Armani Lucas',
      email: 'alucas@citi.com',
      ltv: 17003,
      color: 'bg-[#CD7F32]',
    },
    {
      name: 'Gabriella Ferrera',
      email: 'gabf@boa.com',
      ltv: 15500,
      color: 'bg-gray-200',
    },
    {
      name: 'Jack Nelson',
      email: 'jacknel@stripe.com',
      ltv: 12300,
      color: 'bg-gray-200',
    },
  ]
  const ShineButton = () => {
    return (
      <button className="group/button relative inline-flex h-9 items-center justify-center overflow-hidden rounded-md bg-red-500 px-4 py-1.5 text-xs font-normal text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-red-500/30">
        <div className="flex items-center space-x-2">
          <img src={heart} className="h-4 w-4 flex-shrink-0" />
          <span className="text-sm">Email</span>
        </div>
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
          <div className="relative h-full w-8 bg-white/20" />
        </div>
      </button>
    )
  }
  return (
    <div className="relative top-2 flex flex-col items-center">
      <div className="relative flex flex-col justify-start">
        {customers.map((customer, index) => (
          <div key={customer.email} className="my-1 flex w-96 justify-between">
            <div className="flex items-center space-x-5">
              <div
                style={{
                  fontFamily: "'Gaegu', sans-serif",
                }}
                className={`${customer.color} flex h-7 w-7 items-center justify-center rounded-full text-2xl font-bold`}
              >
                {index + 1}
              </div>

              <div>
                <div className="text-lg">{customer.name}</div>
                <div className="text-sm">
                  <span className="mr-[1px] font-bold text-green-500">$</span>
                  <span className="font-bold text-gray-700">
                    {String(customer.ltv).replace(/(.)(?=(\d{3})+$)/g, '$1,')}
                  </span>
                </div>
              </div>
            </div>

            <ShineButton />
          </div>
        ))}
      </div>
    </div>
  )
}
export default TopCustomers
