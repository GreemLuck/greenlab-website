import { Accordion, Container, Grid, Title } from "@mantine/core";
import classes from "./Prestations.module.css"

const prestations = [
    {
        titre: "Service 1",
        description: "On mange du pain et c'est vraiment bon. Vous devriez essayer."
    },
    {
        titre: "Service 2",
        description: "Coucou comment ca va? Stylez, j'm'en balek."
    },
    {
        titre: "Service 3",
        description: "Coucou comment ca va? Stylez, j'm'en balek."
    },
    {
        titre: "Service 4",
        description: "Coucou comment ca va? Stylez, j'm'en balek."
    },
    {
        titre: "Service 5",
        description: "Coucou comment ca va? Stylez, j'm'en balek."
    }
]

function Prestations() {

    const items = prestations.map((item) => (
        <Accordion.Item key={item.titre} value={item.titre}>
            <Accordion.Control>{item.titre}</Accordion.Control>
            <Accordion.Panel>{item.description}</Accordion.Panel>
        </Accordion.Item>
    ));

    return (
        <div className={classes.prestations} id="prestations">
        <Container className={classes.container} size="xl">
            <Grid gutter={{base: 50}}>
                <Grid.Col span={{base: 12, md: 6}}>
                    <Title className={classes.title}  order={2} textWrap="balance">
                    Nous offrons des services patati patata. walali walalal
                    </Title>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 6}}>
                    <Accordion radius="xs" classNames={{item: classes.item, control: classes.control}}>
                        {items}
                    </Accordion>
                </Grid.Col>
            </Grid>
        </Container>

        </div>
    )
}

export default Prestations