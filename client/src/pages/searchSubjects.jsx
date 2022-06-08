import React from 'react';
import { useState } from 'react';
import FormSearch from '../components/subjects/formSearch';
import ListContain from '../components/subjects/listContain';
import '../styles/search.css'

const SearchSubjects = () => {
    const [InputValue, setInputValue] = useState();
    return (
        <main className='search-subjects'>
            <h4>Agregar Materia</h4>
            <FormSearch setState={setInputValue} />
            <div className='title-result'>
                <h5>Resultado de: .....</h5>
            </div>
            <div className='search-result'>
                <ul className='list-container-result'>
                    {
                        InputValue &&
                        InputValue.map((result, i) => result.teachers.map((teacher,i2) => <ListContain key={i + result + i2} data={result} teacher={teacher} />))
                    }
                    
                </ul>
            </div>
        </main>
        
    );
}

export default SearchSubjects;
