import "./contentgrid.scss";
import ItemCard from "../itemcard/ItemCard";
import Flip from "react-reveal/Flip";

const ContentGrid = () => {
  return (
    <div className="content-grid container mx-auto w-3/6 grid grid-cols-3 gap-9 mt-10">
      <ItemCard className="col-span-2" />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
  );
};

export default ContentGrid;
