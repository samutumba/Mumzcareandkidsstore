import { IExploreSection } from "../../types";
import babyCamera from "../../assets/images/baby-camera.jpg"
import maternity from "../../assets/images/maternity.jpg"
import fAndFormula from "../../assets/images/food-&-formula.jpg"

export const HomeExploreContent: IExploreSection[] = [
    {
        title: "BABY SAFETY & GADGETS",
        image: babyCamera
    },
    {
        title: "MATERNITY",
        image: maternity
    },
    {
        title: "BABY FOOD & FORMULA",
        image: fAndFormula
    },
]

interface IExploreProducts {
    title: string,
    image: string,
}

export const TestBabyShowerContent: IExploreProducts[] = [
    {
        title: "Pampers",
        image: "https://assets.shop.loblaws.ca/products/21101014/b2/en/front/21101014_front_a06_@2.png"
    },
    {
        title: "Chicca Sacca Transporter",
        image: "https://jadeals.com/wp-content/uploads/transporter-1.jpg"
    },
    {
        title: "Johnsons BedTime",
        image: "https://res.cloudinary.com/mumzcareandkidsstore/image/upload/v1651792946/samples/test/Johnsons_Gift_Set_noq5vu.jpg"
    },
    {
        title: "Nooie Cam 360",
        image: "https://res.cloudinary.com/mumzcareandkidsstore/image/upload/v1651362132/samples/test/Nooie_Cam_360_x9kluy.jpg"
    },
    {
        title: "Ganen Bed and Bag",
        image: "https://res.cloudinary.com/mumzcareandkidsstore/image/upload/v1651362132/samples/test/ganen_bed_and_bag_j0e7ts.jpg"
    },
    {
        title: "Happy Birds Play Mat",
        image: "https://res.cloudinary.com/mumzcareandkidsstore/image/upload/v1651382826/samples/test/Happy_birds_xp1ogn.jpg"
    }
]