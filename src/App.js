import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Pressable,
    Linking,
} from 'react-native';
import NativeLinkingManager from 'react-native/Libraries/Linking/NativeLinkingManager';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/16686217?v=4';
const urlToMyGithub = 'https://github.com/nelisjunior';

const Appt = () => {

    const handlePressGoToGithub = async () => {
        console.log('Verificado link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if (res) { 
            console.log('Link aprovado!');
            console.log('Abrindo link...');
            await Linking.openURL(urlToMyGithub);
            console.log('Link aberto com sucesso!');
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
            <View style={styles.content}>
                <Image
                    acessibilityLabel="Avatar do Nelis Junior"
                    style={styles.avatar}
                    source={{ uri: imageProfileGithub }}
                />
                <Text
                    acessibilityLabel="Nome: Nelis Junior"
                    style={[styles.defaultText, styles.name]}>Nelis Junior
                </Text>
                <Text
                    acessibilityLabel="Nickname: nelisjunior"
                    style={[styles.defaultText, , styles.nickname]}>nelisjunior
                </Text>
                <Text
                    acessibilityLabel="Descrição: Bachelor in S&T | Aspiring to Technological Business | Data Analyst | Web development | Penchant for 4.0 technologies."
                    style={[styles.defaultText, styles.description]}>
                    Bachelor in S&T | Aspiring to Technological Business | Data Analyst | Web development | Penchant for "4.0 technologies".
                </Text>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={styles.button}>
                        <Text style={[styles.defaultText, styles.textButton]}>
                            Open in Github
                        </Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default Appt;

const styles = StyleSheet.create({
    container: { // Collum
        backgroundColor: colorGithub,
        flex: 1, // Expande para tela inteira
        justifyContent: 'center',
        alignContent: 'center',
        padding: 20,
        borderBottomWidth: 0.5,
    },

    content: {
        alignItems: 'center',
        padding: 20,
    },

    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },

    defaultText: {
        color: colorFontGithub,
    },

    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },

    nickname: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },

    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },

    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },

    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    },
});