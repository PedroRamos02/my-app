import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import React, { Suspense, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Canvas } from "@react-three/fiber";
import { D20 } from "@/components/D20";
import useControls from "r3f-native-orbitcontrols"
import Trigger from "@/components/Trigger";
import Loader from "@/components/Loader";
import Gradient from "@/components/Gradient";

type Props = {};

const Index = (props: Props) => {
    const [OrbitControls, event] = useControls();
    const [loading, setLoading] = useState(false);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar animated barStyle={"light-content"} />
            <View style={styles.textContainer}>
                <Text style={styles.textTitle}>D20 Virtual</Text>
                <Text style={styles.text}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Explicabo, alias voluptatibus! Vero voluptate quae eum 
                     saepe quam, beatae dolorem labore deserunt quibusdam iu
                </Text>
            </View>
            <View style={styles.modelContainer} {...event}>
                <Gradient />
                {loading && <Loader />}
                <Canvas>
                    <OrbitControls  enablePan={false} enableZoom={false}/>
                    <directionalLight position={[1, 0, 0]} args={["white", 2]}/>
                    <directionalLight position={[-1, 0, 0]} args={["white", 2]}/>
                    <directionalLight position={[0, 0, 1]} args={["white", 2]}/>
                    <directionalLight position={[0, 0, -1]} args={["white", 2]}/>
                    <directionalLight position={[0, 1, 0]} args={["white", 15]}/>
                    <directionalLight position={[0, -1, 0]} args={["white", 2]}/>
                    <Suspense fallback={<Trigger setLoading={setLoading} />}>
                        <D20 />
                    </Suspense>
                </Canvas>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={ styles.textButton }>Rolar Dado</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    modelContainer: {
        flex: 1,
    },
    textContainer: {
        gap: 4,
        marginVertical: 20,
    },
    textTitle: {
        fontFamily: "SpaceMono-Regular",
        color: "white",
        fontSize: 18,
        textAlign: "center",
    },
    text: {
        fontFamily: "SpaceMono-Regular",
        color: "white",
        fontSize: 14,
        textAlign: "center",
    },
    button: {
        backgroundColor: "white",
        padding: 14,
        margin: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    textButton: {
        fontFamily: "SpaceMono-Regular",
        color: "black",
        fontSize: 14,
    }
})