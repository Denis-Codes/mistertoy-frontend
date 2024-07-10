import { useEffect, useRef, useState } from "react"
import { useEffectUpdate } from "../customHooks/useEffectUpdate.js"

import { toyService } from "../services/toy.service.js"
import { utilService } from "../services/util.service.js"
import { ToySort } from "./ToySort.jsx"

const toyLabels = toyService.getToyLabels()

export function ToyFilter({ filterBy, onSetFilter, sortBy, onSetSort }) {
    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })
    const debouncedOnSetFilter = useRef(utilService.debounce(onSetFilter, 300))

    useEffectUpdate(() => {
        debouncedOnSetFilter.current(filterByToEdit)
    }, [filterByToEdit])

    // function handleChange({ target }) {
    //     let { value, name: field, type } = target
    //     value = type === 'number' ? +value : value
    //     setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    // }

    function handleChange({ target }) {
        let { value, name: field, type } = target
        if (type === 'select-multiple') {
            console.log('target.selectedOptions:', target.selectedOptions)
            value = Array.from(target.selectedOptions, option => option.value || [])
            console.log('value:', value)
        }
        value = (type === 'number') ? +value || '' : value
        setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    const { txt, inStock, labels } = filterByToEdit

    return (
        <section className="toy-filter full main-layout">
            <h2>Toys Filter/Sort</h2>
            <form onSubmit={onSubmitFilter}>
                <label htmlFor="name">Name:</label>
                <input
                    onChange={handleChange}
                    value={txt}
                    id="name"
                    type="text"
                    placeholder="Search by name"
                    name="txt"
                />

                <label htmlFor="maxPrice">Max price:</label>
                <input
                    type="number"
                    id="maxPrice"
                    name="maxPrice"
                    placeholder="By max price"
                    value={filterByToEdit.maxPrice || ''}
                    onChange={handleChange}
                />

                <label htmlFor="inStock">In Stock:</label>
                <select name="inStock" value={inStock || ''} onChange={handleChange}>
                    <option value="">All</option>
                    <option value="true">In Stock</option>
                    <option value="false">Not in stock</option>
                </select>
                {/* <select id="inStock" name="inStock" value={filterByToEdit.inStock ?? ''} onChange={handleInStockChange}>
                    <option value="">All</option>
                    <option value="true">In Stock</option>
                    <option value="false">Out of Stock</option>
                    </select> */}
                <div>
                    <select
                        multiple
                        name="labels"
                        value={labels || []}
                        onChange={handleChange}
                    >
                        <option value="">Labels</option>
                        <>
                            {toyLabels.map(label => (
                                <option key={label} value={label}>
                                    {label}
                                </option>
                            ))}
                        </>
                    </select>
                </div>
            </form>
            {/* <ToySort sortBy={sortBy} onSetSort={onSetSort} /> */}
        </section>
    )
}


