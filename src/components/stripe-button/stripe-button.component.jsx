import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishAbleKey =
    "pk_live_51PdpdhRtcOmM47sna4toPcCG4ljsyn5LxsyRNQ3LO0U13Jtm1joDRkkXE5ZzaULMckL6GebPzLxDmyXfcCnG2owI00sc9mjSy8";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful!");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing LTD."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishAbleKey}
    />
  );
};

export default StripeCheckoutButton;
