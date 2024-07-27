import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price, disabled }) => {
  const priceForStripe = price * 100;
  const publishAbleKey =
    "pk_test_51PdpdhRtcOmM47sn9vijwFdsSFNa3Wrj3XrGZirvSFmj22OOltfuuNf2UmdBTHFOkBmSYMf9agQxYf9fZoBqp4Js008Z9lfRkf";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment Successful");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert("Payment error, Please Try agin with correct data,");
      });
    console.log(token);
    alert("Payment Successful!");
  };

  return (
    <div>
      {disabled ? (
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
      ) : (
        <div>
          <button
            style={{
              filter: "grayscale(1)",
              overflow: "hidden",
              display: "inline-block",
              background: "linear-gradient(rgb(40, 160, 229), rgb(1, 94, 148))",
              border: "0px",
              padding: "1px",
              textDecoration: "none",
              borderRadius: "5px",
              boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 0px",
              cursor: "pointer",
              visibility: "visible",
              userSelect: "none",
            }}
          >
            <span
              style={{
                filter: "opacity(0.4)",
                backgroundImage:
                  "linear-gradient(rgb(125, 197, 238), rgb(0, 140, 221) 85%, rgb(48, 162, 228))",
                fontFamily:
                  "&quot, Helvetica Neue&quot, Helvetica, Arial, sans-serif",
                fontSize: "14px",
                position: "relative",
                padding: "0px 12px",
                display: "block",
                height: "30px",
                lineHeight: "30px",
                color: "rgb(255, 255, 255)",
                fontWeight: "bold",
                boxShadow: "rgba(255, 255, 255, 0.25) 0px 1px 0px inset",
                textShadow: "rgba(0, 0, 0, 0.25) 0px -1px 0px",
                borderRadius: "4px",
              }}
            >
              Pay Now - Disabled
            </span>
          </button>
          <br />
          <br />
          <span style={{ color: "red" }}>
            *Please Check Your Internet Connection <br /> To Being Able Pay Now*
          </span>
        </div>
      )}
    </div>
  );
};

export default StripeCheckoutButton;
