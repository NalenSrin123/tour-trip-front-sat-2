// Converts a File/Blob into a base64 data URL. Used so that images picked in
// a form survive navigation and page reloads when stored via
// destinationsService — a blob URL (URL.createObjectURL) only lives as long
// as the page that created it, so it can't be persisted the same way.
export function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = () => reject(reader.error)
    reader.readAsDataURL(file)
  })
}