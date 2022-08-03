import './CreatorInfo.css'

const CreatorInfoView = (): JSX.Element => (
    <div className="info-container">
        <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
            <img src={require('./images/voenmeh.jpg')} style={{ height: 230, marginTop: 25 }} />
        </div>
        <div style={{ display: 'flex', flex: 1.5, paddingLeft: 70, flexDirection: 'column' }}>
            <h3>Летняя ознакомительная практика</h3>
            <p> Студент: Еремишин Никита Николаевич </p>
            <p> Группа: И506Б </p>
            <p> 2022 г. </p>
        </div>
    </div >
)

export default CreatorInfoView;

