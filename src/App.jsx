import { Routes, Route } from 'react-router-dom'
import PlaceholderPage from './components/layout/PlaceholderPage'
import CreateDestination from './pages/admin/destinations/CreateDestination'
import ManageDestinations from './pages/admin/destinations/ManageDestinations'
import ForgotPassword from "./pages/public/ForgotPassword";
import ResetPassword from "./pages/public/ResetPassword";
import AddNewTour from "./pages/admin/bookings/AddNewTour";
import ConfirmOTP from "./pages/public/ConfirmOTP";
import CreateUser from "./pages/public/CreateUser";
import List_tour from './components/tour/List_tour';
import CreateListGuide from './pages/admin/guides/CreateListGuide';
import Overview from './pages/admin/bookings/Overview';
import Bookings from './pages/admin/bookings/Bookings';
import PromoBanner from './components/layout/PromoBanner'
import PublicHeader from './components/layout/PublicHeader'
import PublicFooter from './components/layout/PublicFooter'
import FeatureTourPacket from './pages/public/Feature-tour-packet'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Overview title="Dashboard" />} />
      <Route path="/tours" element={<List_tour title="Tours" />} />
      <Route path="/categories" element={<PlaceholderPage title="Categories" />} />
      <Route
  path="/destinations"
  element={
    <ManageDestinations
      title="Destinations"
      description="The destinations list page hasn't been built yet — for now, head to Create Destination directly."
      actionTo="/destinations/create"
      actionLabel="Create Destination"
    />
  }
/>
      <Route path="/destinations/create" element={<CreateDestination />} />
      <Route path="/guides" element={<CreateListGuide title="Guides" />} />
      <Route path="/schedules" element={<PlaceholderPage title="Schedules" />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/customers" element={<PlaceholderPage title="Customers" />} />
      <Route path="/reviews" element={<PlaceholderPage title="Reviews" />} />
      <Route path="/reports" element={<PlaceholderPage title="Reports" />} />
      <Route path="/payments" element={<PlaceholderPage title="Payments" />} />
      <Route path="/settings" element={<PlaceholderPage title="Settings" />} />
      <Route path="/help" element={<PlaceholderPage title="Help" />} />
      <Route path="/profile" element={<PlaceholderPage title="Profile" />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/admin/add-new-tour" element={<AddNewTour />} />
      <Route path="/confirm-otp" element={<ConfirmOTP />} />
      <Route path="/create-user" element={<CreateUser />} />
      <Route path="/featured-tours" element={<FeatureTourPacket />} />
      <Route
        path="/preview"
        element={
          <>
            <PromoBanner
              message="Summer Sale: Save 20% on all Cambodia tours."
              ctaLabel="Explore Tours"
              ctaHref="/tours"
            />
            <PublicHeader />
            <main style={{ minHeight: '60vh' }} />
            <PublicFooter />
          </>
        }
      />
    </Routes>
  )
}

export default App;
