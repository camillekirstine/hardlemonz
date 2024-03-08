import { useEffect, useState } from 'react'

export const DashboardPage = () => {
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem('orders');
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  const [summary, setSummary] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    totalCost: 0,
    totalProfit: 0,
  })

  useEffect(() => {
    const calculateSummary = () => {
      const totalOrders = orders.length
      const totalRevenue = orders.reduce((acc, order) => acc + +order.total, 0)
      const totalCost = orders.reduce(
        (acc, order) =>
          acc +
          order.items.reduce(
            (acc, item) => acc + item.priceToMake * item.quantity,
            0
          ),
        0
      )
      const totalProfit = totalRevenue - totalCost
  
      setSummary({
        totalOrders,
        totalRevenue,
        totalCost,
        totalProfit,
      })
    }
  
    calculateSummary();
  }, [orders])

  return (
    <div className='max-w-4xl mx-auto px-6 pt-40 pb-20'>
      <h1 className='font-semibold title text-center mb-6'>Dashboard</h1>
      <div className='rounded-lg pb-10'>
       
        <div className='grid grid-cols-2 gap-4'>
          <div className='dashBox text-center p-4  shadow'>
            <p><strong>Total Orders</strong></p>
            <p className='outcome'>{summary.totalOrders}</p>
          </div>
          <div className='dashBox text-center p-4  shadow'>
            <p><strong>Total Revenue</strong></p>
            <p className='outcome'>${summary.totalRevenue.toFixed(2)}</p>
          </div>
          <div className='dashBox text-center p-4  shadow'>
            <p><strong>Total Cost</strong></p>
            <p className='outcome'>${summary.totalCost.toFixed(2)}</p>
          </div>
          <div className='dashBox text-center p-4  shadow'>
            <p><strong>Total Profit</strong></p>
            <p className='outcome'>${summary.totalProfit.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
