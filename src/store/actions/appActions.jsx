import {
  INITIAL_SETUP,
  USER_PLAY,
  SET_WINNER,
  HOME_STATE,
  SET_SUBTEXT,
} from "./types";

export const initialSetup = (turn, size, streak, grid, conn) => (dispatch) => {
  dispatch({
    turn,
    size,
    streak,
    grid,
    conn,
    type: INITIAL_SETUP,
  });
};

export const userPlayed = (rowIndex, colIndex, turn) => (dispatch) => {
  dispatch({
    rowIndex,
    colIndex,
    turn,
    type: USER_PLAY,
  });
};

export const setWinner = (winner) => (dispatch) => {
  dispatch({
    winner,
    type: SET_WINNER,
  });
};

export const resetToHome = (waiting = false, setupDone = false) => (
  dispatch
) => {
  dispatch({
    waiting,
    setupDone,
    type: HOME_STATE,
  });
};

export const setSubText = (subtext) => (dispatch) => {
  dispatch({
    subtext,
    type: SET_SUBTEXT,
  });
};
