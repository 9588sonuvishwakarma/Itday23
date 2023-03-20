import React from "react";
import "../overAllCss.css";
import TabIcon1 from "../../images/tab-icon-01.png";
import TabIcon2 from "../../images/tab-icon-02.png";
import TabIcon3 from "../../images/tab-icon-03.png";

import TabItem1 from "../../images/tab-item-01.png";
import TabItem2 from "../../images/tab-item-02.png";
import TabItem3 from "../../images/tab-item-03.png";
import TabItem4 from "../../images/tab-item-04.png";
import TabItem5 from "../../images/tab-item-05.png";
import TabItem6 from "../../images/tab-item-06.png";

import img1 from "./img1.jpeg";
import img2 from "./img2.jpeg";
import img3 from "./img3.jpeg";
import img4 from "./img4.jpeg";
import img5 from "./img5.jpeg";
import img6 from "./img6.jpeg";
import img7 from "./img7.jpeg";
import img8 from "./img8.jpeg";
import "./Section6.css";
import { Button } from "react-bootstrap";




const Section6 = () => {
    return (
        <div>

            <div className="section6">
                <div className="section6_inside container">
                    <div className="word_klassy">
                        {/* Klassy Week */}
                    </div>
                    <div className="offer">
                        <div>Available Food</div>
                        {/* <div>Meal Offers</div> */}
                    </div>
                    <div className="main_duration">
                        {/* <div className="duration">
                            <div id="breakfast" className="lunch_time">
                                <img src={TabIcon1} alt=""></img>
                                Break Fast
                            </div>
                            <div id="breakfast" className="lunch_time">
                                <img src={TabIcon2} alt=""></img>
                                Lunch
                            </div>
                            <div id="breakfast" className="lunch_time">
                                <img src={TabIcon3} alt=""></img>
                                Dinner
                            </div>
                        </div> */}
                    </div>



                    <div className="menu" style={{ backgroundColor: "black", padding: "5px",borderRadius:"10px"}}>
                        {/* <div id="item1" className="item">
                            <div>
                                <h2>Image</h2>
                            </div>
                            <div className="menu_item_content Item">
                                <div className="heading"> Name of Food</div>
                                <div className="item_desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, amet?</div>
                            </div>
                            <div className="menu_item_price"> Expire Date</div>
                        </div>
                        */}
                     
                         <div id="item1" className="item">
                            <div className="menu-img Item">
                                <img className="imageItem" src={TabItem1} alt=""></img>
                            </div>
                            <div className="menu_item_content Item">
                                <div className="heading"> Fresh Chicken Salad</div>
                                <div className="item_desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, amet?</div>
                            </div>
                            <div className="menu_item_pric Item"> 23/03/23</div>
                            <div className="place Item">Jaipur</div>
                            <Button className="button">Order</Button>
                        </div>

                        <div id="item1" className="item">
                            <div className="menu-img Item">
                                <img className="imageItem" src={TabItem2} alt=""></img>
                            </div>
                            <div className="menu_item_content Item">
                                <div className="heading"> Orange Juice</div>
                                <div className="item_desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, amet?</div>
                            </div>
                            <div className="menu_item_pric Item">23/03/23</div>
                            <div className="place Item">Jaipur</div>
                            <button className="button">Order</button>
                        </div>

                        
                        <div id="item1" className="item">
                            <div className="menu-img Item">
                                <img className="imageItem" src={TabItem2} alt=""></img>
                            </div>
                            <div className="menu_item_content Item">
                                <div className="heading"> Orange Juice</div>
                                <div className="item_desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, amet?</div>
                            </div>
                            <div className="menu_item_pric Item">23/03/23</div>
                            <div className="place Item">Jaipur</div>
                            <button className="button">Order</button>


                        </div>

                        <div id="item1" class="item">
                            <div class="menu-img Item">
                                <img className="imageItem" src={TabItem3} alt=""></img>
                            </div>
                            <div class="menu_item_content Item">
                                <div class="heading"> Fruit Salad</div>
                                <div class="item_desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, amet?</div>
                            </div>
                            <div class="menu_item_pric Item"> 23/03/23</div>
                            <div className="place Item">Jaipur</div>
                            <button className="button">Order</button>
                        </div>

                        <div id="item1" class="item">
                            <div class="menu-img Item">
                                <img className="imageItem" src={TabItem4} alt=""></img>
                            </div>
                            <div class="menu_item_content Item">
                                <div class="heading"> Egg Ommelete</div>
                                <div class="item_desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, amet?</div>
                            </div>
                            <div class="menu_item_pric Item"> 23/03/23</div>
                            <div className="place Item">Jaipur</div>
                            <button className="button">Order</button>
                        </div>

                        <div id="item1" class="item">
                            <div class="menu-img Item">
                                <img className="imageItem" src={TabItem5} alt=""></img>
                            </div>
                            <div class="menu_item_content Item">
                                <div class="heading">Dollma Pire</div>
                                <div class="item_desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, amet?</div>
                            </div>
                            <div class="menu_item_pric Item"> 23/03/23</div>
                            <div className="place Item">Jaipur</div>
                            <button className="button">Order</button>
                        </div>

                        <div id="item1" class="item">
                            <div class="menu-img Item">
                                <img className="imageItem" src={TabItem6} alt=""></img>
                            </div>
                            <div class="menu_item_content Item">
                                <div class="heading">Ommelette & Cheese </div>
                                <div class="item_desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, amet?</div>
                            </div>
                            <div class="menu_item_pric Item">23/03/23</div>
                            <div className="place Item">Jaipur</div>
                            <button className="button">Order</button>
                        </div>
                         <div id="item1" class="item">
                            <div class="menu-img Item">
                                <img className="imageItem" src={img1} alt=""></img>
                            </div>
                            <div class="menu_item_content Item">
                                <div class="heading">Ommelette & Cheese </div>
                                <div class="item_desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, amet?</div>
                            </div>
                            <div class="menu_item_pric Item "> 23/03/23</div>
                            <div className="place Item">Jaipur</div>
                            <button className="button">Order</button>

                        </div>
                         <div id="item1" class="item">
                            <div class="menu-img Item">
                                <img className="imageItem" src={img2} alt=""></img>
                            </div>
                            <div class="menu_item_content Item">
                                <div class="heading">Ommelette & Cheese </div>
                                <div class="item_desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, amet?</div>
                            </div>
                            <div class="menu_item_pric Item"> 23/03/23</div>
                            <div className="place item">Jaipur</div>
                            <button className="button">Order</button>
                        </div>
                         <div id="item1" class="item">
                            <div class="menu-img Item">
                                <img className="imageItem" src={img3} alt=""></img>
                            </div>
                            <div class="menu_item_content Item">
                                <div class="heading">Ommelette & Cheese </div>
                                <div class="item_desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, amet?</div>
                            </div>
                            <div class="menu_item_pric Item"> 23/03/23</div>
                            <div className="place Item">Jaipur</div>
                            <button className="button">Order</button>
                        </div>
                         <div id="item1" class="item">
                            <div class="menu-img Item">
                                <img className="imageItem" src={img4} alt=""></img>
                            </div>
                            <div class="menu_item_content Item">
                                <div class="heading">Ommelette & Cheese </div>
                                <div class="item_desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, amet?</div>
                            </div>
                            <div class="menu_item_pric Item"> 23/03/23</div>
                            <div className="place Item">Jaipur</div>
                            <button className="button">Order</button>
                        </div>
                         <div id="item1" class="item">
                            <div class="menu-img Item">
                                <img className="imageItem" src={img5} alt=""></img>
                            </div>
                            <div class="menu_item_content Item">
                                <div class="heading">Ommelette & Cheese </div>
                                <div class="item_desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, amet?</div>
                            </div>
                            <div class="menu_item_pric Item"> 23/03/23</div>
                            <div className="place Item">Jaipur</div>
                            <button className="button">Order</button>

                        </div>
                         <div id="item1" class="item">
                            <div class="menu-img Item">
                                <img className="imageItem" src={img6} alt=""></img>
                            </div>
                            <div class="menu_item_content Item">
                                <div class="heading">Ommelette & Cheese </div>
                                <div class="item_desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, amet?</div>
                            </div>
                            <div className="menu_item_pric Item"> 23/03/23</div>
                            <div className="place item">Jaipur</div>
                            <button className="button">Order</button>

                        </div>
                         <div id="item1" className="item">
                            <div className="menu-img Item">
                                <img  className="imageItem" src={img7} alt=""></img>
                            </div>
                            <div className="menu_item_content Item">
                                <div className="heading">Ommelette & Cheese </div>
                                <div className="item_desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, amet?</div>
                            </div>
                            <div className="menu_item_pric Item"> 23/03/23</div>
                            <div className="place Item">Jaipur</div>
                            <button className="button">Order</button>

                        </div> <div id="item1" class="item">
                            <div className="menu-img Item">
                                <img className="imageItem" src={img8} alt=""></img>
                            </div>
                            <div className="menu_item_content Item">
                                <div className="heading">Ommelette & Cheese </div>
                                <div className="item_desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, amet?</div>
                            </div>
                            <div className="menu_item_pric Item">23/03/23</div>
                            <div className="place Item">Jaipur</div>
                            <button className="button">Order</button>                
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
   
}
export default Section6;