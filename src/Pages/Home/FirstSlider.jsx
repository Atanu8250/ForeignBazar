import React from 'react'
import { Box } from '@chakra-ui/react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import SliderCardOne from './SliderCardOne';
import axios from 'axios';

const FirstSlider = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(()=>{
        axios.get(`http://localhost:3000/products`)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

    const boxRef = React.useRef(); 
    const btnPressPrev = () => {
        const width = boxRef.current.clientWidth;
        boxRef.current.scrollLeft = boxRef.current.scrollLeft - width;
    }

    const btnPressNext = () => {
        const width = boxRef.current.clientWidth;
        boxRef.current.scrollLeft = boxRef.current.scrollLeft + width;
    }

    return (
        <Box className='First-Slider'>
            <Box className='pre-btn slider-btn' onClick={btnPressPrev}><BsChevronLeft /></Box>
            <Box className='nxt-btn slider-btn' onClick={btnPressNext}><BsChevronRight /></Box>
            <Box className='First-Slider-Cards' ref={boxRef}>
                
                {data?.map(item=><SliderCardOne key={item.id} {...item} />)}
            </Box>
        </Box>
    )
}

export default FirstSlider