import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import {
  useFonts,
  LexendDeca_300Light,
  LexendDeca_400Regular,
  LexendDeca_500Medium,
  LexendDeca_700Bold,
} from "@expo-google-fonts/lexend-deca";
import { useNavigation } from "@react-navigation/native";

import { useEffect, useState } from "react";
import ToDoCardWithPressMenu from "./ToDoCardWithPressMenu";
import { getFormData } from "../../data/firestopreRealTime";
import Boxes from "./Boxes";

export {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  useFonts,
  LexendDeca_300Light,
  LexendDeca_400Regular,
  LexendDeca_500Medium,
  LexendDeca_700Bold,
  useNavigation,
  useEffect,
  useState,
  ToDoCardWithPressMenu,
  getFormData,
  Boxes,
  StyleSheet,
};
