import React from 'react'
import HeroSlider from '../sliders/HeroSlider'
import FeaturedSlider from '../sliders/FeaturedSlider'
import TopProducts from '../product/TopProduct'
import Services from '../main/Services'
const Home = () => {
  return (
    
      <div>
          {/* slider */}
         <HeroSlider/>
         <h2 className='text-center my-5 text-light featured_product'>Featured Products</h2>
         <FeaturedSlider/>
         <section >
                <div className="container-fluid">
         <h2 className='text-center my-5 text-light'>Top Products</h2>
                  
                    <TopProducts />
                </div>
            </section>
           
            <section>

           <h2 className='text-center my-5 text-light '>Our Advantages</h2> 
              <div className="container-fluid">
                <Services/>
              </div>
           </section>
    </div>
  )
}

export default Home
