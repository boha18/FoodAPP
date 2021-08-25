
import React from 'react';
import {
    Image, StyleSheet, Text, View
} from 'react-native';

import { LinearTextGradient } from 'react-native-text-gradient';

import { COLORS, FONTS, images, SIZE } from '../constants';



const LogoText = () => {
    return (

        <View style={styles.logoContainer}>
            <Image
                source={images.logo}
                resizeMode='contain'
                style={styles.logoImage} />
            <LinearTextGradient
                style={{ fontFamily: FONTS.Viga, fontSize: 40, backgroundColor: 'red' }}
                locations={[0, 1]}
                colors={[COLORS.greenColorLighter, COLORS.greenColorDarker]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <Text > Food Ninja </Text>
            </LinearTextGradient>
            <Text style={{ fontFamily: FONTS.Inter, fontSize: 13 }} > Deliever Favorite Food </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: SIZE.width,
    },
    logoContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage: {
        height: SIZE.height / 4,
    }
})

export default LogoText;