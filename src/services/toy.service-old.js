import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service-old.js'

const STORAGE_KEY = 'toyDB'
const MAX_PRICE = 1000000
_createRandomToys()

export const toyService = {
    query,
    getById,
    save,
    remove,
    getEmptyToy
    
}

function query(filterBy = {}) {
    return storageService.query(STORAGE_KEY)
        .then(toys => {
            if (!filterBy.txt) filterBy.txt = ''
            if (!filterBy.maxPrice) filterBy.maxPrice = MAX_PRICE
            const regExp = new RegExp(filterBy.txt, 'i')
            return toys.filter(toy =>
                (regExp.test(toy.vendor) || regExp.test(toy.name)) &&
                toy.price <= filterBy.maxPrice &&
                (filterBy.inStock === undefined || toy.inStock === filterBy.inStock)
            )
        })
}

function getById(toyId) {
    return storageService.get(STORAGE_KEY, toyId)
}

function remove(toyId) {
    // return Promise.reject('Not now!')
    return storageService.remove(STORAGE_KEY, toyId)
}

function save(toy) {
    if (toy._id) {
        return storageService.put(STORAGE_KEY, toy)
    } else {
        // when switching to backend - remove the next line
        toy.owner = userService.getLoggedinUser()
        return storageService.post(STORAGE_KEY, toy)
    }
}

function _createRandomToys() {
    let toys = utilService.loadFromStorage(STORAGE_KEY)
    if (!toys || !toys.length) {
        toys = []
        for (var i = 0; i < 10; i++) {
            toys.push(getRandomToy())
        }
    }
    utilService.saveToStorage(STORAGE_KEY, toys)
}

function getRandomToy() {
    return {
        _id: utilService.makeId(),
        name: _getRandomName(),
        price: _getRandomPrice(),
        labels: _getRandomLabels(),
        createdAt: Date.now(),
        inStock: Math.random() < 0.5,
    }
}
function _getRandomName() {
    const names = ['Teddy Bear', 'Action Figure', 'Doll', 'Lego Set', 'Puzzle', 'Race Car', 'Drone', 'Board Game']
    return names[Math.floor(Math.random() * names.length)]
}

function _getRandomPrice(min = 10, max = 100) {
    return (Math.random() * (max - min) + min).toFixed(2)
}

function _getRandomLabels() {
    const allLabels = ['Educational', 'Outdoor', 'Indoor', 'Electronic', 'DIY', 'Creative', 'Sports', 'Collectible']
    const numLabels = Math.floor(Math.random() * allLabels.length) + 1
    const labels = []
    while (labels.length < numLabels) {
        const label = allLabels[Math.floor(Math.random() * allLabels.length)]
        if (!labels.includes(label)) {
            labels.push(label)
        }
    }
    return labels
}

function getEmptyToy() {
    return {
        name: '',
        price: '',
        labels: [],
        inStock: true,
    }
}

// MODEL
const toy = {
    _id: 't101',
    name: 'Talking Doll',
    price: 123,
    labels: ['Doll', 'Battery Powered', 'Baby'],
    createdAt: 1631031801011,
    inStock: true,
}
