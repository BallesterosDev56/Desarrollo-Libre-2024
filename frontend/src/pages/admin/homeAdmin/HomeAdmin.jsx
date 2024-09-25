import { AuthHeader } from "../../../components/header/AuthHeader"
import { BikeViews } from "../../../components/bikeViews/BikeViews"
import { AdminIntroduction } from "../../../components/adminIntroduction/AdminIntroduction"

export const HomeAdmin = ()=> {
    return(
        <>
            <AuthHeader></AuthHeader>
            <BikeViews> </BikeViews>
            <AdminIntroduction></AdminIntroduction>
        </>
    )
}