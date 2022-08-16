import { Form, Button } from 'react-bootstrap';
import './SearchForm.css'

interface ISearchFormViewProps {
    search: (e: React.FormEvent<HTMLFormElement>) => void;
    onCityInput: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    style?: React.CSSProperties;
    inputStyle?: React.CSSProperties;
}

const SearchFormView: React.FC<ISearchFormViewProps> = ({ search, onCityInput, style, inputStyle }) => (
    <Form className='search-form' style={{ ...style }} onSubmit={e => search(e)}>
        <Form.Control className='search-bar' onChange={e => onCityInput(e)} style={{ ...inputStyle }} name='city' type='text' placeholder="Введите город" />
        <Button variant="primary" type="submit"> Искать </Button>
    </Form>
)


export default SearchFormView;