import { BackgroundImage, Box, Container, Title, Transition } from "@mantine/core";
import grassImage from "../assets/grass.jpg";
import { useEffect, useState } from "react";
import classes from "./TitleCard.module.css"
import { Animated } from "../components/Animated";

function TitleCard() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <Box mx="auto">
            <BackgroundImage
                src={grassImage}
            >
                <Container size="xl">
                <Animated animation="fade-left">
                    <Title className={classes.title} textWrap="pretty">
                    Des espaces verts... et des murs qui tiennent !                     
                    </Title>
                </Animated>
                </Container>
            </BackgroundImage>
        </Box>
    )
}

export default TitleCard;