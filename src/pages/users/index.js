import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../../components/customer/customer-list-results';
import { CustomerListToolbar } from '../../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../../components/dashboard-layout';
// import { customers } from '../../__mocks__/customers';
import axios from 'axios';
import React, { useEffect, useState} from 'react';

export default function Customers({ users }){
// 	const[users, setusers] = useState([]);
// 	useEffect(()=>{
// 		let url = 'https://62dc1d5257ac3c3f3c563801.mockapi.io/quiz/users'
// 		axios.get(url)
// 		.then(res=>{
// 				const a = res.data
// 				setusers(a)
// 				console.log(a)
// 		})
// }, [])
console.log(users);

return(
	<>
	<Head>
		<title>
			Users | Material Kit
		</title>
	</Head>
	<Box
		component="main"
		sx={{
			flexGrow: 1,
			py: 8
		}}
	>
		<Container maxWidth={false}>
			<CustomerListToolbar />
			<Box sx={{ mt: 3 }}>
				<CustomerListResults customers={users} />
			</Box>
		</Container>
	</Box>
</>
)
}
Customers.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

// export default Customers();
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://62dc1d5257ac3c3f3c563801.mockapi.io/quiz/users')
  const users = await res.json()
  // By returning { props: { users } }, the Blog component
  // will receive `users` as a prop at build time
  return {
    props: {
      users,
    },
  }
}