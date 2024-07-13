import React, { useEffect, useState } from 'react'
import { toyService, labels } from '../services/toy.service'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export function DoughnutChart() {
  const [chartData, setChartData] = useState(null)

  useEffect(() => {
    toyService.query().then(toys => {
      const labelCounts = countLabels(toys)
      setChartData(createChartData(labelCounts))
    })
  }, [])

  function countLabels(toys) {
    const labelCounts = labels.reduce((acc, label) => {
      acc[label] = 0
      return acc
    }, {})

    toys.forEach(toy => {
      toy.labels.forEach(label => {
        if (labelCounts[label] !== undefined) {
          labelCounts[label]++
        }
      })
    })

    return labelCounts
  }

  function createChartData(labelCounts) {
    const colors = ['#A31621', '#B1798C', '#B8AAC2', '#BFDBF7', '#628CAB', '#053C5E', '#125B75', '#196B81', '#1F7A8C', '#DB222A']

    // Generate color arrays
    const backgroundColors = Object.keys(labelCounts).map((_, index) => colors[index % colors.length] + '80') // 50% opacity
    const borderColors = Object.keys(labelCounts).map((_, index) => colors[index % colors.length])
    
    return {
      labels: Object.keys(labelCounts),
      datasets: [
        {
          label: '# of Toys',
          data: Object.values(labelCounts),
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
          hoverOffset: 10
        },
      ],
    }
  }

  if (!chartData) return <div>Loading...</div>

  const options = {
    maintainAspectRatio: false,
    responsive: true,
  }

  return (
    <div style={{ width: '400px', height: '400px', margin: 'auto' }}>
      <Doughnut data={chartData} options={options} />
    </div>
  )
}
