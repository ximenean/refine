import * as React from "react";
import { List, Table, Column, FileField } from "readmin";

export const FilesList = (props: any) => {
    return (
        <List {...props}>
            <Table>
                <Column key="id" dataIndex="id" title="ID" />
                <Column
                    key="url"
                    dataIndex="url"
                    title="Image"
                    render={(value) => <FileField value={value} title="File" />}
                />
                <Column
                    key="url"
                    dataIndex="url"
                    title="Image"
                    render={(value, record) => (
                        <FileField
                            download
                            record={record}
                            value={value}
                            title="title"
                        />
                    )}
                />
                <Column
                    key="files"
                    dataIndex="files"
                    title="Image Files"
                    render={(value, record) => {
                        return (
                            <FileField
                                record={record}
                                value={value}
                                src="url"
                                title="title"
                                target="_blank"
                                rel="noopener"
                            />
                        );
                    }}
                />
            </Table>
        </List>
    );
};