import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../../components/customer/customer-list-results';
import { CustomerListToolbar } from '../../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../../components/dashboard-layout';
// import { customers } from '../../__mocks__/customers';
import axios from 'axios';
import React, { useEffect, useState} from 'react';

function Customers(){
	const[users, setusers] = useState([]);
	useEffect(()=>{
		let url = 'https://62dc1d5257ac3c3f3c563801.mockapi.io/quiz/users'
		axios.get(url)
		.then(res=>{
				const a = res.data
				setusers(a)
				console.log(a)
		})
}, [])
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

export default Customers;

// export async function getStaticProps() {
// 	const response = await fetch("https://62dc1d5257ac3c3f3c563801.mockapi.io/quiz/users");
	
//   return {
//     props: {
//          },
//   }
// }
