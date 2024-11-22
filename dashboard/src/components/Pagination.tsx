import React from 'react'

interface PaginationProps {
  currentPage: number
  totalDots: number
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalDots }) => {
  return (
    <div className="flex space-x-2">
      {Array.from({ length: totalDots }, (_, index) => (
        <div
          key={index}
          className={`h-3 w-3 rounded-full ${
            currentPage >= index ? 'bg-green-500' : 'bg-gray-200'
          }`}
        />
      ))}
    </div>
  )
}

export default Pagination
