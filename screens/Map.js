// import React, { useState } from "react";
// import MapView, { Callout, Circle, Marker } from "react-native-maps";
// import { StyleSheet, View, Text } from "react-native";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

// export default function Map() {

//   // the defult pin
//   const [pin, setPin] = useState({
//     latitude: 32.103376857642246,
//     longitude: 35.20905301042528,
//   });

// // the other pin who start with the defult pin area
//   const [region, setRegion] = useState({
//     latitude: 32.103376857642246,
//     longitude: 35.20905301042528,
//     // focus
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421,
//   });


  
//   return (
//     <View style={{ marginTop: 50, flex: 1 }}>
//       <GooglePlacesAutocomplete
//       // allows the component to fetch additional details about the selected place
//         fetchDetails={true}
//         GooglePlacesSearchQuery={{
//           // יציג קודם כל את מה שקרוב
//           rankby: "distance",
//         }}
//         placeholder="Search"
//         // when a place is selected from the autocomplete suggestions. It receives the data and details parameters, 
//         // which contain information about the selected place. In this case, it sets the region state variable with
//         //  the latitude, longitude, and delta values of the selected place, which will likely be used to display a map centered on that location.
//         onPress={(data, details = null) => {
//           console.log(data, details);
//           setRegion({
//             latitude: details.geometry.location.lat,
//             longitude: details.geometry.location.lng,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           });
//         }}
//         query={{
//           key: "AIzaSyAqU2X2dX9BK-x6r82ffMEjF6267-UUkHQ",
//           language: "en",
//           // components: "country: us",
//           types: "establishment",
//           radius: 30000,
//           location: `${region.latitude},${region.longitude}`,
//         }}
//         styles={{
//           container: {
//             flex: 0,
//             position: "absolute",
//             width: "100%",
//             zIndex: 1,
//           },
//           listView: { backgroundColor: "white" },
//         }}
//       />
//       <MapView
//         style={styles.map}
//         // 32.103376857642246, 35.20905301042528
//         initialRegion={{
//           latitude: 32.103376857642246,
//           longitude: 35.20905301042528,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//         provider="google" // for google maps insted of default map of the phone
//       >
//         <Marker
//           coordinate={{
//             latitude: region.latitude,
//             longitude: region.longitude,
//           }}
//         />
//         <Marker
//           coordinate={pin}
//           pinColor="red"
//           // ניתן לגרירה
//           draggable={true}
//           onDragStart={(event) => {
//             console.log("Drag start", event.nativeEvent.coordinate);
//           }}
//           // מעדכן את המיקום הנבחר
//           onDragEnd={(event) => {
//             setPin({
//               latitude: event.nativeEvent.coordinate.latitude,
//               longitude: event.nativeEvent.coordinate.longitude,
//             });
//           }}
//         >
//           <Callout>
//             <Text>I'm Here</Text>
//           </Callout>
//         </Marker>
//         <Circle center={pin} radius={500}></Circle>
//       </MapView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     width: "100%",
//     height: "100%",
//   },
// });
