import {useState} from 'react'
import {weather} from "../WeatherApi";

const WeatherForm = ({setData, setIsData}) => {
    const [city, setCity] = useState('')
    const feachWeather = async (e) => {
        e.preventDefault()
        const {data} = await weather(city)
        setCity('')
        setData(data)
        setIsData(true)
    }
    return (
        <form className='form'>
            <input type="text"
                placeholder='Введите город'
                value={city}
                onChange={e => setCity(e.target.value)}
                className='form__input'
            />
            <button className='form__btn' onClick={feachWeather}>Запросить погоду</button>
        </form>
    )
}

export default WeatherForm