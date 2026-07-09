import { Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
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

    function calcular(){

        console.log("OPERACIONES..........")

        limpiar()
    }

    function limpiar(){
        setnombre(""),
        setedad(0)
        setprofesion("")
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
                onChangeText={(texto)=> setedad(+texto)}
                value={ edad.toString() }
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
                    onChange={()=> setocultar(!ocultar ) }
                />
            </View>

            {
                ocultar== true
                ? <TextInput
                    placeholder='Cuenta tu experiencia'
                    multiline
                    style={{ width:"80%", height:100, backgroundColor:"#666"}}
                    />

                : <Text>NO Dispone experiencia</Text>
            }

            <Button
                title='calcular'
                onPress={calcular}
                color={"green"}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#666",
        fontSize: 25,
        width: "80%",
        margin: 5
    },
    container: {
        flex: 1,
        backgroundColor: '#bdebf4',
        alignItems: 'center',
        justifyContent: 'center',
    },
})