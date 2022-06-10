import React from 'react';
import axios from 'axios'

const UseFetchPost = async (url, keyword) => {
    let data ;
    console.log(keyword)
    try {
        let response = await axios.post( url , {
            ...keyword
          })
        data = response
    } catch (error) {
        console.log(error)
    }

    return data
}

export default UseFetchPost;
