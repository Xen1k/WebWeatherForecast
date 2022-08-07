import './CreatorInfo.css'
import { colors } from '../settings';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

const CreatorInfoView = (): JSX.Element => (
    <Container>
        <Row>
            <Col className='grid-column' md={2}>
                <div className='info-container' style={{ backgroundColor: colors.tile }}>
                    <Image fluid src={require('./images/voenmeh.png')} />
                </div>
            </Col>
            <Col className='grid-column' md={5}>
                <div className='info-container' style={{ backgroundColor: colors.tile }}>
                    <p className='info-header'>Летняя ознакомительная практика</p>
                </div>
                <div className='info-container' style={{ backgroundColor: colors.tile }}>
                    <p className='info-header'>Данные о студенте</p>
                    <p className='info-text'> Студент: Еремишин Никита Николаевич{'\n'}Группа: И506Б{'\n'}
                    Кафедра: O7{'\n'}Направление: 09.03.04 - Программная инженерия</p>
                    <p className='info-text'>  </p>
                    <p className='info-text'> БГТУ им. Д. Ф. Устинова (Военмех){'\n'}2022 г. </p>
                </div>
            </Col>
            <Col className='grid-column' md={5}>
                <div className='info-container' style={{ backgroundColor: colors.tile }}>
                    <p className='info-header'>Задание</p>
                    <p className='info-text' style={{textAlign: 'justify'}}>Целью работы является: разработка сайта,
                        реализующего взаимодействие и передачу информации между клиентом и сервером,
                        умеющего обращаться к внешнему api. В качестве темы работы был выбран прогноз погоды, берущий данные от api.</p>
                </div>
            </Col>
        </Row>
    </Container>
)

export default CreatorInfoView;

