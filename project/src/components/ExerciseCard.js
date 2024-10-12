import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`} style={{ textDecoration: 'none' }}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" style={{ borderRadius: '10px' }} />
    <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
      <Button sx={{ color: '#282A36', background: '#FF79C6', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.bodyPart}
      </Button>
      <Button sx={{ color: '#282A36', background: '#BD93F9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.target}
      </Button>
    </Stack>
    <Typography ml="21px" color="#F8F8F2" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
