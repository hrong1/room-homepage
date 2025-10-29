import './slider.scss';
import { useState } from 'react';
import arrow from '../assets/icon-arrow.svg';
import angleLeft from '../assets/icon-angle-left.svg';
import angleRight from '../assets/icon-angle-right.svg';

const desktopImages: Record<string, string> = import.meta.glob(
  '../assets/desktop-image-hero-*.jpg', 
  { eager: true, query: '?url', import: 'default' }
);
const mobileImages: Record<string, string> = import.meta.glob(
  '../assets/mobile-image-hero-*.jpg', 
  { eager: true, query: '?url', import: 'default' }
)

interface slideMetaData {
    id: number;
    itemTitle: string;
    itemText: string;
    altText: string;
}

interface slideData extends slideMetaData {
  desktop: string | undefined;
  mobile: string | undefined;
}

const sliderMeta : slideMetaData[] = [
  {
    id: 1,
    itemTitle: "Discover innovative ways to decorate",
    itemText: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    altText: "A minimalist dining area with two modern white chairs and a light wood table. A small bonsai tree on the table adds a touch of green against a gray wall."
  },
  {
    id: 2,
    itemTitle: "We are available all across the globe",
    itemText: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    altText: "Three modern chairs in soft colors—yellow, pale green, and off-white—sit side by side against a neutral background, conveying a calm, minimalist vibe."
  },
  {
    id: 3,
    itemTitle: "Manufactured with the best materials",
    itemText: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    altText: "A black metal folding chair is partially open against a dark gray background. Its sleek, minimalist design conveys simplicity and functionality."
  },
];

const slidesData: slideData[] = sliderMeta.map(meta => {
    const desktopPathKey = `../assets/desktop-image-hero-${meta.id}.jpg`;
    const mobilePathKey = `../assets/mobile-image-hero-${meta.id}.jpg`;

    return {
        ...meta,
        desktop: desktopImages[desktopPathKey],
        mobile: mobileImages[mobilePathKey]
    };
});

if (slidesData.some(slide => !slide.desktop || !slide.mobile)) {
    console.warn("Slider : some images are not found");
}

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length);
    };

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    };

    return (
        <section className='slider'>
            {slidesData.map((slide, index) => {
                return (
                    <div
                        key={slide.id}
                        className={`slider__container ${index === activeIndex ? 'active' : ''}`}>
                        <picture className='slider__image'>
                            <source media="(min-width: 50rem)" srcSet={slide.desktop} />
                            <img  src={slide.mobile} alt={slide.altText}/>
                        </picture>
                        <div className='slider__content'>
                            <h2 className='slider__title'>{slide.itemTitle}</h2>
                            <p className='slider__text'>{slide.itemText}</p>
                        </div>
                    </div>
                )
            })}
            <div className='slider__change-button'>
                <button 
                    type='button' 
                    className='slider__arrowButton prev'
                    onClick={prevSlide}
                    aria-label="Previous slide">
                    <img className='slider__arrow' src={angleLeft} alt=''/>
                </button>
                <button 
                    type='button' 
                    className='slider__arrowButton next'
                    onClick={nextSlide}
                    aria-label="Next slide">
                    <img className='slider__arrow' src={angleRight} alt=''/>
                </button>
            </div>
            <a href="/" className='slider__shopLink'>
                Shop now
                <img className='slider__arrow' src={arrow}/>
            </a>
        </section>
    )

}

export default Slider;