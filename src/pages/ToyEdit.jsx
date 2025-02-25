// import { useEffect, useState } from "react"
// import { Link, useNavigate, useParams } from "react-router-dom"

// import { toyService } from "../services/toy.service.js"
// import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"
// import { saveToy } from "../store/actions/toy.actions.js"


// export function ToyEdit() {
//     const navigate = useNavigate()
//     const [toyToEdit, setToyToEdit] = useState(toyService.getEmptyToy())
//     const { toyId } = useParams()

//     useEffect(() => {
//         if (toyId) loadToy()
//     }, [])

//     function loadToy() {
//         toyService.getById(toyId)
//             .then(toy => setToyToEdit(toy))
//             .catch(err => {
//                 console.log('Had issues in toy edit', err)
//                 navigate('/toy')
//             })
//     }

//     function handleChange({ target }) {
//         let { value, type, name: field } = target
//         value = type === 'number' ? +value : value
//         setToyToEdit((prevToy) => ({ ...prevToy, [field]: value }))
//     }

//     function onSaveToy(ev) {
//         ev.preventDefault()
//         if (!toyToEdit.price) toyToEdit.price = 1000
//         saveToy(toyToEdit)
//             .then(() => {
//                 showSuccessMsg('Toy Saved!')
//                 navigate('/toy')
//             })
//             .catch(err => {
//                 console.log('Had issues in toy details', err)
//                 showErrorMsg('Had issues in toy details')
//             })
//     }

//     return (
//         <section className="toy-edit">
//             <h2>{toyToEdit._id ? 'Edit' : 'Add'} Toy</h2>

//             <form onSubmit={onSaveToy} >
//                 <label htmlFor="vendor">Vendor: </label>
//                 <input type="text"
//                     name="vendor"
//                     id="vendor"
//                     placeholder="Enter vendor..."
//                     value={toyToEdit.vendor}
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="price">Price: </label>
//                 <input type="number"
//                     name="price"
//                     id="price"
//                     placeholder="Enter price"
//                     value={toyToEdit.price}
//                     onChange={handleChange}
//                 />

//                 <div>
//                     <button>{toyToEdit._id ? 'Save' : 'Add'}</button>
//                     <Link to="/toy">Cancel</Link>
//                 </div>
//             </form>
//         </section>
//     )
// }

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toyService } from "../services/toy.service.js";
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js";
import { saveToy } from "../store/actions/toy.actions.js";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export function ToyEdit() {
  const navigate = useNavigate();
  const [toyToEdit, setToyToEdit] = useState(toyService.getEmptyToy());
  const { toyId } = useParams();

  useEffect(() => {
    if (toyId) loadToy();
  }, [toyId]);

  function loadToy() {
    toyService.getById(toyId)
      .then(toy => setToyToEdit(toy))
      .catch(err => {
        console.log('Had issues in toy edit', err);
        navigate('/toy');
      });
  }

  function handleChange({ target }) {
    let { value, type, name: field } = target;
    value = type === 'number' ? +value : value;
    setToyToEdit((prevToy) => ({ ...prevToy, [field]: value }));
  }

  function onSaveToy(ev) {
    ev.preventDefault();
    if (!toyToEdit.price) toyToEdit.price = 1000;
    saveToy(toyToEdit)
      .then(() => {
        showSuccessMsg('Toy Saved!');
        navigate('/toy');
      })
      .catch(err => {
        console.log('Had issues in toy details', err);
        showErrorMsg('Had issues in toy details');
      });
  }

  return (
    <section className="toy-edit">
      <h2>{toyToEdit._id ? 'Edit' : 'Add'} Toy</h2>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={onSaveToy}
      >
        <TextField
          id="vendor"
          name="vendor"
          label="Vendor"
          variant="outlined"
          placeholder="Enter vendor..."
          value={toyToEdit.vendor}
          onChange={handleChange}
        />
        <TextField
          id="price"
          name="price"
          label="Price"
          type="number"
          variant="outlined"
          placeholder="Enter price"
          value={toyToEdit.price}
          onChange={handleChange}
        />
        <Stack spacing={2} direction="row">
          <Button variant="contained" type="submit">
            {toyToEdit._id ? 'Save' : 'Add'}
          </Button>
          <Button variant="outlined" component={Link} to="/toy">
            Cancel
          </Button>
        </Stack>
      </Box>
    </section>
  );
}
