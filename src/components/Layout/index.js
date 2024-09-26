import Header from '@/components/Header'; // Import Header
import Footer from '@/components/Footer'; // Import Footer

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
