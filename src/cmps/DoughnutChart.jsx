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
    return {
      labels: Object.keys(labelCounts),
      datasets: [
        {
          label: '# of Toys',
          data: Object.values(labelCounts),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1,
        },
      ],
    }
  }

  if (!chartData) return <div>Loading...</div>

  return <Doughnut data={chartData} />
}

