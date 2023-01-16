import React from "react";
import AboutStyle from "../Styles/About.module.css";

export default function Embeded() {
  function handleClick() {
    alert("Clicked from about us");
  }
  return (
    <>
      <div className={AboutStyle.mainWrapper}>
        <div className={AboutStyle.aboutUp}>
          <div className={AboutStyle.vfirst}>
            <iframe
              className="v1"
              width="300"
              height="375"
              src="https://www.youtube.com/embed/YvrKIQ_Tbsk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className={AboutStyle.content}>
            <h1 className={AboutStyle.heading}>About Us</h1>
            <p style={{ fontWeight: "bolder" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              velit commodi veniam expedita eum ipsum quaerat nemo labore,
              cumque qui ipsa sapiente hic fuga quam dolorem eius aut suscipit
              soluta dolore libero voluptatum sunt atque molestiae illo!
              Aliquam, dicta. Ullam laboriosam eligendi amet voluptate nisi quos
              unde minima quo omnis. Voluptatem, veniam eaque aliquam voluptate
              autem animi, tenetur nostrum perferendis quia mollitia ea
              perspiciatis laudantium ullam unde omnis. Quo, expedita.
            </p>
            <button className={AboutStyle.learn} onClick={() => handleClick()}>
              Learn More
            </button>
          </div>
        </div>
        <div className={AboutStyle.aboutDown}>
          <div className={AboutStyle.vtwo}>
            <iframe
              width="300"
              height="375"
              src="https://www.youtube.com/embed/-p0PA9Zt8zk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className={AboutStyle.content}>
            <h1 className={AboutStyle.heading}> Why Choose Us</h1>
            <p style={{ fontWeight: "bolder" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              velit commodi veniam expedita eum ipsum quaerat nemo labore,
              cumque qui ipsa sapiente hic fuga quam dolorem eius aut suscipit
              soluta dolore libero voluptatum sunt atque molestiae illo!
              Aliquam, dicta. Ullam laboriosam eligendi amet voluptate nisi quos
              unde minima quo omnis. Voluptatem, veniam eaque aliquam voluptate
              autem animi, tenetur nostrum perferendis quia mollitia ea
              perspiciatis laudantium ullam unde omnis. Quo, expedita.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
