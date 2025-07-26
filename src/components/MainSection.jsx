import "./mainSection.css";
import ContentGallery from "./ms-component/ContentGallery";
import ContentOrder from "./ms-component/ContentOrder";

export default function MainSection () {
    return (
    <div className="main-section width-100">
        <div className="flex-column width-65 row-gap-2rem">
            <ContentOrder/>
            <h3 className="color-grey"><span class="stylish color-red">en çok paketlenen menüler</span><br/>
            Acıktıran Kodlara Doyuran Lezzetler</h3>
            <ContentGallery/>
        </div>
    </div>)
}