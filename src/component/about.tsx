import './about.scss';
import dark from '../assets/image-about-dark.jpg';
import light from '../assets/image-about-light.jpg';

const WebAbout = () => {
    return (
        <section className='About'>
            <img
                className='About__dark'
                src={dark}
                alt='A minimalist bedroom with two black armchairs and a round wooden table, featuring a white ceramic bowl. A neatly made bed is visible in the background, creating a calm, modern tone.'
            />
            <div className='About__content'>
                <h2 className='About__title'>About our furniture</h2>
                <p className='About__text'>
                    Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </div>
            <img
                className='About__light'
                src={light}
                alt='A minimalistic white chair with a round backrest is placed on a glossy light grey floor, casting soft shadows, creating a serene and modern ambiance.'
            />
        </section>
    )
}

export default WebAbout;