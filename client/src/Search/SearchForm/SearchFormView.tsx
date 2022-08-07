import { Form, Button } from 'react-bootstrap';
import './ForecastSearch.css'

interface ISearchFormViewProps {
    getForecastData: (e: React.FormEvent<HTMLFormElement>) => void;
    onCityInput: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const SearchFormView: React.FC<ISearchFormViewProps> = ({ getForecastData, onCityInput }) => (
    <Form className='search-form' onSubmit={e => getForecastData(e)}>
        <Form.Control className='search-bar' onChange={e => onCityInput(e)} name='city' type='text' placeholder="Введите город" />
        <Button variant="primary" type="submit"> Искать </Button>
    </Form>
)


export default SearchFormView;