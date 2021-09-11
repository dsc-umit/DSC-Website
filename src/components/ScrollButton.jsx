import React, {useState} from 'react';
import {FaRegArrowAltCircleUp} from 'react-icons/fa';
import { Button } from './Styles';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<Button>
	<FaRegArrowAltCircleUp onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'none', boxShadow: "2px 2px 3px #999", borderRadius: "50%"}} />
	</Button>
);
}

export default ScrollButton;
