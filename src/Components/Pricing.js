import React from "react";
import PricingStyle from "../Styles/Pricing.module.css";
import { useRecoilState } from "recoil";
import { subscribeData } from "./atom";
import { useNavigate } from "react-router-dom";

export default function Pricing() {
  const navigate = useNavigate();
  const routeChange = () => {
    let path = "/activity";
    navigate(path);
  };
  const navigateeToHome = useNavigate();
  const route = () => {
    let path = `/`;
    navigateeToHome(path);
  };

  const [subscribeDetail, setSubscribeDetail] = useRecoilState(subscribeData);

  function handleSubscriptionDay() {
    setSubscribeDetail({ ...subscribeDetail, isSubscribe: true, plan: 15 });
  }
  function handleSubscriptionMonth() {
    setSubscribeDetail({ ...subscribeDetail, isSubscribe: true, plan: 30 });
  }
  console.log(subscribeDetail, "afterdestruc");

  return (
    <>
      <div id="Price">
        <div className={PricingStyle.container}>
          <div className={PricingStyle.container2}>
            <div className={PricingStyle.Day}>
              <p>Day Pass</p>
              <p>
                <sup style={{ fontSize: "1.5em" }}>$</sup>{" "}
                <span className={PricingStyle.price}>
                  <sub>20</sub>
                </span>
                <br />
                <span>/pass</span>
              </p>

              <ul>
                <li>15 Day Pass</li>
                <li>Free Gym Access</li>
                <li>24 Hours Access</li>
              </ul>
              <button
                className={PricingStyle.btn}
                onClick={() => {
                  let a = window.confirm(
                    "you are getting Subscribed to 15 days plan"
                  );
                  if (a) {
                    handleSubscriptionDay();
                    routeChange();
                  } else {
                    route();
                  }
                }}
              >
                {subscribeDetail.isSubscribe &&
                subscribeDetail.plan === 15 &&
                subscribeDetail.isLogin === true
                  ? "Get Started"
                  : "Subscribe"}
              </button>
            </div>
            <div className={PricingStyle.Month}>
              <p> Month to Month </p>
              <p>
                <sup style={{ fontSize: "1.5em" }}>$</sup>
                <span className={PricingStyle.price}>
                  <sub>90 </sub>
                </span>
                <br />
                <span>/month</span>
              </p>

              <ul>
                <li>$99 Joining Fee</li>
                <li>No Contract</li>
                <li>Free Gym Access</li>
                <li>1 Group Class Included</li>
                <li>24 Hours Access</li>
              </ul>
              <button
                className={PricingStyle.btn}
                onClick={() => {
                  let a = window.confirm(
                    "you are getting Subscribed to a monthly plan"
                  );
                  if (a) {
                    handleSubscriptionMonth();
                    routeChange();
                  } else {
                    route();
                  }
                }}
              >
                {subscribeDetail.isSubscribe &&
                subscribeDetail.plan === 30 &&
                subscribeDetail.isLogin === true
                  ? "Get Started"
                  : "Subscribe"}
              </button>
            </div>
            <div className={PricingStyle.content}>
              <div className={PricingStyle.first}>
                <h1>Membership</h1>
                <h2>From Punch Pass to Monthly or Annual</h2>
                <p>
                  At Gym Base, we offer a wide range of membership with options
                  to suit every budget. Everything from One Day Pass, Punch Pass
                  to monthly or annual prepaid memberships. What's more, we
                  won't tie you in to a long term contract, giving you greater
                  flexibility.
                </p>
              </div>
              <div className={PricingStyle.second}>
                <h3>Each plan included</h3>
                <ul className={PricingStyle.list}>
                  <li> The best equipment global brands </li>
                  <li> The gym is open 24 hours a day, 7 days a week</li>
                  <li> Two safe payment methods </li>
                  <li> Two safe payment methods </li>
                  <li>
                    {" "}
                    Group fitness classes in the price of the subscription{" "}
                  </li>
                  <li> No long-term contract, period </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
