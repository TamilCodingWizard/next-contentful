import Image from "next/image";
import client from "./../config/contentful";
import { Grid } from '@mui/material';
import TripCard from "../components/TripCard";

export const getStaticProps = async () => {
  const response = await client.getEntries({
    content_type: "trips",
  });

  return {
    props: {
      trips: response.items,
    },
  };
};

export default function Home({ trips }) {
  console.log(trips);
  return <Grid container spacing={2}>
    {
      trips && trips.map((trip) => {
        return (
          <Grid item key={trip.sys.id}>
             <TripCard/>
          </Grid>
        )
      })
    }

  </Grid>
}
