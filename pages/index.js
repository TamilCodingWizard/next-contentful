import Image from "next/image";
import client from "./../config/contentful";
import { Grid } from "@mui/material";
import TripCard from "../components/TripCard";
import SkeletonCard from './../components/SkeletonCard';

export const getStaticProps = async () => {
  const response = await client.getEntries({
    content_type: "trips",
  });

  return {
    props: {
      trips: response.items,
    },
    revalidate: 1,
  };
};

export default function Home({ trips }) {
  console.log(trips);
  if (!trips) {
    const skeletonData = [1,2,3,4,5]
    return (
      <Grid container spacing={5} my={5}>
        {skeletonData.map((x) => {
            return (
              <Grid xs={12} sm={6} lg={4} item key={x}>
                <SkeletonCard />
              </Grid>
            );
          })}
      </Grid>
    );
  }
  return (
    <Grid container spacing={5} my={5}>
      {trips &&
        trips.map((trip) => {
          return (
            <Grid xs={12} sm={6} lg={4} item key={trip.sys.id}>
              <TripCard trip={trip} />
            </Grid>
          );
        })}
    </Grid>
  );
}
