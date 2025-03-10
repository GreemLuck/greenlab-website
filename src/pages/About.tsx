import { Container, Text, Title, Transition } from "@mantine/core";
import classes from "./About.module.css"
import { useEffect, useState } from "react";
import { Animated } from "../components/Animated";

function About() {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
            setVisible(true);
        }, []);

    return (<div className={classes.hero}>
        <Container className={classes.container} size="xxl">
        <Animated animation="fade-up">
            <Title className={classes.title}>A propos</Title>
            <Text className={classes.description}  size="xl" mt="xl">
                Petite description pour faire bien genre. Voila je rajoute des phrases pour faires la description un poil plus longue voir comment ca s'arrange. Ouai pas mal.
                Petite description pour faire bien genre. Voila je rajoute des phrases pour faires la description un poil plus longue voir comment ca s'arrange. Ouai pas mal.
            </Text>
        </Animated>
        </Container>
    </div>)
}

export default About;