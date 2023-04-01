import React from 'react'

const CelebrityBox = ({apiData}) => {
    const result = Object.values(apiData);
    return (
        result.map((item, index) => {
            return (
                <div className='celebrityDetails p-3 mb-4' key={index + item.name + item.age}>
                    <p className='text-capitalize'><strong>Name</strong>: {item.name ? item.name : "NA"}</p>
                    <p className='text-capitalize'><strong>Gender</strong>: {item.gender ? item.gender : "NA"}</p>
                    <p className='text-capitalize'><strong>Birthday</strong>: {item.birthday ? item.birthday : "NA"}</p>
                    <p className='text-capitalize'><strong>Age</strong>: {item.age ? item.age : "NA"}</p>
                    <p className='text-capitalize'><strong>Height (Meter)</strong>: {item.height ? item.height : "NA"}</p>
                    <p className='text-capitalize'><strong>Nationality</strong>: {item.nationality ? item.nationality : "NA"}</p>
                    <p className='text-capitalize'><strong>Is Alive</strong>: {item.is_alive ? "Yes" : "No"}</p>
                    
                    <div className='text-capitalize'><strong>Occupation</strong>: 
                        <ul>
                            {item.occupation?.map((occ,index) => {
                                return <li key={index + item.age + occ}>{occ}</li>
                            })}
                        </ul>
                    </div>
                    <p className='text-capitalize'><strong>Net Worth (INR)</strong>: {item.net_worth}</p>
                </div>
            )
        })
    )
}

export default CelebrityBox;