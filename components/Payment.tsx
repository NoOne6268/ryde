import React, { useState } from "react";
import CustomButton from "@/components/CustomButton";
// import RazorpayCheckout from "react-native-razorpay";
import { fetchAPI } from "@/lib/fetch";
import { useLocationStore } from "@/store";
import { useAuth } from "@clerk/clerk-expo";
import ReactNativeModal from "react-native-modal";
import { View, Image, Text, Alert } from "react-native";
import { useRouter } from "expo-router";
import { images } from "@/constants";

type PaymentProps = {
  fullName: string;
  email: string;
  amount: string;
  driverId: number;
  rideTime: number;
};

export default function Payment({
  fullName,
  email,
  amount,
  driverId,
  rideTime,
}: PaymentProps) {
  const {
    userAddress,
    userLatitude,
    userLongitude,
    destinationAddress,
    destinationLatitude,
    destinationLongitude,
  } = useLocationStore();

  const { userId } = useAuth();

  const [success, setSuccess] = useState(false);

  const router = useRouter();

  // const openPaymentSheet = () => {
  //   var options = {
  //     description: "Ryde app Test Transaction",
  //     image:
  //       "https://fastly.picsum.photos/id/1020/2048/2048.jpg?hmac=a_EY8vqcBb3r-O6ZQ3vGrERh1CgL6yZQI9AW6Pr_5g0",
  //     currency: "INR",
  //     key: `${process.env.EXPO_PUBLIC_RAZORPAY_API_KEY}`,
  //     amount: `${parseFloat(amount) * 100}`,
  //     name: `${fullName}`,
  //     prefill: {
  //       email: "void@razorpay.com",
  //       contact: "9191919191",
  //       name: "Razorpay Software",
  //     },
  //     theme: { color: "#F37254" },
  //   };
  //   RazorpayCheckout.open(options)
  //     .then((data: any) => {
  //       createRide();
  //     })
  //     .catch((error: any) => {
  //       console.error(error);
  //       Alert.alert(`Error: ${error}`);
  //     });
  // };

  const createRide = async () => {
    await fetchAPI("/(api)/ride/create", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        origin_address: userAddress,
        origin_latitude: userLatitude,
        origin_longitude: userLongitude,
        destination_address: destinationAddress,
        destination_latitude: destinationLatitude,
        destination_longitude: destinationLongitude,
        ride_time: rideTime.toFixed(0),
        fare_price: parseInt(amount) * 100,
        payment_status: "paid",
        driver_id: driverId,
        user_id: userId,
      }),
    });

    setSuccess(true);
  };

  return (
    <>
      <CustomButton
        title="Confirm Ride"
        className="my-10"
        onPress={createRide}
      />

      <ReactNativeModal
        isVisible={success}
        onBackdropPress={() => setSuccess(false)}
      >
        <View className="flex flex-col items-center justify-center bg-white p-7 rounded-2xl">
          <Image source={images.check} className="w-28 h-28 mt-5" />

          <Text className="text-2xl text-center font-JakartaBold mt-5">
            Booking placed successfully
          </Text>

          <Text className="text-md text-general-200 font-JakartaRegular text-center mt-3">
            Thank you for your booking. Your reservation has been successfully
            placed. Please proceed with your trip.
          </Text>

          <CustomButton
            title="Back Home"
            onPress={() => {
              setSuccess(false);
              router.push("/(root)/(tabs)/home");
            }}
            className="mt-5"
          />
        </View>
      </ReactNativeModal>
    </>
  );
}
