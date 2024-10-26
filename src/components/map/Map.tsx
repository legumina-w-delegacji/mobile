import { useEffect, useState } from "react";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";

interface MapProps {
    interactivityEnabled: boolean;
    mapMarkerFollowUp?: boolean;
    initialLocationTrigger?: boolean;
    postTrigger?: any;
}

const Map = ({ interactivityEnabled, mapMarkerFollowUp, initialLocationTrigger, postTrigger }: MapProps) => {
    const [currentLocation, setCurrentLocation]: any = useState(null);
    const [markerLocation, setMarkerLocation]: any = useState(null);
    const [initialRegion, setInitialRegion]: any = useState(null);
    var mapRef: any = null;

    const onRegionChange = (region: any) => {
        if (mapMarkerFollowUp) {
            setMarkerLocation({
                latitude: region.latitude,
                longitude: region.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            });
        }
    }

    useEffect(() => {
        const getLocation = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
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

            setMarkerLocation(location.coords);
        };

        getLocation();
    }, []);

    useEffect(() => {
        if (initialLocationTrigger) {
            setMarkerLocation(currentLocation);
            mapRef.animateToRegion(currentLocation, 1000)
            postTrigger();
        }
    }, [initialLocationTrigger]);


    return (
        <View style={styles.container}>
            {initialRegion && (
                <MapView style={styles.map}
                    ref={(map) => { mapRef = map; }}
                    initialRegion={initialRegion}
                    zoomTapEnabled={interactivityEnabled}
                    zoomControlEnabled={interactivityEnabled}
                    showsBuildings={interactivityEnabled}
                    onRegionChange={onRegionChange}
                    pitchEnabled={interactivityEnabled}
                    pointerEvents={interactivityEnabled ? undefined : "none"}
                    rotateEnabled={interactivityEnabled}
                >
                    {markerLocation && (
                        <Marker
                            coordinate={{
                                latitude: markerLocation.latitude,
                                longitude: markerLocation.longitude,
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
        borderRadius: 10,
    },
    map: {
        width: "100%",
        height: "100%",
    },
});

export default Map;