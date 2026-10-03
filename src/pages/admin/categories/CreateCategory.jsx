import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Building2, Compass, Leaf, MapPinned, Mountain, Plus } from 'lucide-react';
import AdminSidebar from '../../../components/layout/AdminSidebar';
import AdminHeader from '../../../components/layout/AdminHeader';

const categoryOptions = [
    {
        label: 'Adventure',
        description: 'High-energy outdoor experiences and extreme sports.',
        icon: Mountain,
        iconBg: 'bg-[#edf5ff] text-[#2f6fe8]',
    },
    {
        label: 'Cultural',
        description: 'Historical sites, museums, and local heritage.',
        icon: Building2,
        iconBg: 'bg-[#eef5f9] text-[#2a7e91]',
    },
    {
        label: 'Beach & Island',
        description: 'Relaxing coastal getaways and water activities.',
        icon: MapPinned,
        iconBg: 'bg-[#edf9f7] text-[#1d7a6d]',
    },
    {
        label: 'City Tours',
        description: 'Urban exploration, sightseeing, and nightlife.',
        icon: Compass,
        iconBg: 'bg-[#f3f0ff] text-[#7254d6]',
    },
    {
        label: 'Nature & Wildlife',
        description: 'Safaris, national parks, and eco-tours.',
        icon: Leaf,
        iconBg: 'bg-[#eef9f1] text-[#4a8a5d]',
    },
];

export default function CreateCategory() {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [categoryName, setCategoryName] = useState('');
    const [description, setDescription] = useState('');
    const [selectedTemplate, setSelectedTemplate] = useState('Adventure');
    const [status, setStatus] = useState('active');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const selectedCategory =
        categoryOptions.find((item) => item.label === selectedTemplate) || categoryOptions[0];
    const SelectedIcon = selectedCategory.icon;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        try {
            const response = await fetch('http://tour-trip-etec.duckdns.org/api/category', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: categoryName.trim(), description: description.trim() }),
            });
            const result = await response.json().catch(() => ({}));

            if (!response.ok) {
                const validationError = Object.values(result.errors || {}).flat()[0];
                throw new Error(validationError || result.message || 'Unable to create category.');
            }

            navigate('/categories');
        } catch (error) {
            setErrorMessage(error.message || 'Unable to connect to the server.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-[#f4f6fb] min-h-screen text-slate-800">
            <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

            <main className="md:ml-sidebar-width p-4 md:p-6 lg:p-8">
                <div className="mx-auto max-w-[1200px]">
                    <div className="mb-6 flex items-center gap-3">
                        <Link
                            to="/categories"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-50"
                        >
                            <ArrowLeft size={18} />
                        </Link>
                        <div>
                            <h2 className="m-0 text-[28px] font-bold text-[#0f172a]">Create Category</h2>
                            <p className="mt-1 text-[14px] text-slate-500">
                                Add a new category and organize your tour offerings.
                            </p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="rounded-[20px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                            <div className="space-y-6">
                                <div>
                                    <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                                        Category name
                                    </label>
                                    <input
                                        type="text"
                                        value={categoryName}
                                        onChange={(e) => setCategoryName(e.target.value)}
                                        placeholder="e.g. Family Tours"
                                        maxLength={255}
                                        required
                                        className="w-full rounded-xl border border-slate-200 bg-[#f8fafc] px-3.5 py-3 text-[15px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#93c5fd] focus:ring-2 focus:ring-[#dbeafe]"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                                        Description
                                    </label>
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Describe this category and what type of tours it includes."
                                        rows={6}
                                        className="w-full rounded-xl border border-slate-200 bg-[#f8fafc] px-3.5 py-3 text-[15px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#93c5fd] focus:ring-2 focus:ring-[#dbeafe]"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                                        Status
                                    </label>
                                    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-[#f8fafc] p-2">
                                        <button
                                            type="button"
                                            onClick={() => setStatus('active')}
                                            className={[
                                                'flex-1 rounded-lg px-4 py-2 text-sm font-medium transition',
                                                status === 'active'
                                                    ? 'bg-[#dff8ee] text-[#0f7a59]'
                                                    : 'text-slate-600 hover:bg-slate-100',
                                            ].join(' ')}
                                        >
                                            Active
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setStatus('inactive')}
                                            className={[
                                                'flex-1 rounded-lg px-4 py-2 text-sm font-medium transition',
                                                status === 'inactive'
                                                    ? 'bg-[#eceff3] text-[#5d6676]'
                                                    : 'text-slate-600 hover:bg-slate-100',
                                            ].join(' ')}
                                        >
                                            Inactive
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-5">
                                <div>
                                    <label className="mb-2 block text-[12px] font-semibold uppercase tracking-[0.08em] text-slate-500">
                                        Template
                                    </label>
                                    <div className="space-y-3">
                                        {categoryOptions.map((item) => {
                                            const Icon = item.icon;
                                            const isSelected = item.label === selectedTemplate;

                                            return (
                                                <button
                                                    key={item.label}
                                                    type="button"
                                                    onClick={() => setSelectedTemplate(item.label)}
                                                    className={[
                                                        'flex w-full items-center gap-3 rounded-xl border p-3 text-left transition',
                                                        isSelected
                                                            ? 'border-[#93c5fd] bg-[#f5f9ff]'
                                                            : 'border-slate-200 bg-white hover:border-slate-300',
                                                    ].join(' ')}
                                                >
                                                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${item.iconBg}`}>
                                                        <Icon size={22} strokeWidth={1.8} />
                                                    </div>
                                                    <div>
                                                        <div className="text-[15px] font-semibold text-slate-700">{item.label}</div>
                                                        <div className="text-[12px] text-slate-500">{item.description}</div>
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="rounded-[18px] border border-slate-200 bg-[#f8fafc] p-4">
                                    <div className={`mb-4 flex h-[58px] w-[58px] items-center justify-center rounded-xl ${selectedCategory.iconBg}`}>
                                        <SelectedIcon size={26} strokeWidth={1.8} />
                                    </div>
                                    <h3 className="text-[24px] font-bold text-[#1f2a37]">{selectedTemplate}</h3>
                                    <p className="mt-2 text-[15px] leading-6 text-slate-500">{selectedCategory.description}</p>
                                </div>
                            </div>
                        </div>

                        {errorMessage && (
                            <p role="alert" className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                                {errorMessage}
                            </p>
                        )}

                        <div className="mt-8 flex flex-col-reverse justify-end gap-3 border-t border-slate-200 pt-6 sm:flex-row">
                            <Link
                                to="/categories"
                                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                            >
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2563eb] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1d4ed8] disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                <Plus size={16} />
                                {isSubmitting ? 'Creating...' : 'Create Category'}
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}
