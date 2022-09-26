import { Formik, Form } from 'formik';
import Button from '../../styles/GlobalComponents/Button';
import { Label } from './ContactFormStyles'
import { TextInput, EmailInput, MessageInput } from './Input'
import * as Yup from 'yup';



const ContactForm = () =>{
    
    const ContactSchema = Yup.object().shape({
        name: Yup.string()
          .min(5, 'Too Short!')          
          .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        message: Yup.string()
          .min(5, 'Too Short!')         
          .required('Required'),
      });

    return(

        <Formik
        initialValues={{ name: '', email: '', message: ''}}        
        validationSchema={ContactSchema}
        onSubmit={ async(values) =>{
            const response = await fetch('api/sendgrid',{
                body: JSON.stringify(values),
                  headers: {
                    "Content-Type": "application/json",
                  },
                  method: "POST",
            });
            
        }}
        >
            <Form>

                <Label>Name</Label>
                <TextInput name='name'/> 
                <Label>Email</Label>
                <EmailInput name='email'/>
                <Label>Message</Label>
                <MessageInput name='message'/>
                <Button type="submit">Sent</Button>
            </Form>
        </Formik>
    );

};

export default ContactForm;