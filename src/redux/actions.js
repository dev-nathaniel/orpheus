import { changeThemeStart, changeThemeSuccess} from "./themeRedux"



export const changeTheme = (dispatch,theme) => {
    dispatch(changeThemeStart());
    dispatch(changeThemeSuccess(theme));
}
