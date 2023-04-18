import data from '../../logements.json'
import '../../styles/App.css';
import homeImg from "../../assets/Paysage01.png"
import home from "./home.css"
import Card from "../../components/card/card";

function Home() {
    return (
        <div>
            <div className='divContainer'>
                <img className='imgContainer' src={homeImg} alt=""/>
                <h1 className='h1Container'>Chez vous, partout et ailleurs</h1>
            </div>
            <Card data={data}/>
        </div>
    )
}

export default Home;
