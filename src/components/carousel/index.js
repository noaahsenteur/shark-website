import Slider from "react-slick";
import styles from './style.module.scss';
import Avatar from '../../../public/avatars/slide1.jpg';

const Carousel = ({rightToLeft, autoPlaySpeed}) => {

    const settings = {
        infinite: true,
        slidesToShow: 10,
        draggable: false,
        autoplay: true,
        rtl: rightToLeft,
        arrows: false,
        responsive: [
            { 
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5
                }
            },
           { 
               breakpoint: 767,
               settings: {
                   slidesToShow: 2
               }
           },
           { 
            breakpoint: 991,
            settings: {
                slidesToShow: 3
            }
        }
          ]
      };
      return (
        <div className={styles.carousel}>
          <Slider {...settings}>
          <div className={styles.item}>
                <img src={Avatar.src}/>
                </div>
                <div className={styles.item}>
                <img src={Avatar.src}/>
                </div>
                <div className={styles.item}>
                <img src={Avatar.src}/>
                </div>
                <div className={styles.item}>
                <img src={Avatar.src}/>
                </div>
                <div className={styles.item}>
                <img src={Avatar.src}/>
                </div>
                <div className={styles.item}>
                <img src={Avatar.src}/>
                </div>
                <div className={styles.item}>
                <img src={Avatar.src}/>
                </div>
                <div className={styles.item}>
                <img src={Avatar.src}/>
                </div>
                <div className={styles.item}>
                <img src={Avatar.src}/>
                </div>
                <div className={styles.item}>
                <img src={Avatar.src}/>
                </div>
                <div className={styles.item}>
                <img src={Avatar.src}/>
                </div>
                <div className={styles.item}>
                <img src={Avatar.src}/>
                </div>
                <div className={styles.item}>
                <img src={Avatar.src}/>
                </div>
                <div className={styles.item}>
                <img src={Avatar.src}/>
                </div>
                <div className={styles.item}>
                <img src={Avatar.src}/>
                </div>
                <div className={styles.item}>
                <img src={Avatar.src}/>
                </div>
                <div className={styles.item}>
                <img src={Avatar.src}/>
                </div>
                <div className={styles.item}>
                <img src={Avatar.src}/>
                </div>

          </Slider>
        </div>
      );
    }


export default Carousel