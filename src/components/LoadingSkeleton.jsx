import React from "react";
import Skeleton from "react-loading-skeleton"; // importing the skeleton component
import "react-loading-skeleton/dist/skeleton.css"; // importing the css for the animation


const LoadingSkeleton = () => {
    return (
        <>
      <div className="cardContainer">
        <Skeleton circle={true}
          highlightColor="#97a2b5"
          baseColor="#97a2b5"
          className="cardImgLoading"
        />
        <Skeleton
          highlightColor="#97a2b5"
          baseColor="#97a2b5"
          className="tagContainerLoading"
        />
      </div>
      </>
    );
  };
  
  export default LoadingSkeleton;