import Banner from './Banner.tsx'
import TitleCard from './TitleCard.tsx'
import About from './About.tsx'
import Prestations from './Prestations.tsx'
import Samples from './Samples.tsx'
import { Footer } from './Footer.tsx';
import ContactForm from './ContactForm.tsx';
import { CookiesBanner } from '../components/CookiesBanner.tsx'
import GroupeLab from './GroupeLab.tsx'

export default function Home() {
    return (
    <div>
        <Banner />
        <TitleCard />
        <About />
        <GroupeLab />
        <Prestations />
        <Samples />
        <ContactForm />
        <Footer />
        <CookiesBanner />
    </div>
    )
}