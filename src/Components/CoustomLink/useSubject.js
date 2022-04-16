import { useEffect, useState } from "react";

const useSubject = () => {
    const [subjects, setSubject] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setSubject(data))
    }, [])
    return [subjects, setSubject];
}

export default useSubject;
