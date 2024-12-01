import React from 'react'
import { nftCards } from '../../data'
import NftCard from '../nftCard/NftCard'
import './RecentSec.scss'
import  gsap  from 'gsap' 
import  ScrollTrigger  from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { useEffect } from 'react'

const RecentSec = () => {

  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const section = ref.current;
    const wrapper = section.querySelector('.recentCarousel')

    gsap.fromTo(wrapper, { x: -wrapper.scrollWidth}, {
      x: 0,
      scrollTrigger: {
        trigger: section,
        scrub: 1
      }
    })
  }, [])
  return (
    <div id='works' className='recentSec' ref={ref}>
      <div className='recentCont'>
        <div className='recentTitle'>
          <div className='rTitleCont'>
            <h3>RECENT NFT</h3>
            <div className='vline'></div>
            <p className="rlink">VIEW MORE</p>
          </div>
        </div>
        <div className='recentCarousel'>
          {nftCards.map((nftCard, index)=> (
            <NftCard nftCard={nftCard} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecentSec