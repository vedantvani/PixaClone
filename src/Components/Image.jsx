import React from "react";
import PixabayContext from "../context/PixabayContext";
import { useContext } from "react";
const Image = () => {
  const { imageData } = useContext(PixabayContext);

  return (
    <div className="container ">
      <div className="flex">
        {imageData.map((image) => (
          <div key={image.id}>
            <div className="item">
              <img src={image.largeImageURL} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Image;
