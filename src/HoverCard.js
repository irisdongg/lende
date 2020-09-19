import React, { useState } from "react"
import "./HoverCard.css"
import PropTypes from "prop-types"
import classnames from "classnames"

export default function HoverCard(props) {

    const [hover, setHover] = useState(false)

    const backgroundImage= {
        backgroundImage: `url(${props.imageURL})`,
    }

    return (
        <div style={{height: props.height, width: props.width}}
             className="hover-card" onMouseEnter={setHover.bind(this, true)}
             onMouseLeave={setHover.bind(this, false)}
        >
            <div style={{...backgroundImage, ...props.size}} className={classnames("background", {"blurred" : hover})}/>
            {<p className={classnames("center-text", {"fade-out" : !hover})}>{props.centerText}</p>}
            {<p className={classnames("bottom-text", {"fade-out" : hover})}>{props.bottomText}</p>}
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
