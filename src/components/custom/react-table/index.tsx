import { AgGridReact } from 'ag-grid-react';
import { IReactAGTable } from 'types';

const ReactAGTable = ({
  rowData,
  columnDefs,
  rowHeight,
  ...props
}: IReactAGTable) => {
  return (
    <div className="ag-theme-alpine">
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        rowHeight={rowHeight}
        {...props}
      />
    </div>
  );
};

export default ReactAGTable;
