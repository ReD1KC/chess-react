import { FC } from "react";
import { Cell } from "./models/Cell";

interface CellProps {
    cell: Cell;
}

const CellComponent: FC<CellProps> = ({ cell }) => {
    return <div className={["cel", cell.color].join("")}></div>;
};

export default CellComponent;
