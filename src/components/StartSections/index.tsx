import { Button } from '../Button'

import Logo from '../../assets/logo-m.svg'
import Astronauta from '../../assets/astronauta-m.svg'
import Meteoro from '../../assets/meteoro.svg'
import Vantagens from '../../assets/futuryxx-vantagens-lg.svg'
import './style.css'

export function StartSections() {
    return (
        <>
            <section className="startSections">
                <div className="firstSection">
                    <div className="title">
                        <div className="imagesContainer">
                            <div className="elementsContainer">
                                <img src={Logo} className="logo" alt="Logo do Futuryxx" />
                                <img src={Meteoro} className="meteoro" alt="Meteoro" />
                            </div>

                            <img src={Astronauta} className="astronauta" alt="Astronauta" />
                        </div>
                        <div className="headerTitle">
                            <h1>
                                futuryxx <br /> é o <span>futuro</span>
                            </h1>

                            <div className="copy">
                                <p>
                                    Descubra o novo aplicativo que está pagando de
                                    <span> R$ 100,00 a R$ 500,00 por dia</span> para pessoas
                                    comuns de forma autormática!
                                </p>
                                </div>
                                <Button text={"eu quero lucrar no automático"} size={"md"} alignment={"start"} />
                            </div>
                        </div>
                    
                </div>

                <div className="secondSection">
                    <div className="sectionTitle">
                        <h4>está cansado de não ter dinheiro <span>para nada?</span></h4>

                        <div className="cards">
                            <div className="card">
                                <span>
                                    Não consegue comprar um carro?
                                </span>
                            </div>
                            <div className="card">
                                <span>
                                    Não consegue comprar uma casa?
                                </span>
                            </div>
                            <div className="card">
                                <span>
                                    Não consegue ter as coisas que você quer?
                                </span>
                            </div>
                        </div>

                        <h3>o futuryxx é a solução para você</h3>

                        <Button text={"eu quero lucrar no automático"} size={"md"} />
                    </div>
                </div>

                <div className="thirdSection">
                    <div className="content">
                        <img src={Vantagens} alt="" />

                        <div className="sectionText">
                            <h3>o futuryxx é tudo o que você precisa <strong>para mudar de vida</strong></h3>

                            <ul>
                                <li>De forma automática</li>
                                <li>Com pouco investimento</li>
                                <li>Com ganhos exponenciais</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className='videos-container'>
                <div className="videos">
                    <div className="card-container">
                        <div className="square"></div>

                        <div className="copy-video">
                            <h4>o que é o <strong>futuryxx?</strong></h4>

                            <p>
                                O Futuryxx é um aplicativo desenvolvido para pessoas comuns 
                                ganharem dinheiro através do mercado finandeiro. Já imaginou 
                                botar dinheiro no bolsa de forma automárica? Ele opera por você 
                                e traz granhos 100% automáticos.
                            </p>
                        </div>
                    </div>

                    <div className="card-container">
                        <div className="square"></div>

                        <div className="copy-video">
                            <h4>para quem é o <strong>futuryxx?</strong></h4>

                            <p>
                                O Futuryxx é ideal para todos os níveis de conhecimento, 
                                desde o iniciante, até o player mais avançado, que deseja 
                                automatizar suas estratégias e escalar seus ganhos.
                            </p>
                        </div>
                    </div>

                    <div className="card-container">
                        <div className="square"></div>

                        <div className="copy-video">
                            <h4>quem é o nosso <strong>embaixador?</strong></h4>

                            <p>
                                Marcos Rios é trader profissional e conquistou a liberdade 
                                financeira em apenas 3 anos. Hoje ele lidera uma comunidade 
                                com mais de 20 mil alunos no Brasil, e em mais de 6 países.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="comoFunciona">
                <div className="copyComoFunciona">
                    <h4>
                        se você deseja ter lucros com o mercado financeiro{' '}
                        <span>todo dia de forma automática,</span> esse aplicativo é 
                        para você.
                    </h4>
                </div>

                <div className="comoFuncionaVideos">
                    <h4>
                        entenda
                        <br />
                        <strong>como funciona</strong>
                    </h4>

                    <div className="carrouselVideos">
                        <div className="squareVideo"></div>
                        <p><span>VÍDEO 4</span> Entenda como funciona o Futuryxx</p>
                    </div>
                </div>

                <Button text={"eu quero lucrar no automático"} size={"md"} />
            </section>

            <section className="depoiments">
                <h4>o que estão falando sobre o <strong>futuryxx</strong></h4>

                <div className="photosCarrousel">
                    <div className="photo"></div>
                </div>
            </section>

            <section className="prices">
                <h3>escolha um dos planos</h3>

                <div className="priceCards">
                    <div className="priceCard big">
                        <div className="bestSeller">
                            <span>Mais Vendido</span>
                        </div>

                        <div className="infoContent">
                            <h5>plano vitalício</h5>

                            <ul>
                                <li>Treinamento completo</li>
                                <li>Suporte exclusivo</li>
                                <li>Planilha de gerenciamento</li>
                                <li>3 estratégias</li>
                                <li>Você só paga uma vez</li>
                                <li>Licença VITALÍCIA</li>
                            </ul>
                        </div>

                        <div className="priceArea">
                            <span>por apenas</span>

                            <div className="value">
                                <span>12x</span>
                                <h4>R$ 19,78</h4>
                            </div>

                            <span>ou R$ 197,00 à vista</span>
                        </div>

                        <Button text={'quero esse plano'} size={'sm'} />
                    </div>

                    <div className="priceCard">
                        <div className="infoContent">
                            <h5>plano mensal</h5>

                            <ul>
                                <li>Treinamento completo</li>
                                <li>Suporte exclusivo</li>
                                <li>Planilha de gerenciamento</li>
                                <li>1 estratégias</li>
                                <li>Licença MENSAL</li>
                            </ul>
                        </div>

                        <div className="priceArea">
                            <span>por apenas</span>

                            <h4>R$ 97,00</h4>
                        </div>

                        <Button text={'quero esse plano'} size={'sm'} />
                    </div>
                    
                </div>
            </section>
        </>
    )
}