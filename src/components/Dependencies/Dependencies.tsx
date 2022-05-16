import React from "react";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import List from "../List";

import packageJson from "../../../package.json";

import "./Dependencies.css";

export type DependenciesProps = {
	package: any;
}

const ucfirst = (str: string) => { str.charAt(0).toUpperCase() + str.slice(1); };

const Dependencies = (props: any) => {	
  return (
		<Stack spacing={2}>
			<Accordion elevation={0}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography variant="body1">Dependencies</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<List items={packageJson.dependencies} />
				</AccordionDetails>
			</Accordion>

			<Accordion elevation={0}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography variant="body1">Peer Dependencies</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<List items={packageJson.peerDependencies} />
				</AccordionDetails>
			</Accordion>

			<Accordion elevation={0}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography variant="body1">Dev Dependencies</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<List items={packageJson.devDependencies} />
				</AccordionDetails>
			</Accordion>
		</Stack>
	);
};

export default Dependencies;