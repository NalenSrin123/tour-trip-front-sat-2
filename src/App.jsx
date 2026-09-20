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
import ScheduleFormPage from './pages/admin/schedules/ScheduleFormPage';
import Overview from './pages/admin/bookings/Overview';
import Bookings from './pages/admin/bookings/Bookings';
import PromoBanner from './components/layout/PromoBanner'
import PublicHeader from './components/layout/PublicHeader'
import PublicFooter from './components/layout/PublicFooter'
import ManageCustomers from './pages/admin/customers/ManageCustomers';
import ListPayment from './components/payment/ListPayment';
import PageReport from './pages/admin/reports/PageReport';
import DegsignSectionExpolore from './pages/public/DesignSectionExplore'
import TourDetailTop from './components/tour/TourDetailTop'
// import CustomerReview from './pages/public/CustomerReview';
import ListCategory from "./pages/admin/categories/listcategory"
import ListGuides from './pages/admin/guides/ListGuides';
import ListSchedule from './pages/admin/schedules/Listschedule'
import Setting from './pages/admin/settings/Setting';
import AddBooking from './pages/admin/bookings/AddBooking';
import ReviewsManagement from './pages/admin/reviews/ReviewsManagement';
import ProfilePage from './pages/admin/profile/user_profile';
import ManageCategory from './pages/admin/categories/listcategory';
import CreateCategory from './pages/admin/categories/CreateCategory';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/tours" element={<List_tour title="Tours" />} />
      <Route path="/categories" element={<ManageCategory />} />
      <Route path="/categories/create" element={<CreateCategory />} />
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
      <Route path="/guides" element={<ListGuides />} />
      <Route path='/guides/create' element={< CreateListGuide />} />
      <Route path="/schedules" element={<ListSchedule />} />
      <Route path="/schedules/create" element={<ScheduleFormPage />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/customers" element={<ManageCustomers />} />
      <Route path="/reviews" element={< ReviewsManagement />} />
      <Route path="/reports" element={< PageReport />} />
      <Route path="/payments" element={<ListPayment />} />
      <Route path="/settings" element={<Setting />} />
      <Route path="/help" element={<PlaceholderPage title="Help" />} />
      <Route path="/profile" element={< ProfilePage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/admin/add-new-tour" element={<AddNewTour />} />
      <Route path="/confirm-otp" element={<ConfirmOTP />} />
      <Route path="/create-user" element={<CreateUser />} />
      <Route path="/design-section-explore" element={<DegsignSectionExpolore />} />
      <Route path="/list-category" element={<ListCategory />} />
      <Route path="/bookings/add" element={<AddBooking />} />
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
      <Route
        path="/preview-tour"
        element={
          <>
            <PublicHeader />
            <TourDetailTop />
            <PublicFooter />
          </>
        }
      />
    </Routes>
  )
}

export default App;
