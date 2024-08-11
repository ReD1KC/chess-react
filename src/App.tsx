import { useEffect, useState } from "react";
import "./App.css";
import BoardComponent from "./components/BoardComponent";
import { Board } from "./components/models/Board";

function App() {
    const [board, setBoard] = useState(new Board());

    useEffect(() => {
        restart();
    });

    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        setBoard(newBoard);
    }

    return (
        <>
            <BoardComponent board={board} setBoard={setBoard} />
        </>
    );
}

export default App;
