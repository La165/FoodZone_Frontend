import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { coupons } from "./Coupon";
import axiosInstance from "./axiosInstance";

//veg thunk
export const fetchVegProducts=createAsyncThunk('veg/fetchVegProducts',
  async()=>{
        const response = await axiosInstance.get("/veg");

    return response.data;
  }
)
//nonveg thunk
export const fetchNonVegProducts=createAsyncThunk('nonveg/fetchNonVegProducts',
  async()=>{
    const response=await axiosInstance.get("/nonveg");

    return response.data;
  }
)
//sweet thunk
export const fetchSweets=createAsyncThunk('sweets/fetchSweetsProducts',
  async()=>{
    const response=await axiosInstance.get("/sweets");

    return response.data;
  }
)

//drink thunk
export const fetchDrinkProducts=createAsyncThunk('drinks/fetchDrinkProducts',
  async()=>{
    const response=await axiosInstance.get("/drinks");

    return response.data;
  }
)

//dessert thunk
export const fetchDessertProducts=createAsyncThunk('desserts/fetchDessertProducts',
  async()=>{
    const response=await axiosInstance.get("/desserts");
    return response.data;
  }
)

//breakfast thunk
export const fetchBreakfastProducts=createAsyncThunk('breakfast/fetchBreakfastProducts',
  async()=>{
    const response=await axiosInstance.get("/breakfast");
;
    return response.data;
  }
)

//snack thunk
export const fetchSnackProducts=createAsyncThunk('snacks/fetchSnackProducts',
  async()=>{
    const response=await axiosInstance.get("/snacks");

    return response.data;
  }
)


//fastFood thunk
export const fetchFastfoodProducts=createAsyncThunk('fastfood/fetchFastfoodProducts',
  async()=>{
    const response=await axiosInstance.get("/fastfood");

    return response.data;
  }
)
//soups thunk
export const fetchSoupProducts=createAsyncThunk('soups/fetchSoupProducts',
  async()=>{
    const response=await axiosInstance.get("/soups");

    return response.data;
  }
)
// bakery thunk
export const fetchBakeryProducts=createAsyncThunk('bakery/fetchBakeryProducts',
  async()=>{
    const response=await axiosInstance.get("/bakery");

    return response.data;
  }
)
//post orders
export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (orderData) => {
    const res = await axiosInstance.post("/saveOrders", orderData);
    return res.data;
  }
);


export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/orders"); // summary list
      return response.data.orders || response.data; // handle both formats
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch orders");
    }
  }
);


let getOrderSlice = createSlice({
  name: "getOrders",
   initialState: {
    getOrderedItems: [],   // summary list
    selectedOrder: null,   // full details
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      // ----------------------------------
      // 📌 Fetch ALL orders
      // ----------------------------------
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.getOrderedItems = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ----------------------------------
      // 📌 Fetch SINGLE order details
      // ----------------------------------
      .addCase(fetchOrderById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.selectedOrder = null;
      })
      .addCase(fetchOrderById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedOrder = action.payload;
      })
      .addCase(fetchOrderById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});







//register thunk
export const registerUserThunk = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/products/register", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Server Error");
    }
  }
);


let registrationSlice=createSlice(
  {
    name: "auth",
    initialState : {
  loading: false,
  user: null,
  message: "",
  error: "",
},
reducers:{},
extraReducers: (builder) => {
    builder
      .addCase(registerUserThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.message = action.payload.message;
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message || "Registration failed";
      });
  },



  });













export const fetchOrderById = createAsyncThunk(
  "orders/fetchOrderById",
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/orders/details/${orderId}`);
      return response.data.order || response.data; // handle both formats
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch order details");
    }
  }
);

// let  orderSlice = createSlice({
//   name: "orders",
//   initialState: {
//     getOrderedItems: [],   // summary list
//     selectedOrder: null,   // full details
//     loading: false,
//     error: null,
//   },

//   reducers: {},

//   extraReducers: (builder) => {
//     builder
//       // ----------------------------------
//       // 📌 Fetch ALL orders
//       // ----------------------------------
//       .addCase(fetchOrders.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchOrders.fulfilled, (state, action) => {
//         state.loading = false;
//         state.getOrderedItems = action.payload;
//       })
//       .addCase(fetchOrders.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // ----------------------------------
//       // 📌 Fetch SINGLE order details
//       // ----------------------------------
//       .addCase(fetchOrderById.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//         state.selectedOrder = null;
//       })
//       .addCase(fetchOrderById.fulfilled, (state, action) => {
//         state.loading = false;
//         state.selectedOrder = action.payload;
//       })
//       .addCase(fetchOrderById.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });





//veg Slice
let vegSlice=createSlice({
    name:"veg",
    initialState:
    {
      vegItems:[],
      loading:false,
      error:null
    },
    reducers:{},
    extraReducers:(builder)=>
    {
      builder
      .addCase(fetchVegProducts.fulfilled,
        (state,action)=>{
          state.vegItems=action.payload;
          state.loading = false;
        })
        .addCase(fetchVegProducts.pending,
        (state)=>{
          state.loading=true;
          state.error=null;
        })
        .addCase(fetchVegProducts.rejected,
        (state,action)=>{
          state.loading = false;
          state.error=action.error;
        });
    },

  });
//non veg Slice
  let nonvegSlice=createSlice({
    name:"nonveg",
    initialState:
    {
      nonVegItems:[],
      loading:false,
      error:null
    },
    reducers:{},
    extraReducers:(builder)=>
    {
      builder
      .addCase(fetchNonVegProducts.fulfilled,
        (state,action)=>{
          state.nonVegItems=action.payload;
          state.loading = false;
        })
        .addCase(fetchNonVegProducts.pending,
        (state)=>{
          state.loading=true;
          state.error=null;
        })
        .addCase(fetchNonVegProducts.rejected,
        (state,action)=>{
          state.loading = false;
          state.error=action.error;
        });
    },

  });

//sweetSLice
  let sweetSlice=createSlice({
    name:"sweets",
    initialState:
    {
      sweetItems:[],
      loading:false,
      error:null
    },
    reducers:{},
    extraReducers:(builder)=>
    {
      builder
      .addCase(fetchSweets.fulfilled,
        (state,action)=>{
          state.sweetItems=action.payload;
          state.loading = false;
        })
        .addCase(fetchSweets.pending,
        (state)=>{
          state.loading=true;
          state.error=null;
        })
        .addCase(fetchSweets.rejected,
        (state,action)=>{
          state.loading = false;
          state.error=action.error;
        });
    },

  });
//drinks Slice
  let drinkSlice=createSlice({
    name:"drinks",
    initialState:
    {
      drinks:[],
      loading:false,
      error:null
    },
    reducers:{},
    extraReducers:(builder)=>
    {
      builder
      .addCase(fetchDrinkProducts.fulfilled,
        (state,action)=>{
          state.drinks=action.payload;
          state.loading = false;
        })
        .addCase(fetchDrinkProducts.pending,
        (state)=>{
          state.loading=true;
          state.error=null;
        })
        .addCase(fetchDrinkProducts.rejected,
        (state,action)=>{
          state.loading = false;
          state.error=action.error;
        });
    },

  });

//dessertSlice
  let dessertSlice=createSlice({
    name:"desserts",
    initialState:
    {
      desserts:[],
      loading:false,
      error:null
    },
    reducers:{},
    extraReducers:(builder)=>
    {
      builder
      .addCase(fetchDessertProducts.fulfilled,
        (state,action)=>{
          state.desserts=action.payload;
          state.loading = false;
        })
        .addCase(fetchDessertProducts.pending,
        (state)=>{
          state.loading=true;
          state.error=null;
        })
        .addCase(fetchDessertProducts.rejected,
        (state,action)=>{
          state.loading = false;
          state.error=action.error;
        });
    },

  });
//breakfast slice
  let breakfastSlice=createSlice({
    name:"breakfast",
    initialState:
    {
      breakfast:[],
      loading:false,
      error:null
    },
    reducers:{},
    extraReducers:(builder)=>
    {
      builder
      .addCase(fetchBreakfastProducts.fulfilled,
        (state,action)=>{
          state.breakfast=action.payload;
          state.loading = false;
        })
        .addCase(fetchBreakfastProducts.pending,
        (state)=>{
          state.loading=true;
          state.error=null;
        })
        .addCase(fetchBreakfastProducts.rejected,
        (state,action)=>{
          state.loading = false;
          state.error=action.error;
        });
    },

  });


  //snacksSlice
  let snacksSlice=createSlice({
    name:"snacks",
    initialState:
    {
      snacks:[],
      loading:false,
      error:null
    },
    reducers:{},
    extraReducers:(builder)=>
    {
      builder
      .addCase(fetchSnackProducts.fulfilled,
        (state,action)=>{
          state.snacks=action.payload;
          state.loading = false;
        })
        .addCase(fetchSnackProducts.pending,
        (state)=>{
          state.loading=true;
          state.error=null;
        })
        .addCase(fetchSnackProducts.rejected,
        (state,action)=>{
          state.loading = false;
          state.error=action.error;
        });
    },

  });

//fastfood slice

  let fastfoodSlice=createSlice({
    name:"fastfood",
    initialState:
    {
      fastfood:[],
      loading:false,
      error:null
    },
    reducers:{},
    extraReducers:(builder)=>
    {
      builder
      .addCase(fetchFastfoodProducts.fulfilled,
        (state,action)=>{
          state.fastfood=action.payload;
          state.loading = false;
        })
        .addCase(fetchFastfoodProducts.pending,
        (state)=>{
          state.loading=true;
          state.error=null;
        })
        .addCase(fetchFastfoodProducts.rejected,
        (state,action)=>{
          state.loading = false;
          state.error=action.error;
        });
    },

  });

  //soups slice

  let soupsSlice=createSlice({
    name:"soups",
    initialState:
    {
      soups:[],
      loading:false,
      error:null
    },
    reducers:{},
    extraReducers:(builder)=>
    {
      builder
      .addCase(fetchSoupProducts.fulfilled,
        (state,action)=>{
          state.soups=action.payload;
          state.loading = false;
        })
        .addCase(fetchSoupProducts.pending,
        (state)=>{
          state.loading=true;
          state.error=null;
        })
        .addCase(fetchSoupProducts.rejected,
        (state,action)=>{
          state.loading = false;
          state.error=action.error;
        });
    },

  });


  // bakery slice
  let bakerySlice=createSlice({
    name:"bakery",
    initialState:
    {
      bakery:[],
      loading:false,
      error:null
    },
    reducers:{},
    extraReducers:(builder)=>
    {
      builder
      .addCase(fetchBakeryProducts.fulfilled,
        (state,action)=>{
          state.bakery=action.payload;
          state.loading = false;
        })
        .addCase(fetchBakeryProducts.pending,
        (state)=>{
          state.loading=true;
          state.error=null;
        })
        .addCase(fetchBakeryProducts.rejected,
        (state,action)=>{
          state.loading = false;
          state.error=action.error;
        });
    },

  });

  //order slice 
  let ordersSlice = createSlice({ name: "orders", 
    initialState: {
       orders: [], 
       loading: false,
        error: null, 
      }, reducers: {},
       extraReducers: (builder) =>
         { builder // POST ORDER 
         .addCase(createOrder.pending, (state) => { 
          state.loading = true; state.error = null; })
           .addCase(createOrder.fulfilled, (state, action) => { 
            state.orders.push(action.payload); state.loading = false; })
             .addCase(createOrder.rejected, (state, action) => {
               state.loading = false; state.error = action.error.message; }); 
              }, });

//coupon slice
  const couponSlice = createSlice({
  name: "coupon",
  initialState: {
    code: "",
    discount: 0,
    applied: false,
    message: "",
  },

  reducers: {
    applyCoupon: (state, action) => {
      const enteredCode = action.payload;

      if (coupons[enteredCode]) {
        state.code = enteredCode;
        state.discount = coupons[enteredCode];
        state.applied = true;
        state.message = `${enteredCode} applied! You got ${coupons[enteredCode]}% off`;
      } else {
        state.applied = false;
        state.discount = 0;
        state.message = "Invalid coupon code";
      }
    },
  },
});

//cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    decreaseQuantity: (state, action) => {
      const index = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        if (state[index].quantity === 1) {
          state.splice(index, 1);
        } else {
          state[index].quantity -= 1;
        }
      }
    },

    removeFromCart: (state, action) => {
      const index = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addToCart, decreaseQuantity, removeFromCart} =cartSlice.actions;
export const{applyCoupon}=couponSlice.actions;

// Store.js
// Login Thunk
export const loginUserThunk = createAsyncThunk(
  "login/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/products/login",
        userData
      );
      return response.data; // Your backend already sends: status, message, user, token
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;

        // Store token in browser
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = loginSlice.actions;
export const forgotPasswordThunk = createAsyncThunk(
  "auth/forgotPassword",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/products/forgot-password",
        { email }
      );
      return response.data.message;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error");
    }
  }
);

export const resetPasswordThunk = createAsyncThunk(
  "auth/resetPassword",
  async ({ email, token, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/products/reset-password",
        { email, token, password }
      );
      return response.data.message;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Error");
    }
  }
);

const forgotResetSlice = createSlice({
  name: "forgotReset",
  initialState: {
    loading: false,
    message: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // --- Forgot Password ---
      .addCase(forgotPasswordThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(forgotPasswordThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(forgotPasswordThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // --- Reset Password ---
      .addCase(resetPasswordThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(resetPasswordThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(resetPasswordThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});









const store = configureStore({
  reducer: {
    veg:vegSlice.reducer,
    nonveg:nonvegSlice.reducer,
    sweets:sweetSlice.reducer,
    drinks:drinkSlice.reducer,
    desserts:dessertSlice.reducer,
    breakfast:breakfastSlice.reducer,
    snacks:snacksSlice.reducer,
    fastfood:fastfoodSlice.reducer,
    soups:soupsSlice.reducer,
    bakery:bakerySlice.reducer,
    cart: cartSlice.reducer,
    coupon: couponSlice.reducer, 
    Orders: ordersSlice.reducer,
    getOrders:getOrderSlice.reducer,
    auth:registrationSlice.reducer,
    login:loginSlice.reducer,
    forgotReset:forgotResetSlice.reducer
  },
});

export default store;
