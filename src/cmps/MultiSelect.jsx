import React from 'react'
import { useTheme } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function MultiSelect({ selectedLabels = [], onLabelsChange }) {
  const ITEM_HEIGHT = 48
  const ITEM_PADDING_TOP = 8
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  }

  const labels = [
    'On wheels',
    'Box game',
    'Art',
    'Baby',
    'Doll',
    'Puzzle',
    'Outdoor',
    'Battery Powered',
  ]

  const theme = useTheme()

  const handleChange = (event) => {
    const {
      target: { value },
    } = event
    onLabelsChange(
      typeof value === 'string' ? value.split(',') : value,
    )
  }

  function getStyles(label, selectedLabels, theme) {
    return {
      fontWeight:
        selectedLabels.indexOf(label) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    }
  }

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="multi-select-label">Labels</InputLabel>
        <Select
          labelId="multi-select-label"
          id="multi-select"
          multiple
          value={selectedLabels}
          onChange={handleChange}
          input={<OutlinedInput label="Labels" />}
          MenuProps={MenuProps}
        >
          {labels.map((label) => (
            <MenuItem
              key={label}
              value={label}
              style={getStyles(label, selectedLabels, theme)}
            >
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
