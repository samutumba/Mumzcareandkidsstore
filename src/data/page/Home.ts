import { IExploreSection } from "../../types";

export const HomeExploreContent: IExploreSection[] = [
    {
        title: "BABY SAFETY & GADGETS",
        link: "/",
        image: "https://res.cloudinary.com/mumzcareandkidsstore/image/upload/v1655605446/media/baby-camera_gunegw.jpg"
    },
    {
        title: "MATERNITY",
        link: "/",
        image: "https://res.cloudinary.com/mumzcareandkidsstore/image/upload/v1655605447/media/maternity_s3ula0.jpg"
    },
    {
        title: "BABY FOOD & FORMULA",
        link: "/",
        image: "https://res.cloudinary.com/mumzcareandkidsstore/image/upload/v1655605454/media/pexels-vanessa-loring-5082630_rcpml4.jpg"
    },
    {
        title: "APPAREL",
        link: "/",
        image: "https://res.cloudinary.com/mumzcareandkidsstore/image/upload/v1655605450/media/motherhood_vrt0l4.jpg"
    }
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