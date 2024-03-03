import React from 'react'

const HalfPagedImage = ({ image = 'https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png' }) => {
    return (
        <section className='half-paged'>
            <figure className='half-paged-image'>
                <img src={image} alt={image} />
            </figure>
        </section>
    )
}

export default HalfPagedImage