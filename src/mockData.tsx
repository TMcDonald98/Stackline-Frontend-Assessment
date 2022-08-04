import { useEffect} from 'react';
import { setProduct, setLoading } from './Product/productSlice';
import mockData from './stackline_frontend_assessment_data_2021[7280].json';
import { useAppDispatch} from './Store/hooks';

//simple custom hook to mock api call hook with delay. Then dispatch redux reducers to allow data access across components
export const useMockData = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    const timer = setTimeout(() => {
      //I set just the initial product since this seems to be a detail page of sorts. Obviously if there was a list of products I would map them accordingly.
      dispatch(setProduct(mockData[0]));
      dispatch(setLoading(false));
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch]);

}
