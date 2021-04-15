import { useEffect, useState } from 'react'
import leftArrow from './left-arrow.svg'
import rightArrow from './right-arrow.svg'

export default function Carousel() {
    const [image, setImage] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        let img = [
            'https://cdn.cloudflare.steamstatic.com/steam/apps/359550/ss_79af6b4e7ea15b745c0c315e4ae8f7450bb64f58.600x338.jpg',
            'https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/ss_2034e0261ba7313a2eaa78edafed1182f2eb48cc.600x338.jpg',
            'https://cdn.cloudflare.steamstatic.com/steam/apps/892970/ss_e783457b53702b76249835ac1b4c051211b92d69.600x338.jpg',
            'https://cdn.cloudflare.steamstatic.com/steam/apps/1282730/ss_d6cf090e7c644756cc66443c0740f5497e6afbba.600x338.jpg',
            'https://cdn.cloudflare.steamstatic.com/steam/apps/552520/ss_c6f08b3d2e156f705205f882504d3cd96f78cca1.600x338.jpg'
        ]
        setImage(img)

    }, [])

    useEffect(() => {
        let AutoSlideShow = setTimeout(() => {
            let count = (activeIndex === image.length - 1) ? 0 : activeIndex + 1
            setActiveIndex(count)
        }, 2000)
        return () => {
            clearTimeout(AutoSlideShow)
        }
    }, [activeIndex])
    return (
        <section className='carousel'>
            <div className='carousel__header'>
                featured & recommended
            </div>
            <div className='carousel__inner'>
                {image.map((url, index) =>
                    <div className={`carousel__items ${index === activeIndex ? `active` : ``}`} >
                        <img src={url} alt='' />
                    </div>
                )}
                <div className='carousel__indicators' style={{width:`${image.length*30+30}px`}}>
                    {image.map((url, index) =>
                        <div
                            className={`indicator ${index === activeIndex ? `active` : ``}`}
                            onClick={() => setActiveIndex(index)}
                        >
                        </div>
                    )}
                </div>
                <div
                    className='carousel__control--left carousel__control'
                    onClick={() => setActiveIndex(activeIndex === 0 ? image.length - 1 : activeIndex - 1)}
                >
                    <img src={leftArrow} alt="arrow"/>
                </div>
                <div
                    className='carousel__control--right carousel__control'
                    onClick={() => setActiveIndex(activeIndex + 1 === image.length ? 0 : activeIndex + 1)}
                >
                    <img src={rightArrow} alt="arrow"/>
                </div>
            </div>
        </section>
    )
}