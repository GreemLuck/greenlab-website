import { BackgroundImage, Box, Container, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import classes from "./TitleCard.module.css"
import { Animated } from "../components/Animated";
import grassImage from "../assets/grass.webp";

// const grassImage = "https://images.unsplash.com/photo-1589496933738-f5c27bc146e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3Jhc3N8ZW58MHx8MHx8fDA%3D";

function TitleCard() {
    const [_, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <Box mx="auto">
            <BackgroundImage
                src={grassImage}
            >
                <Container size="xl">
                    <Title className={classes.title} textWrap="pretty">
                    <Animated animation="fade-left">
                    Des espaces verts... et des murs qui tiennent !       
                    </Animated>              
                    </Title>
                </Container>
            </BackgroundImage>
        </Box>
    )
}

export default TitleCard;