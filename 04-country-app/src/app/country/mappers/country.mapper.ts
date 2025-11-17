import type { Country } from "../interfaces/country.interface"
import type { RESTCountry } from "../interfaces/rest-countries.interfaces"


export class CountryMapper {

    // static RestCountry => Country
    static mapRestCountryToCountry( restCountry: RESTCountry): Country{
        return {
            capital: restCountry.capital?.join(','),
            cca2: restCountry.cca2,
            flag: restCountry.flag,
            flagsvg: restCountry.flags.svg,
            name: restCountry.translations['spa'].common ?? 'No Sapnish Name',
            population: restCountry.population,

            region: restCountry.region,
            subregion: restCountry.subregion,
        };
    }

    //static RestCountry[] => country[]
    static mapRestCountryArrayToCountryArray( 
        restCountries: RESTCountry[]
     ): Country[]{
        return restCountries.map(this.mapRestCountryToCountry);
    }

}