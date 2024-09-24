import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import GeneralInfo from "./components/GeneralInfo";
import Education from './components/Education';
import Experience from './components/Experience';
import Header from './components/Header';

export default function App() {
    return (
        <>
            <Header />
            <div className="cv-container">
                <GeneralInfo />
                <Education />
                <Experience />
            </div>
        </>
    )
}