import "./Slider.css";

const Slider = ({ img }) => {

    const slider = document.querySelector(".slider");
    
    const handleLeftSlide = () => {
        const width = slider.offsetWidth;
        slider.scrollLeft = slider.scrollLeft - width;
    }

    const handleRightSlide = () => {
        const width = slider.offsetWidth;
        slider.scrollLeft = slider.scrollLeft + width;;
    }

    return (
        <div className="slider-container container-fluid mt-3">
            <button id="left-slider-btn" onClick={handleLeftSlide}>
                <p>&lt;</p>
            </button>
            <button id="right-slider-btn" onClick={handleRightSlide}>
                <p>&gt;</p>
            </button>
            <div className="slider">
                {
                    img.map((currElem, index) => {
                        return (
                            <div className="card" key={index}>
                                <figure className="img-figure">
                                    <img className="slider-img" src={currElem.link} alt={currElem.name} />
                                </figure>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Slider;