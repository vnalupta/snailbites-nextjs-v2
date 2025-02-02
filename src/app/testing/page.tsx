"use client"
import { useEffect } from "react"

export default function TestingHome () {
    (useEffect(() => {
        const fetchData = async () => {
            const APIlist = ["https://rickandmortyapi.com/api", "https://cataas.com/api/cats"];

            const promiseList = APIlist.map(url => {
                return new Promise((resolve, reject) => {
                    resolve(fetch(url).then(data => data.json()))
                })
            })

            console.log(promiseList);

            Promise.all(promiseList)
                .then(res => console.log(res));
        }

        fetchData();        
    }), [])

    return (
        <table style={{ backgroundColor: "white"}}>
            <thead>
            <tr>
                <th>Heading1</th>
                <th>Heading2</th>
                <th>Heading3</th>
                <th>Heading4</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th>1</th>
                <td>1</td>
                <td>1</td>
                <td>1</td>
            </tr>
            </tbody>
        </table>
    )
}