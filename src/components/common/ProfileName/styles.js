import { StyleSheet } from "react-native";
import { colors } from "../../../assets/colors";
import { scaleFontSize, verticalScale } from "../../../assets/styles/scaling";

export const styles = StyleSheet.create({
    userNameContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: verticalScale(20),
      },
      userName: {
        fontSize: scaleFontSize(20),
        fontWeight: '600',
        fontFamily: 'Inter-Regular',
        color: colors.black,
      },
})