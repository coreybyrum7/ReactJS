import { ADD_REMINDER } from '../constants';
import { GREAT_COURSE } from '../constants';

export const addReminder = (text) => {
  const action = {
    type: ADD_REMINDER,
    text
  }
  console.log('action in addReminder', action);
  return action;
}

export const greatCourse = (text) => {
  const action1 = {
    type: GREAT_COURSE,
    text
  }
  console.log('action1 in greatCourse', action1);
  return action1;
}
