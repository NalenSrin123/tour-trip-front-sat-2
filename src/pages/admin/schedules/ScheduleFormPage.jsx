import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Globe, ArrowLeft } from 'lucide-react';

const ScheduleFormPage = ({ isEditMode = false, initialData = null, onBack, onSubmit }) => {
  const [formData, setFormData] = useState({
    tour: '',
    date: '',
    startTime: '',
    endTime: '',
    guide: '',
    destination: '',
    maxCapacity: '15',
    currentBookings: '0',
    availabilityStatus: 'Available',
    scheduleVisibility: 'Visible to Public',
    notes: '',
    allowOnlineBooking: true,
  });

  // Populate form if editing
  useEffect(() => {
    if (isEditMode && initialData) {
      setFormData({
        tour: initialData.tour || '',
        date: initialData.date || '',
        startTime: initialData.startTime || '',
        endTime: initialData.endTime || '',
        guide: initialData.guide || '',
        destination: initialData.destination || '',
        maxCapacity: initialData.maxCapacity || '15',
        currentBookings: initialData.currentBookings || '0',
        availabilityStatus: initialData.availabilityStatus || 'Available',
        scheduleVisibility: initialData.scheduleVisibility || 'Visible to Public',
        notes: initialData.notes || '',
        allowOnlineBooking: initialData.allowOnlineBooking ?? true,
      });
    }
  }, [isEditMode, initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData, isEditMode);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
      {/* Page Header with Back Button */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <div className="flex items-center gap-2  font-bold text-xl">
            <Calendar className="w-6 h-6 text-blue-900" />
            <span>{isEditMode ? 'Edit Schedule' : 'Add New Schedule'}</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
          {/* Section: Schedule Details */}
          <div>
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600" />
              Schedule Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Tour Select */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Tour</label>
                <select
                  name="tour"
                  value={formData.tour}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Tour</option>
                  <option value="Historic City Walk">Historic City Walk</option>
                  <option value="Mountain Hike Expr">Mountain Hike Expr</option>
                  <option value="Sunset Boat Tour">Sunset Boat Tour</option>
                  <option value="Culinary Tasting">Culinary Tasting</option>
                </select>
              </div>

              {/* Date Picker */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Start Time */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Start Time</label>
                <input
                  type="time"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* End Time */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">End Time</label>
                <input
                  type="time"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Guide Select */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Guide</label>
                <select
                  name="guide"
                  value={formData.guide}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Guide</option>
                  <option value="Sarah J.">Sarah J.</option>
                  <option value="Mike T.">Mike T.</option>
                  <option value="Elena R.">Elena R.</option>
                  <option value="Unassigned">Unassigned</option>
                </select>
              </div>

              {/* Destination */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Destination</label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="Old Town"
                  className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Max Capacity */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Max Capacity</label>
                <input
                  type="number"
                  name="maxCapacity"
                  value={formData.maxCapacity}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Current Bookings */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Current Bookings</label>
                <input
                  type="number"
                  name="currentBookings"
                  value={formData.currentBookings}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 bg-gray-100 border border-gray-200 rounded-lg text-sm text-gray-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section: Status and Visibility */}
          <div>
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-600" />
              Status and Visibility
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Availability Status */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Availability Status</label>
                <select
                  name="availabilityStatus"
                  value={formData.availabilityStatus}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Available">Available</option>
                  <option value="Almost Full">Almost Full</option>
                  <option value="Sold Out">Sold Out</option>
                </select>
              </div>

              {/* Schedule Visibility */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Schedule Visibility</label>
                <select
                  name="scheduleVisibility"
                  value={formData.scheduleVisibility}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Visible to Public">Visible to Public</option>
                  <option value="Draft">Draft</option>
                  <option value="Internal Only">Internal Only</option>
                </select>
              </div>
            </div>

            {/* Notes for Guide */}
            <div className="mb-4">
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Notes for Guide</label>
              <textarea
                name="notes"
                rows="3"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any specific instructions or notes for this guide."
                className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Allow Online Bookings Toggle */}
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-100">
              <div>
                <span className="block text-sm font-medium text-gray-800">Allow Online Bookings</span>
                <span className="text-xs text-gray-500">Enable online booking for this specific date/time.</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="allowOnlineBooking"
                  checked={formData.allowOnlineBooking}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>

          {/* Page Footer Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
            {onBack && (
              <button
                type="button"
                onClick={onBack}
                className="px-5 py-2.5 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-sm transition-colors"
            >
              {isEditMode ? 'Save Changes' : '+ Create Schedule'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleFormPage;