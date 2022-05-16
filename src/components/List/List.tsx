import React from "react";

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import "./List.css";

export type RowProps = {
	name: string;
	value: string;
};

const Row = (props: RowProps) => {
	return (
		<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
			<TableCell>{props.name}</TableCell>
			<TableCell sx={{textAlign: "right"}}>{props.value}</TableCell>
		</TableRow>
	)
};

export interface ListProps {
	items: { [key: string]: string };
}

const List = (props: ListProps) => {
	return (		
		<TableContainer>
			<Table>
				<TableHead>					
					<TableRow>
						<TableCell>
							<strong>Package</strong>
						</TableCell>
						<TableCell sx={{textAlign: "right"}}>
							<strong>Version</strong>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{Object.entries(props.items).map(([name, value]: [string, string]) => (
						<Row key={name} name={name} value={value} />
					))}					
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default List;