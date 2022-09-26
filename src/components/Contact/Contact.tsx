import { Section, SectionDivider, SectionTitle  } from '../../styles/GlobalComponents';
import { Container, Right, Left, Title, Paragraph  } from './ContactStyles';
import ContactForm from '../ContactForm/ContactForm';
const Contact = () =>{

    return (
        <Section nopadding id="contact">
            <SectionDivider/>
            <SectionTitle>Contact</SectionTitle>
            <Container>
                <Right>
                    <Title>Lets talk about your projects</Title>
                    <Paragraph>Fill the form and send in your queries. I will respond as soon as I
            can. Alternatively, You can reach out to me at my email address. </Paragraph>
                </Right>
                <Left>
                    <ContactForm/>
                </Left>
            </Container>
        </Section>
    )
};


export default Contact;