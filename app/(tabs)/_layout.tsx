import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#007BFF', // Hijau gelap untuk tab yang aktif
        tabBarInactiveTintColor: '#8B8B8B', // Abu-abu terang untuk tab yang tidak aktif
        tabBarStyle: {
          backgroundColor: '#FAFAFA', // Latar belakang beige
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} /> // Ikon standar Home
          ),
          title: 'Home', // Nama tab untuk halaman utama
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bag" size={size} color={color} /> // Ikon untuk produk
          ),
          title: 'Produk', // Nama tab untuk produk (kain, alat jahit, dll)
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cash" size={size} color={color} /> // Ikon untuk transaksi
          ),
          title: 'Transaksi', // Nama tab untuk transaksi kasir
        }}
      />
    </Tabs>
  );
};
