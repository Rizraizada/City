import Slider from '@/components/Slider';
import Services from '../components/Services';
import Reports from '../components/Reports';
import AboutUs from '@/components/AboutUs';
export default function Home() {
  return (
    <div>
      <Slider />
      <Services />
      <Reports />
      <AboutUs />
    </div>
  );
}
