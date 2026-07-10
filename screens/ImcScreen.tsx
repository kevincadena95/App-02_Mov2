import { useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function ImcScreen() {

    const [peso, setpeso] = useState(0)
    const [altura, setaltura] = useState(0)
    const [imc, setImc] = useState(0)

    //CALCULAR EL IMC
    function calcular() {

        const resultado = peso / (altura * altura)
        setImc(resultado)


    }

    return (
        <ImageBackground
            source={{ uri: "https://i.postimg.cc/tCX5cGK8/gym.avif" }}
            style={styles.container}>

            <TextInput
                placeholder='Ingresa peso en Kg'
                style={styles.input}
                onChangeText={(texto) => setpeso(+texto)}
            />

            <TextInput
                placeholder='Ingresa altura en m'
                style={styles.input}
                onChangeText={(texto) => setaltura(+texto)}
            />

            <TouchableOpacity
                onPress={calcular}
                style={styles.btn}
            >
                <View style={styles.contenidoBtn}>
                    <Text style={styles.textoBtn}>CALCULAR</Text>

                    <Image
                        style={styles.img}
                        source={require("../assets/images/dieta.png")}
                    />
                </View>
            </TouchableOpacity>

            <Text style={styles.resultado}>
                Tu IMC es: {imc.toFixed(2)}
            </Text>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: '#7de7a5',
        width: "60%",
        height: 80,
        borderRadius: 20,
        justifyContent: 'center'
    },

    contenidoBtn: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textoBtn: {
        fontSize: 25
    },

    resultado: {
        fontSize: 30,
        backgroundColor: "rgb(41, 146, 179)",
        padding: 15,
        marginTop: 20,
        borderColor: '#1a0404',
        borderWidth: 3,
        borderRadius: 60,
    },

    img: {
        width: 60,
        height: 60

    },

    input: {
        backgroundColor: "#95e4bf",
        fontSize: 30,
        width: "80%",
        height: 70,
        margin: 5,
        borderColor: '#1a0404',
        borderWidth: 3,
        borderRadius: 60,
        paddingHorizontal: 20
    },
    container: {
        justifyContent: 'center',
        backgroundColor: '#666',
        flex: 1,
        alignItems: 'center'
    }
})