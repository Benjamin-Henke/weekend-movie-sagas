import { useState } from 'react';


function test() {
    const [option, setOption] = useState()

    function handleChange(event) {
        setOption(event.target.value);
        console.log(option);
    }

    
    return (
        <>
        <select name='option' onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        </>
    )
}
export default test;