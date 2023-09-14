import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [usedebounceValue, setDebounceValue] = useState(value); // chỉ chạy khi khởi tạo lần đầu

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => clearTimeout(handler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return usedebounceValue;
}

export default useDebounce;
