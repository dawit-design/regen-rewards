// App.js
import React from "react";
import { styles } from "./App.style";
// import { SafeAreaView, StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import withNavbar from "./components/Navbar/WithNavBar";
import Navbar from "./components/Navbar/NavBar";
import withNavbarAndFooter from "./components/Navbar/WithNavbarandFooter";
import { Text, View, StatusBar, SafeAreaView } from "react-native";
import LandingPage from "./screens/LandingPage/LandingPage";
import SignupScreen from "./screens/SignupScreen/SignupScreen";
import LoginScreen from "./screens/LoginScreen/Login";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import UserDetails from "./screens/UserDetails/UserDetails";
import UserProfile from "./screens/UserProfile/UserProfile";
import UpdatePassword from "./screens/UpdatePassoword/UpdatePassword";
import UserUpdate from "./screens/UserUpdate/UserUpdate";
import RegenReads from "./components/RegenReads/RegenReads";
import ReceiptScan from "./components/ReceiptScan/ReceiptScan";
import ReceiptDetails from "./components/ReceiptScan/ReceiptDetails";
import PastReceipts from "./components/ReceiptScan/PastReceipts";
import ProductScanSearch from "./components/ProductScan&Search/ProductScanSearch";
import ScanHistory from "./components/ScanHistory/ScanHistory";
import PaymentMethod from "./components/PaymentMethod/PaymentMethod";
import UpgradeToRewardsPlus from "./components/UpgradeToRegenRewardsPlus/UpgradeToRegeneRewardsPlus";
import LinkedBankAccount from "./components/LinkedAccount/LinkedAccount";
import DetailedFlashSales from "./components/DetailedFlashSales/DetailedFlashSales";
import FlashSales from "./components/FlashSale/FalshSale";
import withFooter from "./Helper/withFooter";
import RegenArticles from "./components/RegenReads/RegenArticles";
import Product from "./screens/ProductScreen/Product";
import PaidMedia from "./components/PaidMedia/PaidMedia";
import TransactionHistory from "./screens/TransactionHistory/TransacactionHistory";
const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" hidden={false} translucent={true} />
        <Stack.Navigator initialRouteName="LandingPage">
          <Stack.Screen
            name="LandingPage"
            component={LandingPage}
            options={{
              headerTitle: "",
              headerStyle: { backgroundColor: "transparent", height: 0 },
              headerTintColor: "transparent",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{
              headerTitle: "",
              headerStyle: { backgroundColor: "transparent" , height: 0},
              headerTintColor: "transparent",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerTitle: "",
              headerStyle: { backgroundColor: "transparent" , height: 0},
              headerTintColor: "transparent",
              headerShadowVisible: false,
              
            }}
          />
          <Stack.Screen
            name="Home"
            component={withNavbarAndFooter(HomeScreen)}
            options={{
              headerTitle: "",
              headerStyle: { backgroundColor: "transparent", height: 0} ,
              headerTintColor: "transparent",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="UserDetails"
            component={withNavbarAndFooter(UserDetails)}
            options={{
              headerTitle: "",
              headerStyle: { backgroundColor: "transparent", height: 0},
              headerTintColor: "transparent",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="UserProfile"
            component={withNavbarAndFooter(UserProfile)}
            options={{
              headerTitle: "",
              headerStyle: { backgroundColor: "transparent" , height: 0},
              headerTintColor: "transparent",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="UpdatePassword"
            component={withNavbarAndFooter(UpdatePassword)}
            options={{
              headerTitle: "",
              headerStyle: { backgroundColor: "transparent", height: 0 },
              headerTintColor: "transparent",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="updateDetails"
            component={withNavbarAndFooter(UserUpdate)}
            options={{
              headerTitle: "",
              headerStyle: { backgroundColor: "transparent", height: 0 },
              headerTintColor: "transparent",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="RegenReads"
            component={withNavbarAndFooter(RegenReads)}
            options={{
              headerTitle: "",
              headerStyle: { backgroundColor: "transparent" , height: 0},
              headerTintColor: "transparent",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="ReceiptScan"
            component={withNavbarAndFooter(ReceiptScan)}
            options={{
              headerTitle: "",
              headerStyle: { backgroundColor: "transparent" , height: 0},
              headerTintColor: "transparent",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="PastReceipts"
            component={withNavbarAndFooter(PastReceipts)}
            options={{
              headerTitle: "",
              headerStyle: { backgroundColor: "transparent", height: 0 },
              headerTintColor: "transparent",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="ReceiptDetails"
            component={withNavbarAndFooter(ReceiptDetails)}
            options={{
              headerTitle: "",
              headerStyle: { backgroundColor: "transparent", height: 0 },
              headerTintColor: "transparent",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="ProductScan"
            component={withNavbarAndFooter(ProductScanSearch)}
            options={{
              headerTitle: "",
              headerStyle: { backgroundColor: "transparent", height: 0 },
              headerTintColor: "transparent",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="ScanHistory"
            component={withNavbarAndFooter(ScanHistory)}
            options={{
              headerTitle: "",
              headerStyle: { backgroundColor: "transparent" , height: 0},
              headerTintColor: "transparent",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="PaymentMethod"
            component={withNavbarAndFooter(PaymentMethod)}
            options={{
              headerTitle: "",
              headerStyle: { backgroundColor: "transparent" },
              headerTintColor: "transparent",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="UpgradeToRewardsPlus"
            component={withNavbarAndFooter(UpgradeToRewardsPlus)}
            options={{
              headerTitle: "",
              headerStyle: { backgroundColor: "transparent" , height: 0},
              headerTintColor: "transparent",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="LinkedBankAccount"
            component={withNavbarAndFooter(LinkedBankAccount)}
            options={{
              headerTitle: "",
              headerStyle: { backgroundColor: "transparent" , height: 0},
              headerTintColor: "transparent",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="Product"
            component={withNavbarAndFooter(Product)}
            options={{
              headerTitle: "",
              headerStyle: { backgroundColor: "transparent", height: 0 },
              headerTintColor: "transparent",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="FlashSales"
            component={withNavbarAndFooter(FlashSales)}
            options={{
              headerTitle: "",
              headerStyle: { backgroundColor: "transparent" , height: 0},
              headerTintColor: "transparent",
              headerShadowVisible: false,
            }}
          />

          <Stack.Screen
            name="DetailedFlashSales"
            component={withNavbarAndFooter(DetailedFlashSales)}
            options={{
              headerTitle: "",
              headerStyle: { backgroundColor: "transparent" , height: 0},
              headerTintColor: "transparent",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="RegenArticles"
            component={withNavbarAndFooter(RegenArticles)}
            options={{
              headerTitle: "",
              headerStyle: { backgroundColor: "transparent", height: 0 },
              headerTintColor: "transparent",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="PaidMedia"
            component={withNavbarAndFooter(PaidMedia)}
            options={{
              headerTitle: "",
              headerStyle: { backgroundColor: "transparent" , height: 0},
              headerTintColor: "transparent",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="Navbar"
            component={withNavbarAndFooter(Navbar)}
            options={{
              headerTitle: "",
              headerStyle: { backgroundColor: "transparent" , height: 0},
              headerTintColor: "transparent",
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen
            name="TransactionHistory"
            component={withNavbarAndFooter(TransactionHistory)}
            options={{
              headerTitle: "",
              headerStyle: { backgroundColor: "transparent" , height: 0},
              headerTintColor: "transparent",
              headerShadowVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
