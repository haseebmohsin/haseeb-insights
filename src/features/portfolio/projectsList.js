import departImage1 from '../../assets/images/depart-images/landing.png';
import departImage2 from '../../assets/images/depart-images/landing-chat.png';
import departImage3 from '../../assets/images/depart-images/login.png';
import departImage4 from '../../assets/images/depart-images/dashboard.png';
import departImage5 from '../../assets/images/depart-images/card-front.png';
import departImage6 from '../../assets/images/depart-images/card-back.png';
import departImage7 from '../../assets/images/depart-images/driver-form.png';
import departImage8 from '../../assets/images/depart-images/routes.png';

import wordpress1 from '../../assets/images/meveto/meveto-wordpress/wordpress-main.png';
import wordpress2 from '../../assets/images/meveto/meveto-wordpress/wordpress-boost.png';
import wordpress3 from '../../assets/images/meveto/meveto-wordpress/wordpress-business.png';
import wordpress4 from '../../assets/images/meveto/meveto-wordpress/wordpress-register.png';

import docs1 from '../../assets/images/meveto/meveto-docs/docs-landing.png';
import docs2 from '../../assets/images/meveto/meveto-docs/docs-main.png';
import docs3 from '../../assets/images/meveto/meveto-docs/docs-try-meveto.png';
import docs4 from '../../assets/images/meveto/meveto-docs/docs-saml.png';
import docs5 from '../../assets/images/meveto/meveto-docs/docs-wordpress.png';

import dashboard1 from '../../assets/images/meveto/meveto-dashboard/dashboard-login.png';
import dashboard2 from '../../assets/images/meveto/meveto-dashboard/dashboard-main.png';
import dashboard3 from '../../assets/images/meveto/meveto-dashboard/dashboard-subscription.png';
import dashboard4 from '../../assets/images/meveto/meveto-dashboard/dashboard-merchants.png';
import dashboard5 from '../../assets/images/meveto/meveto-dashboard/dashboard-referral.png';
import dashboard6 from '../../assets/images/meveto/meveto-dashboard/dashboard-faq.png';

export const projectsList = [
  {
    name: 'Meveto',
    images: [wordpress1, wordpress2, wordpress3, wordpress4],
    description: `Meveto is revolutionizing the field of cybersecurity by eliminating the need for passwords. Instead, we utilize the power of private and public key encryption to secure your data and applications. Our platform generates unique keys for each user, ensuring that your information is always protected. With Meveto, you no longer have to worry about forgotten passwords or the risk of data breaches. Our commitment to security, combined with a simple and intuitive interface, makes it easier than ever to keep your data and applications secure. Say goodbye to passwords and hello to the future of cybersecurity with Meveto.`,
    techStack: 'html5, css3, sass, JavaScript, React, material UI, TailwindCSS',
    link: 'https://www.meveto.com',
  },
  {
    name: 'Meveto Dashboard',
    images: [
      dashboard1,
      dashboard2,
      dashboard3,
      dashboard4,
      dashboard5,
      dashboard6,
    ],
    description: `Meveto Dashboard is a central platform for managing your Meveto account, where you can secure your applications with ease. Our platform utilizes cutting-edge algorithms to generate unique public and private keys, ensuring that your applications are always protected. With real-time insights into your account activity, customizable access permissions, and a simple and intuitive interface, Meveto's dashboard provides the tools you need to stay in control of your security. It offers a seamless and secure way to access your applications, without the worry of passwords.`,
    techStack: 'html5, css3, sass, JavaScript, React, material UI, TailwindCSS',
    link: 'https://dashboard.meveto.com',
  },
  {
    name: 'Meveto Docs',
    images: [docs1, docs2, docs3, docs4, docs5],
    description: `Meveto Docs is platform for all documentation related to Meveto Inc. It serves as a one-stop-shop for all information and resources related to Meveto services. From user manuals to technical specifications, this platform provides everything you need to get started and make the most out of your Meveto experience. Whether you're a current customer or exploring our offerings, Meveto Docs is the place to go for all the information you need.`,
    techStack: 'html5, css3, sass, JavaScript, React, TailwindCSS',
    link: 'https://docs.meveto.com',
  },
  {
    name: 'Depart',
    images: [
      departImage1,
      departImage2,
      departImage3,
      departImage4,
      departImage5,
      departImage6,
      departImage7,
      departImage8,
    ],
    description: `Depart is transport management system. I built Depart for the university where I did my Bachelor's degree. It is a bespoke web and mobile app to automate most of the work related to student and faculty transport. The app can be used by travelers (students, faculty, etc.) and university administration. Travelers can use it to request transport facilities for an available route and to communicate with transport staff for any query. Admins can use it for many tasks. Several tasks worth mentioning are:
    <br>
    <ul>
    <li>
    Store and process traveler's, driver's, and conductor's data.
    </li>

    <li>
    Manage vehicle information like scheduling routes and departure and arrival times.
    </li>

    <li>
    Print travel passes (cards) for travelers.
    </li>

    <li>
    Manage vehicle routes and meter readings to calculate average fuel consumption.
    </li>

    <li>
    Send real-time notifications for route changes, vehicle changes, vehicle issues, and traffic conditions.
    </li>

    <li>
    Trace vehicle location in an emergency.
    </li>`,
    techStack: 'html5, CSS3, JavaScript, Livewire, Laravel, MySQL',
    link: '',
  },
];
