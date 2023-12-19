import {NavLink, Link} from 'react-router-dom';

export default function SubMenu(props) {
    return (
        <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href={`#ui-basic_${props.subIndex}`} aria-expanded="false" aria-controls="ui-basic">
                <span className="menu-title">{props.menuTitle}</span>
                <i className={`menu-icon ${props.menuIcon}`}></i>
            </a>
            <div className="collapse" id={`ui-basic_${props.subIndex}`}>
            <ul className="nav flex-column sub-menu">
                {
                    props.listLink.map((el,index) => 
                        <li className="nav-item" key={`SubMenu_li_item_${index}`}> 
                            <Link className="nav-link" key={`SubMenu_li_link_item_${index}`} to={el.link}>{el.name}</Link>
                        </li>
                    )
                }
            </ul>
            </div>
        </li>
    )

}