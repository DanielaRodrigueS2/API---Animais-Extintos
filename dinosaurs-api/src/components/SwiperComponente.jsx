import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

function SwiperComponente(props){
    return(
        <Swiper
            spaceBetween={50}
            slidesPerView={4}
        
        >
            {props.resultados.map((item) => (
                <SwiperSlide key={item.idMeal} onClick={() => alert(item.strMeal)}>
                    <img src={item.strMealThumb} alt={item.strMeal}/>
                </SwiperSlide>
            ))}

        </Swiper>
    );
}

export default SwiperComponente