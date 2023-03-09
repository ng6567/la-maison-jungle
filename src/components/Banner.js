import logo from '../assets/logo.png'
import '../styles/Banner.css'
import Recommendation from './Recommendation'


function Banner () {
    const title = 'La maison Jungle'
    
return (
    <div className='lmj-banner'>
    <div> 
    <img src={logo} alt='La maison Jungle' className='lmj-logo'/>
    <h1 className='lmj-title'>{title}</h1>
    </div>
    <Recommendation/>
    
    </div>

   )  
}
export default Banner