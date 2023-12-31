import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CitiesItem from "./CitiesItem";
import Message from "./Message"
export default function CitiesList({isLoading,cities}){
    if(!cities.length)return <Message message={"Add your first city by clicking on a city on the map"}/>
    if(isLoading) return <Spinner/>
    return  <ul className={styles.cityList}>
        {cities.map(city=><CitiesItem city = {city} key={city.id}/>)}
    </ul>

}