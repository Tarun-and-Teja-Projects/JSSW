import { Image } from '@mantine/core';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
interface Props{
    ImageLink:string
}
const ImageViewer:React.FC<Props>=({ImageLink})=>{
    return(
           <>
            {ImageLink && (<Zoom>
                <Image src={ImageLink} h={40}/>
                </Zoom>)}
           </>
            
    )
}
export default ImageViewer;