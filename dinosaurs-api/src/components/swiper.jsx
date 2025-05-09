import {Swiper, SwperSlide} from 'swiper/react'
import 'swiper/css'

function Swiper(props){
    return(
        <Swiper
            spaceBetween={50}
            slidesPerView={4}
        
        >
            {props.resultados.map((item) => (
                <SwperSlide key={item.idMeal} onClick={() => alert(item.strMeal)}>
                    <img src={item.strMealThumb} alt={item.strMeal}/>
                </SwperSlide>
            ))}

        </Swiper>
    );
}

export default Swiper