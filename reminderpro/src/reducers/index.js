import { ADD_REMINDER } from '../constants';
import { GREAT_COURSE } from '../constants';

const reminder = (action) => {
  return {
    text: action.text,
    id: Math.random()
  }
}

const courses = (action1) => {
  return {
    text: action1.text,
    id: Math.random()
  }
}

const reminders = (state = [], action) => {
  let reminders = null;
  switch(action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      console.log('reminders as state', reminder);
      return reminders;
    default:
      return state;
  }
}

const course = (state = [], action1) => {
  let course = null;
  switch(action1.type) {
    case GREAT_COURSE:
      course = [...state, courses(action1)];
      console.log('course as a state', courses);
      return course;
    default:
      return state;
  }
}

export default reminders;
