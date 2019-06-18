import React from 'react'
export const Multi = (a)=> {
    return (
        <ul>
            {a.map(i=>{
                return<li>{i}s</li>
            })}
        </ul>
    )
}
export default Multi