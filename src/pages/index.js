import Slider from '@/components/Slider';
import Services from '../components/Services';
import Reports from '../components/Reports';
import AboutUs from '@/components/AboutUs';
import Whyus from '@/components/Whyus';
import Quote from '@/components/Quote';
import Award from '@/components/Award';
import Activities from '@/components/Activities';
import NewsEvents from '@/components/NewsEvents';

export default function Home() {
  return (
    <div>
      <Slider />
      <Services />
      <Reports />
      <AboutUs />
      <Whyus />
      <Quote />
      <Award />
      <Activities />
      <NewsEvents />
    </div>
  );
}
