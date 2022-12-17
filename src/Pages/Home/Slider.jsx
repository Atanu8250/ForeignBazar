import React from 'react'
import { Box } from '@chakra-ui/react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import SliderCardOne from './SliderCardOne';
import axios from 'axios';
import SliderCardTwo from './SliderCardTwo';

const Slider = ({serial}) => {
    const [data, setData] = React.useState([]);

    React.useEffect(()=>{
        axios.get(`/${serial === 1 ? 'products' : 'male'}`)
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
        <Box className='Slider'>
            <Box className='pre-btn slider-btn' onClick={btnPressPrev}><BsChevronLeft /></Box>
            <Box className='nxt-btn slider-btn' onClick={btnPressNext}><BsChevronRight /></Box>
            <Box className='Slider-Cards' ref={boxRef}>
                
                {data?.map(item=> serial === 1 ? <SliderCardOne key={item.id} {...item} /> : <SliderCardTwo key={item.id} {...item} />)}
            </Box>
        </Box>
    )
}

export default Slider