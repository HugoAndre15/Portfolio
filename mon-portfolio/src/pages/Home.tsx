import React from 'react';

const Home: React.FC = () => {
    return (
        <div>
            <section id="presentation">
                <h1>Présentation</h1>
                <p>Bonjour, je m'appelle Hugo et je suis développeur web. Bienvenue sur mon portfolio !</p>
            </section>

            <section id="projets">
                <h1>Projets</h1>
                <p>Voici quelques-uns de mes projets récents :</p>
                <ul>
                    <li>Projet 1 - Description du projet 1</li>
                    <li>Projet 2 - Description du projet 2</li>
                    <li>Projet 3 - Description du projet 3</li>
                </ul>
            </section>

            <section id="competences">
                <h1>Compétences</h1>
                <p>Voici un aperçu de mes compétences :</p>
                <ul>
                    <li>Compétence 1</li>
                    <li>Compétence 2</li>
                    <li>Compétence 3</li>
                </ul>
            </section>

            <section id="contact">
                <h1>Contact</h1>
                <p>Vous pouvez me contacter via les moyens suivants :</p>
                <ul>
                    <li>Email: hugo@example.com</li>
                    <li>Téléphone: 123-456-7890</li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/hugo">linkedin.com/in/hugo</a></li>
                </ul>
            </section>
        </div>
    );
};

export default Home;