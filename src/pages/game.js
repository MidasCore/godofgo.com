import React from 'react'
import NavBarMenu from '../partials/menu'
import colorState from '../constants/game'
import BoardIntersection from "../components/game/BoardIntersection";

class Game extends React.Component {
    constructor(props) {
        super(props)
        const size = 19
        this.state = {
            current_color: colorState.BLACK,
            size: size,
            board: this.create_board(size),
            last_move_passed: false,
            in_atari: false,
            attempted_suicide: false
        }
        this.handleClick = this.handleClick.bind(this)
        this.play = this.play.bind(this)
    }

    componentDidMount() {
      console.log(this.state, 'kkk')
    }

    create_board(size) {
        let m = [];
        for (let i = 0; i < size; i++) {
            m[i] = [];
            for (let j = 0; j < size; j++)
                m[i][j] = colorState.EMPTY;
        }
        return m;
    }

    switch_player() {
        let current_color = this.state.current_color === colorState.BLACK ? colorState.WHITE : colorState.BLACK;
        this.setState({current_color: current_color})
    };

    pass() {
        if (this.state.last_move_passed)
            this.end_game();
        let last_move_passed = true;
        this.setState({last_move_passed})
        this.switch_player();
    };

    end_game = function () {
        console.log("GAME OVER");
    };

    play(i, j) {
        this.setState({attempted_suicide: false, in_atari: false})

        if (this.state.board[i][j] !== colorState.EMPTY)
            return false;

        let color = this.state.board[i][j] = this.state.current_color;

        let captured = [];
        let neighbors = this.get_adjacent_intersections(i, j);
        let atari = false;

        let self = this;
        neighbors.map(function (n) {
            let state = self.state.board[n[0]][n[1]];
            if (state !== colorState.EMPTY && state !== color) {
                let group = self.get_group(n[0], n[1]);
                if (group["liberties"] === 0)
                    captured.push(group);
                else if (group["liberties"] === 1)
                    atari = true;
            }
        });

        if (!captured && this.get_group(i, j)["liberties"] === 0) {
            this.state.board[i][j] = colorState.EMPTY;
            this.state.attempted_suicide = true;
            return false;
        }
        captured.map(function (group) {
            group["stones"].map(function (stone) {
                self.state.board[stone[0]][stone[1]] = colorState.EMPTY;
            });
        });

        if (atari)
            this.in_atari = true;

        this.state.last_move_passed = false;
        this.switch_player();
        return true;
    }


    get_adjacent_intersections(i, j) {
        let neighbors = [];
        if (i > 0)
            neighbors.push([i - 1, j]);
        if (j < this.state.size - 1)
            neighbors.push([i, j + 1]);
        if (i < this.state.size - 1)
            neighbors.push([i + 1, j]);
        if (j > 0)
            neighbors.push([i, j - 1]);
        return neighbors;
    };


    get_group = function (i, j) {

        let color = this.state.board[i][j];
        if (color === colorState.EMPTY)
            return null;

        let visited = {}; // for O(1) lookups
        let visited_list = []; // for returning
        let queue = [[i, j]];
        let count = 0;

        while (queue.length > 0) {
            let stone = queue.pop();
            if (visited[stone])
                continue;

            let neighbors = this.get_adjacent_intersections(stone[0], stone[1]);
            let self = this;
            neighbors.map(function (n) {
                let state = self.state.board[n[0]][n[1]];
                if (state === colorState.EMPTY)
                    count++;
                if (state === color)
                    queue.push([n[0], n[1]]);
            });

            visited[stone] = true;
            visited_list.push(stone);
        }

        return {
            "liberties": count,
            "stones": visited_list
        };
    }

    handleClick(i,j){
        console.log(i, j, 'llll')
        this.play(i,j)
    }

    render() {
      let style = {
        width: this.state.size * colorState.GRID_SIZE,
        height: this.state.size * colorState.GRID_SIZE
      }
      var intersections = [];
      for (let i = 0; i < this.state.size; i++) {
        for (let j = 0; j < this.state.size; j++) {
          intersections.push({
            color: this.state.board[i][j],
            row: i,
            col: j,
          });
        }
      }

      const view = intersections.map(obj=>{
          return <BoardIntersection sendToParent={this.handleClick} data={obj} />
      })

        return (
            <div className="container">
                <div><NavBarMenu/></div>
                <div id="main">
                  <div style={style} id="board">{view}</div>
                </div>
            </div>
        )
    }
}

export default Game
