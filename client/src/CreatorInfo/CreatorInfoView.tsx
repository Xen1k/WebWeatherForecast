import './CreatorInfo.css'
import { colors } from '../settings';

const CreatorInfoView = (): JSX.Element => (
    <div className="main-container">
        <div className='info-container' style={{ backgroundColor: colors.tile, height: 500 }}>
            <img src={require('./images/voenmeh.png')} style={{}} />
        </div>
        <div style={{ flex: 2 }}>
            <div className='info-container' style={{ backgroundColor: colors.tile, height: 100 }}>
                <h3>Летняя ознакомительная практика</h3>
            </div>
            <div className='info-container' style={{ backgroundColor: colors.tile, height: 370 }}>
                <h3>Данные о студенте</h3>
                <p> Студент: Еремишин Никита Николаевич </p>
                <p> Группа: И506Б </p>
                <p>  </p>
                <p> Кафедра: O7 </p>
                <p> Направление: 09.03.04 - Программная инженерия </p>
                <p>  </p>
                <p> БГТУ им. Д. Ф. Устинова (Военмех) </p>
                <p> 2022 г. </p>
            </div>
        </div>
        <div style={{ flex: 2 }}>
            <div className='info-container' style={{ backgroundColor: colors.tile, height: 500 }}>
                <h3>Задание</h3>
                <p style={{ lineHeight: 2, padding: 25, textAlign: 'justify' }}>Целью работы является: разработка сайта,
                    реализующего взаимодействие и передачу информации между клиентом и сервером,
                    умеющего обращаться к внешнему api. В качестве темы работы был выбран прогноз погоды, берущий данные от api.</p>
            </div>
        </div>
    </div>
)

export default CreatorInfoView;

