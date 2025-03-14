import { Button, Container, Grid, Modal, Textarea, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Animated } from "../components/Animated";
import { useDisclosure } from "@mantine/hooks";

export default function ContactForm() {
    const [opened, {open, close}] = useDisclosure(false);

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            lastname: '',
            firstname: '',
            email: '',
            message: '',
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Veuillez entrer une adresse email valide'),
            lastname: (value) => value ? null : 'Veuillez entrer votre nom',
            firstname: (value) => value ? null : 'Veuillez entrer votre prénom',
            message: (value) => value ? null : 'Veuillez entrer votre message',
        }
    })

    const handleSubmit = (values: typeof form.values) => {
        form.validate()
        open();
        form.reset();
    }

    return (
        <>
        <Modal opened={opened} onClose={close} withCloseButton={false}>
            Votre message a été envoyé avec succès. Nous allons revenir vers vous dans les plus brefs délais.
        </Modal>
        <Container size="xxl" id="contact-form">
            <Grid>

                <Grid.Col span={{base: 12, md: 6}}>
                    <Title order={2} visibleFrom="md">
                        <Animated animation="fade-right">
                        Besoin d'un devis?
                        </Animated>
                    </Title>
                    <Title order={3} hiddenFrom="md">
                        <Animated animation="fade-right">
                        Besoin d'un devis?
                        </Animated>
                    </Title>
                </Grid.Col>

                <Grid.Col span={{base: 12, md: 6}}>
                    <Animated animation="fade-left">
                    <form name="contact" onSubmit={form.onSubmit(handleSubmit)}>
                        <Grid>
                            <Grid.Col span={6}>
                            <TextInput
                                name="lastname"
                                label="Nom"
                                placeholder="Votre nom"
                                key={form.key('lastname')}
                                mt={10}
                                {...form.getInputProps('lastname')}/>
                            </Grid.Col>
                            <Grid.Col span={6}>
                            <TextInput
                                name="firstname"
                                label="Prénom"
                                placeholder="Votre prénom"
                                key={form.key('firstname')}
                                mt={10}
                                {...form.getInputProps('firstname')}/>
                            </Grid.Col>
                        </Grid>
                        <TextInput
                            name="email"
                            label="Email"
                            placeholder="Votre adresse mail"
                            key={form.key('email')}
                            mt={10}
                            {...form.getInputProps('email')}/>
                        <Textarea
                            name="message"
                            label="Message"
                            placeholder="Laissez nous un message"
                            rows={6}
                            mt={20}
                            key={form.key('message')}
                            {...form.getInputProps('message')}
                        />
                        <Button type="submit" mt={20}>Envoyer</Button>
                    </form>
                    </Animated>
                </Grid.Col>
            </Grid>
            
        </Container>
        </>
    )
}