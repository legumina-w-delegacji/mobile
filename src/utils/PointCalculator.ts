const calculateTotalDistanceLeft = (currentLocation: any, points: any[]) => {
    let totalDistance = 0;
    let startPoint = currentLocation;

    for (let i = 0; i < points.length; i++) {
        const endPoint = points[i];
        totalDistance += calculateDistance(startPoint.latitude, startPoint.longitude, endPoint.lat, endPoint.lng);
        startPoint = { latitude: endPoint.lat, longitude: endPoint.lng };
    }

    return totalDistance;
};

const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};

export default {calculateDistance, calculateTotalDistanceLeft};