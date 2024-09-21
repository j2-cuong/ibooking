import axios, { AxiosResponse } from 'axios';


// Lấy kết nối tới API
export const apiUrl = process.env.REACT_APP_SERVER_ENDPOINT;

// Tạo headerParam
export const headerParam = () => {
    return {
        headers: {
          'Content-Type': 'application/json',
        },
      };
}

// Tạo phương thức post với API
export const postApi = async (payload, endPoint) => {
    try {
        let body = JSON.stringify(payload)
        const res = await axios.post(
            apiUrl + endPoint,
            body, 
            headerParam()
        )
        return res
    } catch (err) {
        return err
    }
}

// Tạo phương thức get với API
export const getApi = async (payload, endPoint) => {
    try {
        // Lấy pageSize và pageIndex từ payload
        const { pageSize, pageIndex, ...otherParams } = payload;

        // Tạo query string từ payload (bao gồm cả pageSize và pageIndex)
        const queryParams = new URLSearchParams({
            pageSize: pageSize?.toString() || '10', // giá trị mặc định là 10 nếu pageSize không được truyền
            pageIndex: pageIndex?.toString() || '1', // giá trị mặc định là 1 nếu pageIndex không được truyền
            ...otherParams // các tham số khác trong payload (nếu có)
        });

        // Gọi API với phương thức GET và truyền query parameters
        const res = await axios.get(
            `${apiUrl}${endPoint}?${queryParams.toString()}`, // endpoint kèm query params
            headerParam() // truyền headers (nếu có)
        );

        return res;
    } catch (err) {
        return err;
    }
}
