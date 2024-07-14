import { useEffect, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export function ToySort({ sortBy, onSetSort }) {
  const [sortByToEdit, setSortByToEdit] = useState({ ...sortBy });

  useEffect(() => {
    onSetSort(sortByToEdit);
  }, [sortByToEdit]);

  function handleChange(event) {
    const { name, value } = event.target;
    setSortByToEdit(prevSort => ({
      ...prevSort,
      [name]: name === 'desc' ? -prevSort.desc : value,
    }));
  }

  return (
    <form className="toy-sort">
      <FormControl variant="outlined" fullWidth>
        <InputLabel>Sort by</InputLabel>
        <Select
          name="type"
          value={sortByToEdit.type}
          onChange={handleChange}
          label="Sort by"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="price">Price</MenuItem>
          <MenuItem value="createdAt">Date</MenuItem>
        </Select>
      </FormControl>
      <label>
        <Checkbox
          name="desc"
          checked={sortByToEdit.desc < 0}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Descending' }}
        />
        Descending
      </label>
    </form>
  );
}
