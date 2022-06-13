import React from 'react';
import { useState } from 'react';
import FormSearch from '../components/subjects/formSearch';
import ListContain from '../components/subjects/listContain';
import '../styles/search.css'
import { useSelector } from 'react-redux'

const SearchSubjects = () => {
    const subjects = useSelector((state) => state.auth.subjects);
    const [InputValue, setInputValue] = useState();
    const [keyword, setKeyword] = useState();
    const newArrayID = InputValue ?  InputValue.map(sub => sub._id) : false;


    return (
        <main className='search-subjects'>
            <h4>Agregar Materia</h4>
            <FormSearch setState={setInputValue} setKeyword={setKeyword}/>
            <div className='title-result'>
                <h5>Resultado de: {keyword}</h5>
            </div>
            <div className='search-result'>
                <ul className='list-container-result'>
                    {
                        InputValue &&
                        InputValue.map((result, i) => result.teachers.map((teacher,i2) => <ListContain key={i + result + i2} data={result} teacher={teacher} inscripte={ newArrayID ? newArrayID.includes(result._id) : false}/>))
                    }
                    
                </ul>
            </div>
        </main>
        
    );
}

export default SearchSubjects;
