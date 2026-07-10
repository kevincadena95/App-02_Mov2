import { Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useActionState, useState } from 'react'
/*
CREAR UNA APP QUE RECIBA NOMBRE, EDAD Y PROFESION
CALCULAR EL SALARIO FINAL SI:
    SI ES <25 => $500
    SI ESTÁ ENTRE 25 Y 50 AÑOS => $1100
    SI ES >50 => $1500

    SI ES PROGRAMADOR SE AÑADE UN BONO DE $300
    SI ES MEDICO SE AGREGAN UN 15% DEL SALARIO
    OTRA PROFESIÓN NO TIENE BONO
*/

export default function FormularioScreen() {

    const [ocultar, setocultar] = useState(false)

    const [nombre, setnombre] = useState("")
    const [edad, setedad] = useState(0)
    const [profesion, setprofesion] = useState("")

    const [pagoTotal, setpagoTotal] = useState(0)

    const [calculado, setCalculado] = useState(false);

    function calcular() {
        let pago = 0;
        let pagoT = 0;

        if (edad < 25) {
            pago = 500;
        } else if (edad >= 25 && edad <= 50) {
            pago = 1100;
        } else {
            pago = 1500;
        }

        if (profesion.toLowerCase() == "Programador") {
            pagoT = pago + 300;
        } else if (profesion.toLowerCase() == "Médico") {
            pagoT = pago * 0.15;
        } else {
            pagoT = pago;
        }

        setpagoTotal(pagoT);
        setCalculado(true);
    }


    function limpiar() {
        setnombre(""),
            setedad(0)
        setprofesion("")
        setpagoTotal(0)
        setCalculado(false)
    }


    return (
        <View style={styles.container}>
            <Text>FormularioScreen</Text>

            <TextInput
                placeholder='Ingresar nombre'
                style={styles.input}
                onChangeText={setnombre}
                value={nombre}
            />

            <TextInput
                placeholder='Ingresar edad'
                style={styles.input}
                onChangeText={(texto) => setedad(+texto)}
                value={edad.toString()}
            />

            <TextInput
                placeholder='Ingresar profesion'
                style={styles.input}
                onChangeText={setprofesion}
                value={profesion}
            />

            <View>
                <Text> Experiencia </Text>
                <Switch
                    value={ocultar}
                    onChange={() => setocultar(!ocultar)}
                />
            </View>

            {
                ocultar == true
                    ? <TextInput
                        placeholder='Cuenta tu experiencia'
                        multiline
                        style={{ width: "80%", height: 100, backgroundColor: "#666" }}
                    />

                    : <Text>NO Dispone experiencia</Text>
            }

            <Button
                title='calcular'
                onPress={calcular}
                color={"green"}
            />

            {calculado && (
                <Text style={styles.resultado}>
                    El pago final de {nombre} es: ${pagoTotal.toFixed(2)}
                </Text>
            )}


        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#a09e9e",
        fontSize: 25,
        width: "80%",
        margin: 5
    },
    container: {
        flex: 1,
        backgroundColor: '#80f0a2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    resultado: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20
    }
})