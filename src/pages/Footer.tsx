import { Center, Container, Grid, List, Text, Title } from "@mantine/core";
import greenlabLogo from '../assets/greenlab_logo_light.png';
import classes from "./Footer.module.css";
import { EMAIL, FACEBOOK_URL, INSTAGRAM_URL, PHONE_NUMBER, PHONE_NUMBER_PRETTY } from "../constants";


export function Footer() {
    return (
        <footer className={classes.footer}>
                <Grid>
                    <Grid.Col span={{base: 12, md: 3}}>
                    <a href="/">                
                        <img width="170" src={greenlabLogo}/>
                    </a>
                    </Grid.Col>
                    <Grid.Col span={{base: 12, md: 3}}>
                        <Title order={5}>GreenLab Creation Sàrl</Title>
                        <Text>Ruelle de l'Etrey 3</Text>
                        <Text>1632 Riaz</Text>
                        <Text>Suisse</Text>
                    </Grid.Col>
                    <Grid.Col span={{base: 12, md: 3}}>
                        <Title order={5}>CONTACT</Title>
                        <Text>Gremaud Léo et Perroud Eliot</Text>
                        <Text><a href={"mailto:" + EMAIL}>{EMAIL}</a></Text>
                        <Text><a href={"tel:" + PHONE_NUMBER}>{PHONE_NUMBER_PRETTY}</a></Text>
                    </Grid.Col>
                    <Grid.Col span={{base: 12, md: 3}}>
                        <Title order={5}>Nous suivre</Title>
                        <Text><a href={FACEBOOK_URL}>Instagram</a></Text>
                        <Text><a href={INSTAGRAM_URL}>Facebook</a></Text>
                    </Grid.Col>
                </Grid>
                <Center>
                    <Text>© 2025</Text>
                </Center>
        </footer>
    )
}