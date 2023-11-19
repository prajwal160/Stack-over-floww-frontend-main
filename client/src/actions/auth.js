import * as api from "../api";
import { setCurrentUser } from "./currentUser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: "SIGNUP", data });
    navigate("/verify");
  } catch (error) {
    toast.error(error.response.data, { position: "top-center" });
  }
};
export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);

    dispatch({ type: "LOGIN", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    navigate("/");
  } catch (error) {
    toast.error(error.response.data, { position: "top-center" });
    <ToastContainer />;
  }
};
export const glogin = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.glogIn(authData);
    dispatch({ type: "LOGIN", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    navigate("/");
  } catch (error) {
    toast.error(error.response.data, { position: "top-center" });
    <ToastContainer />;
  }
};
export const flogin = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.flogIn(authData);
    dispatch({ type: "LOGIN", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    navigate("/");
  } catch (error) {
    toast.error(error.response.data, { position: "top-center" });
    <ToastContainer />;
  }
};
export const logout = (authData) => async (dispatch) => {
  try {
    const { data } = await api.logout(authData);
    dispatch({ type: "LOGOUT", data });
  } catch (error) {
    toast.error(error.response.data, { position: "top-center" });

    <ToastContainer />;
  }
};
// export const getpremium = (authData, navigate) => async (dispatch) => {
//   try {
//     const {
//       data: { key },
//     } = await api.getkey();
//     const { data } = await api.getPremium(authData);

//     dispatch({ type: "GET_PREMIUM", data });

//     const options = {
//       key: key, // Enter the Key ID generated from the Dashboard
//       amount: data.order.amount, //order.amount Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//       currency: "INR",
//       name: "Stack Over Flow Clone 2023",
//       description:
//         "This is the Best ever clone of Famous Coding Question-Answer Hub , Stackoverflow.Inc ",
//       image:
//         "https://www.vectorlogo.zone/logos/stackoverflow/stackoverflow-official.svg",
//       order_id: data.order.id, //order.id This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//       callback_url: `https://stack-overflow-server.vercel.app/payment/paymentverification/${data.order.receipt}/${data.order.amount}`, 
//       modal: {
//         backdropclose: "true",
//       },
//       prefill: {
//         name: "Prajwal Y A",
//         email: "xyz@gmail.com",
//         contact: "9148776414",
//       },
//       notes: {
//         address: "Razorpay Corporate Office",
//       },
//       theme: {
//         color: "#FBAE09",
//       },
//     };

//     const razor = new window.Razorpay(options);
//     razor.open();
//   } catch (error) {
//     toast.error(error.response.data, { position: "top-center" });

//     <ToastContainer />;
//   }
// };
export const getpremium = (authData, navigate) => async (dispatch) => {
  try {
    // Fetch Razorpay key
    const { data: { key } } = await api.getkey();

    // Fetch payment details
    const { data } = await api.getPremium(authData);

    // Log responses for debugging
    console.log('Razorpay Key:', key);
    console.log('Payment Details:', data);

    // Dispatch data to the Redux store
    dispatch({ type: "GET_PREMIUM", data });

    // Razorpay options
    const options = {
      key: key,
      amount: data.order.amount,
      currency: "INR",
      name: "Stack Over Flow Clone 2023",
      description: "This is the Best ever clone of Famous Coding Question-Answer Hub, Stackoverflow.Inc",
      image: "https://www.vectorlogo.zone/logos/stackoverflow/stackoverflow-official.svg",
      order_id: data.order.id,
      // callback_url: `https://stack-overflow-server.vercel.app/payment/paymentverification/${data.order.receipt}/${data.order.amount}`,
      callback_url: `https://rzp.io/l/JnwcuWzLC${data.order.receipt}/${data.order.amount}`,
      modal: {
        backdropclose: "true",
      },
      prefill: {
        name: "Prajwal Y A",
        email: "xyz@gmail.com",
        contact: "9148776414",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#FBAE09",
      },
    };

    // Log message before opening the Razorpay modal
    console.log('Opening Razorpay Modal');

    // Open the Razorpay modal
    const razor = new window.Razorpay(options);
    razor.open();
    
    // Log message after attempting to open the Razorpay modal
    console.log('Razorpay Modal Opened');
  } catch (error) {
    // Log error
    console.error('Error:', error);
    // Show error toast
    toast.error(error.response?.data || 'An error occurred during payment', { position: 'top-center' });
  }
};

export const reset = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.reset(authData);
    dispatch({ type: "RESET", data });
    toast.success("Password Reset Successful !", { position: "top-center" });
    navigate("/login");
  } catch (error) {
    toast.error(error.response.data);

    <ToastContainer />;
  }
};

export const verifyOTP = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.verify(authData);

    dispatch({ type: "VERIFY", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));

    navigate("/");
  } catch (error) {
    toast.error(error.response.data, { position: "top-center" });
    <ToastContainer />;
  }
};
