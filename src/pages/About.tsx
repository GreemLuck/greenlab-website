import { Container, Grid, Image, Text, Title} from "@mantine/core";
import classes from "./About.module.css"
import { useEffect, useState } from "react";
import { Animated } from "../components/Animated";
import murImg from "../assets/Greenlab_Team_01.jpg"

function About() {

    const [_, setVisible] = useState(false);


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
                        <b>GREENLAB</b>, c’est une petite entreprise familiale située dans le district de la Gruyère, fondée par <b>Léo Gremaud</b> et <b>Eliot Perroud</b>, 
                        et composée de 8 collaborateurs passionnés par la nature, les plantes et la pierre. 
                        Notre approche est guidée par une exigence de qualité constante, consciente que chaque réalisation contribue à bâtir notre réputation sur le long terme.
                        <br/><br/>
                        Le contact humain est au cœur de notre démarche : nous mettons notre savoir-faire artisanal au service de nos clients avec écoute, 
                        respect et professionnalisme. Historiquement très actifs dans l’entretien des espaces extérieurs autour de Bulle, 
                        nous nous développons aujourd’hui dans le domaine de <b>la pierre naturelle</b>, avec une spécialité : <b>les murs en pierres sèches</b>. 
                        Ces ouvrages uniques, réalisés à la main sans machine (sauf pour les charges les plus lourdes), allient robustesse et esthétisme. 
                        Ils s’intègrent parfaitement dans leur environnement grâce à une sélection soignée de plantes et d’arbustes qui renforcent leur caractère naturel.
                        </Text>
                    </Animated>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 6}}>
                    <Animated animation="fade-left">
                        <Image className={classes.image} src={murImg} alt="Image d'un ouvrier construicant un mur" radius="md" fit="cover"/>
                    </Animated>
                </Grid.Col>
            </Grid>
        </Container>
    </div>)
}

export default About;