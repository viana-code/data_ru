import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  1: 'Não gostei😞',
  2: 'Não estava legal😑',
  3: 'Podia estar melhor😏',
  4: 'Gostei😋',
  5: 'Amei!😍',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function StarRating() {
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      className='row d-flex flex-column'
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        className='col'
        name="hover-feedback"
        fontSize
        value={value}
        precision={1}
        style={{fontSize: 40}}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55, fontSize: 40 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box className='col' style={{fontSize: 30, textAlign: "center"}} sx={{ ml: 1 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}