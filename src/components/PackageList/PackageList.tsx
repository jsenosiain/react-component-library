import React from "react";

import "./PackageList.css";

export interface PackageListProps {
  label: string;
}

const PackageList = (props: PackageListProps) => {
  return <button>{props.label}</button>;
};

export default PackageList;