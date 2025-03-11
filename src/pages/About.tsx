import { Container, Grid, Skeleton, Text, Title} from "@mantine/core";
import classes from "./About.module.css"
import { useEffect, useState } from "react";
import { Animated } from "../components/Animated";

function About() {

    const [_, setVisible] = useState(false);
    const [loading,] = useState(true);


    useEffect(() => {
            setVisible(true);
        }, []);

    return (<div className={classes.hero} id="about">
        <Container className={classes.container} size="xl">
            <Grid gutter={{base: 50, md: 200}}>
                <Grid.Col span={{base: 12, md: 6}}>
                    <Title className={classes.title}>
                        <Animated animation="fade-right">
                        L’artisanat au service du paysage
                        </Animated>
                    </Title>
                    <Animated animation="fade-right">
                        <Text className={classes.description} size="xl" mt="xl">
                        Petite entreprise familiale située dans le district de la Gruyère, 
                        nous comptons 8 employés passionnés par les plantes et la pierre. 
                        Nous accordons une grande
                        importance à la qualité, car nous savons que celle-ci
                        forge notre réputation au fil des années. Le contact
                        humain est l'un de nos principaux atouts : nous mettons
                        notre savoir-faire au service de nos clients tout en
                        respectant profondément leurs avis.
                        Initialement très présents dans l'entretien extérieur des
                        villages autour de la ville de Bulle, nous connaissons
                        aujourd'hui une expansion dans le domaine de la pierre
                        naturelle. Uniques et rares, nos murs en pierres sèches
                        ne passent pas inaperçus. Souvent imposants, ils
                        s'intègrent harmonieusement avec quelques plantes et
                        arbustes, donnant ainsi un aspect plus « naturel » au
                        mur. Nous les réalisons entièrement à la main, sans
                        machine, sauf lorsque le poids des pierres nécessite
                        l'utilisation d'équipements spécifiques.
                        </Text>
                    </Animated>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 6}}>
                    <Skeleton visible={loading} h="100%">
                        La photo de groupe ici
                    </Skeleton>
                </Grid.Col>
            </Grid>
        </Container>
    </div>)
}

export default About;