import React from "react";
import aboutThumb1 from '../../images/about-thumb-01.jpg';
import aboutThumb2 from '../../images/about-thumb-02.jpg';
import aboutThumb3 from '../../images/about-thumb-03.jpg';
import videoBack from '../../images/about-video-bg.jpg';
import '.././overAllCss.css';
const Section2 = () => {
  return (
    <div>
      <section class="section2">
        <div class="section2_inside container">
          <div class="section2_content_block1">

            <div class="about_content_block1_item1">
              ---ABOUT US
            </div>
            <div class="section2_content_block1_item2">
              <div> Zero Wastage Food </div>
            </div>
            <div class="section2_content_block1_item3">
              <div>
                The restaurant manages its dry and wet organic wastes responsibly.  It also donates items like plastic bottles and cardboard to rag pickers who take them for recycling. Prabhu, the restaurant owner, keeps a log of the establishment’s daily food waste and tries to eliminate it by ordering the right amount of perishables.            
              </div>
              <div>
Throwing away food is like throwing away money. It's a shame that people waste food because there are those who die from starvation. People should feel guilty wasting food. We are all responsible for the people who have nothing to eat.              </div>
            </div>
            <div class="section2_content_block1_item4">
              <div class="section2_content_block1_item4_img1">
                <img src={aboutThumb1} alt=""></img>
              </div>
              <div class="section2_content_block1_item4_img1">
                <img src={aboutThumb2} alt=""></img>
              </div>
              <div class="section2_content_block1_item4_img1">
                <img src={aboutThumb3} alt=""></img>
              </div>


            </div>
          </div>
          <div class="section2_picture_block2">
            <img width='100%' src={videoBack} alt=""></img>

          </div>

        </div>
      </section>



    </div>
  )
}
export default Section2;