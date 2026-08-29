import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminSidebar from '../../../components/layout/AdminSidebar'
import AdminHeader from '../../../components/layout/AdminHeader'

const DESCRIPTION_MAX_LENGTH = 500
const MAX_GALLERY_IMAGES = 10
const NAME_MAX_LENGTH = 100 // matches the VARCHAR(100) UNIQUE column on destinations.name

export default function CreateDestination({ onCancel, onSubmit }) {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('active')

  const [featuredImage, setFeaturedImage] = useState(null)
  const [galleryImages, setGalleryImages] = useState([])

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [descriptionLength, setDescriptionLength] = useState(0)
  const [successMessage, setSuccessMessage] = useState(null)

  const featuredInputRef = useRef(null)
  const galleryInputRef = useRef(null)
  const descriptionRef = useRef(null)

  // Object URLs are only for local preview; revoke them on unmount so we don't
  // leak memory if someone leaves this page open with several images staged.
  useEffect(() => {
    return () => {
      if (featuredImage) URL.revokeObjectURL(featuredImage.url)
      galleryImages.forEach((image) => URL.revokeObjectURL(image.url))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleFeaturedImageChange(event) {
    const file = event.target.files?.[0]
    if (!file) return

    // Revoke the previous preview URL before replacing it.
    setFeaturedImage((current) => {
      if (current) URL.revokeObjectURL(current.url)
      return { file, url: URL.createObjectURL(file) }
    })
    setErrors((current) => ({ ...current, featuredImage: undefined }))
    event.target.value = ''
  }

  function removeFeaturedImage() {
    setFeaturedImage((current) => {
      if (current) URL.revokeObjectURL(current.url)
      return null
    })
  }

  function handleGalleryImagesChange(event) {
    const files = Array.from(event.target.files ?? [])
    if (files.length === 0) return

    setGalleryImages((current) => {
      const remainingSlots = MAX_GALLERY_IMAGES - current.length
      const nextFiles = files.slice(0, remainingSlots)
      const nextImages = nextFiles.map((file) => ({
        id: `${file.name}-${file.lastModified}-${Math.random()}`,
        file,
        url: URL.createObjectURL(file),
      }))
      return [...current, ...nextImages]
    })

    event.target.value = ''
  }

  function removeGalleryImage(id) {
    setGalleryImages((current) => {
      const target = current.find((image) => image.id === id)
      if (target) URL.revokeObjectURL(target.url)
      return current.filter((image) => image.id !== id)
    })
  }

  // The description editor is a contentEditable div formatted via the
  // browser's built-in editing commands (document.execCommand). It's marked
  // deprecated in the spec but still fully supported in every major browser,
  // and it's what a lot of lightweight WYSIWYG toolbars use under the hood.
  // If richer needs come up later (undo history, structured JSON output,
  // custom paste rules), that's the point to move to a library like Tiptap.
  function syncDescriptionFromEditor() {
    const node = descriptionRef.current
    if (!node) return
    setDescription(node.innerHTML)
    setDescriptionLength(node.textContent.length)
  }

  function applyFormat(command, value = null) {
    descriptionRef.current?.focus()
    document.execCommand(command, false, value)
    syncDescriptionFromEditor()
  }

  function handleDescriptionInput() {
    syncDescriptionFromEditor()
  }

  function handleDescriptionPaste(event) {
    event.preventDefault()
    const node = descriptionRef.current
    if (!node) return

    // Paste as plain text only — avoids pulling in arbitrary formatting/markup
    // from other sites, and keeps the character limit easy to enforce.
    const currentLength = node.textContent.length
    const remaining = Math.max(0, DESCRIPTION_MAX_LENGTH - currentLength)
    const text = event.clipboardData.getData('text/plain').slice(0, remaining)
    document.execCommand('insertText', false, text)
    syncDescriptionFromEditor()
  }

  function handleDescriptionBeforeInput(event) {
    const node = descriptionRef.current
    if (!node) return
    const isDeletion = event.inputType?.startsWith('delete')
    if (!isDeletion && node.textContent.length >= DESCRIPTION_MAX_LENGTH) {
      event.preventDefault()
    }
  }

  function handleDescriptionLink() {
    const url = window.prompt('Link URL:')
    if (!url) return
    applyFormat('createLink', url)
  }

  function handleDescriptionImage() {
    const url = window.prompt('Image URL:')
    if (!url) return
    applyFormat('insertImage', url)
  }

  function validate() {
    const nextErrors = {}
    const trimmedName = name.trim()

    if (!trimmedName) {
      nextErrors.name = 'Destination name is required.'
    } else if (trimmedName.length > NAME_MAX_LENGTH) {
      nextErrors.name = `Destination name must be ${NAME_MAX_LENGTH} characters or fewer.`
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  function buildPayload(destinationStatus) {
    return {
      name: name.trim(),
      description,
      status: destinationStatus,
      featuredImage: featuredImage?.file ?? null,
      galleryImages: galleryImages.map((image) => image.file),
    }
  }

  async function handlePublish() {
  if (!validate()) return

  setIsSubmitting(true)
  try {
    // TODO: wire up to src/services once the create-destination API endpoint exists.
    const payload = buildPayload(status)
    if (onSubmit) {
      await onSubmit(payload)
    } else {
      console.log('Publish destination', payload)
      setSuccessMessage(`"${payload.name}" was published. (No API yet — this is a mock; full payload logged to the console.)`)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setTimeout(() => navigate('/destinations'), 1200)
    }
  } finally {
    setIsSubmitting(false)
  }
}

async function handleSaveDraft() {
  if (!validate()) return

  setIsSubmitting(true)
  try {
    // TODO: wire up to src/services once the create-destination API endpoint exists.
    const payload = buildPayload('inactive')
    if (onSubmit) {
      await onSubmit(payload)
    } else {
      console.log('Save destination as draft', payload)
      setSuccessMessage(`"${payload.name}" was saved as a draft. (No API yet — this is a mock; full payload logged to the console.)`)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setTimeout(() => navigate('/destinations'), 1200)
    }
  } finally {
    setIsSubmitting(false)
  }
}

  function handleCancel() {
    if (onCancel) {
      onCancel()
    } else {
      navigate('/destinations')
    }
  }

  return (
    <div className="min-h-screen bg-background text-on-background">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

      <main className="md:ml-sidebar-width min-h-[calc(100vh-4rem)] p-4 md:p-lg">
        <div className="w-full">
          {successMessage && (
            <div
              role="status"
              className="mb-6 md:mb-lg px-4 py-3 rounded-lg bg-secondary-container text-on-secondary-container text-body-md flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">check_circle</span>
              {successMessage}
            </div>
          )}
          {/* Page Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-lg gap-4 relative">
            <div>
              <h2 className="text-headline-xl text-on-surface">Create Destination</h2>
              <p className="text-body-lg text-on-surface-variant mt-1">
                Add a new location to your tour catalog.
              </p>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleCancel}
                disabled={isSubmitting}
                className="flex-1 sm:flex-none px-4 py-2 rounded-lg border border-outline-variant text-on-surface text-label-lg hover:bg-surface-container-high transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handlePublish}
                disabled={isSubmitting}
                className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-primary text-on-primary text-label-lg hover:bg-primary-container transition-colors flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined text-sm">publish</span>
                {isSubmitting ? 'Publishing…' : 'Publish Destination'}
              </button>
            </div>
          </div>

          {/* Main Form Layout */}
          <div className="grid grid-cols-1 gap-6 md:gap-lg lg:grid-cols-[minmax(0,2fr)_minmax(360px,1fr)]">
            {/* Left Column: Primary Information */}
            <div className="space-y-6 md:space-y-lg">
              {/* Basic Information Card */}
              <section className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-4 md:p-lg">
                <h3 className="text-headline-md text-on-surface mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">info</span>
                  Basic Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-label-md text-on-surface-variant mb-1" htmlFor="dest-name">
                      Destination Name
                    </label>
                    <input
                      id="dest-name"
                      type="text"
                      value={name}
                      maxLength={NAME_MAX_LENGTH}
                      onChange={(event) => {
                        setName(event.target.value)
                        if (errors.name) setErrors((current) => ({ ...current, name: undefined }))
                      }}
                      placeholder="e.g., Siem Reap"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'dest-name-error' : undefined}
                      className={`w-full px-4 py-2 bg-surface-container-high border-none rounded-lg focus:ring-2 text-body-lg text-on-surface ${
                        errors.name ? 'ring-2 ring-error focus:ring-error' : 'focus:ring-primary'
                      }`}
                    />
                    {errors.name && (
                      <p id="dest-name-error" className="text-label-md text-error mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>
                </div>
              </section>

              {/* Description Card */}
              <section className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-4 md:p-lg">
                <h3 className="text-headline-md text-on-surface mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">description</span>
                  Description
                </h3>
                <div>
                  <label className="block text-label-md text-on-surface-variant mb-1" htmlFor="dest-desc">
                    Detailed Description
                  </label>
                  <div className="px-2 md:px-md py-2 border-b border-outline-variant/50 flex flex-wrap items-center gap-1 md:gap-2 bg-surface-container-lowest mb-2">
                    <button
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => applyFormat('bold')}
                      aria-label="Bold"
                      className="p-1 rounded hover:bg-surface-container text-on-surface-variant transition-colors"
                    >
                      <span className="material-symbols-outlined text-[20px]">format_bold</span>
                    </button>
                    <button
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => applyFormat('italic')}
                      aria-label="Italic"
                      className="p-1 rounded hover:bg-surface-container text-on-surface-variant transition-colors"
                    >
                      <span className="material-symbols-outlined text-[20px]">format_italic</span>
                    </button>
                    <button
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => applyFormat('underline')}
                      aria-label="Underline"
                      className="p-1 rounded hover:bg-surface-container text-on-surface-variant transition-colors"
                    >
                      <span className="material-symbols-outlined text-[20px]">format_underlined</span>
                    </button>
                    <div className="hidden sm:block w-px h-4 bg-outline-variant mx-1" />
                    <button
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => applyFormat('insertUnorderedList')}
                      aria-label="Bulleted list"
                      className="p-1 rounded hover:bg-surface-container text-on-surface-variant transition-colors"
                    >
                      <span className="material-symbols-outlined text-[20px]">format_list_bulleted</span>
                    </button>
                    <button
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => applyFormat('insertOrderedList')}
                      aria-label="Numbered list"
                      className="p-1 rounded hover:bg-surface-container text-on-surface-variant transition-colors"
                    >
                      <span className="material-symbols-outlined text-[20px]">format_list_numbered</span>
                    </button>
                    <div className="hidden sm:block w-px h-4 bg-outline-variant mx-1" />
                    <button
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={handleDescriptionLink}
                      aria-label="Insert link"
                      className="p-1 rounded hover:bg-surface-container text-on-surface-variant transition-colors"
                    >
                      <span className="material-symbols-outlined text-[20px]">link</span>
                    </button>
                    <button
                      type="button"
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={handleDescriptionImage}
                      aria-label="Insert image"
                      className="p-1 rounded hover:bg-surface-container text-on-surface-variant transition-colors"
                    >
                      <span className="material-symbols-outlined text-[20px]">image</span>
                    </button>
                  </div>
                  <div
                    id="dest-desc"
                    ref={descriptionRef}
                    contentEditable
                    role="textbox"
                    aria-multiline="true"
                    aria-label="Detailed description"
                    data-placeholder="Provide a compelling description of the destination..."
                    onInput={handleDescriptionInput}
                    onPaste={handleDescriptionPaste}
                    onBeforeInput={handleDescriptionBeforeInput}
                    suppressContentEditableWarning
                    className="w-full min-h-[120px] px-4 py-2 bg-surface-container-high border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-body-lg text-on-surface overflow-auto empty:before:content-[attr(data-placeholder)] empty:before:text-on-surface-variant"
                  />
                  <p className="text-label-md text-on-surface-variant mt-2 text-right" aria-live="polite">
                    {descriptionLength} / {DESCRIPTION_MAX_LENGTH} characters
                  </p>
                </div>
              </section>
            </div>

            {/* Right Column: Media and Settings */}
            <div className="space-y-6 md:space-y-lg lg:sticky lg:top-24 self-start">
              {/* Media Card */}
              <section className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-4 md:p-lg">
                <h3 className="text-headline-md text-on-surface mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">image</span>
                  Media
                </h3>
                <div>
                  <label className="block text-label-md text-on-surface-variant mb-2">Featured Image</label>
                  <p className="text-label-md text-on-surface-variant mb-2">
                    This image will appear on the Destination List page.
                  </p>
                  <div
                    onClick={() => !featuredImage && featuredInputRef.current?.click()}
                    className="border-2 border-dashed border-outline-variant rounded-xl bg-surface-container-high hover:bg-surface-container flex flex-col items-center justify-center p-6 text-center cursor-pointer transition-colors h-48 relative overflow-hidden group"
                  >
                    {featuredImage ? (
                      <>
                        <img
                          src={featuredImage.url}
                          alt="Featured destination preview"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation()
                            removeFeaturedImage()
                          }}
                          aria-label="Remove featured image"
                          className="absolute top-2 right-2 z-20 w-7 h-7 rounded-full bg-inverse-surface/70 text-inverse-on-surface flex items-center justify-center hover:bg-inverse-surface/90 transition-colors"
                        >
                          <span className="material-symbols-outlined text-[16px]">close</span>
                        </button>
                      </>
                    ) : (
                      <div className="z-10 flex flex-col items-center group-hover:scale-105 transition-transform">
                        <div className="w-12 h-12 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center mb-3">
                          <span className="material-symbols-outlined text-primary">cloud_upload</span>
                        </div>
                        <span className="text-label-lg text-on-surface block">Click to upload</span>
                        <span className="text-body-md text-on-surface-variant block mt-1">or drag and drop</span>
                        <span className="text-label-md text-on-surface-variant block mt-2 text-xs">
                          SVG, PNG, JPG or GIF (max. 800x400px)
                        </span>
                      </div>
                    )}
                    <input
                      ref={featuredInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFeaturedImageChange}
                      className={`absolute inset-0 w-full h-full opacity-0 z-20 ${
                        featuredImage ? 'pointer-events-none' : 'cursor-pointer'
                      }`}
                    />
                  </div>

                  <div className="mt-6">
                    <label className="block text-label-md text-on-surface-variant mb-2">Gallery Images</label>
                    <div className="grid grid-cols-3 gap-2">
                      {galleryImages.map((image) => (
                        <div key={image.id} className="relative aspect-square rounded-lg overflow-hidden group">
                          <img src={image.url} alt="Gallery preview" className="w-full h-full object-cover" />
                          <button
                            type="button"
                            onClick={() => removeGalleryImage(image.id)}
                            aria-label="Remove image"
                            className="absolute top-1 right-1 w-5 h-5 rounded-full bg-inverse-surface/70 text-inverse-on-surface flex items-center justify-center opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity"
                          >
                            <span className="material-symbols-outlined text-[14px]">close</span>
                          </button>
                        </div>
                      ))}

                      {galleryImages.length < MAX_GALLERY_IMAGES && (
                        <button
                          type="button"
                          onClick={() => galleryInputRef.current?.click()}
                          aria-label="Add gallery image"
                          className="aspect-square rounded-lg border-2 border-dashed border-outline-variant bg-surface-container-high flex items-center justify-center cursor-pointer hover:bg-surface-container transition-colors"
                        >
                          <span className="material-symbols-outlined text-on-surface-variant">add</span>
                        </button>
                      )}
                    </div>
                    <input
                      ref={galleryInputRef}
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleGalleryImagesChange}
                      className="hidden"
                    />
                    <p className="text-label-md text-on-surface-variant mt-2">
                      {galleryImages.length} / {MAX_GALLERY_IMAGES} gallery images added
                    </p>
                  </div>
                </div>
              </section>

              {/* Settings Card */}
              <section className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-4 md:p-lg">
                <h3 className="text-headline-md text-on-surface mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">settings</span>
                  Settings
                </h3>
                <div>
                  <label className="block text-label-md text-on-surface-variant mb-3">Destination Status</label>
                  <div className="space-y-3">
                    <label className="flex items-start sm:items-center gap-3 p-3 rounded-lg border border-outline-variant hover:bg-surface-container-low cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="dest-status"
                        value="active"
                        checked={status === 'active'}
                        onChange={() => setStatus('active')}
                        className="text-primary focus:ring-primary h-4 w-4 mt-1 sm:mt-0"
                      />
                      <div className="flex-1">
                        <span className="block text-label-lg text-on-surface">Active</span>
                        <span className="block text-body-md text-on-surface-variant text-sm">
                          Visible to customers and available for bookings.
                        </span>
                      </div>
                      <span className="h-3 w-3 rounded-full bg-secondary-fixed-dim mt-1 sm:mt-0" />
                    </label>
                    <label className="flex items-start sm:items-center gap-3 p-3 rounded-lg border border-outline-variant hover:bg-surface-container-low cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="dest-status"
                        value="inactive"
                        checked={status === 'inactive'}
                        onChange={() => setStatus('inactive')}
                        className="text-primary focus:ring-primary h-4 w-4 mt-1 sm:mt-0"
                      />
                      <div className="flex-1">
                        <span className="block text-label-lg text-on-surface">Inactive (Draft)</span>
                        <span className="block text-body-md text-on-surface-variant text-sm">
                          Hidden from catalog, saved for later editing.
                        </span>
                      </div>
                      <span className="h-3 w-3 rounded-full bg-surface-dim mt-1 sm:mt-0" />
                    </label>
                  </div>
                </div>
              </section>

              <button
                type="button"
                onClick={handleSaveDraft}
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg border border-outline-variant text-on-surface text-label-lg hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="material-symbols-outlined text-sm">draft</span>
                {isSubmitting ? 'Saving…' : 'Save as Draft'}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
