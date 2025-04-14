import { Box, Button, Container, Flex, Grid, Paper, Stack, Text, Textarea, TextInput, Title, useMantineTheme } from "@mantine/core";
import { TransformedValues, useForm } from "@mantine/form";
import { Animated } from "../components/Animated";
import { CiAt, CiMapPin, CiPhone } from "react-icons/ci";
import { ADDRESS1, ADDRESS2, EMAIL, PHONE_NUMBER_PRETTY } from "../constants";

export default function ContactForm() {
    const theme = useMantineTheme();

    const contactInfo = [
        {title: 'Email', description: EMAIL, icon: CiAt},
        {title: 'Téléphone', description: PHONE_NUMBER_PRETTY, icon: CiPhone},
        {title: 'Adresse', description: ADDRESS1 + ", " + ADDRESS2, icon: CiMapPin},
    ]

    const infos = contactInfo.map((item) => (
        <Flex align="center">
            <Box mr="md">
                <item.icon size={24} />
            </Box>

            <div>
                <Text size="md">
                    {item.title}
                </Text>
                <Text size="xl">{item.description}</Text>
            </div>
        </Flex>
    ))

    const form = useForm({
        mode: 'uncontrolled',
        name: 'contact',
        initialValues: {
            subject: '',
            name: '',
            email: '',
            phone: '',
            message: '',
        },
        validate: {
            email: (value) => (!value || /^\S+@\S+$/.test(value) ? null : 'Veuillez entrer une adresse email valide'),
            name: (value) => value ? null : 'Veuillez entrer votre nom',
            phone: (value) => (value ? (/^\+?\d{10,15}$/.test(value) ? null : "Veuillez entrer un numéro de téléphone valide") : 'Veuillez entrer votre numéro de téléphone'),
            message: (value) => value ? null : 'Veuillez entrer votre message',
        },
        onSubmitPreventDefault: 'always',
        transformValues: (values) => ({
            ...values,
            subject: "Contact Site - " + values.name,
        })
    })

    form.watch('name', ({value}) => {
        form.setFieldValue('subject', value + " - Contact Site");
    })

    const handleSubmit = async (values: TransformedValues<typeof form>) => {
        // I have to submit the form and if accepted I need to redirect the user to the thank you page.
        if(!form.isValid()) {
            console.log("Not a valid form");
        }

        console.log("Valid Form");
        
        let formData = new FormData()
        Object.entries(values).forEach(([keys,value]) => {
            formData.append(keys, value);
        })

        formData.append("form-name", "contact");

        await fetch("/", {
            method: "POST",
            body: formData,
        })
    }

    return (
        <Box pos="relative" bg={theme.colors.lightGreen[0]} id="contact-form">

        <Container size="xl" c={theme.colors.textGreen[0]}>
            <Grid>
                <Grid.Col span={{base: 12, md: 6}}>
                <Animated animation="fade-right">

                    <Title order={2} visibleFrom="md">
                        Nous contacter
                    </Title>
                    <Title order={3} hiddenFrom="md">
                        Nous contacter
                    </Title>
                    <Text mt="sm" mb={30} fz="xl">
                        Laissez nous votre numéro de téléphone et nous vous contacterons dans les 48 heures
                    </Text>

                    <Stack justify="space-around" h="100%" gap="xl">
                    {infos}
                    </Stack>
                </Animated>

                </Grid.Col>

                <Grid.Col span={{base: 12, md: 6}}>
                    <Animated animation="fade-left">
                        <Paper c="black" p={40} radius="lg">
                       
                    <form name="contact" method="POST" onSubmit={form.onSubmit(handleSubmit)}>
                        <input type="hidden" name="form-name" value="contact" />
                        <input type="hidden" name="subject" key={form.key('subject')} {...form.getInputProps('subject')}/>
                        <Grid>
                            <Grid.Col span={6}>
                            <TextInput
                                name="name"
                                label="Nom"
                                placeholder="Votre nom"
                                key={form.key('name')}
                                mt={10}
                                withAsterisk
                                {...form.getInputProps('name')}/>
                            </Grid.Col>
                            <Grid.Col span={6}>
                            <TextInput
                                name="phone"
                                label="Téléphone"
                                placeholder="+41 7X XXX XX XX"
                                key={form.key('phone')}
                                mt={10}
                                withAsterisk
                                {...form.getInputProps('phone')} />
                            </Grid.Col>
                        </Grid>
                        <TextInput
                            name="email"
                            label="Email (optionel)"
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
                            withAsterisk
                            key={form.key('message')}
                            {...form.getInputProps('message')}
                        />
                        <Button type="submit" mt={20} variant="filled" color={theme.colors.textGreen[0]}>Envoyer</Button>
                    </form>
                    </Paper>
                    </Animated>
                </Grid.Col>
            </Grid>
            
        </Container>
                    
        </Box>
    )
}