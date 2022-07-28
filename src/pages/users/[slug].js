import Head from 'next/head';
import { Box, Container } from '@mui/material';
// import { CustomerListResults } from '../../components/customer/customer-list-results';
import { CustomerDetail } from 'src/components/customer/customer-detail';
import { CustomerListToolbar } from '../../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../../components/dashboard-layout';
// import { customers } from '../../__mocks__/customers';
import axios from 'axios';
import React, { useEffect, useState} from 'react';

export default function UsersDeatail({ usersD }){
	console.log(usersD);
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
				<CustomerDetail customers={usersD} />
			</Box>
		</Container>
	</Box>
</>
)
}
UsersDeatail.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get users
  const res = await fetch('https://62dc1d5257ac3c3f3c563801.mockapi.io/quiz/users')
  const users = await res.json()

  // Get the paths we want to pre-render based on users
  const paths = users.map((user) => ({
    params: { slug: user.id, },
  }))
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}
// export default Customers();
export async function getStaticProps({ params }) {
  // Call an external API endpoint to get users
  const res = await fetch(`https://62dc1d5257ac3c3f3c563801.mockapi.io/quiz/users/${params.slug}`)
  const usersD = await res.json()

  // By returning { props: { users } }, the Blog component
  // will receive `users` as a prop at build time
  return {
    props: {
      usersD
    }
  }
}