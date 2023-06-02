import React from "react"

/* CONFIG 
   props: 
    height: ""
    width: ""
    source: ""
    color: ""
*/

type imageIconsProps = {
    height: string,
    width: string,
    source: string,
    color: string
}
const IconImage: React.FC<imageIconsProps> = (props) => {
    return (
        <image 
        style=""
        src={props.source} alt="Thumbnail of icon" />
    )
}
export default IconImage;