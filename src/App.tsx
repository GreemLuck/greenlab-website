import './styles/App.css'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css';
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/700.css'
import { createTheme, MantineProvider, MantineColorsTuple, rem, Container } from '@mantine/core'
import Banner from './pages/Banner.tsx'
import TitleCard from './pages/TitleCard.tsx'
import About from './pages/About.tsx'
import Prestations from './pages/Prestations.tsx'
import Samples from './pages/Samples.tsx'
import { Footer } from './pages/Footer.tsx';

const customGreem: MantineColorsTuple = [
  '#ebfef6',
  '#d7fceb',
  '#a9fad4',
  '#79f8bb',
  '#56f6a7',
  '#44f59a',
  '#3af592',
  '#2fda7e',
  '#23c16f',
  '#06a75d'
];

const grey: MantineColorsTuple = [
  "#f4f6f6",
  "#e8e8e8",
  "#cfcfcf",
  "#b5b5b5",
  "#9f9f9f",
  "#909191",
  "#868a8a",
  "#727777",
  "#646b6a",
  "#515d5d"
]

const CONTAINER_SIZES: Record<string, number> = {
  xxs: 300,
  xs: 400,
  sm: 500,
  md: 600, 
  lg: 700,
  xl: 1700,
  xxl: 2000,
}

const theme = createTheme({
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  primaryColor: 'green',
  colors: {
    customGreem,
    grey,
  },
  fontFamily: 'Poppins, sans-serif',
  headings: {
    sizes: {
      h1: {
        fontWeight: '500',
        fontSize: rem(100),
      },
      h2: {
        fontWeight: '500',
        fontSize: rem(80)
      },
      h3: {
        fontWeight: "500",
        fontSize: rem(50)
      },
      h4: {
        fontWeight: "500",
        fontSize: rem(20)
      },
      h5: {
        fontWeight: "700",
        fontSize: rem(18)
      }
    }
  },
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid}) => ({
        root: {
          '--container-size': fluid ? '100%'
          : size !== undefined && size in CONTAINER_SIZES
            ? rem(CONTAINER_SIZES[size])
            : rem(size),
        }
      }),
    })
  }
})

function App() {
  return <MantineProvider theme={theme}>
    <Banner />
    <TitleCard />
    <About />
    <Prestations />
    <Samples />
    <Footer />
  </MantineProvider>
}

export default App
