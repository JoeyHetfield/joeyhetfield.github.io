import React, { useState } from 'react';
import '../css/AboutMe.css';
import profilepicture from '../profilepicture.jpg';

function AboutMe() {
  const [language, setLanguage] = useState('en');

  return (
    <section>
      <h2>{language === 'en' ? 'About Me' : 'Sobre Mim'}</h2>
      <img src={profilepicture} alt="Your name" />
      <p>
        {language === 'en'
          ? 'I am a web development student from Brazil, currently 26 years old, and I am in the process of transitioning my career to technology. My goal is to secure my first job as a developer I have experience in HTML, CSS, JavaScript, JS6, Jest, React, and Redux, and I am currently learning about React Hooks. I am passionate about creating clean, efficient, and user-friendly web applications and I am constantly looking to improve my skills and learn new technologies Feel free to take a look at my projects to see my work. I have attempted to demonstrate my proficiency in various web development technologies. If you have any questions or feedback, please do not hesitate to reach out to me.'
          : 'Sou um estudante de desenvolvimento web, de São Paulo, atualmente em transição de carreira para a tecnologia. Com estudos em HTML, CSS, JavaScript, Jest, React e Redux, estou dedicado a criar aplicativos web limpos, eficientes e amigáveis ao usuário. Atualmente estou aprendendo sobre React Hooks e sempre buscando melhorar minhas habilidades e aprender novas tecnologias. Como estudante na Trybe, estou constantemente ampliando meus conhecimentos e aprimorando minhas habilidades para alcançar meu objetivo de conseguir meu primeiro emprego como desenvolvedor.'}
      </p>
      <button type="button" onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}>
        {language === 'en' ? 'Versão em Português' : 'English version'}
      </button>
    </section>
  );
}

export default AboutMe;
