import Banner from './Banner.tsx'
import TitleCard from './TitleCard.tsx'
import About from './About.tsx'
import Prestations from './Prestations.tsx'
import Samples from './Samples.tsx'
import { Footer } from './Footer.tsx';
import ContactForm from './ContactForm.tsx';

export default function Home() {
    return (
    <div>
        <Banner />
        <TitleCard />
        <About />
        <Prestations />
        <Samples />
        <ContactForm />
        <Footer />
    </div>
    )
}