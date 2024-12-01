import React from 'react'
import Button from '../button/Button'
import './ContributionSec.scss'
import { FaDownload } from "react-icons/fa";
import contribution2 from '../../images/contribute2.png'
import contribution3 from '../../images/contribute3.png'
import { useSelector } from 'react-redux/es/hooks/useSelector';



const ContributionSec = () => {

    const theme = useSelector((state) => state.theme.theme === null ? null : state.theme.theme)
  return (
    <div id='contribution' className="contributionSec">
        <div className="contributeCont">
            <div className="cTitleCont">
                <div className="cTitle">
                    <h2>CONTRIBUTION</h2>
                    <div className='vline'></div>
                    <p className='clink'>VIEW MORE</p>
                </div>
            </div>
            <div className="contributeCards">
                <div className="contributeCard">
                    <div className={theme === "light" ? 'cImg imgMask' : 'cImg'}>
                        <img src={contribution3} alt='contribution img2' />
                    </div>
                    <div className="cCardText">
                        <h1>3D GREEK STATUE PACK</h1>
                        <h2>OVER <span>200</span> GREEK STYLE SCULPTURE</h2>
                        <Button reverse text="DOWNLOAD" background borderRadius textColor="black" padding="1.5vw" margin="0 0 20px 0" Icon={FaDownload} />
                    </div>
                </div>
                <div className="contributeCard">
                    <div className="cCardText">
                        <h1>GREEK STATUE AVATARS</h1>
                        <h2>+500 GREEK STYLE <span>USER AVATARS</span></h2>
                        <Button reverse text="DOWNLOAD" background borderRadius textColor="black" padding="1.5vw" Icon={FaDownload} />
                    </div>
                    <div className='cImg'>
                        <img src={contribution2} alt='contribution img2' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContributionSec