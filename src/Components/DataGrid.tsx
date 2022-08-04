import { selectData, selectLoading } from "../Product/productSlice";
import { useAppSelector } from "../Store/hooks";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import NumberFilter from '@inovua/reactdatagrid-community/NumberFilter';
import '@inovua/reactdatagrid-community/index.css';


export const DataGrid = () => {
    const loading = useAppSelector(selectLoading);
    const data = useAppSelector(selectData);

    // Create our number formatter.
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });
  
    // formatter.format(); /* $2,500.00 */
  

    const filterValue = [
        {name:'weekEnding', operator: 'contains', type: 'string', value: null},
        {name:'retailSales', operator: 'gte', type: 'number', value: null},
        {name:'wholesaleSales', operator: 'gte', type: 'number', value: null},
        {name:'unitsSold', operator: 'gte', type: 'number', value: null},
        {name:'retailerMargin', operator: 'gte', type: 'number', value: null},

    ];

    type RenderProps = {
        value: number
    }
    
    const columns = [
        {
            name: 'weekEnding', 
            header: 'WEEK ENDING', 
            defaultFlex: 1, 
            filterEditorProps:{placeholder:'Filter by date...'}
        },{   
            name: 'retailSales', 
            header: 'RETAIL SALES', 
            defaultFlex: 1, 
            type: 'number', 
            render: ({value}: RenderProps) => (formatter.format(value)),
            filterEditor: NumberFilter, 
            filterEditorProps:{placeholder:'Filter by retail sales...'}
        },{
            name: 'wholesaleSales', 
            header: 'WHOLESALE SALES', 
            defaultFlex: 1, 
            type: 'number', 
            filterEditor: NumberFilter, 
            render: ({value}: RenderProps) => (formatter.format(value)),
            filterEditorProps:{placeholder:'Filter by wholesale sales...'}
        },{
            name: 'unitsSold', 
            header: 'UNITS SOLD', 
            defaultFlex: 1, 
            type: 'number', 
            filterEditor: NumberFilter, 
            render: ({value}: RenderProps) => (formatter.format(value)),
            filterEditorProps:{placeholder:'Filter by units sold...'}
        },{
            name: 'retailerMargin', 
            header: 'RETAILER MARGIN', 
            defaultFlex: 1, 
            type: 'number', 
            filterEditor: NumberFilter, 
            render: ({value}: RenderProps) => (formatter.format(value)),
            filterEditorProps:{placeholder:'Filter by retailer margin...'}
        }
    ];

    return (
        <div style={{background: 'white', width:'100%', boxShadow: '1px 2px 9px rgba(0,0,0,0.1)'}}>
            <ReactDataGrid 
                columns={columns}
                dataSource={data.sales ? data.sales : []}
                loading={loading}
                style={{height: '100%', width: '100%'}}
                defaultFilterValue={filterValue}
                enableClipboard
            />
        </div>
    );
}
