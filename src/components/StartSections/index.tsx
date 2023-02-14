import { Button } from '../Button'

import Logo from '../../assets/logo-m.svg'
import Astronauta from '../../assets/astronauta-m.svg'
import './style.css'

export function StartSections() {
    return (
        <section className="startSections">
            <div className="title">
                <div className="logo">
                    <img src={Logo} alt="Logo do Futuryxx" />
                </div>
                <div className="astronauta">
                    <img src={Astronauta} alt="Astronauta" />
                </div>
                <div className="headerTitle">
                    <h1>futuryxx</h1>
                    <h2>é o <span>futuro</span></h2>
                </div>
            </div>
            <Button text={"eu quero lucrar no automático"} size={"sm"} />
        </section>
    )
}