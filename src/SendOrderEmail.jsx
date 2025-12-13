import React from "react";
import emailjs from "@emailjs/browser";

const SendOrderEmail = ({
  cartItems,
  totalAmount,
  customDiscountAmount,
  couponDiscountAmount,
  gstAmount,
  netAmount,
  customerEmail,
  orderId,
}) => {
  const sendEmail = () => {
    if (!customerEmail) {
      alert("Please enter your email!");
      return;
    }

    const templateParams = {
      order_id: orderId || "N/A",

      // MUST MATCH EMAILJS TEMPLATE EXACTLY
      email: customerEmail,

      orders: cartItems.map((item) => ({
        name: item.name,
        units: item.quantity,
        price: item.price,
      })),

      totalPrice: totalAmount.toFixed(2),
      customDiscountAmount: customDiscountAmount.toFixed(2),
      couponDiscountAmount: couponDiscountAmount.toFixed(2),
      gstAmount: gstAmount.toFixed(2),
      netAmount: netAmount.toFixed(2),
    };

    console.log("Sending to EmailJS:", templateParams);

    emailjs
      .send(
        "service_wnla01v",
        "template_aqesfgb",
        templateParams,
        "9jeWq-Y_JmDAlzpDV"
      )
      .then((res) => {
        alert("Email sent successfully!");
        console.log(res);
      })
      .catch((err) => {
        alert("Email failed! Check console.");
        console.error(err);
      });
  };

  return (
    <button className="btn btn-info w-100 mt-3" onClick={sendEmail}>
      Send Order Details to Email
    </button>
  );
};

export default SendOrderEmail;
