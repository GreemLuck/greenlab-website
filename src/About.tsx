import { Container, Text, Title, Transition } from "@mantine/core";
import classes from "./About.module.css"
import { useEffect, useState } from "react";

function About() {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
            setVisible(true);
        }, []);

    return (<div className={classes.hero}>
        <Container className={classes.container} size="xxl">
            <Transition
                mounted={visible}
                transition="fade-up"
                duration={900}
                timingFunction="ease"
            >
                {(styles) => 
                    <div>
                        <Title style={styles} className={classes.title}>A propos</Title>
                        <Text style={styles} className={classes.description}  size="xl" mt="xl">
                            Petite description pour faire bien genre. Voila je rajoute des phrases pour faires la description un poil plus longue voir comment ca s'arrange. Ouai pas mal.
                            Petite description pour faire bien genre. Voila je rajoute des phrases pour faires la description un poil plus longue voir comment ca s'arrange. Ouai pas mal.
                        </Text>
                    </div>
                }
            </Transition>
        </Container>
    </div>)
}

export default About;