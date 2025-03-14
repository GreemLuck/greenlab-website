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
    ]

    const slides = images.map((path, index) => (
        <Carousel.Slide key={path}>
            <Image src={path} 
                    alt={"Image " + index} 
                    fit="cover" 
                    height={500}
                    width="100%"
            />
        </Carousel.Slide>
    ));

    return (
        <Container size="xxl"> 
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
        <Animated animation="fade-up">
        <Carousel className={classes.samples} 
                    slideSize={{base: "100%", md: "25%"}} 
                    slideGap={{base: "sm", md: "md"}}
                    loop>
            {slides}
        </Carousel>
        </Animated>
        </Container>
    )
}

export default Samples;