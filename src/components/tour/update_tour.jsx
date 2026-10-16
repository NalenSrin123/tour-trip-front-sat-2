
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminSidebar from '../layout/AdminSidebar';
import AdminHeader from '../layout/AdminHeader';

const API_URL = 'http://127.0.0.1:8000/api/tours';

const UpdateTour = () => {
  const navigate = useNavigate();
  const { tourId } = useParams();

  const [tourData, setTourData] = useState({
    tour_id: tourId ?? '',
    name: '',
    destination: '',
    category: '',
    duration: '',
    price: '',
    status: 'active',
  });

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle changes in the form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setTourData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setError('');
    setSuccess('');
  };

  // Load existing tour details by ID
  const loadTour = useCallback(async (tourIdToLoad) => {
    const id = tourIdToLoad.trim();

    if (!id) {
      setError('Please enter a Tour ID.');
      return;
    }

    setFetching(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch(
        `${API_URL}/${encodeURIComponent(id)}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        }
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.message ||
            (response.status === 404
              ? 'Tour not found.'
              : 'Failed to load tour details.')
        );
      }

      const tour = data.tour ?? data;

      setTourData({
        tour_id: tour.tour_id ?? tour.id ?? id,
        name: tour.name ?? '',
        destination: tour.destination ?? '',
        category: tour.category ?? '',
        duration: tour.duration ?? '',
        price: tour.price ?? '',
        status: tour.status ?? 'active',
      });

      setSuccess('Tour details loaded successfully.');
    } catch (err) {
      setError(
        err.message ||
          'Unable to connect to the server. Please try again.'
      );
    } finally {
      setFetching(false);
    }
  }, []);

  useEffect(() => {
    if (!tourId) {
      return;
    }

    void loadTour(tourId);
  }, [tourId, loadTour]);

  const handleLoadTour = () => loadTour(tourData.tour_id);

  // Update tour through the PUT REST API
  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = tourData.tour_id.trim();

    if (!id) {
      setError('Please enter a Tour ID.');
      return;
    }

    if (
      !tourData.name.trim() ||
      !tourData.destination.trim() ||
      !tourData.category.trim() ||
      !tourData.duration ||
      !tourData.price
    ) {
      setError('Please complete all required fields.');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch(
        `${API_URL}/${encodeURIComponent(id)}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: tourData.name.trim(),
            destination: tourData.destination.trim(),
            category: tourData.category.trim(),
            duration: Number(tourData.duration),
            price: Number(tourData.price),
            status: tourData.status,
          }),
        }
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (response.status === 422 && data.errors) {
          const validationMessages = Object.values(data.errors)
            .flat()
            .join(' ');

          throw new Error(
            validationMessages || 'Please check your input.'
          );
        }

        throw new Error(
          data.message ||
            (response.status === 404
              ? 'Tour not found.'
              : 'Failed to update tour.')
        );
      }

      const updatedTour = data.tour ?? data;

      setTourData((prevData) => ({
        ...prevData,
        tour_id:
          updatedTour.tour_id ??
          updatedTour.id ??
          prevData.tour_id,
        name: updatedTour.name ?? prevData.name,
        destination:
          updatedTour.destination ?? prevData.destination,
        category: updatedTour.category ?? prevData.category,
        duration: updatedTour.duration ?? prevData.duration,
        price: updatedTour.price ?? prevData.price,
        status: updatedTour.status ?? prevData.status,
      }));

      setSuccess('Tour updated successfully!');
    } catch (err) {
      setError(
        err.message ||
          'Unable to connect to the server. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <AdminSidebar />
      <AdminHeader />

      <main className="md:ml-sidebar-width p-4 md:p-6 lg:p-8">
        <div className="mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <div className="mb-5 flex items-center gap-3 text-sm">
            <span className="text-blue-600">Tours</span>
            <span className="text-slate-400">›</span>
            <span className="font-medium text-slate-800">
              Update Tour
            </span>
          </div>

          {/* Page heading */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">
              Update Tour
            </h1>
            <p className="mt-2 text-base text-slate-500">
              Update the tour details and change the current status.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            {/* Error message */}
            {error && (
              <div
                role="alert"
                className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700"
              >
                {error}
              </div>
            )}

            {/* Success message */}
            {success && (
              <div
                role="status"
                className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-700"
              >
                {success}
              </div>
            )}

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Tour ID */}
              <div>
                <label
                  htmlFor="tour_id"
                  className="mb-3 block text-sm font-semibold text-slate-800"
                >
                  Tour ID
                </label>

                <input
                  type="text"
                  id="tour_id"
                  name="tour_id"
                  value={tourData.tour_id}
                  onChange={handleChange}
                  placeholder="Enter Tour ID"
                  required
                  className="h-12 w-full rounded-lg border border-slate-300 px-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <button
                  type="button"
                  onClick={handleLoadTour}
                  disabled={fetching || loading}
                  className="mt-3 rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {fetching ? 'Loading...' : 'Load Tour'}
                </button>
              </div>

              {/* Status */}
              <div>
                <label
                  htmlFor="status"
                  className="mb-3 block text-sm font-semibold text-slate-800"
                >
                  Status
                </label>

                <select
                  id="status"
                  name="status"
                  value={tourData.status}
                  onChange={handleChange}
                  className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="pending">Pending</option>
                </select>
              </div>

              {/* Tour Name */}
              <div className="lg:col-span-2">
                <label
                  htmlFor="name"
                  className="mb-3 block text-sm font-semibold text-slate-800"
                >
                  Tour Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={tourData.name}
                  onChange={handleChange}
                  placeholder="Enter Tour Name"
                  required
                  className="h-12 w-full rounded-lg border border-slate-300 px-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Destination */}
              <div>
                <label
                  htmlFor="destination"
                  className="mb-3 block text-sm font-semibold text-slate-800"
                >
                  Destination
                </label>

                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={tourData.destination}
                  onChange={handleChange}
                  placeholder="Enter Destination"
                  required
                  className="h-12 w-full rounded-lg border border-slate-300 px-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="mb-3 block text-sm font-semibold text-slate-800"
                >
                  Category
                </label>

                <input
                  type="text"
                  id="category"
                  name="category"
                  value={tourData.category}
                  onChange={handleChange}
                  placeholder="Enter Category"
                  required
                  className="h-12 w-full rounded-lg border border-slate-300 px-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Duration */}
              <div>
                <label
                  htmlFor="duration"
                  className="mb-3 block text-sm font-semibold text-slate-800"
                >
                  Duration (days)
                </label>

                <input
                  type="number"
                  id="duration"
                  name="duration"
                  value={tourData.duration}
                  onChange={handleChange}
                  placeholder="Enter Duration"
                  min="1"
                  required
                  className="h-12 w-full rounded-lg border border-slate-300 px-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Price */}
              <div>
                <label
                  htmlFor="price"
                  className="mb-3 block text-sm font-semibold text-slate-800"
                >
                  Price
                </label>

                <input
                  type="number"
                  id="price"
                  name="price"
                  value={tourData.price}
                  onChange={handleChange}
                  placeholder="Enter Price"
                  min="0"
                  step="0.01"
                  required
                  className="h-12 w-full rounded-lg border border-slate-300 px-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Form buttons */}
            <div className="mt-8 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => navigate(-1)}
                disabled={loading || fetching}
                className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading || fetching}
                className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? 'Updating...' : 'Update Tour'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default UpdateTour;
