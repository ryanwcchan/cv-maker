import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import GeneralInfo from "./components/GeneralInfo";
import Education from './components/Education';
import Experience from './components/Experience';

export default function App() {
    return (
        <>
            <div className="cv-container">
                <GeneralInfo />
                <Education />
                <Experience />
            </div>
        </>
    )
}