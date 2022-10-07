import { Search } from '../../components/Search/Search';
import { Geolocation } from '../../components/Geolocation/Geolocation';
import { Switch } from '../../components/Switch/Switch';
import { Footer } from '../../components/Footer/Footer';

export const Home = () => {
    
    return (

       <>
            <Switch />
            <Search />
            <Geolocation />
            <Footer />
       </>
    )
}