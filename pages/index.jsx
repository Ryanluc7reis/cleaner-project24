import SectionOne from '../src/components/sectionOne/SectionOne';
import SectionTwo from '../src/components/sectionTwo/SectionTwo';
import SectionThree from '../src/components/sectionThree/SectionThree'
import SectionFour from '../src/components/sectionFour/SectionFour';
import Footer from '../src/components/footer/Footer';

export default function Home() {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionFour />
      <SectionThree />
      <Footer />
    </>
  );
}
