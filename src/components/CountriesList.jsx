import {Link} from 'react-router-dom'
import '../App.css'
import "bootstrap/dist/css/bootstrap.css"

const CountriesList= ({countries})=>{
    return (
        <section className='col-2'>
            {
                countries.map(elem =>{
                    return(
                        <Link to={`/${elem.alpha3Code}`}key={elem.alpha3Code}>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${elem.alpha2Code.toLowerCase()}.png`} alt={`Flag of ${elem.name.common}`} />
                            <p>{elem.name.common}</p>
                            </Link>

                    )
                })
            }
        </section>
    )
}
export default CountriesList