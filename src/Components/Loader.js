import { Oval } from  'react-loader-spinner'
import './Loader.scss';  

function Loader() {
  return (
    <Oval
        height={100}
        width={100}
        color="#333"
        wrapperStyle={{}}
        wrapperClass="loader"
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#616161"
        strokeWidth={2}
        strokeWidthSecondary={2}
    />
  )
}

export default Loader
