import React , { useState } from 'react';
import logo from '../img/head/head_img_BBY.svg';
import logotitle from '../img/head/head_img_logoSide.svg';
import about from '../img/head/head_img-about.svg';
import cloud from '../img/head/head_img_cloud.svg';
import portfolio from '../img/head/head_img_portfolio.svg';
import preinterview from '../img/head/head_img_preInterview.svg';
import Snsdiv from '../Snsdiv';
import appStyle from '../App.module.css';


export default function Hd() {
    const [snsstate, snsUpdate] = useState(false);
    const snsFL = (t) => {
      snsUpdate(t)
      //snsstate값을 t로 수정해라
    }
  return (
    <nav  className='py-3 border-bottom sticky-top'>
    <header className={appStyle.hd + ' container '}>
      <div className='d-flex align-items-end justify-content-between'>
        <h1 className='mb-0 col-md-2 p-0'>
          <a href='/' className='d-flex align-items-start justify-content-between'>
            <span className='col-5 pe-2'><img src={logotitle} ></img></span>
            <img src={logo}  className='col-7'></img>
          </a>
        </h1>
        <ul id="gnb" className='row justify-content-end mb-0 ps-0'>
          <li className={appStyle.about}><a href=''><img src={about} ></img></a></li>
          <li className={appStyle.portfolio}>
            <a href='' className='position-relative d-block'>
            <span className={'position-absolute px-2 ' + appStyle.cloud}><img src={cloud} ></img></span>
            <img src={portfolio}></img>
            </a>
          </li>
          <li className={appStyle.preinterview}><a href=''><img src={preinterview}></img></a></li>
          
        </ul>
        <div id='utilMenu' className='position-relt'>
            <button className='btn p-0 d-block' onClick={ () =>{ snsFL(!snsstate) } } >etc...</button>
            { snsstate && <Snsdiv></Snsdiv> }
        </div>         
      </div>
    </header>
 </nav>
  )
}
