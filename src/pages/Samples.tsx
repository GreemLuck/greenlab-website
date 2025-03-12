import { Carousel } from "@mantine/carousel";
import classes from "./Samples.module.css"
import { Container, Image, Title } from "@mantine/core";
import { Animated } from "../components/Animated";



function Samples() {
    const images = import.meta.glob("/src/assets/carousel_home/*", { eager: true});
    const imagePaths = Object.keys(images);
    console.log(imagePaths);

    const slides = imagePaths.map((path, index) => (
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