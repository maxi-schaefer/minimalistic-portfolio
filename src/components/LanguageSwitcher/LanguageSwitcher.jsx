import React, { useState } from 'react'
import './LanguageSwitcher.scss'
import config from '../../config.json';

const LanguageSwitcher = (props) => {

    const { currentLang, i18n } = props;
    const [selectedLang, setSelectedLang] = useState(currentLang);
    const elem = document.getElementById("menu")
    const toggleMenu = () => {
        if(elem.classList.contains("open")) elem.classList.remove("open")
            else elem.classList.add("open")
    }

  return (
    <div className='langMenu'>
        <div className='selectedLang' onClick={(e) => {toggleMenu()}}>
            <img src={`languages/${selectedLang}.png`} alt=''/>
        </div>
        <div className='selectLangMenu' id='menu'>
            <ul>
                {
                    config.languages.map((l) => {
                        return(
                        <li key={l.key} onClick={(e) => {
                                i18n.changeLanguage(l.key);
                                setSelectedLang(l.key);
                                localStorage.setItem("language", l.key);
                            }}>
                            <img src={l.image} alt=''/>
                            <p>{l.name}</p>
                        </li>);
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default LanguageSwitcher