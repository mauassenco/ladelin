import {FaFacebookF, FaYoutube} from 'react-icons/fa'
import {AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'
// import logo from '../public/images/lgldl.png'

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            {/* <h1>LADELIN</h1>
            <span>Laboratório de Desenvolvimento da Linguagem</span> */}
            <img src='../images/lgldl.png' alt="sdf" />
          </div>
          <div className='social'>
            <FaFacebookF  className='icon' size={20}/>
            <AiOutlineInstagram  className='icon'/>
            <AiOutlineTwitter  className='icon'/>
            <FaYoutube  className='icon'/>            
          </div>
        </div>
      </section>
    </>
  )
}

export default Head