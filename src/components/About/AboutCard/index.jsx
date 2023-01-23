import Heading from "../../common/Heading"
import "../styles.css"
import AboutWrapper from "../AboutWrapper"
import { homeAbout } from "../../../dummydata"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome' >
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/about.jpeg' alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='ÁREAS DE PESQUISA' title='No LADELIN atuamos nas seguintes áreas' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <AboutWrapper />
    </>
  )
}

export default AboutCard
