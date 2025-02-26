import { BackgroundImage, Box, Container, Title, Transition } from "@mantine/core";
import grassImage from "./assets/grass.jpg";
import { useEffect, useState } from "react";
import classes from "./TitleCard.module.css"

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
                <Transition
                    mounted={visible}
                    transition="scale-x"
                    duration={900}
                    timingFunction="ease"
                >
                    {(styles) => <div>
                        <Title className={classes.title} style={styles} textWrap="pretty">
                        Des espaces verts... et des murs qui tiennent !                     
                        </Title>
                    </div>
                    }   
                </Transition>
                </Container>
            </BackgroundImage>
        </Box>
    )
}

export default TitleCard;