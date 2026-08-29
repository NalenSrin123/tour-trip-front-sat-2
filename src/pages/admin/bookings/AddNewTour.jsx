import React, { useState } from "react";
import { ImagePlus, Plus, ChevronDown, DollarSign } from "lucide-react";

const AddNewTour = () => {
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80"
  );

  const [formData, setFormData] = useState({
    tourName: "",
    destination: "",
    category: "",
    tourType: "",
    duration: "",
    price: "",
    description: "",
    status: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Tour Data:", formData);

    // Add your API request here
  };

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-8">
      {/* Breadcrumb */}
      <div className="mb-5 flex items-center gap-3 text-sm">
        <span className="text-blue-600">Tours</span>
        <span className="text-slate-400">›</span>
        <span className="font-medium text-slate-800">New Tour</span>
      </div>

      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          New Tour
        </h1>

        <p className="mt-2 text-base text-slate-500">
          Create a new tour and manage tour details.
        </p>
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
      >
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr_1fr]">
          {/* Tour Image */}
          <div>
            <label className="mb-3 block text-sm font-semibold text-slate-800">
              Tour Image
            </label>

            <div className="w-full max-w-[180px]">
              <img
                src={image}
                alt="Tour"
                className="h-[110px] w-full rounded-t-lg object-cover"
              />

              <label className="flex h-10 cursor-pointer items-center justify-center gap-2 rounded-b-lg border border-t-0 border-slate-300 text-sm font-medium text-slate-600 hover:bg-slate-50">
                <ImagePlus size={16} />

                Change Image

                <input
                  type="file"
                  accept="image/png,image/jpeg"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Recommended size: 800x600px (JPG, PNG)
            </p>
          </div>

          {/* Tour Name */}
          <div>
            <label className="mb-3 block text-sm font-semibold text-slate-800">
              Tour Name
            </label>

            <input
              type="text"
              name="tourName"
              value={formData.tourName}
              onChange={handleChange}
              placeholder="e.g. Angkor Wat Sunrise"
              className="h-12 w-full rounded-lg border border-slate-300 px-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <p className="mt-2 text-xs text-slate-500">
              Enter a clear and attractive name for the tour.
            </p>
          </div>

          {/* Destination */}
          <div>
            <label className="mb-3 block text-sm font-semibold text-slate-800">
              Destination
            </label>

            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="e.g. Siem Reap"
              className="h-12 w-full rounded-lg border border-slate-300 px-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <p className="mt-2 text-xs text-slate-500">
              Enter the city or destination of the tour.
            </p>
          </div>
        </div>

        {/* Form Fields */}
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-7 md:grid-cols-2">
          {/* Category */}
          <div>
            <label className="mb-3 block text-sm font-semibold text-slate-800">
              Category
            </label>

            <div className="relative">
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="h-12 w-full appearance-none rounded-lg border border-slate-300 bg-white px-4 pr-10 text-sm text-slate-600 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="">Select category</option>
                <option value="cultural">Cultural</option>
                <option value="adventure">Adventure</option>
                <option value="nature">Nature</option>
                <option value="historical">Historical</option>
                <option value="beach">Beach</option>
              </select>

              <ChevronDown
                size={18}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-600"
              />
            </div>

            <p className="mt-2 text-xs text-slate-500">
              Select the main category of the tour.
            </p>
          </div>

          {/* Tour Type */}
          <div>
            <label className="mb-3 block text-sm font-semibold text-slate-800">
              Tour Type
            </label>

            <div className="relative">
              <select
                name="tourType"
                value={formData.tourType}
                onChange={handleChange}
                className="h-12 w-full appearance-none rounded-lg border border-slate-300 bg-white px-4 pr-10 text-sm text-slate-600 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="">Select tour type</option>
                <option value="group">Group Tour</option>
                <option value="private">Private Tour</option>
                <option value="family">Family Tour</option>
                <option value="couple">Couple Tour</option>
              </select>

              <ChevronDown
                size={18}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-600"
              />
            </div>

            <p className="mt-2 text-xs text-slate-500">
              Select the type of the tour.
            </p>
          </div>

          {/* Duration */}
          <div>
            <label className="mb-3 block text-sm font-semibold text-slate-800">
              Duration
            </label>

            <div className="relative">
              <select
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="h-12 w-full appearance-none rounded-lg border border-slate-300 bg-white px-4 pr-10 text-sm text-slate-600 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="">Select duration</option>
                <option value="1-day">1 Day</option>
                <option value="2-days">2 Days</option>
                <option value="3-days">3 Days</option>
                <option value="4-days">4 Days</option>
                <option value="5-days">5 Days</option>
                <option value="1-week">1 Week</option>
              </select>

              <ChevronDown
                size={18}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-600"
              />
            </div>

            <p className="mt-2 text-xs text-slate-500">
              Select the duration of the tour.
            </p>
          </div>

          {/* Price */}
          <div>
            <label className="mb-3 block text-sm font-semibold text-slate-800">
              Price (USD)
            </label>

            <div className="relative">
              <DollarSign
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="0.00"
                min="0"
                step="0.01"
                className="h-12 w-full rounded-lg border border-slate-300 pl-11 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <p className="mt-2 text-xs text-slate-500">
              Enter the price for this tour.
            </p>
          </div>

          {/* Status */}
          <div>
            <label className="mb-3 block text-sm font-semibold text-slate-800">
              Status
            </label>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    status: !formData.status,
                  })
                }
                className={`relative h-7 w-12 rounded-full transition ${
                  formData.status
                    ? "bg-emerald-500"
                    : "bg-slate-300"
                }`}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
                    formData.status
                      ? "left-6"
                      : "left-1"
                  }`}
                />
              </button>

              <span className="text-sm font-medium text-slate-700">
                {formData.status ? "Active" : "Inactive"}
              </span>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Set whether this tour is active and visible to customers.
            </p>
          </div>

          {/* Description */}
          <div>
            <label className="mb-3 block text-sm font-semibold text-slate-800">
              Description{" "}
              <span className="font-normal text-slate-500">
                (Optional)
              </span>
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              placeholder="Enter a short description about the tour..."
              className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <p className="mt-2 text-xs text-slate-500">
              Provide a short description to help customers understand the tour.
            </p>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-8 border-t border-slate-200 pt-6">
          <div className="flex justify-end gap-3">
            {/* Cancel */}
            <button
              type="button"
              className="rounded-lg border border-slate-300 bg-white px-7 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Cancel
            </button>

            {/* Create Tour */}
            <button
              type="submit"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
            >
              <Plus size={18} />
              Create Tour
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddNewTour;