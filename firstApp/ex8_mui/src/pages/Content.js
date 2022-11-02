import React from "react";
// mui 적용해보기
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'


const Content = () => {
    return (
        <div className="Content">
            <section>
                <article>
                    <header>
                        <h2>첫번째</h2>
                    </header>
                    <div>
                        비숑프리제의 특징은 주인을 잘 따르는 성격으로 온화한 편이다. 솜사탕처럼 생긴 곱슬거리는 털과 귀여운 외모 속에는 근육질 몸이 있어 아주 건강한 편이다. 
                    </div>
                </article>
                <article>
                    <header>
                        <h2>두번째</h2>
                    </header>
                    <div>
                        포메라니안(영어: Pomeranian)은 중앙유럽(오늘날 독일 북동부, 폴란드 북서부)에 있는 포메라니아 지역에서 유래된 스피츠 종류의 반려견이다. 
                    </div>
                </article>
                <article>
                    <header>
                        <h2>세번째</h2>
                    </header>
                    <div>
                        사모예드견(Samoyed dog)은 시베리아 원산으로 썰매용·가정용·반려용으로 많이 기른다. 북부 시베리아의 유목민 사모예드족이 옛날부터 기르던 썰매용 개로서, 부족의 이름을 따서 명명되었다. 
                    </div>
                </article>
                <article>
                    <header>
                        <h2>네번째</h2>
                    </header>
                    <div>
                        진돗개(珍島ㅅ개)는 개 품종 중 하나로, 한국의 대표적인 개 품종으로 꼽힌다. 용맹하고 충성심이 강해 주인을 잘 따른다. 
                    </div>
                </article>
                <article>
                    <header>
                        <h2>다섯번째</h2>
                    </header>
                    <div>
                        풍산개(豐山-)는 개의 품종 중 하나로, 한국의 대표적인 사냥개이다. 겉모습은 진돗개와 비슷하나, 추운 날씨에 적응하여 털이 굵고 몸이 다부지다. 
                    </div>
                </article>
            </section>
            <section>
                <button type='button'>버튼1</button>
                <button type='button'>버튼2</button>
                <button type='button'>버튼3</button>
            </section>
            <section>
                <Stack spacing={2} direction='row'>
                    <Button variant='text' color='inherit'>버튼1</Button>
                    <Button variant='contained' color='secondary'>버튼2</Button>
                    <Button variant='outlined' color='info'>버튼3</Button>
                </Stack>
            </section>
        </div>
    );
}

export default Content;