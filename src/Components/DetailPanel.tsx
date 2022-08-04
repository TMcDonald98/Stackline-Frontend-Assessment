import { Chip, CircularProgress, Typography } from "@mui/material";
import { selectData, selectLoading } from "../Product/productSlice";
import { useAppSelector } from "../Store/hooks";

export const DetailPanel = () => {
    const loading = useAppSelector(selectLoading);
    const data = useAppSelector(selectData);

    return (
        <div style={{ 
            display:'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            width: 300, 
            background: 'white', 
            boxShadow: '1px 2px 9px rgba(0,0,0,0.1)', 
            padding: 24, 
            marginRight: 24
            }}>
            {loading ? 
                <div style={{display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <CircularProgress />
                </div> :
                <>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 16px'}}>
                        <img style={{width: 200}} src={data.image} alt="product img" />
                        <Typography variant='h6' sx={{color: '#364569'}} gutterBottom>
                            {data.title}
                        </Typography>
                        <Typography variant='body2' sx={{color: '#9ba2b4'}} align='center' gutterBottom>
                            {data.subtitle}
                        </Typography>
                    </div>
                    <div style={{display: 'flex', flexWrap: 'wrap', marginTop: 16}}>
                        {data.tags?.map((curr, index) => 
                            <Chip 
                                key={`tag:${index}`}
                                label={curr} 
                                variant='outlined' 
                                sx={{marginRight: data.tags && index === data.tags.length - 1 ? 0 : 1, marginBottom: 1}} />
                        )}
                    </div>
                </>
            }
        </div>
    );
}
