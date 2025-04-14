import { BackgroundImage, Box, Container, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import classes from "./TitleCard.module.css"
import { Animated } from "../components/Animated";
import greenlabIntro from "../assets/Greenlab_20250404_Web-19.jpg"

// const grassImage = "https://images.unsplash.com/photo-1589496933738-f5c27bc146e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3Jhc3N8ZW58MHx8MHx8fDA%3D";

function TitleCard() {
    const [_, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <Box mx="auto">
            {/* <SimpleGrid cols={{base: 1, md: 2}} spacing={0}> */}
            <BackgroundImage
                src={greenlabIntro}
                className={classes.backgroundGrass}
            >
                <Box className={classes.darken}>
                <Container size="xl">
                    <Animated animation="fade-right">
                    <Title className={classes.title} textWrap="pretty">
                    L’élégance et la robustesse de la pierre au service de votre jardin       
                    </Title>
                    </Animated>              
                </Container>
                </Box>
            </BackgroundImage>
            {/* <BackgroundImage src={brickImage} className={classes.backgroundBrick}>
            <Container size="xl" h="100%" p="xl">
                <Center h="100%">
                    <Animated animation="fade-left">
                    <Button size="xl" component="a" radius="md" m={150} href="#contact-form">Contactez Nous</Button>
                    </Animated>
                </Center>
            </Container>    
            </BackgroundImage> */}
            {/* </SimpleGrid> */}
        </Box>
    )
}

export default TitleCard;