
import { useState } from "react";
import { Plus, X, Pencil, Search } from "lucide-react";


const initialCategories = [
  { id: 1, name: "City Walks", URL: "city-walks", tours: 12, status: "Active" },
  { id: 2, name: "Mountain Treks", URL: "mountain-treks", tours: 7, status: "Active" },
  { id: 3, name: "Boat Tours", URL: "boat-tours", tours: 4, status: "Inactive" },
  { id: 4, name: "Culinary Experiences", URL: "culinary-experiences", tours: 9, status: "Active" },
];

const statusStyles = {
  Active: "bg-emerald-50 text-emerald-600",
  Inactive: "bg-rose-50 text-rose-500",
};

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function CreateCategry() {
  const [categories, setCategories] = useState(initialCategories);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Active");
  const [errors, setErrors] = useState({});
  const [editingId, setEditingId] = useState(null);

  const resetForm = () => {
    setName("");
    setDescription("");
    setStatus("Active");
    setErrors({});
    setEditingId(null);
  };

  const handleEdit = (cat) => {
    setEditingId(cat.id);
    setName(cat.name);
    setDescription(cat.description || "");
    setStatus(cat.status);
    setErrors({});
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    const trimmedName = name.trim();
    if (!trimmedName) nextErrors.name = "Category name is required.";
    const duplicate = categories.some(
      (c) =>
        c.name.toLowerCase() === trimmedName.toLowerCase() &&
        c.id !== editingId
    );
    if (duplicate) {
      nextErrors.name = "A category with this name already exists.";
    }
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    if (editingId) {
      setCategories((prev) =>
        prev.map((c) =>
          c.id === editingId
            ? {
                ...c,
                name: trimmedName,
                URL: slugify(trimmedName),
                description,
                status,
              }
            : c
        )
      );
    } else {
      const newCategory = {
        id: Date.now(),
        name: trimmedName,
        URL: slugify(trimmedName),
        description,
        tours: 0,
        status,
      };
      setCategories((prev) => [newCategory, ...prev]);
    }

    resetForm();
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setCategories((prev) => prev.filter((c) => c.id !== id));
  };

  const filtered = categories.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    // Phone: p-4. Tablet (md, 768px+): p-6. Desktop (lg, 1024px+): p-8.
    <div className="min-h-screen bg-slate-50 p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-5xl">
        {/* Header: stacked on phone, row from tablet up */}
        <div className="mb-6 flex flex-col items-start justify-between gap-3 md:flex-row md:items-center md:flex-wrap">
          <div>
            <h1 className="text-xl font-semibold text-slate-800 md:text-2xl">
              Tour Categories
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Organize tours into categories to help customers browse and filter.
            </p>
          </div>
          <button
            onClick={() => {
              if (showForm) {
                resetForm();
                setShowForm(false);
              } else {
                resetForm();
                setShowForm(true);
              }
            }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 active:bg-blue-800 md:w-auto"
          >
            <Plus size={16} strokeWidth={2.5} />
            {showForm ? "Close" : "Add Category"}
          </button>
        </div>

        {/* Create form panel */}
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="mb-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:p-5"
          >
            <h2 className="mb-4 text-sm font-semibold text-slate-800">
              {editingId ? "Edit category" : "New category"}
            </h2>
            {/* Phone: single column. Tablet/desktop (md, 768px+): two columns. */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Category name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({});
                  }}
                  placeholder="e.g. Mountain Treks"
                  className={`w-full rounded-lg border px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:ring-2 focus:ring-blue-100 ${
                    errors.name
                      ? "border-rose-300 focus:border-rose-400"
                      : "border-slate-200 focus:border-blue-400"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs font-medium text-rose-500">
                    {errors.name}
                  </p>
                )}
                {name && !errors.name && (
                  <p className="mt-1.5 text-xs text-slate-400">
                    Slug: /{slugify(name)}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Description
                  <span className="ml-1 font-normal text-slate-400">(optional)</span>
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  placeholder="What kind of tours belong here?"
                  className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Status
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Active", "Inactive"].map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setStatus(opt)}
                      className={`rounded-lg px-3.5 py-2 text-sm font-medium transition ${
                        status === opt
                          ? opt === "Active"
                            ? "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200"
                            : "bg-rose-50 text-rose-500 ring-1 ring-rose-200"
                          : "bg-slate-50 text-slate-500 ring-1 ring-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions: stacked full-width on phone, inline on tablet/desktop */}
            <div className="mt-5 flex flex-col-reverse gap-2 border-t border-slate-100 pt-4 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => {
                  resetForm();
                  setShowForm(false);
                }}
                className="w-full rounded-lg px-4 py-2.5 text-sm font-medium text-slate-500 transition hover:bg-slate-50 sm:w-auto"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 sm:w-auto"
              >
                {editingId ? "Save changes" : "Save category"}
              </button>
            </div>
          </form>
        )}

        {/* Search: full width on phone, fixed width from tablet up */}
        <div className="mb-4 flex w-full items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm md:w-72">
          <Search size={16} className="text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search categories"
            className="w-full text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>

        {/* Data display: cards on phone, full table from tablet (md, 768px+) up */}
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {/* Tablet / desktop table */}
          <table className="hidden w-full text-left text-sm md:table">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/60 text-xs font-medium uppercase tracking-wide text-slate-400">
                <th className="px-5 py-3">Category</th>
                <th className="px-5 py-3">URL</th>
                <th className="px-5 py-3">Tours</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-5 py-10 text-center text-sm text-slate-400">
                    No categories match "{search}".
                  </td>
                </tr>
              )}
              {filtered.map((cat) => (
                <tr
                  key={cat.id}
                  className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50"
                >
                  <td className="px-5 py-3.5 font-medium text-slate-700">
                    {cat.name}
                  </td>
                  <td className="px-5 py-3.5 text-slate-400">/{cat.URL}</td>
                  <td className="px-5 py-3.5 text-slate-500">{cat.tours}</td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[cat.status]}`}
                    >
                      {cat.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex justify-end gap-3 text-slate-400">
                      <button
                        onClick={() => handleEdit(cat)}
                        className="transition hover:text-blue-600"
                        aria-label={`Edit ${cat.name}`}
                      >
                        <Pencil size={15} />
                      </button>
                      <button
                        onClick={() => handleDelete(cat.id)}
                        className="transition hover:text-rose-500"
                        aria-label={`Delete ${cat.name}`}
                      >
                        <X size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Phone stacked cards */}
          <div className="divide-y divide-slate-50 md:hidden">
            {filtered.length === 0 && (
              <p className="px-5 py-10 text-center text-sm text-slate-400">
                No categories match "{search}".
              </p>
            )}
            {filtered.map((cat) => (
              <div key={cat.id} className="flex items-start justify-between gap-3 px-4 py-4">
                <div className="min-w-0">
                  <p className="truncate font-medium text-slate-700">{cat.name}</p>
                  <p className="mt-0.5 text-xs text-slate-400">/{cat.URL}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[cat.status]}`}
                    >
                      {cat.status}
                    </span>
                    <span className="text-xs text-slate-400">{cat.tours} tours</span>
                  </div>
                </div>
                <div className="flex shrink-0 gap-3 text-slate-400">
                  <button
                    onClick={() => handleEdit(cat)}
                    className="transition hover:text-blue-600"
                    aria-label={`Edit ${cat.name}`}
                  >
                    <Pencil size={15} />
                  </button>
                  <button
                    onClick={() => handleDelete(cat.id)}
                    className="transition hover:text-rose-500"
                    aria-label={`Delete ${cat.name}`}
                  >
                    <X size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-3 text-xs text-slate-400">
          Showing {filtered.length} of {categories.length} categories
        </p>
      </div>
    </div>
  );
}
