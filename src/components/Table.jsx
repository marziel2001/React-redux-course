function Table({ data, config, keyFn })
{
    const renderedHeaders = config.map((column) => {
        return <th key={column.label}>{column.label}</th>
    });

    const renderedRows = data.map((renderedRow) => {
        const renderedCells = config.map((column) => {
            return <td className="p-3" key={column.label}>{column.render(renderedRow)}</td>
        });

        return (
            <tr className="border-b" key={keyFn(renderedRow)}>
                {renderedCells}
            </tr>
        )
    });

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    )
}

export default Table;