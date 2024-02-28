"use client"

import React, { useEffect, useState } from 'react'

function CountryLookup() {
    const [country, setCountry] = useState('India');
    const [state, setState] = useState('Karnataka');

    useEffect(() => {
        const getCountry = async () => {
            const response = await fetch('http://ip-api.com/json/')
                                .then((res) => res.json())
                                .then((data) => data)

            if(!response) return;

            setState(response.regionName)
            setCountry(response.country)
        }
        getCountry()
    },[])

  return (
    <>
        <p>{state} {","}  {country}</p>
    </>
  )
}

export default CountryLookup