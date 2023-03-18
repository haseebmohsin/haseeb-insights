import { useEffect, useState } from 'react';
import ButtonComponent from '../components/ButtonComponent';
import FormContainer from '../components/StyledComponents/FormContainer';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import InputComponent from '../components/InputComponent';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import ErrorMessageComponent from '../components/StyledComponents/ErrorMessageComponent';
import './contact.scss';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

export default function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (values, formikBag) => {
    const templateParams = {
      name: values.name,
      email: values.email,
      subject: 'Email received from Haseeb Insights. Subject: ' + values.subject,
      message: values.message,
    };

    emailjs.send('service_v53is8o', 'template_ucyan7b', templateParams, '8OZCoqau-SPvE1yg6').then(
      function (response) {
        toast.success('Message sent! We will back up to you soon.');
        // reset the form
        formikBag.resetForm();
      },
      function (err) {
        toast.success('Something went wrong while sending email!');
      }
    );
  };

  return (
    <>
      <div className='grid lg:grid-cols-2 gap-6 lg:gap-y-0 h-full' id='contact_page'>
        {/* left section */}
        <div className='my-auto'>
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15} />
          </h1>
          <p className='p-1'>
            I am interested in freelance opportunities - especially on ambitious or large projects. However, if you have any other
            requests or questions, don't hesitate to contact me using below form either.
          </p>

          <Formik initialValues={formData} validationSchema={validationSchema} onSubmit={sendEmail}>
            {({ handleSubmit, isSubmitting, errors, touched, form, field }) => (
              <Form onSubmit={handleSubmit}>
                <FormContainer className='text-theme-white mt-5'>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='formElement'>
                      <Field name='name' placeholder='Name' component={InputComponent} />
                      <ErrorMessage name='name' component={ErrorMessageComponent} />
                    </div>

                    <div className='formElement'>
                      <Field name='email' placeholder='Email' component={InputComponent} />
                      <ErrorMessage name='email' component={ErrorMessageComponent} />
                    </div>

                    <div className='col-span-2 formElement'>
                      <Field name='subject' placeholder='Subject' component={InputComponent} />
                      <ErrorMessage name='subject' component={ErrorMessageComponent} />
                    </div>

                    <div className='col-span-2 formElement'>
                      <Field
                        name='message'
                        as='textarea'
                        placeholder='Message'
                        className='p-3 text-lg h-32 rounded w-full bg-theme-inputBg text-theme-white'
                      />
                      <ErrorMessage name='message' component={ErrorMessageComponent} />
                    </div>
                  </div>

                  <div className='my-4 flex justify-end' id='sendBtn'>
                    <ButtonComponent className='text-theme-lightGray' outline='primary' size='lg' disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send'}
                    </ButtonComponent>
                  </div>
                </FormContainer>
              </Form>
            )}
          </Formik>
        </div>

        {/* Right Section */}
        <div className='my-auto mx-auto'></div>
      </div>
    </>
  );
}
