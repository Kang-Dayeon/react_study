import {useEffect, useState} from 'react'

export default (initalValue) => {
    const [data, setData] = useState(initalValue)

    const handle = e => {
        const { value, name } = e.target;
        setData({
            ...data,
            [name]: value
        })
        console.log(data)
    }

    return [data, handle]
}