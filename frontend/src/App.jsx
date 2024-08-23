import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';

export default function SelectionDemo() {
    const [selection, setSelection] = useState([]);
    const [data] = useState([
        {
            expanded: true,
            type: 'person',
            data: {
                image: 'https://ca.slack-edge.com/T9EM4JPV3-U9FK58VFZ-77b0b0b91727-512',
                name: 'Kevin Raymond',
                title: 'CEO'
            },
            children: [
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://ca.slack-edge.com/T9EM4JPV3-UC7BZ3C2G-5880c8bbd4dd-512',
                        name: 'Nik Lavorato',
                        title: 'Head of Engineering'
                    },
                    children: [
                        {
                            expanded: true,
                            type: 'person',
                            data: {
                                image: 'https://cdn.theorg.com/ef61adc2-75e1-48fa-b23a-4bf2cd5322e3_thumb.jpg',
                                name: 'Taylor Rhyne',
                                title: 'Engineering Technical Lead'
                            }
                        },
                        {
                            expanded: true,
                            type: 'person',
                            data: {
                                image: 'https://cdn.theorg.com/522a4b54-5daa-41de-8eec-ee2b9e518f33_thumb.jpg',
                                name: 'Vivek Tripathi',
                                title: 'Senior Engineering Manager'
                            }
                        }
                    ]
                },
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://ca.slack-edge.com/T9EM4JPV3-U06SDS3RQTH-1b97af71aa00-512',
                        name: 'Mufenas Muneer',
                        title: 'Head of Machine Learning'
                    },
                    children: [
                        {
                            expanded: true,
                            type: 'person',
                            data: {
                                image: 'https://cdn.theorg.com/7ce61f7a-b6bc-4365-86ac-0e66de97a2d7_thumb.jpg',
                                name: 'Amit Patil',
                                title: 'Data Science Manager'
                            },
                            children: [
                                {
                                    expanded: true,
                                    type: 'person',
                                    data: {
                                        image: 'https://cdn.theorg.com/740deada-0858-4ba2-98ce-169b62b613a7_thumb.jpg',
                                        name: 'Sarah Feder',
                                        title: 'Principal Data Scientist'
                                    },
                                    children: [
                                        {
                                            label: "Data Science"
                                        }
                                    ]
                                },
                                {
                                    expanded: true,
                                    type: 'person',
                                    data: {
                                        image: 'https://cdn.theorg.com/d203d7a3-8ab0-4a84-95c7-0617506022c3_thumb.jpg',
                                        name: 'Jun Liu',
                                        title: 'ML Engineer'
                                    },
                                    children: [
                                        {
                                            label: "Model Development"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://ca.slack-edge.com/T9EM4JPV3-UC7KTN21Y-4df468434420-512',
                        name: 'Lydya Castillo',
                        title: 'Vice President of Marketing'
                    },
                    children: [
                        {
                            expanded: true,
                            type: 'person',
                            data: {
                                image: 'https://cdn.theorg.com/3d3811fd-3ed9-4c69-8476-6484c1031c0e_thumb.jpg',
                                name: 'Anna Fali',
                                title: 'Marketing Director'
                            },
                            children: [
                                {
                                    label: 'Sales'
                                },
                                {
                                    label: 'Marketing'
                                }
                            ]
                        },
                    ]
                }
            ]
        }
    ]);

    const nodeTemplate = (node) => {
        if (node.type === 'person') {
            return (
                <div className="flex flex-column">
                    <div className="flex flex-column align-items-center">
                        <img alt={node.data.name} src={node.data.image} className="mb-3 w-3rem h-3rem" />
                        <span className="font-bold mb-2">{node.data.name}</span>
                        <span>{node.data.title}</span>
                    </div>
                </div>
            );
        }

        return node.label;
    };

    return (
        <div className="card overflow-x-auto">
            <OrganizationChart value={data} selectionMode="multiple" selection={selection} onSelectionChange={(e) => setSelection(e.data)} nodeTemplate={nodeTemplate} />
        </div>
    )
}
        