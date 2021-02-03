import React from "react";
import { AutoComplete as AntdAutoComplete } from "antd";
import { AutoCompleteProps } from "antd/lib/auto-complete";

export const AutoComplete: React.FC<AutoCompleteProps> = ({ ...rest }) => {
    return <AntdAutoComplete {...rest} />;
};