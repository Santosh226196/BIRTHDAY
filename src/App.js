

import './App.css'
import data from './data'
import {useState} from 'react'
import List from './component/List'
function App(){
    const [people,setpeople]= useState(data)
    return(
        <main>
            <section className="container">
                <h3>{people.length}birthday today</h3>
                <List people={people}/>
                <button onclick={()=>setpeople([])}>clear All </button>
            </section>
        </main>
    )
}

export default App;
