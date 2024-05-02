import React, { useState, useEffect } from 'react'
import Forensics from './pages/Forensics';
function App(){

	const [data, setData] = useState([])

	useEffect(() => {
		fetch("http://localhost:5000/members")
            .then(res => {
                // Check if the response is successful
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                // Return the response data
                return res.json();
		})
		.then(
			data => {
				setData(data.members);
				console.log(data);
			})
			.catch(error => {
				console.error('There was a problem with the fetch operation:', error);
			});
	}, [])
	return (
		<div>
            {/* <h1>Members:</h1> */}
            <ul>
                {data.map((member, index) => (
                    <li key={index}>{member}</li>
                ))}
            </ul>
			<Forensics />
			{/* <Foren /> */}
        </div>
	);
}

export default App;