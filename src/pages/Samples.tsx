import { Carousel } from "@mantine/carousel";
import classes from "./Samples.module.css"
import { Box, Container, Title } from "@mantine/core";

function Samples() {
    return (
        <Container className={classes.container}> 
        <Title order={2} textWrap="pretty">
            Quelques exemples
        </Title>
        <Carousel className={classes.samples} slideSize="33.333333%" slideGap="md">
            <Carousel.Slide><Box className={classes.box}></Box></Carousel.Slide>
            <Carousel.Slide><Box className={classes.box}></Box></Carousel.Slide>
            <Carousel.Slide><Box className={classes.box}></Box></Carousel.Slide>
            <Carousel.Slide><Box className={classes.box}></Box></Carousel.Slide>
        </Carousel>
        </Container>
    )
}

export default Samples;