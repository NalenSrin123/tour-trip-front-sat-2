// Resizes and re-compresses an image file client-side before storing it.
// This is what actually fixes "images too large" errors — not raising a
// quota somewhere, but making the images smaller in the first place. Also
// worth keeping even after moving to a real backend/database, since
// smaller images mean faster uploads and page loads either way.
export function compressImage(file, { maxWidth = 1600, maxHeight = 1600, quality = 0.8 } = {}) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    const objectUrl = URL.createObjectURL(file)

    img.onload = () => {
      URL.revokeObjectURL(objectUrl)
      let { width, height } = img
      if (width > maxWidth || height > maxHeight) {
        const scale = Math.min(maxWidth / width, maxHeight / height)
        width = Math.round(width * scale)
        height = Math.round(height * scale)
      }
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      canvas.getContext('2d').drawImage(img, 0, 0, width, height)
      resolve(canvas.toDataURL('image/jpeg', quality))
    }
    img.onerror = (error) => {
      URL.revokeObjectURL(objectUrl)
      reject(error)
    }
    img.src = objectUrl
  })
}