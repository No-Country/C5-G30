import React from 'react';
import axios from 'axios'

const UseFetchPost = async (url, keyword) => {
    let data ;
    try {
        let response = await axios.post( url , {
            username: keyword.username,
            password: keyword.password
          })
        data = response
    } catch (error) {
        console.log(error)
    }

    return data
}

export default UseFetchPost;
