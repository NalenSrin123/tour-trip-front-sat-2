// Temporary persistence layer for destinations, backed by IndexedDB (not
// localStorage — localStorage caps out around 5-10MB per site, which
// photos blow through fast; IndexedDB comfortably handles much larger
// amounts of data, typically hundreds of MB to a few GB, and is still
// entirely client-side — no server, no install). This exists purely so
// the frontend has something real to read/write to while a real backend
// doesn't exist yet. Every function mirrors what a future API client
// would expose, so swapping this out for real HTTP calls later should
// mean changing this file only.

const DB_NAME = 'tourbook'
const DB_VERSION = 1
const STORE_NAME = 'destinations'

function openDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION)
    request.onupgradeneeded = () => {
      const db = request.result
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' })
      }
    }
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

export async function getDestinations() {
  const db = await openDb()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly')
    const request = tx.objectStore(STORE_NAME).getAll()
    request.onsuccess = () => {
      const results = request.result
      results.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
      resolve(results)
    }
    request.onerror = () => reject(request.error)
  })
}

export async function getDestination(id) {
  const db = await openDb()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly')
    const request = tx.objectStore(STORE_NAME).get(id)
    request.onsuccess = () => resolve(request.result ?? null)
    request.onerror = () => reject(request.error)
  })
}

export async function createDestination(destination) {
  const db = await openDb()
  const newDestination = {
    id: `dest_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    activeTours: 0,
    bookings: 0,
    ...destination,
  }
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite')
    tx.objectStore(STORE_NAME).add(newDestination)
    tx.oncomplete = () => resolve(newDestination)
    tx.onerror = () => reject(tx.error)
  })
}

// Merges `updates` into the existing destination — fields not included in
// `updates` (e.g. activeTours, bookings, createdAt) are left untouched.
export async function updateDestination(id, updates) {
  const db = await openDb()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite')
    const store = tx.objectStore(STORE_NAME)
    const getRequest = store.get(id)
    getRequest.onsuccess = () => {
      const existing = getRequest.result
      if (existing) store.put({ ...existing, ...updates })
    }
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
}

export async function updateDestinationStatus(id, status) {
  return updateDestination(id, { status })
}

export async function deleteDestination(id) {
  const db = await openDb()
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite')
    tx.objectStore(STORE_NAME).delete(id)
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
}