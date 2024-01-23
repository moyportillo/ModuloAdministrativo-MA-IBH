
import Link from "next/link"


function Sliderbar() {
    return (
        <div className="slidebar">
            <aside>
                <div className="sidebar__top">
                    <img src="" width={80} height={80} alt="Casa" className="sidebar__logo" />
                </div>
                <ul className="sidebar__list">
                    <li className="sidebar_item">
                        <Link href="Talentos" className="sidebar_link">
                            <div className="sidebar_icon">

                            </div>
                            <span className="sidebar__name">Talentos</span>
                        </Link>
                    </li>
                </ul>
            </aside>
        </div>
    )
}

export default Sliderbar