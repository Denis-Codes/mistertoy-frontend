import React, { useEffect, useRef, useState } from 'react'
import { useEffectUpdate } from '../customHooks/useEffectUpdate'
import MultiSelect from './MultiSelect'
import { toyService } from '../services/toy.service.js'
import { utilService } from '../services/util.service.js'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export function ToyFilter({ filterBy, onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })
  const debouncedOnSetFilter = useRef(utilService.debounce(onSetFilter, 300))

  useEffectUpdate(() => {
    debouncedOnSetFilter.current(filterByToEdit)
  }, [filterByToEdit])

  function handleChange({ target }) {
    let { value, name: field, type } = target
    value = type === 'number' ? +value : value
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
  }

  function handleLabelsChange(labels) {
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, labels }))
  }

  function handleInStockChange({ target }) {
    let value = target.value
    if (value === 'true') value = true
    else if (value === 'false') value = false
    else value = undefined
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, inStock: value }))
  }

  return (
    <>
      <h2>Toys Filter</h2>
      <div className="toy-filter">
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="name"
          name="txt"
          label="Name"
          variant="outlined"
          value={filterByToEdit.txt}
          onChange={handleChange}
        />

        <TextField
          id="maxPrice"
          name="maxPrice"
          label="Max Price"
          type="number"
          variant="outlined"
          value={filterByToEdit.maxPrice || ''}
          onChange={handleChange}
        />

        <FormControl variant="outlined" sx={{ m: 1, width: '25ch' }}>
          <InputLabel id="inStock-label">In Stock</InputLabel>
          <Select
            labelId="inStock-label"
            id="inStock"
            name="inStock"
            value={filterByToEdit.inStock ?? ''}
            onChange={handleInStockChange}
            label="In Stock"
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="true">In Stock</MenuItem>
            <MenuItem value="false">Out of Stock</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" sx={{ m: 1, width: '25ch' }}>
          <InputLabel id="labels-label">Labels</InputLabel>
          <Select
            labelId="labels-label"
            id="labels"
            name="labels"
            multiple
            value={filterByToEdit.labels || []}
            onChange={handleChange}
            label="Labels"
          >
            {toyService.getToyLabels().map((label) => (
              <MenuItem key={label} value={label}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      </div>
    </>
  )
}
