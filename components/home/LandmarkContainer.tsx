import { fetchLandmarks, fetchLandmarksHero } from "@/actions/actions";
import LandmarkList from "./LandmarkList";
import { LandmarkCardProps } from "@/utils/types";
import Hero from "../hero/Hero";

const LandmarkContainer = async (){
  
  const landmarks: LandmarkCardProps[] = await fetchLandmarks({ search,category });
  // console.log(landmarks)

  return (
    <div>
        <Hero landmarks={landmarks}/>
        <LandmarkList landmarks={landmarks} /> 
    </div>
  );
};
export default LandmarkContainer;
