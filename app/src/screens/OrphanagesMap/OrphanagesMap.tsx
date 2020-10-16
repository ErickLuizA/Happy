import React from 'react'
import { View, Dimensions, StyleSheet, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { Feather } from '@expo/vector-icons'

import MapMarker from '../../images/map-marker.png'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  map: {
    width,
    height,
  },

  calloutContainer: {
    width: 168,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },

  calloutText: {
    color: '#0089a5',
    fontSize: 14,
    fontFamily: 'Nunito_700Bold',
  },

  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3,
  },

  footerText: {
    color: '#8fa7d3',
    fontFamily: 'Nunito_700Bold',
  },

  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default function Home() {
  const { navigate } = useNavigation()

  function handleNavigateToOrphanageDetails() {
    navigate('OrphanageDetails')
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -20.2600557,
          longitude: -42.0404564,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}>
        <Marker
          icon={MapMarker}
          calloutAnchor={{
            x: 1.8,
            y: 0.5,
          }}
          coordinate={{ latitude: -20.2600557, longitude: -42.0404564 }}>
          <Callout tooltip onPress={handleNavigateToOrphanageDetails}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar das meninas</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>2 orfanatos encontrados</Text>
        <RectButton style={styles.createOrphanageButton} onPress={() => {}}>
          <Feather name="plus" size={20} color="#fff" />
        </RectButton>
      </View>
    </View>
  )
}