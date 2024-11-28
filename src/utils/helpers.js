// import FontAwesome from "react-native-vector-icons/dist/FontAwesome"

// export const getRating = (rating) => {
// const ratingStar=[];

// const fullStar = <FontAwesome name="star" color="#ffa41c" size={10}/>
// const halfStar = <FontAwesome name="star-half-empty" color="#ffa41c"size={10}/>
// const emptyStar = <FontAwesome name="star-o" color="#ffa41c" size={10}/>

// for(let i=0; i<5 ; i++){
//     if(i< rating){
//         ratingStar.push(fullStar)
//     }else{
//         ratingStar.push(emptyStar)
//     }
// }
// if(rating %1 !== 0){
//     ratingStar[Math.floor(rating)] = halfStar;
// }

// return ratingStar;
// };


import FontAwesome from "react-native-vector-icons/dist/FontAwesome";

export const getRating = (rating) => {
  const ratingStars = [];

  const fullStar = (key) => <FontAwesome key={key} name="star" color="#ffa41c" size={10} />;
  const halfStar = (key) => <FontAwesome key={key} name="star-half-empty" color="#ffa41c" size={10} />;
  const emptyStar = (key) => <FontAwesome key={key} name="star-o" color="#ffa41c" size={10} />;

  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      ratingStars.push(fullStar(i));
    } else {
      ratingStars.push(emptyStar(i));
    }
  }

  // Add a half-star if the rating is not an integer
  if (rating % 1 !== 0) {
    ratingStars[Math.floor(rating)] = halfStar(Math.floor(rating));
  }

  return ratingStars;
};
