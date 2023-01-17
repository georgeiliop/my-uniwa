import "./itemCard.scss";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Bounce from "react-reveal/Bounce";

const ItemCard = ({ className }) => {
  return (
    <Bounce top>
      <div className={`itemCard-container p-8 shadow-xl ${className} `}>
        <div className="top">
          <div className="icon">
            <CalendarMonthOutlinedIcon style={{ fontSize: 46 }} />
          </div>
          <div className="link-icon">
            <ArrowForwardOutlinedIcon style={{ fontSize: 46 }} />
          </div>
        </div>
        <div className="bottom">
          <div className="card-title">Πρόγραμμα Μαθημάτων</div>
        </div>
      </div>
    </Bounce>
  );
};

export default ItemCard;
