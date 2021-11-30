import Snackbar from "react-native-snackbar";
import { colorSet } from '../styles/colors';

export const ToastSnack = ({ title, duration, color = colorSet.primary, textColor = colorSet.white }) => {
    Snackbar.show({
        text: title,
        backgroundColor: color,
        textColor: textColor
    });
}