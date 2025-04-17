import React, { useEffect} from 'react';
import gsap from 'gsap';
import '../styles/Section1.css';
import Video from '../assets/phone_video.mp4';

function Section1() {

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo('.text', 
            { 
                opacity: 0, 
                y: 50 
            }, 
            { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                ease: 'power2.out' 
            }
        );

        tl.fromTo('.video', 
            { 
                opacity: 0, 
                y: 50 
            }, 
            { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                ease: 'power2.out' 
            },
            '-=0.5'
        );

    }, []);

    return (
        <>
            <div className='section'>
                <div className='text'>
                    <h1>iPhone</h1>
                    <p>Didesain untuk dicintai</p>
                </div>
                <div className='video'>
                    <video autoPlay loop muted playsInline>
                        <source src={Video} />
                    </video>
                </div>
            </div>
        </>
    )

}

export default Section1;