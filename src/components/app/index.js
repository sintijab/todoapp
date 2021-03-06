import React, { Component } from "react"
import * as labels from "../../common/labels"
import View from "../view"
import Board from "../board"

import styles from "./app.scss"

export class App extends Component {
	render() {
		return (
			<div className={styles.main}>
				<Board labels={labels}>
					<View labels={labels} />
				</Board>
			</div>
		)
	}
}
