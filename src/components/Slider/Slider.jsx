import "./Slider.css";

const Slider = ({ img }) => {

    const handleLeftSlide = () => {
        const slider = document.querySelector(".slider");
        slider.scrollLeft = slider.offsetWidth - 200;
    }

    const handleRightSlide = () => {
        const slider = document.querySelector(".slider");
        slider.scrollLeft += (slider.offsetWidth + 200);
    }

    return (
        <div className="slider-container container">
            <button id="left-slider-btn" onClick={handleLeftSlide}>&lt;</button>
            <div className="slider">
                {
                    img.map((curElem, index) => {
                        return (
                            <div className="box" key={index}>

                                <figure className="img-box">
                                    <img className="slider-img" src={curElem.link} alt={curElem.name} />
                                </figure>
                            </div>
                        )
                    })
                }
            </div>
            <button id="right-slider-btn" onClick={handleRightSlide}>&gt;</button>
        </div>
    )
}

export default Slider;