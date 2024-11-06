import { Footer, Navbar } from '../components';
import { Explore, Feedback, GetStarted, WhatsNew } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden ">
    <Navbar />
    <div className="relative">
      <div className="gradient-04 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <div className="relative">

      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <Footer />
  </div>
);

export default Page;
