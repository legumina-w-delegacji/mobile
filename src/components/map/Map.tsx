import { useEffect, useState } from "react";
import * as Location from "expo-location";
import MapView, {Marker} from "react-native-maps";
import { StyleSheet, View } from "react-native";

const Map = () => {
    const [currentLocation, setCurrentLocation]: any = useState(null);
    const [initialRegion, setInitialRegion]: any = useState(null);

    const onRegionChange = (region: any) => {
        console.log(region)
    }

    useEffect(() => {
        const getLocation = async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                console.log("Permission to access location was denied");
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setCurrentLocation(location.coords);

            setInitialRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            });
        };

        getLocation();
    }, []);

    return (
        <View style={styles.container}>
            {initialRegion && (
                <MapView style={styles.map}
                        initialRegion={initialRegion}
                        zoomTapEnabled={false}
                        zoomControlEnabled={false}
                        showsBuildings={false}
                        pitchEnabled={false}
                        pointerEvents="none"
                        rotateEnabled={false}
                >
                    {currentLocation && (
                        <Marker
                            coordinate={{
                                latitude: currentLocation.latitude,
                                longitude: currentLocation.longitude,
                            }}
                            title="Your Location"
                        />
                    )}
                </MapView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    map: {
        width: "100%",
        height: "100%",
    },
});

export default Map;