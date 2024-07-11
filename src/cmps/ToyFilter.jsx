// // import { useEffect, useRef, useState } from "react"
// // import { useEffectUpdate } from "../customHooks/useEffectUpdate.js"

// // import { toyService } from "../services/toy.service.js"
// // import { utilService } from "../services/util.service.js"
// // import { ToySort } from "./ToySort.jsx"
// // // import MultiSelect from "./Multiselect.jsx"

// // const toyLabels = toyService.getToyLabels()

// // export function ToyFilter({ filterBy, onSetFilter, sortBy, onSetSort }) {
// //     const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })
// //     const debouncedOnSetFilter = useRef(utilService.debounce(onSetFilter, 300))

// //     useEffectUpdate(() => {
// //         debouncedOnSetFilter.current(filterByToEdit)
// //     }, [filterByToEdit])

// //     // function handleChange({ target }) {
// //     //     let { value, name: field, type } = target
// //     //     value = type === 'number' ? +value : value
// //     //     setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
// //     // }

// //     function handleChange({ target }) {
// //         let { value, name: field, type } = target
// //         if (type === 'select-multiple') {
// //             console.log('target.selectedOptions:', target.selectedOptions)
// //             value = Array.from(target.selectedOptions, option => option.value || [])
// //             console.log('value:', value)
// //         }
// //         value = (type === 'number') ? +value || '' : value
// //         setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
// //     }

// //     function onSubmitFilter(ev) {
// //         ev.preventDefault()
// //         onSetFilter(filterByToEdit)
// //     }

// //     const { txt, inStock, labels } = filterByToEdit

// //     return (
// //         <section className="toy-filter full main-layout">
// //             <h2>Toys Filter/Sort</h2>
// //             <form onSubmit={onSubmitFilter}>
// //                 <label htmlFor="name">Name:</label>
// //                 <input
// //                     onChange={handleChange}
// //                     value={txt}
// //                     id="name"
// //                     type="text"
// //                     placeholder="Search by name"
// //                     name="txt"
// //                 />

// //                 <label htmlFor="maxPrice">Max price:</label>
// //                 <input
// //                     type="number"
// //                     id="maxPrice"
// //                     name="maxPrice"
// //                     placeholder="By max price"
// //                     value={filterByToEdit.maxPrice || ''}
// //                     onChange={handleChange}
// //                 />

// //                 <label htmlFor="inStock">In Stock:</label>
// //                 <select name="inStock" value={inStock || ''} onChange={handleChange}>
// //                     <option value="">All</option>
// //                     <option value="true">In Stock</option>
// //                     <option value="false">Not in stock</option>
// //                 </select>
// //                 {/* <select id="inStock" name="inStock" value={filterByToEdit.inStock ?? ''} onChange={handleInStockChange}>
// //                     <option value="">All</option>
// //                     <option value="true">In Stock</option>
// //                     <option value="false">Out of Stock</option>
// //                     </select> */}
// //                 <div>
// //                     <select
// //                         multiple
// //                         name="labels"
// //                         value={labels || []}
// //                         onChange={handleChange}
// //                     >
// //                         <option value="">Labels</option>
// //                         <>
// //                             {toyLabels.map(label => (
// //                                 <option key={label} value={label}>
// //                                     {label}
// //                                 </option>
// //                             ))}
// //                         </>
// //                     </select>
// //                 </div>
// //             </form>
// //             {/* <ToySort sortBy={sortBy} onSetSort={onSetSort} /> */}
// //         </section>
// //     )
// // }


// // import React, { useState, useRef } from 'react';
// // import { useEffectUpdate } from '../customHooks/useEffectUpdate';
// // import MultiSelect from './MultiSelect';

// import { useEffect, useRef, useState } from "react"
// import { useEffectUpdate } from "../customHooks/useEffectUpdate.js"

// import { toyService } from "../services/toy.service.js"
// import { utilService } from "../services/util.service.js"
// // import { ToySort } from "./ToySort.jsx"
// import MultiSelect from "./MultiSelect.jsx"

// export function ToyFilter({ filterBy, onSetFilter }) {
//   const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })
//   const debouncedOnSetFilter = useRef(utilService.debounce(onSetFilter, 300))

//   useEffectUpdate(() => {
//     debouncedOnSetFilter.current(filterByToEdit)
//   }, [filterByToEdit])

//   function handleChange({ target }) {
//     let { value, name: field, type } = target
//     value = type === 'number' ? +value : value
//     setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
//   }

//   function handleLabelsChange(labels) {
//     setFilterByToEdit((prevFilter) => ({ ...prevFilter, labels }))
//   }

//   function handleInStockChange({ target }) {
//     let value = target.value
//     if (value === "true") value = true
//     else if (value === "false") value = false
//     else value = undefined
//     setFilterByToEdit((prevFilter) => ({ ...prevFilter, inStock: value }))
//   }

//   return (
//     <>
//       <h2>Toys Filter</h2>
//     <section className="toy-filter ">
//       <form>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="txt"
//           placeholder="By name"
//           value={filterByToEdit.txt}
//           onChange={handleChange}
//         />

//         <label htmlFor="maxPrice">Max price:</label>
//         <input
//           type="number"
//           id="maxPrice"
//           name="maxPrice"
//           placeholder="By max price"
//           value={filterByToEdit.maxPrice || ''}
//           onChange={handleChange}
//         />

//         <label htmlFor="inStock">In Stock:</label>
//         <select id="inStock" name="inStock" value={filterByToEdit.inStock ?? ''} onChange={handleInStockChange}>
//           <option value="">All</option>
//           <option value="true">In Stock</option>
//           <option value="false">Out of Stock</option>
//         </select>

//         <label htmlFor="labels">Labels:</label>
//         <MultiSelect
//           selectedLabels={filterByToEdit.labels}
//           onLabelsChange={handleLabelsChange}
//         />
//       </form>
//     </section>
//     </>
//   )
// }

import React, { useEffect, useRef, useState } from 'react';
import { useEffectUpdate } from '../customHooks/useEffectUpdate';
import MultiSelect from './MultiSelect';
import { toyService } from '../services/toy.service.js';
import { utilService } from '../services/util.service.js';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function ToyFilter({ filterBy, onSetFilter }) {
  const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy });
  const debouncedOnSetFilter = useRef(utilService.debounce(onSetFilter, 300));

  useEffectUpdate(() => {
    debouncedOnSetFilter.current(filterByToEdit);
  }, [filterByToEdit]);

  function handleChange({ target }) {
    let { value, name: field, type } = target;
    value = type === 'number' ? +value : value;
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }));
  }

  function handleLabelsChange(labels) {
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, labels }));
  }

  function handleInStockChange({ target }) {
    let value = target.value;
    if (value === 'true') value = true;
    else if (value === 'false') value = false;
    else value = undefined;
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, inStock: value }));
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
  );
}
