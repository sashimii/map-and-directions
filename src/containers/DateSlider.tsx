import * as React from 'react';

import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { updateCurrentDate } from '../redux/actions/dates';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value: number) {
  return `${value}°C`;
}

interface DateSliderProps {
  allDates: string[];
  currentDate: string;
  handleSliderChange(index: any): void;
}

export const DateSlider: React.SFC<DateSliderProps> = ({allDates, currentDate, handleSliderChange}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>{currentDate}</h1>
      <span>{JSON.stringify(allDates)}</span>
      <Typography id="discrete-slider" gutterBottom>
        Date
      </Typography>
      <Slider
        defaultValue={0}
        getAriaValueText={valuetext}
        onChange={(event, value) => {
          handleSliderChange(value);
        }}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={allDates.length - 1}
      />
    </div>
  );
};

const mapStateToProps = ({ allDates, currentDate }) => {
  return {
    allDates,
    currentDate,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSliderChange: index => {
      dispatch(updateCurrentDate(index));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DateSlider);