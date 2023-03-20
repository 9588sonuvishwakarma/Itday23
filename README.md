# ZFW

### A simple web application based on HTML ,CSS ,JavaScript ,React.js ,Node.js ,Django,SQL,Python based website for Zero Food Waste system by developing smart web application to minimize the wastes in the supermarkets/resturants


## DISCLAIMER ⚠️

This system is designed to help reduce food waste, but it is not a guarantee of zero waste. The effectiveness of the system may vary depending on various factors such as the type and amount of food being stored, environmental conditions, and user behavior. It is important to follow the instructions provided with the system to ensure optimal performance. The use of this system should be in conjunction with other initiatives aimed at reducing food waste at local, national, and international levels. This system does not provide specific information about individuals or their personal lives.

## MOTIVATION 💪

Motivations for a zero food wastage system include reducing food waste, conserving resources, and saving money. 

Studies have shown that consumers are motivated to reduce food waste when they understand the environmental and economic impacts of waste. Additionally, the use of technology such as web applications can help motivate individuals to make personal efforts in reducing food waste. 

A zero food wastage system can also help businesses reduce costs associated with wasted food and improve their sustainability practices. Overall, a zero food wastage system can provide an effective tool for individuals and businesses to reduce their environmental impact while also saving money.

## Githuiub 

	#I have also published the corresponding code on Github(https://github.com/9588sonuvishwakarma/Itday23)
	
##Deployed site

       # I have deployed the ZFW (Zero Food Wastage)  on netlify  ( https://clever-unicorn-d7a6f7.netlify.app/ )
 

# Built with 🛠️

import './App.css';
import HomePage from './Components/Navbar/LoginAndLogout/component/homepage/homepage.js';
import Login from './Components/Navbar/LoginAndLogout/component/login/login.js';
import Register from './Components/Navbar/LoginAndLogout/component/register/register.js';
import Records from './Components/Navbar/LoginAndLogout/component/main_access/records.js';
import FrontPage from "./FrontPage/Frontpage.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Chefs from './Components/Chefs/Chefs';
import React, { useState } from 'react';
import Service from './Components/Service/Service';

## DEPLOYMENT 🚀

#### Deployment is done using [deploy](https://github.com/9588sonuvishwakarma/Itday23) branch

## How to run locally 🛠️
- Before the following steps make sure you have [git](https://github.com/9588sonuvishwakarma/Itday23)
- Clone the complete project with `git clone 'https://github.com/9588sonuvishwakarma/Itday23' or you can just download the code and unzip it
- *Note:* The master branch doesn't have the updated code used for deployment, to download the updated code used for deployment you can use the following command
  ```
  ❯ git clone -b deploy https://github.com/9588sonuvishwakarma/Itday23
  - `deploy` branch has only the code required for deploying the app (rest of the code that was used for training the models, data preparation can be accessed on `master` branch)
- It is highly recommended to clone the deploy branch for running the project locally (the further steps apply only if you have the deploy branch cloned)
- Once the project is cloned

- Open the localhost url provided after running `app.py` and now you can use the project locally in your web browser.
