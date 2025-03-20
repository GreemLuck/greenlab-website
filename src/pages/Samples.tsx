import { Carousel } from "@mantine/carousel";
import classes from "./Samples.module.css"
import { Container, Image, Title } from "@mantine/core";
import { Animated } from "../components/Animated";



function Samples() {
    const images = [
        "/carousel_home/20220930_162853.jpg",
        "/carousel_home/20220930_162926.jpg",
        "/carousel_home/20221010_111044.jpg",
        "/carousel_home/LÉO_JARDIN_GUMFENS_20220610_12.jpg",
        "/carousel_home/LÉO_JARDIN_GUMFENS_20220610_18.jpg",
        "/carousel_home/Pavés granit sans joint.png",
        "/carousel_home/oeuf.jpg"
    ]

    const slides = images.map((path, index) => (
        <Carousel.Slide key={path}>
            <Image src={path} 
                    alt={"Image " + index} 
                    fit="cover" 
                    height={500}
                    width="100%"
                    loading="lazy"
            />
        </Carousel.Slide>
    ));

    return (
        <Container size="xl"> 
        <Title order={2} visibleFrom="md">
            <Animated animation="fade-left">
           Nos créations
            </Animated>
        </Title>
        <Title order={3} hiddenFrom="md">
            <Animated animation="fade-left">
           Nos créations
           </Animated>
        </Title>
        <Carousel className={classes.samples} 
                    slideSize={{base: "100%", md: "25%"}} 
                    slideGap={{base: "sm", md: "md"}}
                    nextControlProps={{"aria-label": "next-slide"}}
                    previousControlProps={{"aria-label": "previous-slide"}}
                    inViewThreshold={0.5}
                    loop>
            {slides}
        </Carousel>
        </Container>
    )
}

export default Samples;