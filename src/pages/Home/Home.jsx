import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero_caption">
          <img src={hero_title} alt="" className='caption-img' />

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, hic eum. Aspernatur vel officia dolorum doloribus assumenda sed ipsa, in cumque inventore optio ea sint odio quisquam exercitationem natus?</p>
          <div className="hero_btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>

          </div>
          <TitleCards />
        </div>
      </div>
    </div>
  )
}

export default Home