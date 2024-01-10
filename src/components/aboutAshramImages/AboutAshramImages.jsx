import PropTypes from 'prop-types';
import './aboutAshramImages.scss';

const AboutAshramImages = ({ imageUrl1,  imageUrl2,  imageUrl3 }) => {
    return (
       
        <div className='about_ashram_images'>
            <div className='about_ashram_image1'>
                <img src={imageUrl1}  className='images'/>
            </div>
            <div className='about_ashram_fleximages'>
                <div className='about_ashram_image2'>
                   <img src={imageUrl2}  className='images'/>
                </div>
                <div className='about_ashram_image3'>
                   <img src={imageUrl3} className='images'/>
                </div>
            </div>
        </div>
     
    );
};

AboutAshramImages.propTypes = {
    imageUrl1: PropTypes.string.isRequired,
    imageUrl2: PropTypes.string.isRequired,
    imageUrl3: PropTypes.string.isRequired,
};

export default AboutAshramImages;