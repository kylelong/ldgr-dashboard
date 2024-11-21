import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetchData = () => {
  type PaymentData = {
    start_date: string
    end_date: string
    plan: string
    price: number
  }

  const [data, setData] = useState<PaymentData[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const url = import.meta.env.VITE_API_URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/stripe/`)
        setData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, loading }
}

export default useFetchData
