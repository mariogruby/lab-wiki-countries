
// import '../App.css'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"


const CountryDetails = ({ countries }) => {


    const { alpha3Code } = useParams()

    const country = countries.find(elm => elm.alpha3Code === alpha3Code)


    return (
        <section className="col-7">
            <div>
                <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    alt={`Flag of ${country.name.common}`}
                />
                <h1>{country.name.common}</h1>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Capital</th>
                            <td>{country.capital}</td>
                        </tr>
                        <tr>
                            <th>Area</th>
                            <td>{country.area} km<sup>2</sup></td>
                        </tr>
                        <tr>
                            <th>Borders</th>
                            <td>
                                <ul>
                                    {country.borders.map((border) => {
                                        ////////// creo varaible que tenga como funcion  que compare si el id es igual al border del country para que me retorne los paises borders 
                                        const borderCountry = countries.find(
                                            (country) => country.alpha3Code === border
                                        );
                                        return (
                                            <li key={border}>
                                                <Link to={`/${border}`}>
                                                    {borderCountry.name.common}
                                                </Link>
                                                <img
                                                    src={`https://flagpedia.net/data/flags/icon/72x54/${borderCountry.alpha2Code.toLowerCase()}.png`}
                                                    alt={borderCountry.name.common}
                                                    className="border-flag"
                                                />
                                            </li>
                                        );
                                    })}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}
export default CountryDetails