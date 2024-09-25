import { AuthHeader } from "../../../components/header/AuthHeader"
import { BikeViews } from "../../../components/bikeViews/BikeViews"
import { AdminIntroduction } from "../../../components/adminIntroduction/AdminIntroduction"
import { Brands } from "../../../components/brands/Brands"
import { Footer } from "../../../components/footer/Footer"
import { AdminEvents } from "../../../components/adminEvents/AdminEvents"

export const HomeAdmin = ()=> {
    return(
        <>
            <AuthHeader></AuthHeader>
            <BikeViews> </BikeViews>
            <AdminIntroduction></AdminIntroduction>
            <AdminEvents></AdminEvents>
            <Brands></Brands>
            <Footer></Footer>
        </>
    )
}