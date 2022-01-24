import React from 'react';

interface IProps {
    text1: string;
    text2: string
}

export const InfoTable = ({ text1, text2 }: IProps) => {
    return <tr>
        <td className="px-6 font-semibold py-4 whitespace-nowrap text-lg">{text1}</td>
        <td style={{ color: "#999999" }} className="text-xl tracking-wider font-light px-6 py-4 whitespace-nowrap">
            {text2}
        </td>
    </tr >
};
