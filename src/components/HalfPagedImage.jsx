import React from 'react'

const HalfPagedImage = ({ image }) => {
    return (
        <section className='half-paged'>
            <figure className='half-paged-image'>
                <img src={image} alt={image} />
            </figure>
        </section>
    )
}

export default HalfPagedImage