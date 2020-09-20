import React, { useState } from "react"
import "./HoverCard.css"
import PropTypes from "prop-types"
import classnames from "classnames"
import { useHistory } from 'react-router-dom';

export default function HoverCard(props) {

    const [hover, setHover] = useState(false)

    const backgroundImage= {
        backgroundImage: `url(${props.imageURL})`,
    }
    const history = useHistory();
    const handleClick = () => history.push(props.id);

    return (
        <div style={{height: props.height, width: props.width}}
             className="hover-card" onMouseEnter={setHover.bind(this, true)}
             onMouseLeave={setHover.bind(this, false)}
             onClick={handleClick}
        >
            <div style={{...backgroundImage, ...props.size}} className={classnames("background", {"blurred" : hover})}/>
            {<p className={classnames("center-text", {"fade-out" : !hover})}>{props.centerText}</p>}
            {<h2 className={classnames("bottom-text", {"fade-out" : hover})}>{props.bottomText}</h2>}
        </div>
    )

}

HoverCard.propTypes = {
    imageURL: PropTypes.string.isRequired,
    bottomText: PropTypes.string.isRequired,
    centerText: PropTypes.string.isRequired,
    size: PropTypes.shape({
        height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
}
