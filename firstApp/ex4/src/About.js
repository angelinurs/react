import react from 'react'

function About() {
    let text='虎고래, 범고래는 소목 참돌고래과의 포유류로 높은 지능과 뛰어난 신체 능력 및 무리지어 다니는 습성으로 인해 바다 생태계 피라미드에서 최상위[4]에 있는 생물이다. 분류상으로는 "참돌고래과"이지만, 크기가 매우 크기 때문에 돌고래로도 고래로도 취급한다. 한국어 정식 학술 명칭이 "흰줄박이물돼지(흰줄박이돌고래)"라는 다소 기이한 이름인 이유도 현재는 체장 4~5 m 이상은 고래로 취급하지만, 옛날에는 그러한 분류 기준이 없었기 때문이다. 전 세계 바다 곳곳에 상당히 광범위하게 분포하지만 보통 차가운 극지방 바다를 선호하는 편이다. 한국에서도 3개의 바다 모두에서 발견된다.[5]수컷이 암컷보다 평균 1미터 정도 더 크게 자라지만, 암컷은 50~90년, 수컷은 30~50년으로 암컷이 더 오래 산다.'
    return (
        <div className='About'>
            <h1>About Whale</h1>
            <section>
                <article>
                    <table>
                        <colgroup>
                        <col width={'100'} />
                        <col width={'*'} />
                        </colgroup>
                        <tbody>
                            <tr>
                                <td>
                                    <div className='photo'>
                                        <img src={ require( './Images/original.avif') } alt='from_The_Atlantic_Pollutants_Called_PCBs_Are_Killing_Killer_Whales_The_Atlantic' />
                                    </div>
                                </td>
                                <td>
                                    <div className='text'>
                                        {text}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </article>
            </section>
        </div>
    );
}

export default About;