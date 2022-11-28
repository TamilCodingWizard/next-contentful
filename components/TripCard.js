import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Chip, styled } from '@mui/material';
import  Image  from 'next/image';
import Link  from 'next/link';


const StyledCard = styled(Card) ({
  maxWidth:400,
  margin:'auto',
  "&:hover": {
    elevation:40,
    boxShadow:"rgba(0,0,0,0.3) 0px 15px 15px"
  }
})

const TripCard = ({trip}) => {
  return (
    <StyledCard >
      <Image  src={'https:' + trip.fields.thumbnail.fields.file.url} alt="Thumbnail" width={400} height={200}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {trip.fields.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {trip.fields.brief}
        </Typography>
      </CardContent>
      <CardActions sx={{display:'flex',justifyContent:'flex-end'}}>
        <Link href={`/trip/${trip.fields.slug}`} legacyBehavior> 
          <Chip label='read more...' sx={{background:'#fff'}}></Chip>
        </Link>
      </CardActions>
    </StyledCard>
  )
}

export default TripCard