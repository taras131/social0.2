import Sidebaritem from "./sidebar_item/Sidebar_item";
import style from "./Item.module.css";
import {connect} from "react-redux";
import {getColleague} from "../../../redux/colleagueReducer";
import {Component} from "react";
import Preloader from "../../common/preloader/preloader";

class Sidebar extends Component {
    componentDidMount() {
        this.props.getColleague();
    }

    render() {
        let sidebarElements = this.props.colleagueData.map(item => {
            return <Sidebaritem key={item.id} name={item.name} img={item.photos.small} id={item.id}/>
        });
        let limit15sidebarElements = sidebarElements.filter((item, index) => index < 15)
      //  if (this.props.isLoadingcolleagueReducer) {
      //      return <Preloader/>
      //  }
        return (
            <div className={style.sidebar}>
                <div>Коллеги</div>
                {this.props.colleagueData.length !== 0
                    ? <div className={style.sidebar_items}>
                        {limit15sidebarElements}
                    </div>
                    : <b>у вас пока нет коллег </b>}
                {sidebarElements.length > 15 &&
                <button>показать всех</button>}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        colleagueData: state.colleagueInformation.colleagueData,
        isLoadingcolleagueReducer: state.colleagueInformation.isLoadingcolleagueReducer
    }
}

export default connect(mapStateToProps, {getColleague})(Sidebar);